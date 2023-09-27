import { Component, Input, Output, SimpleChange, EventEmitter, OnChanges } from '@angular/core';

import { Grid } from './lib/grid';
import { Row } from './lib/data-set/row';
import { deepExtend } from './lib/helpers';
import { LocalDataSource } from './lib/data-source/local/local.data-source';
import { SmartTableConfirmDeleteEvent, SmartTableConfirmEditEvent, SmartTableCreateConfirm, SmartTableCustomEvent, SmartTableRowClickedEvent, SmartTableRowSelectEvent, SmartTableSettings } from './lib/interfaces/smart-table.models';

@Component({
  selector: 'ng2-smart-table',
  styleUrls: ['./ng2-smart-table.component.scss'],
  templateUrl: './ng2-smart-table.component.html',
})
export class Ng2SmartTableComponent implements OnChanges {

  @Input() source!: LocalDataSource;
  @Input() settings!: SmartTableSettings;

  @Output() multiRowSelect = new EventEmitter<SmartTableRowSelectEvent>();
  @Output() rowClicked = new EventEmitter<SmartTableRowClickedEvent>();
  @Output() delete = new EventEmitter<any>();
  @Output() edit = new EventEmitter<any>();
  @Output() editCancel = new EventEmitter<any>();
  @Output() create = new EventEmitter<any>();
  @Output() custom = new EventEmitter<SmartTableCustomEvent>();
  @Output() deleteConfirm = new EventEmitter<SmartTableConfirmDeleteEvent>();
  @Output() editConfirm = new EventEmitter<SmartTableConfirmEditEvent>();
  @Output() createConfirm = new EventEmitter<SmartTableCreateConfirm>();
  @Output() rowHover: EventEmitter<any> = new EventEmitter<any>();

  tableClass: string = '';
  tableId: string = '';
  perPageSelect: number[] = [];
  isHideHeader = false;
  isHideSubHeader = false;
  isPagerDisplay = false;
  rowClassFunction: Function = ()=>'';

  grid!: Grid;
  defaultSettings: SmartTableSettings = {
    mode: 'inline', // inline|external|click-to-edit
    selectMode: 'single', // single|multi
    selectedRowIndex: -1,
    switchPageToSelectedRowPage: false,
    hideHeader: false,
    hideSubHeader: false,
    actions: {
      columnTitle: 'Actions',
      add: true,
      edit: true,
      delete: true,
      custom: [],
      position: 'left', // left|right
    },
    filter: {
      inputClass: '',
    },
    edit: {
      inputClass: '',
      editButtonContent: 'Edit',
      saveButtonContent: 'Update',
      cancelButtonContent: 'Cancel',
      confirmSave: false,
    },
    add: {
      inputClass: '',
      addButtonContent: 'Add New',
      createButtonContent: 'Create',
      cancelButtonContent: 'Cancel',
      confirmCreate: false,
    },
    delete: {
      deleteButtonContent: 'Delete',
      confirmDelete: false,
    },
    attr: {
      id: '',
      class: '',
    },
    noDataMessage: 'No data found',
    columns: {},
    pager: false,
    rowClassFunction: () => '',
  };

  ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {
    if (this.grid) {
      if (changes['settings']) {
        this.grid.setSettings(this.prepareSettings());
      }
      if (changes['source']) {
        this.source = this.prepareSource();
        this.grid.setSource(this.source);
      }
    } else {
      this.initGrid();
    }
    this.tableId = this.grid.getSetting('attr.id');
    this.tableClass = this.grid.getSetting('attr.class');
    this.isHideHeader = this.grid.getSetting('hideHeader');
    this.isHideSubHeader = this.grid.getSetting('hideSubHeader');
    this.isPagerDisplay = this.grid.getSetting('pager.display', false);
    this.perPageSelect = this.grid.getSetting('pager.perPageSelect');
    this.rowClassFunction = this.grid.getSetting('rowClassFunction', () => '');
  }

  multipleSelectRow(row: Row): void {
    this.grid.multipleSelectRow(row);
    this.emitUserSelectRow(row);
  }

  onSelectAllRows(): void {
    this.grid.dataSet.isAllSelected;
    this.grid.selectAllRows(!this.grid.dataSet.isAllSelected);

    this.emitUserSelectRow(null);
  }

  onSelectRow(row: Row, state: boolean): void {
    this.grid.selectRow(row, state);
  }

  initGrid(): void {
    this.source = this.prepareSource();
    this.grid = new Grid(this.source, this.prepareSettings());
  }

  prepareSource(): LocalDataSource {
    if (this.source instanceof LocalDataSource) {
      return this.source;
    }
    return new LocalDataSource();
  }

  prepareSettings(): SmartTableSettings {
    return deepExtend({}, this.defaultSettings, this.settings);
  }

  private emitUserSelectRow(row: Row | null): void {
    this.multiRowSelect.emit({
      data: row ? row.getData() : null,
      isSelected: row ? row.getIsSelected() : false,
      source: this.source,
      selected: this.grid.dataSet.getSelectedRowsData(),
    });
  }  
  
  emitUserRowClicked(row: Row): void {
    this.rowClicked.emit({
      data: row ? row.getData() : null,
      source: this.source,
    });
  }
}
