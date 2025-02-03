import {
  Component,
  EventEmitter,
  input,
  InputSignal,
  OnChanges,
  OnDestroy,
  OnInit,
  output,
  OutputEmitterRef,
  SimpleChanges,
} from '@angular/core';
import { Subscription } from 'rxjs';

import { UntypedFormControl } from '@angular/forms';
import { DataSource } from 'ng2-smart-table';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Column } from '../../../lib/data-set/column';

@Component({ template: '', selector: 'ng2-base-filter-component' })
export class BaseFilterComponent implements FilterComponent, OnDestroy, OnChanges, OnInit {
  delay = 300;
  changesSubscription?: Subscription;
  readonly query = input<unknown>('');
  readonly inputClass = input<string>('');
  readonly source = input.required<DataSource>();
  readonly column = input.required<Column>();

  readonly filter = output<any>();

  readonly inputControl = new UntypedFormControl();

  ngOnDestroy() {
    if (this.changesSubscription) {
      this.changesSubscription.unsubscribe();
    }
  }

  ngOnInit() {
    this.changesSubscription = this.inputControl.valueChanges
      .pipe(distinctUntilChanged(), debounceTime(this.delay))
      .subscribe((value: string) => {
        this.setFilter(value);
      });
  }

  ngOnChanges({ query }: SimpleChanges) {
    if (query) {
      this.inputControl.setValue(query.currentValue, { emitEvent: false });
    }
  }

  setFilter(query: any) {
    this.filter.emit(query);
  }
}

export interface FilterComponent {
  delay?: number;
  changesSubscription?: Subscription;
  readonly query: InputSignal<unknown>;
  readonly inputClass: InputSignal<string>;
  readonly source: InputSignal<DataSource>;
  readonly column: InputSignal<Column>;
  readonly filter: EventEmitter<any> | OutputEmitterRef<any>;
}
