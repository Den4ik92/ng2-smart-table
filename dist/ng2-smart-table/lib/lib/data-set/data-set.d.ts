import { Row } from './row';
import { Column } from './column';
export declare class DataSet {
    protected columnSettings: Object;
    newRow: Row;
    protected data: Array<any>;
    protected columns: Array<Column>;
    protected rows: Array<Row>;
    protected selectedRows: Set<Row>;
    protected willSelect: string;
    constructor(data: Array<any>, columnSettings: Object);
    setData(data: Array<any>): void;
    getColumns(): Array<Column>;
    getRows(): Array<Row>;
    getFirstRow(): Row;
    getLastRow(): Row;
    findRowByData(data: any): Row;
    setSelectAll(state: boolean): void;
    deselectAll(): void;
    selectRow(row: Row, state: boolean): void;
    multipleSelectRow(row: Row): Row;
    getSelectedRowsData(): Array<any>;
    createNewRow(): void;
    /**
     * Create columns by mapping from the settings
     * @param settings
     * @private
     */
    createColumns(settings: any): void;
    /**
     * Create rows based on current data prepared in data source
     * @private
     */
    createRows(): void;
    get isAllSelected(): boolean;
    private storeSelectedRow;
}
