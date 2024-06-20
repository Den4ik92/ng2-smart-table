import { LocalDataSource } from "../data-source/local/local.data-source";
import { Deferred } from "../helpers";
export interface SelectOption {
    title: string;
    value: any;
}
interface ObjectAny {
    [key: string]: any;
}
export interface SmartTableSettings<T extends ObjectAny = any> {
    mode?: 'inline' | 'external' | 'click-to-edit';
    selectMode?: 'single' | 'multi';
    selectedRowIndex?: number;
    switchPageToSelectedRowPage?: boolean;
    hideHeader?: boolean;
    hideSubHeader?: boolean;
    actions?: SmartTableAction | false;
    filter?: {
        inputClass: string;
    };
    edit?: {
        inputClass?: string;
        editButtonContent?: string;
        saveButtonContent?: string;
        cancelButtonContent?: string;
        confirmSave?: boolean;
    } | false;
    add?: {
        inputClass?: string;
        addButtonContent?: string;
        createButtonContent?: string;
        cancelButtonContent?: string;
        confirmCreate?: boolean;
    } | false;
    delete?: {
        deleteButtonContent?: string;
        confirmDelete?: boolean;
    } | false;
    attr?: {
        id?: string;
        class?: string;
    };
    noDataMessage?: string;
    columns: SmartTableColumnSettings<T>[];
    pager?: SmartTablePagerSettings | false;
    rowClassFunction?: (row: {
        data: T;
    }) => string;
}
export interface SmartTableAction {
    columnTitle?: string;
    add?: boolean;
    edit?: boolean;
    delete?: boolean;
    custom?: SmartTableCustomAction[];
    position?: 'left' | 'right';
}
export interface SmartTableCustomAction {
    name: string;
    title: string;
}
export type SmartTableColumnSettingsTypes = 'text' | 'html' | 'custom';
export type SmartTableColumnSettings<T = any> = SmartTableTextHtmlColumn<T> | SmartTableCustomColumn<T>;
interface SmartTableDefaultColumn<T> {
    key: keyof T;
    title: string;
    width?: string;
    class?: string;
    editable?: boolean;
    hide?: boolean;
    sort?: boolean;
    addable?: boolean;
    sortDirection?: SmartTableSortDirection | false;
    editor?: SmartTableEditorAndFilter;
    filter?: SmartTableEditorAndFilter | false;
    compareFunction?: (itemA: T, itemB: T) => number;
    valuePrepareFunction?: (columnData: any, rowData: T) => any;
    filterFunction?: (columnData: any, search: string) => boolean;
}
interface SmartTableTextHtmlColumn<T> extends SmartTableDefaultColumn<T> {
    type: 'text' | 'html';
}
interface SmartTableCustomColumn<T> extends SmartTableDefaultColumn<T> {
    type: 'custom';
    renderComponent: any;
}
export type SmartTableEditorAndFilterTypes = 'text' | 'textarea' | 'list' | 'custom' | 'checkbox';
export type SmartTableEditorAndFilter = SmartTableTextEditor | SmartTableEditorList | SmartTableEditorCheckbox | SmartTableEditorCustom;
interface SmartTableTextEditor {
    type: 'text' | 'textarea';
    config: any;
}
interface SmartTableEditorList {
    type: 'list';
    config: {
        selectText?: string;
        list: SelectOption[];
    };
}
interface SmartTableEditorCheckbox {
    type: 'checkbox';
    config?: {
        true: any;
        false: any;
        resetText?: string;
    };
}
interface SmartTableEditorCustom {
    type: 'custom';
    component: any;
    config?: any;
}
interface SmartTablePagerSettings {
    display: boolean;
    page?: number;
    perPage: number;
    perPageSelect?: number[];
}
export interface SmartTableFilterItem {
    field: string;
    search: string;
    filter?: any;
}
export interface SmartTablePagingItem {
    page: number;
    perPage: number;
}
export type SmartTableSortDirection = 'asc' | 'desc';
export interface SmartTableSortItem {
    field: string;
    direction: SmartTableSortDirection;
    compare?: any;
}
interface SmartTableDefaultEvent<T> {
    confirm: Deferred<T>;
    data: T;
    source: LocalDataSource;
}
export type SmartTableConfirmDeleteEvent<T = any> = SmartTableDefaultEvent<T>;
export type SmartTableRowClickedEvent<T = any> = Omit<SmartTableDefaultEvent<T>, "confirm">;
export interface SmartTableCustomEvent<T = any> extends Omit<SmartTableDefaultEvent<T>, "confirm"> {
    action: string;
}
export interface SmartTableRowSelectEvent<T = any> extends Omit<SmartTableDefaultEvent<T>, "confirm"> {
    isSelected: boolean;
    selected: T[];
}
export interface SmartTableConfirmEditEvent<T = any, N = T> extends SmartTableDefaultEvent<T> {
    newData: N;
}
export interface SmartTableCreateConfirm<T = any> extends Omit<SmartTableDefaultEvent<T>, "data"> {
    newData: T;
}
export interface ObjectStringString {
    [key: string]: string;
}
export declare enum SmartTableOnChangedEventName {
    'load' = "load",
    'paging' = "paging",
    'update' = "update",
    'page' = "page",
    'filter' = "filter",
    'empty' = "empty",
    'sort' = "sort",
    'add' = "add",
    'remove' = "remove",
    'append' = "append",
    'prepend' = "prepend",
    'refresh' = "refresh"
}
export type SmartTableOnChangedEventType = 'load' | 'prepend' | 'append' | 'update' | 'empty' | 'paging' | 'page' | 'filter' | 'sort' | 'add' | 'remove' | 'refresh';
export interface SmartTableOnChangedEvent<T extends ObjectAny = any> {
    action: SmartTableOnChangedEventType;
    elements: T[];
    filter: SmartTableFilterConf;
    paging: SmartTablePagingItem | false;
    sort: SmartTableSortItem[];
}
export interface SmartTableFilterConf {
    filters: SmartTableFilterItem[];
    andOperator: boolean;
}
export {};
