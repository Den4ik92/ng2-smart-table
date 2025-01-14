import { SmartTableCompareFunction, SmartTableEditorAndFilter, SmartTableFilterFunction, SmartTableValuePrepareFunction } from '../interfaces/smart-table.models';
import { SmartTableColumnSettings, SmartTableColumnSettingsTypes, SmartTableSortDirection } from './../interfaces/smart-table.models';
import { DataSet } from './data-set';

export class Column {
  title = '';
  type: SmartTableColumnSettingsTypes = 'text';
  class = '';
  width = '';
  hide = false;
  isSortable = false;
  isEditable = true;
  isAddable = true;
  isFilterable = false;
  sortDirection: SmartTableSortDirection = 'asc';
  defaultSortDirection: SmartTableSortDirection | false = false;
  editor: SmartTableEditorAndFilter | false = false;
  filter: SmartTableEditorAndFilter | false = false;
  renderComponent: any;
  compareFunction?: SmartTableCompareFunction;
  valuePrepareFunction?: SmartTableValuePrepareFunction;
  filterFunction?: SmartTableFilterFunction;

  constructor(public id: string, private settings: SmartTableColumnSettings, protected dataSet: DataSet) {
    this.process(this.settings);
  }

  getCompareFunction(): SmartTableCompareFunction | undefined {
    return this.compareFunction;
  }

  getValuePrepareFunction(): SmartTableValuePrepareFunction | undefined  {
    return this.valuePrepareFunction;
  }

  getFilterFunction(): SmartTableFilterFunction | undefined  {
    return this.filterFunction;
  }

  getConfig(): any {
    if (this.editor && (this.editor.type === 'checkbox' || this.editor.type === 'custom' || this.editor.type === 'list')) {
      return this.editor?.config
    }
    return false
  }

  getFilterType() {
    return this.filter && this.filter.type;
  }

  getFilterConfig(): any {
    if (this.filter && (this.filter.type === 'checkbox' || this.filter.type === 'custom' || this.filter.type === 'list')) {
      return this.filter?.config
    }
    return false;
  }

  protected process(settings: SmartTableColumnSettings) {
    this.title = settings.title;
    this.class = settings.class || '';
    this.width = settings.width || '';
    this.hide = !!settings.hide;
    this.type = settings.type;
    if (settings?.editor) {
      this.editor = settings.editor;
    }
    if (settings?.filter) {
      this.filter = settings.filter;
    }
    if (settings.type === 'custom' && settings.renderComponent) {
      this.renderComponent = settings.renderComponent;
    }
    this.isFilterable = typeof settings.filter === 'undefined' ? true : !!settings['filter'];
    this.defaultSortDirection = settings?.sortDirection || false;
    this.isSortable = typeof settings.sort === 'undefined' ? true : settings.sort;
    this.isEditable = typeof settings.editable === 'undefined' ? true : settings.editable;
    this.isAddable=typeof settings.addable === 'undefined' ? true : settings.addable;
    this.sortDirection = this.prepareSortDirection();

    this.compareFunction = settings.compareFunction;
    this.valuePrepareFunction = settings.valuePrepareFunction;
    this.filterFunction = settings.filterFunction;
  }

  prepareSortDirection(): SmartTableSortDirection {
    return this.defaultSortDirection === 'desc' ? 'desc' : 'asc';
  }
}
