import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BaseFilterComponent } from './base-filter.component';

@Component({
  selector: 'ng2-select-filter',
  template: `
    <select [class]="inputClass()" class="form-control" [formControl]="inputControl">
      <option value="">{{ column().getFilterConfig().selectText }}</option>
      @for (option of column().getFilterConfig().list; track $index) {
      <option [value]="option.value">
        {{ option.title }}
      </option>
      }
    </select>
  `,
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
})
export class SelectFilterComponent extends BaseFilterComponent {}
