import { SmartTableColumnSettings, SmartTableColumnSettingsTypes, SmartTableEditorAndFilterTypes, SmartTableSortDirection } from './../interfaces/smart-table.models';
import { SmartTableEditorAndFilter } from '../interfaces/smart-table.models';
import { DataSet } from './data-set';

export class Column {
  title: string = '';
  type: SmartTableColumnSettingsTypes = 'text';
  class: string = '';
  width: string = '';
  hide: boolean = false;
  isSortable: boolean = false;
  isEditable: boolean = true;
  isAddable: boolean = true;
  isFilterable: boolean = false;
  sortDirection: SmartTableSortDirection = 'asc';
  defaultSortDirection: SmartTableSortDirection | false = false;
  editor: SmartTableEditorAndFilter | false = false;
  filter: SmartTableEditorAndFilter | false = false;
  renderComponent: any;
  compareFunction: Function | undefined;
  valuePrepareFunction: Function | undefined;
  filterFunction: Function | undefined;

  constructor(public id: string, protected settings: SmartTableColumnSettings, protected dataSet: DataSet) {
    this.process();
  }

  getCompareFunction(): Function | undefined {
    return this.compareFunction;
  }

  getValuePrepareFunction(): Function | undefined  {
    return this.valuePrepareFunction;
  }

  getFilterFunction(): Function | undefined  {
    return this.filterFunction;
  }

  getConfig(): any {
    if (this.editor && (this.editor.type === 'checkbox' || this.editor.type === 'custom' || this.editor.type === 'list')) {
      return this.editor?.config
    }
    return false
  }

  getFilterType(): any {
    return this.filter && this.filter.type;
  }

  getFilterConfig(): any {
    if (this.filter && (this.filter.type === 'checkbox' || this.filter.type === 'custom' || this.filter.type === 'list')) {
      return this.filter?.config
    }
    return false;
  }

  protected process() {
    this.title = this.settings.title;
    this.class = this.settings.class || '';
    this.width = this.settings.width || '';
    this.hide = !!this.settings.hide;
    this.type = this.settings.type;
    if (this.settings?.editor) {
      this.editor = this.settings.editor;
    }    
    if (this.settings?.filter) {
      this.filter = this.settings.filter;
    }
    if (this.settings.type === 'custom' && this.settings.renderComponent) {
      this.renderComponent = this.settings.renderComponent;
    }
    this.isFilterable = typeof this.settings.filter === 'undefined' ? true : !!this.settings['filter'];
    this.defaultSortDirection = this.settings?.sortDirection || false;
    this.isSortable = typeof this.settings.sort === 'undefined' ? true : this.settings.sort;
    this.isEditable = typeof this.settings.editable === 'undefined' ? true : this.settings.editable;
    this.isAddable=typeof this.settings.addable === 'undefined' ? true : this.settings.addable;
    this.sortDirection = this.prepareSortDirection();

    this.compareFunction = this.settings.compareFunction;
    this.valuePrepareFunction = this.settings.valuePrepareFunction;
    this.filterFunction = this.settings.filterFunction;
  }

  prepareSortDirection(): SmartTableSortDirection {
    return this.defaultSortDirection === 'desc' ? 'desc' : 'asc';
  }
}
