import {
  Component,
  computed,
  EventEmitter,
  input,
  Input,
  output,
  OutputEmitterRef
} from "@angular/core";

import { Cell } from "../../../lib/data-set/cell";
import { Grid } from "../../../lib/grid";
import { CellComponent } from "../../cell/cell.component";
import { ActionsComponent } from "../cells/actions.component";

@Component({
  selector: "[ng2-st-thead-form-row]",
  template: `
    @if (grid().isMultiSelectVisible()) {
    <td></td>
    } @if (grid().actionIsOnLeft() && grid().isActionsVisible()) {
    <td class="ng2-smart-actions">
      <ng2-st-actions
        [grid]="grid()"
        (create)="onCreate($event)"
      ></ng2-st-actions>
    </td>
    } @for (cell of getVisibleCells(); track cell.getId()+ $index) {
    <td>
      <ng2-smart-table-cell
        [cell]="cell"
        [inputClass]="addInputClass()"
        [isInEditing]="grid().getNewRow().isInEditing()"
      >
      </ng2-smart-table-cell>
    </td>
    } @if (grid().actionIsOnRight() && grid().isActionsVisible()) {
    <td class="ng2-smart-actions">
      <ng2-st-actions
        [grid]="grid()"
        (create)="onCreate($event)"
      ></ng2-st-actions>
    </td>
    }
  `,
  standalone: true,
  imports: [ActionsComponent, CellComponent],
})
export class TheadFormRowComponent {
  readonly grid = input.required<Grid>();
  @Input() createConfirm!: EventEmitter<any> | OutputEmitterRef<any>;

  readonly create = output<any>();
  addInputClass = computed<string>(() => {
    const addOptions = this.grid().settings()?.add;
    if (!addOptions) {
      return "";
    }
    return addOptions.inputClass || "";
  });

  onCreate(event: any) {
    event.stopPropagation();
    this.grid().create(this.grid().getNewRow(), this.createConfirm);
  }

  getVisibleCells(): Cell[] {
    return (this.grid().getNewRow().cells() || []).filter(
      (cell: Cell) => !cell.getColumn().hide
    );
  }
}
