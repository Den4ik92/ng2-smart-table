import {Component, Input} from '@angular/core';

import {FilterDefault} from "./filter-default";

@Component({
    selector: 'default-table-filter',
    template: `
@switch (column.getFilterType()) {
  @case ('list') {
    <select-filter
      [query]="query"
      [ngClass]="inputClass"
      [column]="column"
      (filter)="onFilter($event)">
    </select-filter>
  }
  @case ('checkbox') {
    <checkbox-filter
      [query]="query"
      [ngClass]="inputClass"
      [column]="column"
      (filter)="onFilter($event)">
    </checkbox-filter>
  }
  @default {
    <input-filter
      [query]="query"
      [ngClass]="inputClass"
      [column]="column"
      (filter)="onFilter($event)">
  </input-filter>
}
}
`,
    standalone: false
})
export class DefaultFilterComponent extends FilterDefault {  

}
