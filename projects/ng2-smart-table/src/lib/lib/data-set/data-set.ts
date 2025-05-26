import { computed, signal } from '@angular/core';
import { isObjectsIdentical } from '../helpers';
import { SmartTableColumnSettings } from '../interfaces/smart-table.models';
import { Column } from './column';
import { Row } from './row';

export class DataSet {
  newRow!: Row;

  protected readonly data = signal<any[]>([]);
  protected readonly columns = signal<Column[]>([]);
  protected readonly rows = signal<Row[]>([]);
  protected selectedRowsData: any[] = [];

  readonly getColumns = computed(() => this.columns());
  readonly getVisibleColumns = computed(() => this.columns().filter((column: Column) => !column.hide));
  readonly getRows = computed(() => {
    return this.rows();
  });

  readonly isAllSelected = computed<boolean>(() => this.rows().every((row) => row.isSelected()));

  constructor(
    dataList: any[] = [],
    protected columnSettings: SmartTableColumnSettings[],
    public readonly editorInputClass: string,
  ) {
    this.createColumns(columnSettings);
    this.setData(dataList);
    this.createNewRow();
  }

  setData(data: any[]) {
    this.data.set(data);
    this.createRows();
  }

  setColumnsConfig(columnSettings: SmartTableColumnSettings[]) {
    this.columnSettings = columnSettings;
    this.createColumns(columnSettings);
    this.createRows();
  }

  findRowByData(data: any): Row | undefined {
    return this.rows().find((row: Row) => isObjectsIdentical(row.rowData(), data));
  }

  setSelectAll(state: boolean): void {
    this.rows().forEach((row) => {
      row.isSelected.set(state);
      this.storeSelectedRow(row);
    });
  }

  resetAllSelection() {
    this.rows().forEach((row) => {
      row.isSelected.set(false);
    });
    // we need to clear selectedRow field because no one row selected
    this.selectedRowsData = [];
  }

  selectRow(row: Row, state: boolean): void {
    row.isSelected.set(state);
    this.storeSelectedRow(row);
  }

  multipleSelectRow(row: Row): Row {
    row.isSelected.set(!row.isSelected());
    this.storeSelectedRow(row);
    return row;
  }

  getSelectedRowsData() {
    return this.selectedRowsData;
  }

  createNewRow() {
    this.newRow = new Row(-1, {}, this.getColumns());
    this.newRow.isInEditing.set(true);
  }

  /**
   * Create columns by mapping from the settings
   * @param settings
   * @private
   */
  createColumns(columnsParams: SmartTableColumnSettings[]) {
    const columns = columnsParams.map((params) => new Column(params.key as string, params, this));
    this.columns.set(columns);
  }

  /**
   * Create rows based on current data prepared in data source
   * @private
   */
  createRows() {
    const rows = this.data().map((el, index) => {
      const row = new Row(index, el, this.getColumns());
      row.isSelected.set(this.isSelectedHasRow(el));
      return row;
    });
    this.rows.set(rows);
  }

  private isSelectedHasRow(data: any) {
    return this.selectedRowsData.some((rowData) => isObjectsIdentical(rowData, data));
  }

  private storeSelectedRow(row: Row): void {
    if (row.isSelected()) {
      if (this.isSelectedHasRow(row.rowData())) {
        //check if row already in selected array to prevent duplicate
        return;
      }
      this.selectedRowsData.push(row.rowData());
    } else {
      const index = this.selectedRowsData.findIndex((rowData) => isObjectsIdentical(rowData, row));
      if (index !== -1) {
        this.selectedRowsData.splice(index, 1);
      }
    }
  }
}
