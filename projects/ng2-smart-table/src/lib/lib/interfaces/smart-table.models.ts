import { DataSource } from "../data-source/data-source";
import { Deferred } from "../helpers";

export interface SelectOption {
  title: string;
  value: number | string;
}

interface ObjectAny {
	[key: string]: any;
}

export interface SmartTableSettings<T extends ObjectAny = any> {
	mode?: 'inline' | 'external' | 'click-to-edit';
	selectMode?: 'single' | 'multi';
	selectedRowIndex?: number; //if need deselect first item set value < 0;
	switchPageToSelectedRowPage?: boolean;
	hideHeader?: boolean;
	hideSubHeader?: boolean;
	actions?: SmartTableAction | false;
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
	addable?: boolean;
	noDataMessage?: string;
	columns: { [key in keyof T]?: SmartTableColumn<T> };
	pager?: {
		display: boolean;
		page?: number;
		perPage: number;
	} | false;
	rowClassFunction?: (row: { data: T }) => string;
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
	title: string; // insert html content to action button
}

export type SmartTableColumn<T> = SmartTableTextHtmlColumn<T> | SmartTableCustomColumn<T>;

interface SmartTableDefaultColumn<T> {
	title: string;
	width?: string; //example: '20px', '20%'
	class?: string;
	editable?: boolean;
	hide?: boolean;
	sort?: boolean;
	sortDirection?: 'desc' | 'asc' | false;
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

export type SmartTableEditorAndFilter =
	| { type: 'text' | 'textarea' }
	| SmartTableEditorList
	| SmartTableEditorCompleter
	| SmartTableEditorCheckbox
	| SmartTableEditorCustom;

interface SmartTableEditorList {
	type: 'list';
	config: {
		selectText?: string;
		list: SelectOption[];
	};
}

interface SmartTableEditorCompleter {
	type: 'completer';
	config: {
		completer: {
			data: any[];
			searchFields: string;
			titleField: string;
			descriptionField?: string;
		};
	};
}

interface SmartTableEditorCustom {
	type: 'custom';
	component: any;
	config?: any;
}

export interface SmartTableEditorCheckbox {
	type: 'checkbox';
	config?: {
		true: string;
		false: string;
		resetText?: string;
	};
}

export interface SmartTableFilterItem {
	field: string;
	search: string;
}

interface SmartTableDefaultEvent<T> {
	confirm: Deferred;
	data: T;
	source: DataSource;
}

export type SmartTableConfirmDeleteEvent<T=any> = SmartTableDefaultEvent<T>;

export type SmartTableRowClickedEvent<T=any> = Omit<SmartTableDefaultEvent<T>, "confirm">

export interface SmartTableCustomEvent<T=any> extends Omit<SmartTableDefaultEvent<T>, "confirm"> {
	action: string;
}

export interface SmartTableRowSelectEvent<T=any> extends Omit<SmartTableDefaultEvent<T>, "confirm"> {
	isSelected: boolean;
	selected: T[];
}

export interface SmartTableConfirmEditEvent<T=any> extends SmartTableDefaultEvent<T> {
	newData: T;
}

export interface SmartTableCreateConfirm<T=any> extends Omit<SmartTableDefaultEvent<T>, "data"> {
	newData: T;
}

export interface ObjectStringString {
	[key: string]: string;
}
