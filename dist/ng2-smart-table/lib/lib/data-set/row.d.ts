import { Cell } from './cell';
import { Column } from './column';
import { DataSet } from './data-set';
export declare class Row {
    index: number;
    protected data: any;
    protected _dataSet: DataSet;
    isSelected: boolean;
    isInEditing: boolean;
    cells: Cell[];
    constructor(index: number, data: any, _dataSet: DataSet);
    getCell(column: Column): Cell | undefined;
    getCells(): Cell[];
    getData(): any;
    getIsSelected(): boolean;
    getNewData(): any;
    setData<T = any>(data: T): void;
    process(): void;
    createCell(column: Column): Cell;
}
