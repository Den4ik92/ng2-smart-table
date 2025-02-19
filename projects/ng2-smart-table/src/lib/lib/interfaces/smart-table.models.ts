import { Cell } from '../data-set/cell';
import { DataSource } from '../data-source/data-source';
import { Deferred } from '../helpers';

interface SelectOption {
  title: string;
  value: any;
}

export interface ViewCell<V = any, R = any> {
  value: V;
  rowData: R;
}

export type ActionPosition = 'left' | 'right';

export interface ColumnPositionState {
  key: string;
  title: string;
  hide: boolean;
  moveDisabled: boolean;
}

export interface SmartTableSettings<T extends Record<string, any> = any> {
  selectMode?: 'single' | 'multi';
  mode?: 'inline' | 'external';
  columnSortStorageKey?: string;
  columnSort?: boolean; // if you want to add column sort need to set true;
  hideHeader?: boolean;
  hideSubHeader?: boolean;
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
  pager?: (Omit<SmartTablePagerSettings, 'total' | 'page'>) | false;
  rowClassFunction?: (row: { data: T }) => string;
}

export interface SmartTableAction<T=any> {
  columnTitle?: string;
  add?: boolean;
  edit?: boolean;
  delete?: boolean;
  custom?: SmartTableCustomAction<T>[];
}

export interface SmartTableCustomAction<T=any> {
  name: string;
  title: string; // insert html content to action button
  hasPermissionFunction?: (row: T) => boolean;
}

export type SmartTableColumnSettingsTypes = 'text' | 'html' | 'custom';

export type SmartTableColumnSettings<T extends Record<string, any> = any> =
  | SmartTableTextHtmlColumn<T>
  | SmartTableCustomColumn<T>;

export type SmartTableCompareFunction = (direction: number, a: any, b: any) => number;

export type SmartTableValuePrepareFunction<T extends Record<string, any> = any> = (
  columnData: any,
  rowData: T,
  cell: Cell,
) => any;

export type SmartTableFilterFunction = (columnData: any, search: string) => boolean;

interface SmartTableDefaultColumn<T extends Record<string, any>> {
  key: keyof T;
  title: string;
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

interface SmartTableTextHtmlColumn<T extends Record<string, any>> extends SmartTableDefaultColumn<T> {
  type: 'text' | 'html';
}

interface SmartTableCustomColumn<T extends Record<string, any>> extends SmartTableDefaultColumn<T> {
  type: 'custom';
  renderComponent: any;
}

export type SmartTableEditorAndFilterTypes = 'text' | 'textarea' | 'list' | 'custom' | 'checkbox';

export type SmartTableEditorAndFilter =
  | SmartTableTextEditor
  | SmartTableEditorList
  | SmartTableEditorCheckbox
  | SmartTableEditorCustom;

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

export interface SmartTablePagerSettings {
  display: boolean;
  page: number;
  perPage: number;
  perPageSelect?: number[];
  total: number;
}

export interface SmartTableFilterItem {
  /**
   * key of column to filter
   */
  field: string;
  search: string;
  filter?: SmartTableFilterFunction;
}

export type SmartTableSortDirection = 'asc' | 'desc';

export interface SmartTableSortItem {
  field: string;
  direction: SmartTableSortDirection;
  compare?: SmartTableCompareFunction;
}

interface SmartTableDefaultEvent<T> {
  confirm: Deferred<T>;
  data: T;
  source: DataSource<T>;
}

export type SmartTableConfirmDeleteEvent<T = any> = SmartTableDefaultEvent<T>;

export type SmartTableRowClickedEvent<T = any> = Omit<SmartTableDefaultEvent<T>, 'confirm'>;

export interface SmartTableCustomEvent<T = any> extends Omit<SmartTableDefaultEvent<T>, 'confirm'> {
  action: string;
}

export interface SmartTableRowSelectEvent<T = any> extends Omit<SmartTableDefaultEvent<T>, 'confirm'> {
  isSelected: boolean;
  selected: T[];
}

export interface SmartTableConfirmEditEvent<T = any, N = T> extends SmartTableDefaultEvent<T> {
  newData: N;
}

export interface SmartTableCreateConfirm<T = any> extends Omit<SmartTableDefaultEvent<T>, 'data'> {
  newData: T;
}

export type ObjectStringString = Record<string, string>;

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
  'append' = 'append',
  'appendMany' = 'appendMany',
  'prepend' = 'prepend',
  'refresh' = 'refresh',
  'columnRefresh' = 'columnRefresh',
}

export type SmartTableOnChangedEventType = `${SmartTableOnChangedEventName}`;

interface SmartTableOnChangedEventBase<T extends Record<string, any> = any> {
  elements: T[];
  filters: SmartTableFilterItem[];
  paging: SmartTablePagerSettings;
  sort: SmartTableSortItem;
}

interface SmartTableOnChangedEventAll<T extends Record<string, any> = any> {
  action: Exclude<SmartTableOnChangedEventType, 'remove' | 'update' | 'append' | 'prepend' | 'appendMany' | 'add'>;
}

interface SmartTableAddEvent<T extends Record<string, any> = any> {
  action:
    | SmartTableOnChangedEventName.add
    | SmartTableOnChangedEventName.prepend
    | SmartTableOnChangedEventName.append
    | SmartTableOnChangedEventName.appendMany;
  newItems: T[];
}

interface SmartTableUpdateEvent<T extends Record<string, any> = any> {
  action: SmartTableOnChangedEventName.update;
  newItem: T;
  oldItem: T;
}
interface SmartTableRemoveEvent<T extends Record<string, any> = any> {
  action: SmartTableOnChangedEventName.remove;
  item: T;
}

export type SmartTableOnChangedEventToEmit<T extends Record<string, any> = any> =
  | SmartTableAddEvent<T>
  | SmartTableUpdateEvent<T>
  | SmartTableRemoveEvent<T>
  | SmartTableOnChangedEventAll<T>;

export type SmartTableOnChangedEvent<T extends Record<string, any> = any> = SmartTableOnChangedEventToEmit<T>&SmartTableOnChangedEventBase<T>;

