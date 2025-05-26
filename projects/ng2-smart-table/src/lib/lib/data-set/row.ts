import { computed, signal } from '@angular/core';
import { Cell } from './cell';
import { Column } from './column';

export class Row {
  readonly pending = signal(false);
  readonly isSelected = signal(false);
  readonly isInEditing = signal(false);
  readonly cells = computed<Cell[]>(() =>
    this.columns().map((column: Column) => this.createCell(column, this.rowData())),
  );
  readonly rowData = signal<any>({});
  readonly columns = signal<Column[]>([]);
  public readonly visibleCells = computed<Cell[]>(() => this.cells().filter((cell: Cell) => !cell.column.hide));

  constructor(
    public index: number,
    protected rowDataObj: any,
    protected columnsList: Column[],
  ) {
    this.rowData.set(rowDataObj);
    this.columns.set(columnsList);
  }

  getNewData() {
    const values = Object.assign({}, this.rowData());
    this.cells().forEach((cell) => (values[cell.column.id] = cell.newValue()));
    return values;
  }

  setData<T = any>(rowData: T): void {
    this.rowData.set(rowData);
  }

  createCell(column: Column, rowData: any): Cell {
    const value = typeof rowData[column.id] === 'undefined' ? '' : rowData[column.id];
    return new Cell(value, this, column);
  }
}
