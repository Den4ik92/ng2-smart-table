import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BaseFilterComponent } from './base-filter.component';

@Component({
  selector: 'ng2-input-filter',
  template: `
    <input
      [class]="inputClass()"
      [formControl]="inputControl"
      class="form-control"
      type="text"
      placeholder="{{ column().title }}" />
  `,
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
})
export class InputFilterComponent extends BaseFilterComponent {}
