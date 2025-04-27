import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';

import { NgComponentOutlet } from '@angular/common';
import { Column } from '../../lib/data-set/column';
import { DataSource } from '../../lib/data-source/data-source';

@Component({
  selector: 'ng2-custom-table-filter',
  imports: [NgComponentOutlet],
  template: `
    @if (customFilterComponent(); as component) {
      <ng-template
        *ngComponentOutlet="
          component;
          inputs: {
            query: query(),
            inputClass: inputClass(),
            source: source(),
            column: column(),
            filterEmitter: filter,
          }
        "></ng-template>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomFilterComponent {
  readonly customFilterComponent = computed(() => {
    const columnFilter = this.column().filter;
    if (!columnFilter || columnFilter.type !== 'custom') {
      return null;
    }
    return columnFilter.component;
  });

  readonly query = input<unknown>('');
  readonly inputClass = input<string>('');
  readonly source = input.required<DataSource>();
  readonly column = input.required<Column>();

  readonly filter = output<any>();
}
