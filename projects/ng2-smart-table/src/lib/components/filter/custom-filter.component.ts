import {
  ChangeDetectionStrategy,
  Component,
  ComponentRef,
  input,
  OnChanges,
  OnDestroy,
  output,
  OutputRefSubscription,
  SimpleChanges,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

import { Column } from '../../lib/data-set/column';
import { DataSource } from '../../lib/data-source/data-source';
import { BaseFilterComponent, FilterComponent } from './filter-types/base-filter.component';

@Component({
  selector: 'ng2-custom-table-filter',
  template: `<ng-template #dynamicTarget></ng-template>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomFilterComponent implements FilterComponent, OnChanges, OnDestroy {
  @ViewChild('dynamicTarget', { read: ViewContainerRef, static: true }) dynamicTarget?: ViewContainerRef;

  readonly query = input<unknown>('');
  readonly inputClass = input<string>('');
  readonly source = input.required<DataSource>();
  readonly column = input.required<Column>();

  readonly filter = output<any>();

  delay?: number | undefined;
  private filterSubscription?: OutputRefSubscription | undefined;

  customComponent?: ComponentRef<BaseFilterComponent>;

  ngOnChanges(changes: SimpleChanges) {
    if (this.customComponent) {
      if (this.customComponent?.instance && 'ngOnChanges' in this.customComponent.instance) {
        try {
          const onChanges = this.customComponent.instance.ngOnChanges as (changes: SimpleChanges) => void;
          onChanges(changes);
        } catch {
          // do nothing
        }
      }
      return;
    }
    const columnFilter = this.column().filter;
    if (columnFilter && columnFilter.type === 'custom') {
      this.customComponent = this.dynamicTarget?.createComponent(columnFilter?.component);
      // set @Inputs and @Outputs of custom component
      this.customComponent?.setInput('query', this.query());
      this.customComponent?.setInput('column', this.column());
      this.customComponent?.setInput('source', this.source());
      this.customComponent?.setInput('inputClass', this.inputClass());
      this.filterSubscription = this.customComponent?.instance.filter.subscribe((event: any) =>
        this.filter.emit(event),
      );
    }
  }

  ngOnDestroy() {
    if (this.customComponent) {
      this.customComponent.destroy();
    }
    if (this.filterSubscription) {
      this.filterSubscription.unsubscribe();
    }
  }
}
