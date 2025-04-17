import {
  SmartTableCompareFunction,
  SmartTableEditorAndFilter,
  SmartTableFilterFunction,
  SmartTableValuePrepareFunction,
} from '../interfaces/smart-table.models';
import {
  SmartTableColumnSettings,
  SmartTableColumnSettingsTypes,
  SmartTableSortDirection,
} from './../interfaces/smart-table.models';
import { DataSet } from './data-set';

export class Column {
  readonly title: string = '';
  readonly type: SmartTableColumnSettingsTypes = 'text';
  readonly class: string = '';
  readonly styles: Partial<CSSStyleDeclaration>;
  public readonly editorInputClass: string = '';

  hide = false;
  isSortable = false;
  isEditable = true;
  isAddable = true;
  isFilterable = false;
  sortDirection: SmartTableSortDirection = 'asc';
  editor: SmartTableEditorAndFilter | false = false;
  filter: SmartTableEditorAndFilter | false = false;
  renderComponent: any;

  compareFunction?: SmartTableCompareFunction;
  valuePrepareFunction?: SmartTableValuePrepareFunction;
  filterFunction?: SmartTableFilterFunction;

  constructor(
    public id: string,
    private settings: SmartTableColumnSettings,
    protected dataSet: DataSet,
  ) {
    this.editorInputClass = dataSet.editorInputClass;
    this.title = settings.title;
    this.class = settings.class || '';
    this.styles = settings.style || '';
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
    this.isSortable = settings.sort ?? true;
    this.isEditable = settings.editable ?? true;
    this.isAddable = settings.addable ?? true;
    this.sortDirection = settings.sortDirection || 'asc';

    this.compareFunction = settings.compareFunction;
    this.valuePrepareFunction = settings.valuePrepareFunction;
    this.filterFunction = settings.filterFunction;
  }

  getEditorConfig(): SmartTableEditorAndFilter['config'] | false {
    if (this.editor) {
      return this.editor?.config;
    }
    return false;
  }

  getFilterType() {
    return this.filter && this.filter.type;
  }

  getFilterConfig(): SmartTableEditorAndFilter['config'] | false {
    if (this.filter) {
      return this.filter?.config;
    }
    return false;
  }
}
