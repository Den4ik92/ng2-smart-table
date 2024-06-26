import { SmartTableEditorAndFilter } from '../interfaces/smart-table.models';
import { SmartTableColumnSettings, SmartTableColumnSettingsTypes, SmartTableSortDirection } from './../interfaces/smart-table.models';
import { DataSet } from './data-set';
export declare class Column {
    id: string;
    private settings;
    protected dataSet: DataSet;
    title: string;
    type: SmartTableColumnSettingsTypes;
    class: string;
    width: string;
    hide: boolean;
    isSortable: boolean;
    isEditable: boolean;
    isAddable: boolean;
    isFilterable: boolean;
    sortDirection: SmartTableSortDirection;
    defaultSortDirection: SmartTableSortDirection | false;
    editor: SmartTableEditorAndFilter | false;
    filter: SmartTableEditorAndFilter | false;
    renderComponent: any;
    compareFunction: Function | undefined;
    valuePrepareFunction: Function | undefined;
    filterFunction: Function | undefined;
    constructor(id: string, settings: SmartTableColumnSettings, dataSet: DataSet);
    getCompareFunction(): Function | undefined;
    getValuePrepareFunction(): Function | undefined;
    getFilterFunction(): Function | undefined;
    getConfig(): any;
    getFilterType(): any;
    getFilterConfig(): any;
    protected process(settings: SmartTableColumnSettings): void;
    prepareSortDirection(): SmartTableSortDirection;
}
