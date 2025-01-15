import { computed, EventEmitter, OutputEmitterRef, signal } from "@angular/core";
import { Observable, Subject, Subscription } from "rxjs";
import { LocalDataSource } from "./data-source/local/local.data-source";

import { Column } from "./data-set/column";
import { DataSet } from "./data-set/data-set";
import { Row } from "./data-set/row";
import {
  Deferred,
  getDeepFromObject,
  getLocalStorage,
  setLocalStorage,
} from "./helpers";
import {
  ColumnPositionState,
  SmartTableColumnSettings,
  SmartTableSettings,
  SmartTableSortItem,
} from "./interfaces/smart-table.models";

export class Grid {
  createFormShown = false;

  source!: LocalDataSource;
  dataSet!: DataSet;

  onSelectRowSource = new Subject<any>();
  onDeselectRowSource = new Subject<any>();

  currentColumnsSortState: ColumnPositionState[] = [];

  private columnsSortedEmitter!: OutputEmitterRef<ColumnPositionState[]>
  private sourceOnChangedSubscription: Subscription | undefined;
  private sourceOnUpdatedSubscription: Subscription | undefined;

  readonly settings = signal<SmartTableSettings>({} as SmartTableSettings);

  readonly isMultiSelectVisible = computed(() => {
    return this.settings().selectMode === "multi";
  })
  readonly isActionsVisible = computed<boolean>(() => {
    const actions = this.settings().actions
    if (!actions) return false;
    return actions.add || actions.edit || actions.delete || !!actions?.custom?.length;
  })
  readonly actionIsOnLeft = computed<boolean>(() => {
    return (this.settings().actionsPosition || 'left') === 'left';
  })
  readonly actionIsOnRight = computed<boolean>(() => {
    return this.settings().actionsPosition === 'right';
  })

  constructor(source: LocalDataSource, settings: SmartTableSettings) {
    this.setSettings(settings);
    this.setSource(source);
  }

  setColumnsSortedEmitter(emitter: OutputEmitterRef<ColumnPositionState[]>) {
    this.columnsSortedEmitter = emitter
  }

  detach(): void {
    if (this.sourceOnChangedSubscription) {
      this.sourceOnChangedSubscription.unsubscribe();
    }
    if (this.sourceOnUpdatedSubscription) {
      this.sourceOnUpdatedSubscription.unsubscribe();
    }
  }

  getNewRow(): Row {
    return this.dataSet.newRow;
  }

  setSettings(settings: SmartTableSettings) {
    this.updateSettingsAndDataSet(settings);
    if (this.getSetting('columnSort', false)) {
      this.setColumnsSortState(settings.columns);
    }
  }

  private updateSettingsAndDataSet(settings: SmartTableSettings) {
    this.settings.set(settings);
    this.dataSet = new DataSet(
      [],
      settings.columns
    );

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

    this.sourceOnChangedSubscription = this.source
      .onChanged()
      .subscribe((changes: any) => this.processDataChange(changes));

    this.sourceOnUpdatedSubscription = this.source
      .onUpdated()
      .subscribe((data: any) => {
        const changedRow = this.dataSet.findRowByData(data);
        if (changedRow) {
          changedRow.setData(data);
        }
      });
  }

  getSetting<T>(name: string, defaultValue?: any): T {
    return getDeepFromObject(this.settings(), name, defaultValue);
  }

  getColumns(): Column[] {
    return this.dataSet.getColumns();
  }

  getRows(): Row[] {
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

  create(row: Row, confirmEmitter: EventEmitter<any> | OutputEmitterRef<any>) {
    row.pending.set(true);
    const deferred = new Deferred();
    deferred.promise
      .then((newData) => {
        row.pending.set(false);
        newData = newData || row.getNewData();
        this.source.prepend(newData).then(() => {
          this.createFormShown = false;
          this.dataSet.createNewRow();
        });
      })
      .catch((err) => {
        row.pending.set(false);
      });

    if (this.getSetting("add.confirmCreate", false)) {
      confirmEmitter.emit({
        newData: row.getNewData(),
        source: this.source,
        confirm: deferred,
      });
    } else {
      deferred.resolve(false);
      row.pending.set(false);
    }
  }

  save(row: Row, confirmEmitter: EventEmitter<any> | OutputEmitterRef<any>) {
    row.pending.set(true);
    const deferred = new Deferred();
    deferred.promise
      .then((newData) => {
        row.pending.set(false);
        newData = newData || row.getNewData();
        this.source.update(row.getData(), newData).then(() => {
          row.isInEditing = false;
        });
      })
      .catch(() => {
        row.pending.set(false);
      });

    if (this.getSetting("edit.confirmSave", false)) {
      confirmEmitter.emit({
        data: row.getData(),
        newData: row.getNewData(),
        source: this.source,
        confirm: deferred,
      });
    } else {
      deferred.resolve(false);
      row.pending.set(false);
    }
  }

  delete(row: Row, confirmEmitter: EventEmitter<any> | OutputEmitterRef<any>) {
    row.pending.set(true);
    const deferred = new Deferred();
    deferred.promise
      .then(() => {
        row.pending.set(false);
        this.source.remove(row.getData());
      })
      .catch(() => {
        row.pending.set(false);
        // doing nothing
      });
    if (this.getSetting("delete.confirmDelete")) {
      confirmEmitter.emit({
        data: row.getData(),
        source: this.source,
        confirm: deferred,
      });
    } else {
      deferred.resolve(false);
      row.pending.set(false);
    }
    if (row.isSelected) {
      this.dataSet.selectRow(row, false);
    }
  }

  processDataChange(changes: any) {
    if (this.shouldProcessChange(changes)) {
      if (changes["action"] === "load") {
        this.dataSet.deselectAll();
      }
      this.dataSet.setData(changes["elements"]);
    }
  }

  shouldProcessChange(changes: any): boolean {
    if (
      ["filter", "sort", "page", "remove", "refresh", "load", "paging"].indexOf(
        changes["action"]
      ) !== -1
    ) {
      return true;
    } else if (
      ["prepend", "append"].indexOf(changes["action"]) !== -1 &&
      !this.getSetting("pager.display")
    ) {
      return true;
    }
    return false;
  }

  prepareSource(source: LocalDataSource): LocalDataSource {
    const initialSort: SmartTableSortItem | false = this.getInitialSort();
    if (initialSort) {
      source.setSort([initialSort], false);
    }
    if (this.getSetting("pager.display") === true) {
      source.setPaging(1, this.getSetting("pager.perPage"), false);
    }

    source.refresh();
    return source;
  }

  getInitialSort(): SmartTableSortItem | false {
    const defaultSortColumn = this.getColumns().find(
      (column: Column) => column.isSortable && column.defaultSortDirection
    );
    if (!defaultSortColumn) {
      return false;
    }
    return {
      field: defaultSortColumn.id,
      direction: defaultSortColumn.defaultSortDirection || "asc",
      compare: defaultSortColumn.getCompareFunction(),
    };
  }

  getSelectedRowsData(): any[] {
    return this.dataSet.getRows();
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

  // ------------------------------- column sort

  private async getSortedTableColumns(
    newState: ColumnPositionState[],
    columns: SmartTableColumnSettings[]
  ): Promise<SmartTableColumnSettings[]> {
    const sortedArray: SmartTableColumnSettings[] = [];
    newState.forEach((item2) => {
      const index = columns.findIndex(
        (item1) => item1.key === item2.key && item1.title === item2.title
      );
      if (index > -1) {
        sortedArray.push({ ...columns[index], hide: !!item2.hide });
      }
    });
    return Promise.resolve(sortedArray);
  }

  public async applyColumnsSortState(state: ColumnPositionState[], emitEvent = true) {
    this.currentColumnsSortState = this.getMergedColumnStates(state);
    this.updateSettingsAndDataSet({
      ...this.settings(),
      columns: await this.getSortedTableColumns(this.currentColumnsSortState, this.settings()?.columns),
    });
    if (this.columnStateStorageKey) {
      setLocalStorage(this.columnStateStorageKey, this.currentColumnsSortState);
    }
    if (emitEvent) {
      this.columnsSortedEmitter.emit(this.currentColumnsSortState)
    }
  }

  private setColumnsSortState(columns?: SmartTableColumnSettings[]) {
    const columnsState = this.getColumnsStateFromSettings(columns);
    if (this.columnStateStorageKey) {
      const storageState = getLocalStorage<ColumnPositionState[]>(
        this.columnStateStorageKey
      );
      if (!storageState) {
        this.currentColumnsSortState = columnsState;
        setLocalStorage(this.columnStateStorageKey, columnsState);
        return;
      }
      const merged = this.getMergedColumnStates(storageState, columnsState)
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

  private getMergedColumnStates(
    newState: ColumnPositionState[],
    columnsState?: ColumnPositionState[],
  ) {
    const columnsSettings = columnsState || this.getColumnsStateFromSettings();
    // merge new columns state with state from storage
    const filtered: ColumnPositionState[] = [];
    newState.forEach((state) => {
      const fined = columnsSettings.find(
        (column) => column.title === state.title && column.key === state.key
      );
      if (fined) {
        filtered.push({ ...fined, hide: fined.moveDisabled ? fined.hide : state.hide });
      }
    });
    // find new columns witch not exist in storage state
    const newColumns = columnsSettings.filter((state) => {
      return !filtered.some(
        (column) => column.title === state.title && column.key === state.key
      );
    });
    return [...filtered, ...newColumns];
  }

  private get columnStateStorageKey(): string | undefined {
    return this.settings().columnSortStorageKey;
  }
}
