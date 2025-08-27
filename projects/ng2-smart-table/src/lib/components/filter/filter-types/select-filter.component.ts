import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { BaseFilterComponent } from './base-filter.component';

@Component({
  selector: 'ng2-select-filter',
  template: `
    <select [class]="inputClass()" class="form-control" [formControl]="inputControl">
      <option [value]="null">{{ placeholder || 'all' }}</option>
      @for (option of optionsList(); track $index) {
        <option [value]="option.value">
          {{ option.title }}
        </option>
      }
    </select>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule],
})
export class SelectFilterComponent extends BaseFilterComponent implements OnInit {
  readonly optionsList = signal<{ title: string; value: any }[]>([]);

  override ngOnInit(): void {
    super.ngOnInit();
    const config = this.column().getFilterConfig();
    this.optionsList.set(config?.list || []);
  }
}
