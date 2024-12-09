import { Component, EventEmitter, Input, OnDestroy, output, OutputEmitterRef } from '@angular/core';
import { Subscription } from 'rxjs';

import { Column } from '../../../lib/data-set/column';

@Component({ template: '' })
export class DefaultFilter implements Filter, OnDestroy {

  delay: number = 300;
  changesSubscription?: Subscription;
  @Input() query = '';
  @Input() inputClass = '';
  @Input() column!: Column;
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
  inputClass: string;
  column: Column;
  filter: EventEmitter<string> | OutputEmitterRef<any>;
}
