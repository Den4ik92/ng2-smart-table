import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

import { Column } from '../../lib/data-set/column';
import { DataSource } from '../../lib/data-source/data-source';
import { CheckboxFilterComponent } from './filter-types/checkbox-filter.component';
import { InputFilterComponent } from './filter-types/input-filter.component';
import { SelectFilterComponent } from './filter-types/select-filter.component';

@Component({
  selector: 'ng2-build-in-table-filter',
  template: `
    @switch (column().getFilterType()) {
      @case ('list') {
        <ng2-select-filter
          [query]="query()"
          [class]="inputClass()"
          [source]="source()"
          [column]="column()"
          [filterEmitter]="filter">
        </ng2-select-filter>
      }
      @case ('checkbox') {
        <ng2-checkbox-filter
          [query]="query()"
          [source]="source()"
          [class]="inputClass()"
          [column]="column()"
          [filterEmitter]="filter">
        </ng2-checkbox-filter>
      }
      @default {
        <ng2-input-filter
          [query]="query()"
          [source]="source()"
          [class]="inputClass()"
          [column]="column()"
          [filterEmitter]="filter">
        </ng2-input-filter>
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SelectFilterComponent, CheckboxFilterComponent, InputFilterComponent],
})
export class BuildInFilterComponent {
  readonly query = input<unknown>(null);
  readonly inputClass = input<string>('');
  readonly source = input.required<DataSource>();
  readonly column = input.required<Column>();
  readonly filter = output<any>();
}
