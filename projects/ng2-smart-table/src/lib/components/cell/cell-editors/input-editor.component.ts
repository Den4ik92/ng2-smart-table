import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { BaseEditorComponent } from './base-editor.component';

@Component({
  selector: 'ng2-input-editor',
  styleUrls: ['./editor.component.scss'],
  template: `
    <input
      [class]="inputClass()"
      class="form-control"
      [(ngModel)]="cell().newValue"
      [name]="cell().getId()"
      [placeholder]="cell().getTitle()"
      [disabled]="!cell().isEditable()" />
  `,
  standalone: true,
  imports: [FormsModule],
})
export class InputEditorComponent extends BaseEditorComponent {}
