import { ChangeDetectionStrategy, Component } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { BaseEditorComponent } from './base-editor.component';

@Component({
  selector: 'ng2-input-editor',
  styleUrls: ['./editor.component.scss'],
  template: `
    <input
      type="text"
      [class]="inputClass()"
      class="form-control"
      [ngModel]="cell().getValue()"
      (ngModelChange)="cell().setNewValue($event)"
      [name]="cell().id"
      [placeholder]="cell().title"
      [disabled]="!cell().isEditable()" />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule],
})
export class InputEditorComponent extends BaseEditorComponent {}
