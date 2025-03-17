import { computed, signal } from "@angular/core";
import { SmartTableColumnSettings } from "../interfaces/smart-table.models";
import { Column } from "./column";
import { Row } from "./row";

export class DataSet {
  newRow!: Row;

  protected readonly data = signal<any[]>([]);
  protected readonly columns = signal<Column[]>([]);
  protected readonly rows = signal<Row[]>([]);
  protected readonly selectedRows = new Set<Row>();

  readonly getColumns = computed(() => this.columns());
  readonly getVisibleColumns = computed(() =>
    this.columns().filter((column: Column) => !column.hide)
  );
  readonly getRows = computed(() => {
    return this.rows();
  });

  readonly isAllSelected = computed<boolean>(() =>
    this.rows().every((row) => row.isSelected())
  );

  constructor(
    data: any[] = [],
    protected columnSettings: SmartTableColumnSettings[]
  ) {
    this.createColumns(columnSettings);
    this.setData(data);
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

  getFirstRow(): Row {
    return this.rows()[0];
  }

  getLastRow(): Row {
    return this.rows()[this.rows().length - 1];
  }

  findRowByData(data: any): Row | undefined {
    return this.rows().find((row: Row) => row.getData() === data);
  }

  setSelectAll(state: boolean): void {
    this.rows().forEach((row) => {
      row.isSelected.set(state);
      this.storeSelectedRow(row);
    });
  }

  deselectAll() {
    this.rows().forEach((row) => {
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
    const columns = columnsParams.map(
      (params) => new Column(params.key as string, params, this)
    );
    this.columns.set(columns);
  }

  /**
   * Create rows based on current data prepared in data source
   * @private
   */
  createRows() {
    const rows = this.data().map((el, index) => {
      const row = new Row(index, el, this);
      row.isSelected.set(this.selectedRows.has(row.getData()));
      return row;
    });
    this.rows.set(rows);
  }

  private storeSelectedRow(row: Row): void {
    if (row.isSelected()) {
      this.selectedRows.add(row.getData());
    } else {
      this.selectedRows.delete(row.getData());
    }
  }
}
