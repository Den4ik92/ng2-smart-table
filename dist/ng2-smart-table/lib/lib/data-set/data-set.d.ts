import { Row } from './row';
import { Column } from './column';
import { SmartTableColumnSettings } from '../interfaces/smart-table.models';
export declare class DataSet {
    protected columnSettings: SmartTableColumnSettings[];
    newRow: Row;
    protected data: Array<any>;
    protected columns: Array<Column>;
    protected rows: Array<Row>;
    protected selectedRows: Set<Row>;
    constructor(data: any[] | undefined, columnSettings: SmartTableColumnSettings[]);
    setData(data: Array<any>): void;
    getColumns(): Array<Column>;
    getRows(): Array<Row>;
    getFirstRow(): Row;
    getLastRow(): Row;
    findRowByData(data: any): Row | undefined;
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
    createColumns(settings: SmartTableColumnSettings[]): void;
    /**
     * Create rows based on current data prepared in data source
     * @private
     */
    createRows(): void;
    get isAllSelected(): boolean;
    private storeSelectedRow;
}
