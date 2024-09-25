import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Cell } from '../../../lib/data-set/cell';
import { SmartTableEditorAndFilterTypes } from '../../../lib/interfaces/smart-table.models';

@Component({
  selector: 'table-cell-edit-mode',
  template: `
      <div>
        @switch (getEditorType()) {
          @case ('custom') {
            <table-cell-custom-editor
              [cell]="cell"
              [inputClass]="inputClass"
              (edited)="onEdited($event)">
            </table-cell-custom-editor>
          }
          @default {
            <table-cell-default-editor
              [cell]="cell"
              [inputClass]="inputClass"
              (edited)="onEdited($event)">
            </table-cell-default-editor>
          }
        }
      </div>
      `,
})
export class EditCellComponent {

  @Input() cell!: Cell;
  @Input() inputClass: string = '';

  @Output() edited = new EventEmitter<any>();

  onEdited(event: any): boolean {
    this.edited.next(event);
    return false;
  }

  getEditorType(): SmartTableEditorAndFilterTypes {
    const editor = this.cell.getColumn().editor
    if (editor) {
      return editor.type
    }
    return 'text';
  }
}
