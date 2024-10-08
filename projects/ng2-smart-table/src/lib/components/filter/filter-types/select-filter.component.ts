import { Component, OnInit, ViewChild } from '@angular/core';
import { NgControl } from '@angular/forms';
import { distinctUntilChanged, debounceTime, skip } from 'rxjs/operators';

import { DefaultFilter } from './default-filter';

@Component({
  selector: 'select-filter',
  template: `
    <select [ngClass]="inputClass"
      class="form-control"
      #inputControl
      [(ngModel)]="query">
    
      <option value="">{{ column.getFilterConfig().selectText }}</option>
      @for (option of column.getFilterConfig().list; track option) {
        <option [value]="option.value">
          {{ option.title }}
        </option>
      }
    </select>
    `,
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
