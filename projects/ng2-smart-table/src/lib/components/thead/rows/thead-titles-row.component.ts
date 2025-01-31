import { Component, input, output } from "@angular/core";

import { Column } from "../../../lib/data-set/column";
import { LocalDataSource } from "../../../lib/data-source/local/local.data-source";
import { Grid } from "../../../lib/grid";
import { ActionsTitleComponent } from "../cells/actions-title.component";
import { CheckboxSelectAllComponent } from "../cells/checkbox-select-all.component";
import { ColumnTitleComponent } from "../cells/column-title.component";

@Component({
  selector: "[ng2-st-thead-titles-row]",
  template: `
    @if (grid().isMultiSelectVisible()) {
    <th
      ng2-st-checkbox-select-all
      [grid]="grid()"
      (click)="selectAllRows.emit($event)"
    ></th>
    } @if (grid().actionIsOnLeft() && grid().isActionsVisible()) {

    <th ng2-st-actions-title [grid]="grid()"></th>
    } @for (column of getVisibleColumns(); track column.id + $index) {
    <th
      class="ng2-smart-th {{ column.id }}"
      [class]="column.class"
      [style.width]="column.width"
    >
      <ng2-st-column-title
        [source]="source()"
        [column]="column"
        (sort)="sort.emit($event)"
      ></ng2-st-column-title>
    </th>
    } @if (grid().actionIsOnRight() && grid().isActionsVisible()) {
    <th ng2-st-actions-title [grid]="grid()"></th>
    }
  `,
  standalone: true,
  imports: [
    CheckboxSelectAllComponent,
    ActionsTitleComponent,
    ColumnTitleComponent,
  ],
})
export class TheadTitlesRowComponent {
  readonly grid = input.required<Grid>();
  readonly source = input.required<LocalDataSource>();

  readonly sort = output<any>();
  readonly selectAllRows = output<any>();

  getVisibleColumns(): Column[] {
    return (this.grid().getColumns() || []).filter(
      (column: Column) => !column.hide
    );
  }
}
