import { Component, input, output } from "@angular/core";

import { DataSource } from "ng2-smart-table";
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
      (click)="selectAllRows.emit()"
    ></th>
    } @if (grid().actionIsOnLeft() && grid().isActionsVisible()) {

    <th ng2-st-actions-title [grid]="grid()"></th>
    } @for (column of grid().dataSet.getVisibleColumns(); track column.id + $index) {
    <th
      class="ng2-smart-th {{ column.id }}"
      [class]="column.class"
      [style.width]="column.width"
    >
      <ng2-st-column-title
        [source]="source()"
        [column]="column"
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
  readonly source = input.required<DataSource>();

  readonly selectAllRows = output<void>();
}
