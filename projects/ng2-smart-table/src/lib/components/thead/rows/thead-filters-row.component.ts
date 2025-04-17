import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';

import { DataSource } from '../../../lib/data-source/data-source';
import { Grid } from '../../../lib/grid';
import { FilterComponent } from '../../filter/filter.component';
import { AddButtonComponent } from '../cells/add-button.component';

@Component({
  selector: '[ng2-st-thead-filters-row]',
  template: `
    @if (grid().isMultiSelectVisible()) {
      <th></th>
    }
    @if (grid().actionIsOnLeft() && grid().isActionsVisible() && !withoutCreateButton()) {
      <th ng2-st-add-button [grid]="grid()" (create)="create.emit()"></th>
    }
    @for (column of grid().dataSet.getVisibleColumns(); track column.id + $index) {
      <th class="ng2-smart-th {{ column.id }}">
        <ng2-smart-table-filter [source]="source()" [column]="column" [inputClass]="filterInputClass()">
        </ng2-smart-table-filter>
      </th>
    }
    @if (grid().actionIsOnRight() && grid().isActionsVisible() && !withoutCreateButton()) {
      <th ng2-st-add-button [grid]="grid()" (create)="create.emit()"></th>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AddButtonComponent, FilterComponent],
})
export class TheadFiltersRowComponent {
  readonly grid = input.required<Grid>();
  readonly source = input.required<DataSource>();
  readonly withoutCreateButton = input<boolean>(false);

  readonly create = output<void>();

  readonly filterInputClass = computed<string>(() => {
    const filterOptions = this.grid().settings()?.filter;
    if (!filterOptions) {
      return '';
    }
    return filterOptions.inputClass || '';
  });
}
