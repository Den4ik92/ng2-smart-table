import { ChangeDetectionStrategy, Component, computed, input, OnInit, output, Type } from '@angular/core';

import { NgComponentOutlet } from '@angular/common';
import { Column } from '../../lib/data-set/column';
import { DataSource } from '../../lib/data-source/data-source';

@Component({
  selector: 'ng2-custom-table-filter',
  imports: [NgComponentOutlet],
  template: `
    @if (customFilterComponent) {
      <ng-template *ngComponentOutlet="customFilterComponent; inputs: componentInputs()"></ng-template>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomFilterComponent implements OnInit {
  customFilterComponent?: Type<any>;
  readonly query = input<unknown>(null);
  readonly inputClass = input<string>('');
  readonly source = input.required<DataSource>();
  readonly column = input.required<Column>();

  readonly filter = output<any>();

  readonly componentInputs = computed<Record<string, any>>(() => {
    let inputs = {
      query: this.query(),
      inputClass: this.inputClass(),
      source: this.source(),
      column: this.column(),
      filterEmitter: this.filter,
    };
    const columnFilter = this.column().filter;
    if (columnFilter && columnFilter.type === 'custom') {
      if (columnFilter.config?.inputs) {
        inputs = { ...inputs, ...columnFilter.config?.inputs };
      }
    }
    return inputs;
  });

  ngOnInit(): void {
    const columnFilter = this.column().filter;
    if (columnFilter && columnFilter.type === 'custom') {
      this.customFilterComponent = columnFilter.component;
    }
  }
}
