import { Component, input } from "@angular/core";

import { Cell } from "../../lib/data-set/cell";
import { EditCellComponent } from "./cell-edit-mode/edit-cell.component";
import { ViewCellComponent } from "./cell-view-mode/view-cell.component";

@Component({
  selector: "ng2-smart-table-cell",
  template: `
    @if (!isInEditing()) {
    <table-cell-view-mode [cell]="cell()"></table-cell-view-mode>
    } @else {
    <table-cell-edit-mode
      [cell]="cell()"
      [inputClass]="inputClass()"
    >
    </table-cell-edit-mode>
    }
  `,
  standalone: true,
  imports: [ViewCellComponent, EditCellComponent],
})
export class CellComponent {
  readonly cell = input.required<Cell>()

  readonly inputClass = input('');
  readonly isInEditing = input<boolean>(false);
}
