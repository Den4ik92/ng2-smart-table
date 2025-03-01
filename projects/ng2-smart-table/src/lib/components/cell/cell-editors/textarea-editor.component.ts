import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { BaseEditorComponent } from './base-editor.component';

@Component({
  selector: 'ng2-textarea-editor',
  styleUrls: ['./editor.component.scss'],
  template: `
    <textarea
      [class]="inputClass()"
      class="form-control"
      [(ngModel)]="cell().newValue"
      [name]="cell().getId()"
      [disabled]="!cell().isEditable()"
      [placeholder]="cell().getTitle()">
    </textarea>
  `,
  standalone: true,
  imports: [FormsModule],
})
export class TextareaEditorComponent extends BaseEditorComponent {}
