import { Component, EventEmitter, Input, input, InputSignal, OnDestroy, output, OutputEmitterRef } from '@angular/core';
import { Subscription } from 'rxjs';

import { LocalDataSource } from 'ng2-smart-table';
import { Column } from '../../../lib/data-set/column';

@Component({ template: '', selector: 'ng2-default-base-filter-component' })
export class DefaultFilter implements Filter, OnDestroy {
  delay = 300;
  changesSubscription?: Subscription;
  @Input()query = '';
  readonly inputClass = input<string>('');
  readonly source = input.required<LocalDataSource>();
  readonly column = input.required<Column>();
  readonly filter = output<string>();

  ngOnDestroy() {
    if (this.changesSubscription) {
      this.changesSubscription.unsubscribe();
    }
  }

  setFilter() {
    this.filter.emit(this.query);
  }
}

export interface Filter {
  delay?: number;
  changesSubscription?: Subscription;
  query: string;
  inputClass:  InputSignal<string>;
  source: InputSignal<LocalDataSource>;
  column: InputSignal<Column>;
  filter: EventEmitter<string> | OutputEmitterRef<any>;
}
