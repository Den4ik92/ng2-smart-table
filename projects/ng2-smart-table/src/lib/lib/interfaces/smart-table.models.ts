import { Cell } from "../data-set/cell";
import { LocalDataSource } from "../data-source/local/local.data-source";
import { Deferred } from "../helpers";

interface SelectOption {
	title: string;
	value: any;
}

export interface ViewCell<V=any, R=any> {
  value: V;
  rowData: R;
}

export type ActionPosition = 'left' | 'right'

export interface ColumnPositionState {
  key: string;
  title: string;
  hide: boolean;
  moveDisabled: boolean;
}

export interface SmartTableSettings<T extends Record<string, any> = any> {
	selectMode?: 'single' | 'multi';
	mode?: "inline" | "external";
	columnSortStorageKey?: string;
	columnSort?: boolean; // if you want to add column sort need to set true;
	hideHeader?: boolean;
	hideSubHeader?: boolean;
	actions?: SmartTableAction | false;
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
	}
	| false;
	attr?: {
		id?: string;
		class?: string;
	};
	noDataMessage?: string;
	columns: SmartTableColumnSettings<T>[];
	pager?: SmartTablePagerSettings | false;
	rowClassFunction?: (row: { data: T }) => string;
}

export interface SmartTableAction {
	columnTitle?: string;
	add?: boolean;
	edit?: boolean;
	delete?: boolean;
	custom?: SmartTableCustomAction[];
}

export interface SmartTableCustomAction {
	name: string;
	title: string; // insert html content to action button
}

export type SmartTableColumnSettingsTypes = 'text' | 'html' | 'custom'

export type SmartTableColumnSettings<T extends Record<string, any> = any> = SmartTableTextHtmlColumn<T> | SmartTableCustomColumn<T>;

export type SmartTableCompareFunction = (direction: number, a: any, b: any) => number;
export type SmartTableValuePrepareFunction<T extends Record<string, any> = any> = (columnData: any, rowData: T, cell: Cell) => any;
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
	compare?: SmartTableCompareFunction
}

interface SmartTableDefaultEvent<T> {
	confirm: Deferred<T>;
	data: T;
	source: LocalDataSource;
}

export type SmartTableConfirmDeleteEvent<T = any> = SmartTableDefaultEvent<T>;

export type SmartTableRowClickedEvent<T = any> = Omit<SmartTableDefaultEvent<T>, "confirm">

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
	'prepend' = 'prepend',
	'refresh' = 'refresh',
}

export type SmartTableOnChangedEventType = `${SmartTableOnChangedEventName}`;

export interface SmartTableOnChangedEvent<T extends Record<string, any> = any> {
	action: SmartTableOnChangedEventType;
	elements: T[];
	filter: SmartTableFilterConf;
	paging: SmartTablePagingItem | false;
	sort: SmartTableSortItem[];
}

export interface SmartTableFilterConf { filters: SmartTableFilterItem[]; andOperator: boolean }