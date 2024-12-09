import { Component } from '@angular/core';

import { DefaultEditor } from './default-editor';

@Component({
    selector: 'select-editor',
    template: `
    <select [ngClass]="inputClass"
      class="form-control"
      [(ngModel)]="cell.newValue"
      [name]="cell.getId()"
      [disabled]="!cell.isEditable()"
      (click)="onClick.emit($event)"
      (keydown.enter)="onEdited.emit($event)"
      (keydown.esc)="onStopEditing.emit()">
    
      @for (option of cell.getColumn().getConfig()?.list; track option) {
        <option [value]="option.value"
          [selected]="option.value === cell.getValue()">{{ option.title }}
        </option>
      }
    </select>
    `,
    standalone: false
})
export class SelectEditorComponent extends DefaultEditor {

  constructor() {
    super();
  }
}
