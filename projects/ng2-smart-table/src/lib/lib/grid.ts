import { LocalDataSource } from './data-source/local/local.data-source';
import { Subject, Subscription } from 'rxjs';
import { Observable } from 'rxjs';
import { EventEmitter } from '@angular/core';

import { Deferred, getDeepFromObject, getPageForRowIndex } from './helpers';
import { Column } from './data-set/column';
import { Row } from './data-set/row';
import { DataSet } from './data-set/data-set';
import { SmartTableSettings, SmartTableColumnSettings, SmartTableSortItem } from './interfaces/smart-table.models';

export class Grid {

  createFormShown: boolean = false;

  source!: LocalDataSource;
  settings!: SmartTableSettings;
  dataSet!: DataSet;

  onSelectRowSource = new Subject<any>();
  onDeselectRowSource = new Subject<any>();

  private sourceOnChangedSubscription: Subscription | undefined;
  private sourceOnUpdatedSubscription: Subscription | undefined;

  constructor(source: LocalDataSource, settings: SmartTableSettings) {
    this.setSettings(settings);
    this.setSource(source);
  }

  detach(): void {
    if (this.sourceOnChangedSubscription) {
      this.sourceOnChangedSubscription.unsubscribe();
    }
    if (this.sourceOnUpdatedSubscription) {
      this.sourceOnUpdatedSubscription.unsubscribe();
    }
  }

  showActionColumn(position: string): boolean {
    return this.isCurrentActionsPosition(position) && this.isActionsVisible();
  }

  isCurrentActionsPosition(position: string): boolean {
    return position == this.getSetting('actions.position');
  }

  isActionsVisible(): boolean {
    return this.getSetting<boolean>('actions.add', false) || this.getSetting<boolean>('actions.edit', false) || this.getSetting<boolean>('actions.delete', false) || !!this.getSetting<[]>('actions.custom', [])?.length;
  }

  isMultiSelectVisible(): boolean {
    return this.getSetting('selectMode') === 'multi';
  }

  getNewRow(): Row {
    return this.dataSet.newRow;
  }

  setSettings(settings: SmartTableSettings) {
    this.settings = settings;
    this.dataSet = new DataSet([], this.getSetting<SmartTableColumnSettings>('columns'));

    if (this.source) {
      this.source.refresh();
    }
  }

  getDataSet(): DataSet {
    return this.dataSet;
  }

  setSource(source: LocalDataSource) {
    this.source = this.prepareSource(source);
    this.detach();

    this.sourceOnChangedSubscription = this.source.onChanged().subscribe((changes: any) => this.processDataChange(changes));

    this.sourceOnUpdatedSubscription = this.source.onUpdated().subscribe((data: any) => {
      const changedRow = this.dataSet.findRowByData(data);
      if (changedRow) {
        changedRow.setData(data);
      }
    });
  }

  getSetting<T>(name: string, defaultValue?: any): T {
    return getDeepFromObject(this.settings, name, defaultValue);
  }

  getColumns(): Array<Column> {
    return this.dataSet.getColumns();
  }

  getRows(): Array<Row> {
    return this.dataSet.getRows();
  }

  selectRow(row: Row, state: boolean) {
    this.dataSet.selectRow(row, state);
  }

  multipleSelectRow(row: Row) {
    this.dataSet.multipleSelectRow(row);
  }

  onSelectRow(): Observable<any> {
    return this.onSelectRowSource.asObservable();
  }

  onDeselectRow(): Observable<any> {
    return this.onDeselectRowSource.asObservable();
  }

  edit(row: Row) {
    row.isInEditing = true;
  }

  create(row: Row, confirmEmitter: EventEmitter<any>) {

    const deferred = new Deferred();
    deferred.promise.then((newData) => {
      newData = newData ? newData : row.getNewData();
      if (deferred.resolve.skipAdd) {
        this.createFormShown = false;
      } else {
        this.source.prepend(newData).then(() => {
          this.createFormShown = false;
          this.dataSet.createNewRow();
        });
      }
    }).catch((err) => {
      // doing nothing
    });

    if (this.getSetting('add.confirmCreate')) {
      confirmEmitter.emit({
        newData: row.getNewData(),
        source: this.source,
        confirm: deferred,
      });
    } else {
      deferred.resolve();
    }
  }

  save(row: Row, confirmEmitter: EventEmitter<any>) {

    const deferred = new Deferred();
    deferred.promise.then((newData) => {
      newData = newData ? newData : row.getNewData();
      if (deferred.resolve.skipEdit) {
        row.isInEditing = false;
      } else {
        this.source.update(row.getData(), newData).then(() => {
          row.isInEditing = false;
        });
      }
    }).catch((err) => {
      // doing nothing
    });

    if (this.getSetting('edit.confirmSave')) {
      confirmEmitter.emit({
        data: row.getData(),
        newData: row.getNewData(),
        source: this.source,
        confirm: deferred,
      });
    } else {
      deferred.resolve();
    }
  }

  delete(row: Row, confirmEmitter: EventEmitter<any>) {
    const deferred = new Deferred();
    deferred.promise.then(() => {
      this.source.remove(row.getData());
    }).catch((err) => {
      // doing nothing
    });

    if (this.getSetting('delete.confirmDelete')) {
      confirmEmitter.emit({
        data: row.getData(),
        source: this.source,
        confirm: deferred,
      });
    } else {
      deferred.resolve();
    }
    if (row.isSelected) {
      this.dataSet.selectRow(row, false);
    }
  }

  processDataChange(changes: any) {
    if (this.shouldProcessChange(changes)) {
      if (changes['action'] === 'load') {
        this.dataSet.deselectAll()
      }
      this.dataSet.setData(changes['elements']);
    }
  }

  shouldProcessChange(changes: any): boolean {
    if (['filter', 'sort', 'page', 'remove', 'refresh', 'load', 'paging'].indexOf(changes['action']) !== -1) {
      return true;
    } else if (['prepend', 'append'].indexOf(changes['action']) !== -1 && !this.getSetting('pager.display')) {
      return true;
    }
    return false;
  }

  prepareSource(source: LocalDataSource): LocalDataSource {
    const initialSort: SmartTableSortItem | false = this.getInitialSort();
    if (initialSort) {
      source.setSort([initialSort], false);
    }
    if (this.getSetting('pager.display') === true) {
      source.setPaging(1, this.getSetting('pager.perPage'), false);
    }

    source.refresh();
    return source;
  }

  getInitialSort(): SmartTableSortItem | false {
    const defaultSortColumn = this.getColumns().find((column: Column) => column.isSortable && column.defaultSortDirection);
    if (!defaultSortColumn) {
      return false;
    }
    return {
      field: defaultSortColumn.id,
      direction: defaultSortColumn.defaultSortDirection || 'asc',
      compare: defaultSortColumn.getCompareFunction(),
    }
  }

  getSelectedRowsData(): Array<any> {
    return this.dataSet.getRows()
  }

  selectAllRows(status: boolean) {
    this.dataSet.setSelectAll(status);
  }

  getFirstRow(): Row {
    return this.dataSet.getFirstRow();
  }

  getLastRow(): Row {
    return this.dataSet.getLastRow();
  }
}
