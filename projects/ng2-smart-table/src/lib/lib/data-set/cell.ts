import { Column } from './column';
import { DataSet } from './data-set';
import { Row } from './row';

export class Cell {
  private prepareValue = (value: any) => value
  newValue: any = '';

  constructor(protected value: any, protected row: Row, protected column: Column, protected dataSet: DataSet) {
    this.newValue = value;
  }

  getColumn(): Column {
    return this.column;
  }

  getColumnClass(): string | undefined {
    return this.column.class;
  }

  getRow(): Row {
    return this.row;
  }

  getValue(): any {
    const prepare = this.column.getValuePrepareFunction() || this.prepareValue;
    return prepare.call(null, this.value, this.row.getData(), this);
  }

  getNotPrepareValue(): any {
    return this.value
  }

  setValue(value: any): any {
    this.newValue = value;
  }

  getId(): string {
    return this.getColumn().id;
  }

  getTitle(): string {
    return this.getColumn().title;
  }

  isEditable(): boolean {
    if (this.getRow().index === -1) {
      return this.getColumn().isAddable;
    }
    else {
      return this.getColumn().isEditable;
    }
  }

}
