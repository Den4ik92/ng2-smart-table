import { Column } from './column';
import { DataSet } from './data-set';
import { Row } from './row';
export declare function prepareValue(value: any): any;
export declare class Cell {
    protected value: any;
    protected row: Row;
    protected column: Column;
    protected dataSet: DataSet;
    newValue: any;
    protected static PREPARE: typeof prepareValue;
    constructor(value: any, row: Row, column: Column, dataSet: DataSet);
    getColumn(): Column;
    getColumnClass(): string | undefined;
    getRow(): Row;
    getValue(): any;
    setValue(value: any): any;
    getId(): string;
    getTitle(): string;
    isEditable(): boolean;
}
