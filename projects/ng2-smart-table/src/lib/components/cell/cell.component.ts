import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Cell } from '../../lib/data-set/cell';
import { Row } from '../../lib/data-set/row';
import { Grid } from '../../lib/grid';

@Component({
    selector: 'ng2-smart-table-cell',
    template: `
    @if (!isInEditing) {
      <table-cell-view-mode [cell]="cell"></table-cell-view-mode>
    }
    @if (isInEditing) {
      <table-cell-edit-mode [cell]="cell"
        [inputClass]="inputClass"
        (edited)="onEdited($event)">
      </table-cell-edit-mode>
    }
    `,
    standalone: false
})
export class CellComponent {

  @Input() grid!: Grid;
  @Input() row!: Row;
  @Input() editConfirm!: EventEmitter<any>;
  @Input() createConfirm!: EventEmitter<any>;
  @Input() isNew!: boolean;
  @Input() cell!: Cell;
  @Input() inputClass: string = '';
  @Input() mode: string = 'inline';
  @Input() isInEditing: boolean = false;

  @Output() edited = new EventEmitter<any>();

  onEdited(event: any) {
    if (this.isNew) {
      this.grid.create(this.grid.getNewRow(), this.createConfirm);
    } else {
      this.grid.save(this.row, this.editConfirm);
    }
  }
}
