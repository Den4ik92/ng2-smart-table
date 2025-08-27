import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { BaseFilterComponent } from './base-filter.component';

@Component({
  selector: 'ng2-input-filter',
  template: `
    <input
      [class]="inputClass()"
      [formControl]="inputControl"
      class="form-control"
      type="text"
      placeholder="{{ placeholder || column().title }}" />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule],
})
export class InputFilterComponent extends BaseFilterComponent {}
