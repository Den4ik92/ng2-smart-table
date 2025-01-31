import { SmartTableColumnSettings } from "../interfaces/smart-table.models";
import { Column } from "./column";
import { Row } from "./row";

export class DataSet {
  newRow!: Row;

  protected data: any[] = [];
  protected columns: Column[] = [];
  protected rows: Row[] = [];
  protected selectedRows = new Set<Row>();

  constructor(
    data: any[] = [],
    protected columnSettings: SmartTableColumnSettings[]
  ) {
    this.createColumns(columnSettings);
    this.setData(data);

    this.createNewRow();
  }

  setData(data: any[]) {
    this.data = data;
    this.createRows();
  }

  getColumns(): Column[] {
    return this.columns;
  }

  getRows(): Row[] {
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
      row.isSelected.set(state);
      this.storeSelectedRow(row);
    });
  }

  deselectAll() {
    this.rows.forEach((row) => {
      row.isSelected.set(false);
    });
    // we need to clear selectedRow field because no one row selected
    this.selectedRows.clear();
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

  getSelectedRowsData(): any[] {
    return [...this.selectedRows];
  }

  createNewRow() {
    this.newRow = new Row(-1, {}, this);
    this.newRow.isInEditing.set(true);
  }

  /**
   * Create columns by mapping from the settings
   * @param settings
   * @private
   */
  createColumns(columnsParams: SmartTableColumnSettings[]) {
    columnsParams.forEach((params) => {
      this.columns.push(
        new Column(params.key as string, params, this)
      );
    });
  }

  /**
   * Create rows based on current data prepared in data source
   * @private
   */
  createRows() {
    this.rows = [];
    this.data.forEach((el, index) => {
      const row = new Row(index, el, this);
      row.isSelected.set(this.selectedRows.has(row.getData()));
      this.rows.push(row);
    });
  }

  public get isAllSelected(): boolean {
    return this.rows.every((row) => row.isSelected());
  }

  private storeSelectedRow(row: Row): void {
    if (row.isSelected()) {
      this.selectedRows.add(row.getData());
    } else {
      this.selectedRows.delete(row.getData());
    }
  }
}
