import { computed, signal } from '@angular/core';
import { Cell } from './cell';
import { Column } from './column';

export class Row {
  readonly pending = signal(false);
  readonly isSelected = signal(false);
  readonly isInEditing = signal(false);
  readonly cells = signal<Cell[]>([]);
  public readonly visibleCells = computed<Cell[]>(() => this.cells().filter((cell: Cell) => !cell.column.hide));

  constructor(
    public index: number,
    public rowData: any,
    protected columns: Column[],
  ) {
    this.process();
  }

  getNewData() {
    const values = Object.assign({}, this.rowData);
    this.cells().forEach((cell) => (values[cell.column.id] = cell.newValue()));
    return values;
  }

  setData<T = any>(rowData: T): void {
    this.rowData = rowData;
    this.process();
  }

  process(): void {
    const cells = this.columns.map((column: Column) => this.createCell(column));
    this.cells.set(cells);
  }

  createCell(column: Column): Cell {
    const value = typeof this.rowData[column.id] === 'undefined' ? '' : this.rowData[column.id];
    return new Cell(value, this, column);
  }
}
