import { Component, input, output } from '@angular/core';

import { Column, DataSource } from 'ng2-smart-table';
import { CheckboxFilterComponent } from './filter-types/checkbox-filter.component';
import { InputFilterComponent } from './filter-types/input-filter.component';
import { SelectFilterComponent } from './filter-types/select-filter.component';

@Component({
  selector: 'ng2-build-in-table-filter',
  template: `
    @switch (column().getFilterType()) { @case ('list') {
    <ng2-select-filter
      [query]="query()"
      [class]="inputClass()"
      [source]="source()"
      [column]="column()"
      (filter)="filter.emit($event)">
    </ng2-select-filter>
    } @case ('checkbox') {
    <ng2-checkbox-filter
      [query]="query()"
      [source]="source()"
      [class]="inputClass()"
      [column]="column()"
      (filter)="filter.emit($event)">
    </ng2-checkbox-filter>
    } @default {
    <ng2-input-filter
      [query]="query()"
      [source]="source()"
      [class]="inputClass()"
      [column]="column()"
      (filter)="filter.emit($event)">
    </ng2-input-filter>
    } }
  `,
  standalone: true,
  imports: [SelectFilterComponent, CheckboxFilterComponent, InputFilterComponent],
})
export class BuildInFilterComponent {
  readonly query = input<unknown>('');
  readonly inputClass = input<string>('');
  readonly source = input.required<DataSource>();
  readonly column = input.required<Column>();
  readonly filter = output<any>();
}
