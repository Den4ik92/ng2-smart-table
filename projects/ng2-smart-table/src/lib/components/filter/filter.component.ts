import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { Column } from '../../lib/data-set/column';
import { DataSource } from '../../lib/data-source/data-source';
import { BuildInFilterComponent } from './build-in-filter.component';
import { CustomFilterComponent } from './custom-filter.component';

@Component({
  selector: 'ng2-smart-table-filter',
  styleUrls: ['./filter.component.scss'],
  template: `
    @if (column().isFilterable) {
      <div class="ng2-smart-filter">
        @switch (column().getFilterType()) {
          @case ('custom') {
            <ng2-custom-table-filter
              [query]="query()"
              [column]="column()"
              [source]="source()"
              [inputClass]="inputClass()"
              (filter)="onFilter($event)">
            </ng2-custom-table-filter>
          }
          @default {
            <ng2-build-in-table-filter
              [query]="query()"
              [column]="column()"
              [source]="source()"
              [inputClass]="inputClass()"
              (filter)="onFilter($event)">
            </ng2-build-in-table-filter>
          }
        }
      </div>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CustomFilterComponent, BuildInFilterComponent],
})
export class FilterComponent {
  readonly column = input.required<Column>();
  readonly source = input.required<DataSource>();
  readonly inputClass = input<string>('');

  protected readonly query = computed<null | string>(() => {
    const columnFilter = this.source()
      .getFilters()
      .find((filter) => filter.field === this.column().id);
    return columnFilter?.search ?? null;
  });

  onFilter(query: any) {
    const columnFilter = this.column().filter;
    this.source().addFilter({
      type: columnFilter ? columnFilter.type : 'text',
      field: this.column().id,
      search: query,
      filter: this.column().filterFunction,
    });
  }
}
