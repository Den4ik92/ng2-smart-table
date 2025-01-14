import { Component, EventEmitter, Input, input, InputSignal, OnDestroy, output, OutputEmitterRef } from '@angular/core';
import { Subscription } from 'rxjs';

import { Column } from '../../../lib/data-set/column';

@Component({ template: '' })
export class DefaultFilter implements Filter, OnDestroy {
  delay = 300;
  changesSubscription?: Subscription;
  @Input()query = '';
  readonly inputClass = input<string>('');
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
  column: InputSignal<Column>;
  filter: EventEmitter<string> | OutputEmitterRef<any>;
}
