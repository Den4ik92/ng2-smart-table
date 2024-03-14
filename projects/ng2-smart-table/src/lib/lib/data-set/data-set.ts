import { Row } from './row';
import { Column } from './column';
import { SmartTableColumnSettings } from '../interfaces/smart-table.models';

export class DataSet {
  newRow!: Row;

  protected data: Array<any> = [];
  protected columns: Array<Column> = [];
  protected rows: Array<Row> = [];
  protected selectedRows = new Set<Row>();

  constructor(data: any[] = [], protected columnSettings: SmartTableColumnSettings[]) {
    this.createColumns(columnSettings);
    this.setData(data);

    this.createNewRow();
  }

  setData(data: Array<any>) {
    this.data = data;
    this.createRows();
  }

  getColumns(): Array<Column> {
    return this.columns;
  }

  getRows(): Array<Row> {
    return this.rows;
  }

  getFirstRow(): Row {
    return this.rows[0];
  }

  getLastRow(): Row {
    return this.rows[this.rows.length - 1];
  }

  findRowByData(data: any): Row | undefined {
    return this.rows.find((row: Row) => row.getData() === data);
  }

  setSelectAll(state: boolean): void {
    this.rows.forEach((row) => {
      row.isSelected = state;
      this.storeSelectedRow(row);
    });
  }

  deselectAll() {
    this.rows.forEach((row) => {
      row.isSelected = false;
    });
    // we need to clear selectedRow field because no one row selected
    this.selectedRows.clear();
  }

  selectRow(row: Row, state: boolean): void {
    row.isSelected = state;
    this.storeSelectedRow(row);
  }

  multipleSelectRow(row: Row): Row {
    row.isSelected = !row.isSelected;
    this.storeSelectedRow(row);

    return row;
  }

  getSelectedRowsData(): Array<any> {
    return [...this.selectedRows]
  }

  createNewRow() {
    this.newRow = new Row(-1, {}, this);
    this.newRow.isInEditing = true;
  }

  /**
   * Create columns by mapping from the settings
   * @param settings
   * @private
   */
  createColumns(settings: SmartTableColumnSettings[]) {
    settings.forEach((columnSettings) => {
      this.columns.push(new Column(columnSettings.key as string, columnSettings, this));
    })
  }

  /**
   * Create rows based on current data prepared in data source
   * @private
   */
  createRows() {
    this.rows = [];
    this.data.forEach((el, index) => {
      const row = new Row(index, el, this);
      row.isSelected = this.selectedRows.has(row.getData());
      this.rows.push(row);
    });
  }

  public get isAllSelected(): boolean {
    return this.rows.every((row) => row.isSelected)
  }

  private storeSelectedRow(row: Row): void {
    if(row.isSelected) {
      this.selectedRows.add(row.getData());
    } else {
      this.selectedRows.delete(row.getData());
    }
  }
}
