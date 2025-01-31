import { signal } from '@angular/core';
import { Cell } from './cell';
import { Column } from './column';
import { DataSet } from './data-set';

export class Row {

  readonly pending = signal(false);
  readonly isSelected = signal(false);
  readonly isInEditing = signal(false);
  cells: Cell[] = [];


  constructor(public index: number, private data: any, protected _dataSet: DataSet) {
    this.process();
  }

  getCell(column: Column): Cell | undefined {
    return this.cells.find(el => el.getColumn() === column);
  }

  getCells(): Cell[] {
    return this.cells;
  }

  getData(): any {
    return this.data;
  }

  getNewData(): any {
    const values = Object.assign({}, this.data);
    this.getCells().forEach((cell) => values[cell.getColumn().id] = cell.newValue);
    return values;
  }

  setData<T=any>(data: T): void {
    this.data = data;
    this.process();
  }

  process(): void {
    this.cells = [];
    this._dataSet.getColumns().forEach((column: Column) => {
      const cell = this.createCell(column);
      this.cells.push(cell);
    });
  }

  createCell(column: Column): Cell {
    const defValue = (column as any).settings.defaultValue ? (column as any).settings.defaultValue : '';
    const value = typeof this.data[column.id] === 'undefined' ? defValue : this.data[column.id];
    return new Cell(value, this, column, this._dataSet);
  }
}
