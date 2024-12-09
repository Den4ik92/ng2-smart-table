import { Component, EventEmitter, Input, output, OutputEmitterRef } from "@angular/core";

import { Cell } from "../../lib/data-set/cell";
import { Row } from "../../lib/data-set/row";
import { Grid } from "../../lib/grid";
import { EditCellComponent } from "./cell-edit-mode/edit-cell.component";
import { ViewCellComponent } from "./cell-view-mode/view-cell.component";

@Component({
  selector: "ng2-smart-table-cell",
  template: `
    @if (!isInEditing) {
    <table-cell-view-mode [cell]="cell"></table-cell-view-mode>
    } @else {
    <table-cell-edit-mode
      [cell]="cell"
      [inputClass]="inputClass"
      (edited)="onEdited($event)"
    >
    </table-cell-edit-mode>
    }
  `,
  standalone: true,
  imports: [ViewCellComponent, EditCellComponent],
})
export class CellComponent {
  @Input() grid!: Grid;
  @Input() row!: Row;
  @Input() editConfirm!: EventEmitter<any> | OutputEmitterRef<any>;
  @Input() createConfirm!: EventEmitter<any> | OutputEmitterRef<any>;
  @Input() isNew!: boolean;
  @Input() cell!: Cell;
  @Input() inputClass = "";
  @Input() mode = "inline";
  @Input() isInEditing: boolean = false;

  readonly edited = output<any>();

  onEdited(event: any) {
    if (this.isNew) {
      this.grid.create(this.grid.getNewRow(), this.createConfirm);
    } else {
      this.grid.save(this.row, this.editConfirm);
    }
  }
}
