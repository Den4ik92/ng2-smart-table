import { Component } from '@angular/core';

import { DefaultEditor } from './default-editor';

@Component({
    selector: 'checkbox-editor',
    styleUrls: ['./editor.component.scss'],
    template: `
    <input [ngClass]="inputClass"
           type="checkbox"
           class="form-control"
           [name]="cell.getId()"
           [disabled]="!cell.isEditable()"
           [checked]="cell.getValue() === (cell.getColumn().getConfig()?.true || true)"
           (click)="onClick.emit($event)"
           (change)="onChange($event)">
    `,
    standalone: false
})
export class CheckboxEditorComponent extends DefaultEditor {

  constructor() {
    super();
  }

  onChange(event: any) {
    const config: any = this.cell.getColumn().getConfig();
    const trueVal = (config && config?.true) || true;
    const falseVal = (config && config?.false) || false;
    this.cell.newValue = event.target.checked ? trueVal : falseVal;
  }
}
