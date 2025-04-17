import { Column } from './column';
import { Row } from './row';

export class Cell {
  newValue: any = '';
  readonly columnClass: string = '';
  readonly styles: Partial<CSSStyleDeclaration> = '';
  readonly title: string = '';
  readonly id: string = '';

  constructor(
    protected value: any,
    public row: Row,
    public column: Column,
  ) {
    this.columnClass = column.class;
    this.newValue = value;
    this.styles = column.styles;
    this.title = column.title;
    this.id = column.id;
  }

  getValue() {
    const prepare = this.column.valuePrepareFunction;
    return !prepare ? this.value : prepare.call(null, this.value, this.row.rowData, this);
  }

  getNotPrepareValue() {
    return this.value;
  }

  setValue(value: any) {
    this.newValue = value;
  }

  isEditable(): boolean {
    if (this.row.index === -1) {
      return this.column.isAddable;
    } else {
      return this.column.isEditable;
    }
  }
}
