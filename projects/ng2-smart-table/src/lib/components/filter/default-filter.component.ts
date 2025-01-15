import { Component } from "@angular/core";

import { FilterDefault } from "./filter-default";
import { CheckboxFilterComponent } from "./filter-types/checkbox-filter.component";
import { InputFilterComponent } from "./filter-types/input-filter.component";
import { SelectFilterComponent } from "./filter-types/select-filter.component";

@Component({
  selector: "ng2-default-table-filter",
  template: `
    @switch (column().getFilterType()) { @case ('list') {
    <ng2-select-filter
      [query]="query"
      [class]="inputClass()"
      [source]="source()"
      [column]="column()"
      (filter)="onFilter($event)"
    >
    </ng2-select-filter>
    } @case ('checkbox') {
    <ng2-checkbox-filter
      [query]="query"
      [source]="source()"
      [class]="inputClass()"
      [column]="column()"
      (filter)="onFilter($event)"
    >
    </ng2-checkbox-filter>
    } @default {
    <ng2-input-filter
      [query]="query"
      [source]="source()"
      [class]="inputClass()"
      [column]="column()"
      (filter)="onFilter($event)"
    >
    </ng2-input-filter>
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
