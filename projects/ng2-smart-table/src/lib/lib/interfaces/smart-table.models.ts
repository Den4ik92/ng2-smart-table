import { ComponentType } from '@angular/cdk/portal';
import { InputSignal } from '@angular/core';
import { Cell } from '../data-set/cell';
import { DataSource } from '../data-source/data-source';
import { Deferred } from '../helpers';

interface SelectOption {
  title: string;
  value: any;
}

export type BaseDataType = Record<string, any>;

export interface ViewCell<V = any, R extends BaseDataType = BaseDataType> {
  value: InputSignal<V>;
  rowData: InputSignal<R>;
}

export type ActionPosition = 'left' | 'right';

export interface ColumnPositionState {
  key: string;
  title: string;
  hide: boolean;
  moveDisabled: boolean;
}

export interface SmartTableSettings<T extends BaseDataType = any> {
  selectMode?: 'single' | 'multi';
  mode?: 'inline' | 'external';
  resetSortOnThirdClick?: boolean;
  columnSortStorageKey?: string;
  columnSort?: boolean; // if you want to add column sort need to set true;
  hideHeader?: boolean;
  hideSubHeader?: boolean;
  /**
   * @description Breakpoint for mobile table width in pixels if table width is less than this value, table will be displayed in mobile mode
   * @example 768
   */
  tableWidthMobileBreakpoint?: number;
  actions?: SmartTableAction<T> | false;
  actionsPosition?: ActionPosition;
  filter?: {
    inputClass: string;
  };
  edit?:
    | {
        inputClass?: string;
        editButtonContent?: string;
        saveButtonContent?: string;
        cancelButtonContent?: string;
        confirmSave?: boolean;
        hasPermissionFunction?: (row: T) => boolean;
      }
    | false;
  add?:
    | {
        inputClass?: string;
        addButtonContent?: string;
        createButtonContent?: string;
        cancelButtonContent?: string;
        confirmCreate?: boolean;
      }
    | false;
  delete?:
    | {
        deleteButtonContent?: string;
        confirmDelete?: boolean;
        hasPermissionFunction?: (row: T) => boolean;
      }
    | false;
  attr?: {
    id?: string;
    class?: string;
  };
  noDataMessage?: string;
  columns: SmartTableColumnSettings<T>[];
  pager?: Omit<SmartTablePagerSettings, 'total' | 'page'> | false;
  rowClassFunction?: (rowData: T) => string;
}

export interface SmartTableAction<T extends BaseDataType = any> {
  columnTitle?: string;
  add?: boolean;
  edit?: boolean;
  delete?: boolean;
  custom?: SmartTableCustomAction<T>[];
}

export interface SmartTableCustomAction<T extends BaseDataType = any> {
  name: string;
  title: string; // insert html content to action button
  hasPermissionFunction?: (row: T) => boolean;
}

export type SmartTableColumnSettingsTypes = 'text' | 'html' | 'custom';

export type SmartTableColumnSettings<T extends BaseDataType = any> =
  | SmartTableTextHtmlColumn<T>
  | SmartTableCustomColumn<T>;

export type SmartTableCompareFunction = (direction: number, a: any, b: any) => number;

export type SmartTableValuePrepareFunction<T extends BaseDataType = any> = (
  columnData: any,
  rowData: T,
  cell: Cell,
) => any;

export type SmartTableFilterFunction = (columnData: any, search: string) => boolean;

interface SmartTableDefaultColumn<T extends BaseDataType> {
  key: keyof T;
  title: string;
  style?: Partial<CSSStyleDeclaration>;
  width?: string; //example: '20px', '20%'
  class?: string;
  editable?: boolean;
  hide?: boolean;
  // disable column move in column change position list
  moveDisabled?: boolean;
  sort?: boolean;
  addable?: boolean;
  sortDirection?: SmartTableSortDirection | false;
  editor?: SmartTableEditorAndFilter;
  filter?: SmartTableEditorAndFilter | false;
  compareFunction?: SmartTableCompareFunction;
  valuePrepareFunction?: SmartTableValuePrepareFunction<T>;
  filterFunction?: SmartTableFilterFunction;
}

interface SmartTableTextHtmlColumn<T extends BaseDataType> extends SmartTableDefaultColumn<T> {
  type: 'text' | 'html';
}

interface SmartTableCustomColumn<T extends BaseDataType> extends SmartTableDefaultColumn<T> {
  type: 'custom';
  renderComponent: ComponentType<any>;
  /**
   * @description you can set any component inputs.
   * inputs value is not updated when changed. set once onInit.
   * make sure to set the correct input name to prevent setInput error
   */
  inputs?: Record<string, any>;
}

export type SmartTableEditorAndFilterTypes = 'text' | 'textarea' | 'list' | 'custom' | 'checkbox';

export type SmartTableEditorAndFilter =
  | SmartTableTextEditor
  | SmartTableEditorList
  | SmartTableEditorCheckbox
  | SmartTableEditorCustom;

interface SmartTableTextEditor {
  type: 'text' | 'textarea';
  config?: {
    placeholder?: string;
  } & Record<string, any>;
}

interface SmartTableEditorList {
  type: 'list';
  config: {
    placeholder?: string;
    selectText?: string;
    list: SelectOption[];
  } & Record<string, any>;
}

interface SmartTableEditorCheckbox {
  type: 'checkbox';
  config?: {
    true: any;
    false: any;
    resetText?: string;
  } & Record<string, any>;
}

export interface SmartTableEditorCustom {
  type: 'custom';
  component: ComponentType<any>;
  config?: {
    placeholder?: string;
    /**
     * @description you can set any component inputs.
     * inputs value is not updated when changed. set once onInit.
     * make sure to set the correct input name to prevent setInput error
     */
    inputs?: Record<string, any>;
  } & Record<string, any>;
}

export interface SmartTablePagerSettings {
  display: boolean;
  nextButtonText?: string;
  previewButtonText?: string;
  showTotal?: boolean;
  page: number;
  perPage: number;
  perPageSelect?: number[];
  total: number;
}

export interface SmartTableFilterItem {
  /**
   * key of column to filter
   */
  type: SmartTableEditorAndFilterTypes;
  field: string;
  search: string;
  filter?: SmartTableFilterFunction;
}

export type SmartTableSortDirection = 'asc' | 'desc';

export interface SmartTableSortItem {
  field: string;
  title: string;
  direction: SmartTableSortDirection;
  compare?: SmartTableCompareFunction;
}

interface SmartTableDefaultEvent<T extends BaseDataType = any> {
  confirm: Deferred<T>;
  data: T;
  source: DataSource<T>;
}

export type SmartTableConfirmDeleteEvent<T extends BaseDataType = any> = SmartTableDefaultEvent<T>;

export type SmartTableRowClickedEvent<T extends BaseDataType = any> = Omit<SmartTableDefaultEvent<T>, 'confirm'>;

export interface SmartTableCustomEvent<T extends BaseDataType = any>
  extends Omit<SmartTableDefaultEvent<T>, 'confirm'> {
  action: string;
}

export interface SmartTableRowSelectEvent<T extends BaseDataType = any>
  extends Omit<SmartTableDefaultEvent<T>, 'confirm'> {
  isSelected: boolean;
  selected: T[];
}

export interface SmartTableConfirmEditEvent<T extends BaseDataType = any, N = T> extends SmartTableDefaultEvent<T> {
  newData: N;
}

export interface SmartTableCreateConfirm<T extends BaseDataType = any> extends Omit<SmartTableDefaultEvent<T>, 'data'> {
  newData: T;
}

export enum SmartTableOnChangedEventName {
  'load' = 'load',
  'paging' = 'paging',
  'update' = 'update',
  'page' = 'page',
  'filter' = 'filter',
  'empty' = 'empty',
  'sort' = 'sort',
  'add' = 'add',
  'remove' = 'remove',
  'appendMany' = 'appendMany',
  'prepend' = 'prepend',
  'refresh' = 'refresh',
  'columnRefresh' = 'columnRefresh',
}

export type SmartTableOnChangedEventType = `${SmartTableOnChangedEventName}`;

interface SmartTableOnChangedEventBase<T extends BaseDataType = any> {
  elements: T[];
  filters: SmartTableFilterItem[];
  paging: SmartTablePagerSettings;
  sort: SmartTableSortItem | null;
}

interface SmartTableOnChangedEventAll {
  action: Exclude<SmartTableOnChangedEventType, 'remove' | 'update' | 'append' | 'prepend' | 'appendMany' | 'add'>;
}

interface SmartTableAddEvent<T extends BaseDataType = any> {
  action:
    | SmartTableOnChangedEventName.add
    | SmartTableOnChangedEventName.prepend
    | SmartTableOnChangedEventName.appendMany;
  newItems: T[];
}

interface SmartTableUpdateEvent<T extends BaseDataType = any> {
  action: SmartTableOnChangedEventName.update;
  newItem: T;
  oldItem: T;
}
interface SmartTableRemoveEvent<T extends BaseDataType = any> {
  action: SmartTableOnChangedEventName.remove;
  item: T;
}

export type SmartTableOnChangedEventToEmit<T extends BaseDataType = any> =
  | SmartTableAddEvent<T>
  | SmartTableUpdateEvent<T>
  | SmartTableRemoveEvent<T>
  | SmartTableOnChangedEventAll;

export type SmartTableOnChangedEvent<T extends BaseDataType = any> = SmartTableOnChangedEventToEmit<T> &
  SmartTableOnChangedEventBase<T>;

export interface SmartTableConfirmEvent<T extends BaseDataType = any> {
  confirm: { resolve: (data?: T) => void; reject: () => void };
  data: T;
  source: DataSource<T>;
}

export interface SmartTableBaseEvent<T extends BaseDataType = any> {
  data: T | null;
  source: DataSource<T>;
}

export type SmartTableCreateEvent<T extends BaseDataType = any> = SmartTableBaseEvent<T>;
export type SmartTableEditEvent<T extends BaseDataType = any> = SmartTableBaseEvent<T>;
export type SmartTableDeleteEvent<T extends BaseDataType = any> = SmartTableConfirmEvent<T>;
export type SmartTableEditCancelEvent<T extends BaseDataType = any> = SmartTableBaseEvent<T>;
