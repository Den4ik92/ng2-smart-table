import { Component } from "@angular/core";

import { FilterDefault } from "./filter-default";
import { CheckboxFilterComponent } from "./filter-types/checkbox-filter.component";
import { InputFilterComponent } from "./filter-types/input-filter.component";
import { SelectFilterComponent } from "./filter-types/select-filter.component";

@Component({
  selector: "default-table-filter",
  template: `
    @switch (column().getFilterType()) { @case ('list') {
    <select-filter
      [query]="query"
      [class]="inputClass()"
      [column]="column()"
      (filter)="onFilter($event)"
    >
    </select-filter>
    } @case ('checkbox') {
    <checkbox-filter
      [query]="query"
      [class]="inputClass()"
      [column]="column()"
      (filter)="onFilter($event)"
    >
    </checkbox-filter>
    } @default {
    <input-filter
      [query]="query"
      [class]="inputClass()"
      [column]="column()"
      (filter)="onFilter($event)"
    >
    </input-filter>
    } }
  `,
  standalone: true,
  imports: [
    SelectFilterComponent,
    CheckboxFilterComponent,
    InputFilterComponent,
  ],
})
export class DefaultFilterComponent extends FilterDefault {}
