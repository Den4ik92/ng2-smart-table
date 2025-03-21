import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { BaseEditorComponent } from './base-editor.component';

@Component({
  selector: 'ng2-select-editor',
  template: `
    <select
      [class]="inputClass()"
      class="form-control"
      [(ngModel)]="cell().newValue"
      [name]="cell().getId()"
      [disabled]="!cell().isEditable()">
      @for (option of cell().getColumn().getEditorConfig()?.list; track $index) {
      <option [value]="option.value" [selected]="option.value === cell().getValue()">
        {{ option.title }}
      </option>
      }
    </select>
  `,
  standalone: true,
  imports: [FormsModule],
})
export class SelectEditorComponent extends BaseEditorComponent {}
