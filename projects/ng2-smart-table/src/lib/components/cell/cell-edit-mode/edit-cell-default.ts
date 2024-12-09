import { Component, Input, output } from '@angular/core';

import { Cell } from '../../../lib/data-set/cell';

@Component({ template: '' })
export class EditCellDefault {

  @Input() cell!: Cell;
  @Input() inputClass: string = '';

  readonly edited = output<any>();

  onEdited(event: any): boolean {
    this.edited.emit(event);
    return false;
  }

  onStopEditing(): boolean {
    this.cell.getRow().isInEditing = false;
    return false;
  }

  onClick(event: MouseEvent) {
    event.stopPropagation();
  }
}
