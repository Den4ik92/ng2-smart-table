import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, skip } from 'rxjs/operators';

import { DefaultFilter } from './default-filter';

@Component({
    selector: 'select-filter',
    template: `
    <select [class]="inputClass"
      class="form-control"
      #inputControl
      [(ngModel)]="query">

      <option value="">{{ column.getFilterConfig().selectText }}</option>
      @for (option of column.getFilterConfig().list; track option.value) {
        <option [value]="option.value">
          {{ option.title }}
        </option>
      }
    </select>
    `,
    standalone: true,
    imports: [FormsModule]
})
export class SelectFilterComponent extends DefaultFilter implements OnInit {
  @ViewChild('inputControl', { read: NgControl, static: true }) inputControl!: NgControl;

  constructor() {
    super();
  }

  ngOnInit() {
    if (this.inputControl.valueChanges) {
      this.inputControl.valueChanges
      .pipe(
        skip(1),
        distinctUntilChanged(),
        debounceTime(this.delay)
      )
      .subscribe((value: string) => this.setFilter());
    }

  }
}
