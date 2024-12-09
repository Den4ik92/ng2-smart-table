import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  output,
  OutputEmitterRef
} from "@angular/core";

import { Cell } from "../../../lib/data-set/cell";
import { Row } from "../../../lib/data-set/row";
import { Grid } from "../../../lib/grid";
import { CellComponent } from "../../cell/cell.component";
import { ActionsComponent } from "../cells/actions.component";

@Component({
  selector: "[ng2-st-thead-form-row]",
  template: `
    @if (grid.isMultiSelectVisible()) {
    <td></td>
    } @if (showActionColumnLeft) {
    <td class="ng2-smart-actions">
      <ng2-st-actions
        [grid]="grid"
        (create)="onCreate($event)"
      ></ng2-st-actions>
    </td>
    } @for (cell of getVisibleCells(grid.getNewRow().getCells()); track
    cell.getId()) {
    <td>
      <ng2-smart-table-cell
        [cell]="cell"
        [grid]="grid"
        [isNew]="true"
        [createConfirm]="createConfirm"
        [inputClass]="addInputClass"
        [isInEditing]="grid.getNewRow().isInEditing"
        (edited)="onCreate($event)"
      >
      </ng2-smart-table-cell>
    </td>
    } @if (showActionColumnRight) {
    <td class="ng2-smart-actions">
      <ng2-st-actions
        [grid]="grid"
        (create)="onCreate($event)"
      ></ng2-st-actions>
    </td>
    }
  `,
  standalone: true,
  imports: [ActionsComponent, CellComponent],
})
export class TheadFormRowComponent implements OnChanges {
  @Input() grid!: Grid;
  @Input() row!: Row;
  @Input() createConfirm!: EventEmitter<any> | OutputEmitterRef<any>;

  readonly create = output<any>();

  isMultiSelectVisible: boolean = false;
  showActionColumnLeft: boolean = false;
  showActionColumnRight: boolean = false;
  addInputClass = "";

  onCreate(event: any) {
    event.stopPropagation();

    this.grid.create(this.grid.getNewRow(), this.createConfirm);
  }

  ngOnChanges() {
    this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
    this.showActionColumnLeft = this.grid.showActionColumn("left");
    this.showActionColumnRight = this.grid.showActionColumn("right");
    this.addInputClass = this.grid.getSetting("add.inputClass", "");
  }

  getVisibleCells(cells: Array<Cell>): Array<Cell> {
    return (cells || []).filter((cell: Cell) => !cell.getColumn().hide);
  }
}
