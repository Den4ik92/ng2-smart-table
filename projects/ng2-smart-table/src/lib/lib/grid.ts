import { computed, EventEmitter, OutputEmitterRef, signal } from '@angular/core';
import { Subscription } from 'rxjs';
import { LocalDataSource } from './data-source/local/local.data-source';

import { DataSet } from './data-set/data-set';
import { Row } from './data-set/row';
import { DataSource } from './data-source/data-source';
import { Deferred, getDeepFromObject, getLocalStorage, setLocalStorage } from './helpers';
import {
  BaseDataType,
  ColumnPositionState,
  SmartTableColumnSettings,
  SmartTableConfirmDeleteEvent,
  SmartTableOnChangedEvent,
  SmartTableOnChangedEventName,
  SmartTablePagerSettings,
  SmartTableSettings,
  SmartTableSortItem,
} from './interfaces/smart-table.models';

export class Grid {
  source!: DataSource;
  dataSet!: DataSet;

  currentColumnsSortState: ColumnPositionState[] = [];

  private columnsSortedEmitter!: OutputEmitterRef<ColumnPositionState[]>;
  private sourceOnChangedSubscription: Subscription | undefined;

  readonly settings = signal<SmartTableSettings>({} as SmartTableSettings);
  readonly createFormShown = signal<boolean>(false);

  readonly isMultiSelectVisible = computed(() => {
    return this.settings().selectMode === 'multi';
  });
  readonly isActionsVisible = computed<boolean>(() => {
    const actions = this.settings().actions;
    if (!actions) return false;
    return actions.edit || actions.delete || !!actions?.custom?.length;
  });
  readonly actionIsOnLeft = computed<boolean>(() => {
    return (this.settings().actionsPosition || 'left') === 'left';
  });
  readonly actionIsOnRight = computed<boolean>(() => {
    return this.settings().actionsPosition === 'right';
  });

  constructor(source: DataSource | undefined, settings: SmartTableSettings) {
    this.setSource(source, settings);
    this.setSettings(settings);
  }

  setColumnsSortedEmitter(emitter: OutputEmitterRef<ColumnPositionState[]>) {
    this.columnsSortedEmitter = emitter;
  }

  detach(): void {
    if (this.sourceOnChangedSubscription) {
      this.sourceOnChangedSubscription.unsubscribe();
    }
  }

  getNewRow(): Row {
    return this.dataSet.newRow;
  }

  setSettings(settings: SmartTableSettings) {
    this.updateSettingsAndDataSet(settings);
    if (settings.columnSort) {
      this.setColumnsSortState(settings.columns);
    }
  }

  getDataSet(): DataSet {
    return this.dataSet;
  }

  getSetting<T>(name: string, defaultValue?: any): T {
    return getDeepFromObject(this.settings(), name, defaultValue);
  }

  selectRow(row: Row, state: boolean) {
    this.dataSet.selectRow(row, state);
  }

  multipleSelectRow(row: Row) {
    this.dataSet.multipleSelectRow(row);
  }

  edit(row: Row) {
    row.isInEditing.set(true);
  }

  create(row: Row, confirmEmitter: EventEmitter<any> | OutputEmitterRef<any>) {
    row.pending.set(true);
    const deferred = new Deferred<BaseDataType>();
    deferred.promise
      .then((newData) => {
        row.pending.set(false);
        newData = newData || row.getNewData();
        this.source.prepend(newData).then(() => {
          this.createFormShown.set(false);
          this.dataSet.createNewRow();
        });
      })
      .catch(() => {
        row.pending.set(false);
      });

    if (this.getSetting('add.confirmCreate', false)) {
      confirmEmitter.emit({
        newData: row.getNewData(),
        source: this.source,
        confirm: deferred,
      });
    } else {
      deferred.resolve();
      row.pending.set(false);
    }
  }

  save(row: Row, confirmEmitter: EventEmitter<any> | OutputEmitterRef<any>) {
    row.pending.set(true);
    const deferred = new Deferred<BaseDataType>();
    deferred.promise
      .then((newData) => {
        row.pending.set(false);
        newData = newData || row.getNewData();
        this.source.update(row.rowData(), newData).then(() => {
          row.isInEditing.set(false);
        });
      })
      .catch(() => {
        row.pending.set(false);
        row.isInEditing.set(false);
      });

    if (this.getSetting('edit.confirmSave', false)) {
      confirmEmitter.emit({
        data: row.rowData(),
        newData: row.getNewData(),
        source: this.source,
        confirm: deferred,
      });
    } else {
      deferred.resolve();
      row.pending.set(false);
    }
  }

  delete<T extends BaseDataType = BaseDataType>(
    row: Row,
    confirmEmitter: EventEmitter<SmartTableConfirmDeleteEvent<T>> | OutputEmitterRef<SmartTableConfirmDeleteEvent<T>>,
  ) {
    row.pending.set(true);
    const deferred = new Deferred<T>();
    deferred.promise
      .then(() => {
        row.pending.set(false);
        this.source.remove(row.rowData());
      })
      .catch(() => {
        row.pending.set(false);
        // doing nothing
      });
    if (this.getSetting('delete.confirmDelete', true)) {
      confirmEmitter.emit({
        data: row.rowData(),
        source: this.source,
        confirm: deferred,
      });
    } else {
      deferred.resolve(null as unknown as T);
      row.pending.set(false);
    }
    if (row.isSelected()) {
      this.dataSet.selectRow(row, false);
    }
  }

  private processDataChange(event: SmartTableOnChangedEvent) {
    if (['load', 'empty', 'refresh'].includes(event.action)) {
      this.dataSet.resetAllSelection();
    }
    if (event.action === 'update') {
      const changedRow = this.dataSet.findRowByData(event.oldItem);
      if (changedRow) {
        changedRow.setData(event.newItem || event.oldItem);
      }
      return;
    }
    this.dataSet.setData(event.elements);
  }

  private prepareSource(
    source: DataSource | undefined,
    initialSort: SmartTableSortItem | false,
    initialPaging: Partial<SmartTablePagerSettings> | false,
  ): DataSource {
    const preparedSource = source || new LocalDataSource();
    if (initialSort && !source?.getSort().field) {
      preparedSource.setSort(initialSort, false);
    }
    if (initialPaging && initialPaging?.display) {
      preparedSource.pagingConf.update((old) => ({
        ...old,
        ...initialPaging,
      }));
    }
    return preparedSource;
  }

  private getInitialSort(columns?: SmartTableColumnSettings[]): SmartTableSortItem | false {
    if (!columns || !columns.length) {
      return false;
    }
    const initialSortColumn = columns?.find((column) => column?.sortDirection);
    if (!initialSortColumn) {
      return false;
    }
    return {
      field: initialSortColumn.key as string,
      title: initialSortColumn.title,
      direction: initialSortColumn.sortDirection || 'asc',
      compare: initialSortColumn.compareFunction,
    };
  }

  getSelectedRowsData() {
    return this.dataSet.getSelectedRowsData();
  }

  selectAllRows(status: boolean) {
    this.dataSet.setSelectAll(status);
  }

  private updateSettingsAndDataSet(
    settings: SmartTableSettings,
    emittedEvent:
      | `${SmartTableOnChangedEventName.refresh}`
      | `${SmartTableOnChangedEventName.columnRefresh}` = 'refresh',
  ) {
    this.settings.set(settings);
    if (this.dataSet) {
      this.dataSet.setColumnsConfig(settings.columns);
    } else {
      const editorInputClass = settings.edit ? settings.edit.inputClass || '' : '';
      this.dataSet = new DataSet([], settings.columns, editorInputClass);
    }
    if (this.source) {
      this.source.pagingConf.update((old) => ({
        ...old,
        display: this.getSetting('pager.display'),
      }));

      if (emittedEvent === 'columnRefresh') {
        this.source.columnRefresh();
      } else {
        this.source.refresh();
      }
    }
  }

  private setSource(source: DataSource | undefined, settings?: SmartTableSettings) {
    const initialSort = this.getInitialSort(settings?.columns);
    this.source = this.prepareSource(source, initialSort, settings?.pager || false);
    this.detach();

    this.sourceOnChangedSubscription = this.source.onChanged().subscribe((changes) => this.processDataChange(changes));
  }

  // ------------------------------- column sort

  private async getSortedTableColumns(
    newState: ColumnPositionState[],
    columns: SmartTableColumnSettings[],
  ): Promise<SmartTableColumnSettings[]> {
    const sortedArray: SmartTableColumnSettings[] = [];
    newState.forEach((item2) => {
      const index = columns.findIndex((item1) => item1.key === item2.key && item1.title === item2.title);
      if (index > -1) {
        sortedArray.push({ ...columns[index], hide: !!item2.hide });
      }
    });
    return Promise.resolve(sortedArray);
  }

  public async applyColumnsSortState(state: ColumnPositionState[], emitEvent = true) {
    this.currentColumnsSortState = this.getMergedColumnStates(state);
    this.updateSettingsAndDataSet(
      {
        ...this.settings(),
        columns: await this.getSortedTableColumns(this.currentColumnsSortState, this.settings()?.columns),
      },
      'columnRefresh',
    );
    if (this.columnStateStorageKey) {
      setLocalStorage(this.columnStateStorageKey, this.currentColumnsSortState);
    }
    if (emitEvent) {
      this.columnsSortedEmitter.emit(this.currentColumnsSortState);
    }
  }

  private setColumnsSortState(columns?: SmartTableColumnSettings[]) {
    const columnsState = this.getColumnsStateFromSettings(columns);
    if (this.columnStateStorageKey) {
      const storageState = getLocalStorage<ColumnPositionState[]>(this.columnStateStorageKey);
      if (!storageState) {
        this.currentColumnsSortState = columnsState;
        setLocalStorage(this.columnStateStorageKey, columnsState);
        return;
      }
      const merged = this.getMergedColumnStates(storageState, columnsState);
      this.applyColumnsSortState(merged, false);
      return;
    }
    this.applyColumnsSortState(columnsState, false);
  }

  private getColumnsStateFromSettings(columns?: SmartTableColumnSettings[]): ColumnPositionState[] {
    return (columns || this.settings().columns || []).map((column) => ({
      key: column.key as string,
      title: column.title,
      hide: !!column.hide,
      moveDisabled: !!column.moveDisabled,
    }));
  }

  private getMergedColumnStates(newState: ColumnPositionState[], columnsState?: ColumnPositionState[]) {
    const columnsSettings = columnsState || this.getColumnsStateFromSettings();
    // merge new columns state with state from storage
    const filtered: ColumnPositionState[] = [];
    newState.forEach((state) => {
      const fined = columnsSettings.find((column) => column.title === state.title && column.key === state.key);
      if (fined) {
        filtered.push({ ...fined, hide: fined.moveDisabled ? fined.hide : state.hide });
      }
    });
    // find new columns witch not exist in storage state
    const newColumns = columnsSettings.filter((state) => {
      return !filtered.some((column) => column.title === state.title && column.key === state.key);
    });
    return [...filtered, ...newColumns];
  }

  private get columnStateStorageKey(): string | undefined {
    return this.settings().columnSortStorageKey;
  }
}
