import {
  ChangeDetectionStrategy,
  Component,
  input,
  InputSignal,
  OnChanges,
  OnDestroy,
  OnInit,
  OutputEmitterRef,
  SimpleChanges,
} from '@angular/core';
import { Subscription } from 'rxjs';

import { UntypedFormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Column } from '../../../lib/data-set/column';
import { DataSource } from '../../../lib/data-source/data-source';

@Component({ template: '', selector: 'ng2-base-filter-component', changeDetection: ChangeDetectionStrategy.OnPush })
export class BaseFilterComponent implements FilterComponent, OnDestroy, OnChanges, OnInit {
  delay = 300;
  changesSubscription?: Subscription;
  readonly query = input<unknown>('');
  readonly inputClass = input<string>('');
  readonly source = input.required<DataSource>();
  readonly column = input.required<Column>();

  readonly filterEmitter = input.required<OutputEmitterRef<any>>();

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
      this.inputControl?.setValue(query.currentValue, { emitEvent: false });
    }
  }

  setFilter(query: any) {
    this.filterEmitter().emit(query);
  }
}

export interface FilterComponent {
  delay?: number;
  changesSubscription?: Subscription;
  readonly query: InputSignal<unknown>;
  readonly inputClass: InputSignal<string>;
  readonly source: InputSignal<DataSource>;
  readonly column: InputSignal<Column>;
  readonly filterEmitter: InputSignal<OutputEmitterRef<any>>;
}
