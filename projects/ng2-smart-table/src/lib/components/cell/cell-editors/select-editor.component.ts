import { ChangeDetectionStrategy, Component } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { BaseEditorComponent } from './base-editor.component';

@Component({
  selector: 'ng2-select-editor',
  template: `
    <select
      [class]="inputClass()"
      class="form-control"
      [ngModel]="cell().getValue()"
      (ngModelChange)="cell().setNewValue($event)"
      [name]="cell().id"
      [disabled]="!cell().isEditable()">
      @for (option of cell().column.getEditorConfig()?.list; track $index) {
        <option [value]="option.value" [selected]="option.value === cell().getValue()">
          {{ option.title }}
        </option>
      }
    </select>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule],
})
export class SelectEditorComponent extends BaseEditorComponent {}
