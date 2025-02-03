import { Component, DestroyRef, inject, input, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
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
      @switch (column().getFilterType()) { @case ('custom') {
      <ng2-custom-table-filter
        [query]="query()"
        [column]="column()"
        [source]="source()"
        [inputClass]="inputClass()"
        (filter)="onFilter($event)">
      </ng2-custom-table-filter>
      } @default {
      <ng2-build-in-table-filter
        [query]="query()"
        [column]="column()"
        [source]="source()"
        [inputClass]="inputClass()"
        (filter)="onFilter($event)">
      </ng2-build-in-table-filter>
      } }
    </div>
    }
  `,
  standalone: true,
  imports: [CustomFilterComponent, BuildInFilterComponent],
})
export class FilterComponent implements OnInit {
  protected readonly query = signal('');
  readonly column = input.required<Column>();
  readonly source = input.required<DataSource>();
  readonly inputClass = input<string>('');
  private readonly destroyRef = inject(DestroyRef);

  ngOnInit() {
    this.source()
      .onChanged()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(({ filters }) => {
        if (!filters.length) {
          return;
        }
        const columnFilter = filters.find((filter) => filter.field === this.column().id);
        if (!columnFilter) {
          return;
        }
        this.query.set(columnFilter.search);
      });
  }

  onFilter(query: any) {
    this.source().addFilter({
      field: this.column().id,
      search: query,
      filter: this.column().filterFunction,
    });
  }
}
