import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { Column } from '../../../../lib/data-set/column';
import { DataSource } from '../../../../lib/data-source/data-source';
import { SmartTableSortDirection } from '../../../../lib/interfaces/smart-table.models';

@Component({
  selector: 'ng2-st-column-title',
  styleUrls: ['./title.component.scss'],
  template: `
    @if (column().isSortable) {
      <a href="#" (click)="_sort($event)" class="ng2-smart-sort-link sort">
        {{ column().title }}
        <span class="sort-direction">{{ currentSortDirectionSymbol() }}</span>
      </a>
    } @else {
      <span class="ng2-smart-sort">{{ column().title }}</span>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColumnTitleComponent {
  readonly source = input.required<DataSource>();
  readonly column = input.required<Column>();

  protected readonly currentSortDirection = computed<null | SmartTableSortDirection>(() => {
    const { field, direction } = this.source().getSort();
    return this.column().id === field ? direction : null;
  });

  protected readonly currentSortDirectionSymbol = computed<string>(() => {
    return !this.currentSortDirection() ? '' : this.currentSortDirection() === 'asc' ? '↑' : '↓';
  });

  _sort(event: Event) {
    event.preventDefault();
    const { id: field, title } = this.column();
    this.source().setSort({
      field,
      title,
      direction: this.currentSortDirection() === 'desc' ? 'asc' : 'desc',
      compare: this.column().compareFunction,
    });
  }
}
