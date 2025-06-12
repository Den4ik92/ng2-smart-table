import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import { Column } from '../../../../lib/data-set/column';
import { SmartTableSortDirection, SmartTableSortItem } from '../../../../lib/interfaces/smart-table.models';

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
  readonly currentSort = input.required<SmartTableSortItem | null>();
  readonly column = input.required<Column>();
  readonly sortEmit = output();

  protected readonly currentSortDirection = computed<null | SmartTableSortDirection>(() => {
    const sort = this.currentSort();
    if (!sort) {
      return null;
    }
    const { field, direction, title } = sort;
    return this.column().id === field && this.column().title === title ? direction : null;
  });

  protected readonly currentSortDirectionSymbol = computed<string>(() => {
    return !this.currentSortDirection() ? '' : this.currentSortDirection() === 'asc' ? '↑' : '↓';
  });

  _sort(event: Event) {
    event.preventDefault();
    this.sortEmit.emit();
    // const { id: field, title } = this.column();
    // this.source().setSort({
    //   field,
    //   title,
    //   direction: this.currentSortDirection() === 'desc' ? 'asc' : 'desc',
    //   compare: this.column().compareFunction,
    // });
  }
}
