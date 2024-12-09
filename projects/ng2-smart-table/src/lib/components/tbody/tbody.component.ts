import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Grid } from '../../lib/grid';
import { Cell } from '../../lib/data-set/cell';
import { LocalDataSource } from '../../lib/data-source/local/local.data-source';

@Component({
    selector: '[ng2-st-tbody]',
    styleUrls: ['./tbody.component.scss'],
    templateUrl: './tbody.component.html',
    standalone: false
})
export class Ng2SmartTableTbodyComponent {

  @Input() grid!: Grid;
  @Input() source!: LocalDataSource;
  @Input() deleteConfirm!: EventEmitter<any>;
  @Input() editConfirm!: EventEmitter<any>;
  @Input() rowClassFunction: Function = ()=>'';

  @Output() save = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<any>();
  @Output() edit = new EventEmitter<any>();
  @Output() editCancel = new EventEmitter<any>();
  @Output() delete = new EventEmitter<any>();
  @Output() custom = new EventEmitter<any>();
  @Output() edited = new EventEmitter<any>();
  @Output() userSelectRow = new EventEmitter<any>();
  @Output() userClickedRow = new EventEmitter<any>();
  @Output() editRowSelect = new EventEmitter<any>();
  @Output() multipleSelectRow = new EventEmitter<any>();

  isMultiSelectVisible: boolean = false;
  showActionColumnLeft: boolean = false;
  showActionColumnRight: boolean = false;
  mode: 'inline' | 'external' | 'click-to-edit' = 'inline';
  editInputClass: string = '';
  isActionAdd: boolean = false;
  isActionEdit: boolean = false;
  isActionDelete: boolean = false;
  noDataMessage: boolean = false;

  get tableColumnsCount() {
    const actionColumns = this.isActionAdd || this.isActionEdit || this.isActionDelete ? 1 : 0;
    return this.grid.getColumns().length + actionColumns;
  }

  ngOnChanges() {
    this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
    this.showActionColumnLeft = this.grid.showActionColumn('left');
    this.mode = this.grid.getSetting('mode', 'inline');
    this.editInputClass = this.grid.getSetting('edit.inputClass', '');
    this.showActionColumnRight = this.grid.showActionColumn('right');
    this.isActionAdd = this.grid.getSetting('actions.add', false);
    this.isActionEdit = this.grid.getSetting('actions.edit', false);
    this.isActionDelete = this.grid.getSetting('actions.delete', false);
    this.noDataMessage = this.grid.getSetting('noDataMessage');
  }

  getVisibleCells(cells: Cell[]): Cell[] {
    return (cells || []).filter((cell: Cell) => !cell.getColumn().hide);
  }

  protected trackByIdOrIndex(index: number, item: any): string | number {   
    return item?.id || index;
  }
}
