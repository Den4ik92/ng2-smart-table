import { computed, signal } from "@angular/core";
import { Cell } from "./cell";
import { Column } from "./column";
import { DataSet } from "./data-set";

export class Row {
  readonly pending = signal(false);
  readonly isSelected = signal(false);
  readonly isInEditing = signal(false);
  readonly cells = signal<Cell[]>([]);
  public readonly visibleCells = computed<Cell[]>(() =>
    this.cells().filter((cell: Cell) => !cell.getColumn().hide)
  );

  constructor(
    public index: number,
    private data: any,
    protected _dataSet: DataSet
  ) {
    this.process();
  }

  getCell(column: Column): Cell | undefined {
    return this.cells().find((el) => el.getColumn() === column);
  }

  getData(): any {
    return this.data;
  }

  getNewData() {
    const values = Object.assign({}, this.data);
    this.cells().forEach(
      (cell) => (values[cell.getColumn().id] = cell.newValue)
    );
    return values;
  }

  setData<T = any>(data: T): void {
    this.data = data;
    this.process();
  }

  process(): void {
    const cells = this._dataSet
      .getColumns()
      .map((column: Column) => this.createCell(column));
    this.cells.set(cells);
  }

  createCell(column: Column): Cell {
    const value =
      typeof this.data[column.id] === "undefined"
        ? ""
        : this.data[column.id];
    return new Cell(value, this, column, this._dataSet);
  }
}
