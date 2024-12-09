import { Component, EventEmitter, Input, output, OutputEmitterRef } from "@angular/core";

import { FormsModule } from "@angular/forms";
import { Cell } from "../../lib/data-set/cell";
import { LocalDataSource } from "../../lib/data-source/local/local.data-source";
import { Grid } from "../../lib/grid";
import { CellComponent } from "../cell/cell.component";
import { TbodyCreateCancelComponent } from "./cells/create-cancel.component";
import { TbodyCustomComponent } from "./cells/custom.component";
import { TbodyEditDeleteComponent } from "./cells/edit-delete.component";

@Component({
  selector: "[ng2-st-tbody]",
  styleUrls: ["./tbody.component.scss"],
  templateUrl: "./tbody.component.html",
  standalone: true,
  imports: [
    FormsModule,
    TbodyCustomComponent,
    TbodyEditDeleteComponent,
    TbodyCreateCancelComponent,
    CellComponent,
  ],
})
export class Ng2SmartTableTbodyComponent {
  @Input() grid!: Grid;
  @Input() source!: LocalDataSource;
  @Input() deleteConfirm!: EventEmitter<any> | OutputEmitterRef<any>;
  @Input() editConfirm!: EventEmitter<any> | OutputEmitterRef<any>;
  @Input() rowClassFunction: Function = () => "";

  readonly save = output<any>();
  readonly cancel = output<any>();
  readonly edit = output<any>();
  readonly editCancel = output<any>();
  readonly delete = output<any>();
  readonly custom = output<any>();
  readonly edited = output<any>();
  readonly userSelectRow = output<any>();
  readonly userClickedRow = output<any>();
  readonly editRowSelect = output<any>();
  readonly multipleSelectRow = output<any>();

  isMultiSelectVisible = false;
  showActionColumnLeft = false;
  showActionColumnRight = false;
  mode: "inline" | "external" | "click-to-edit" = "inline";
  editInputClass = "";
  isActionAdd = false;
  isActionEdit = false;
  isActionDelete = false;
  noDataMessage = false;

  get tableColumnsCount() {
    const actionColumns =
      this.isActionAdd || this.isActionEdit || this.isActionDelete ? 1 : 0;
    return this.grid.getColumns().length + actionColumns;
  }

  ngOnChanges() {
    this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
    this.showActionColumnLeft = this.grid.showActionColumn("left");
    this.mode = this.grid.getSetting("mode", "inline");
    this.editInputClass = this.grid.getSetting("edit.inputClass", "");
    this.showActionColumnRight = this.grid.showActionColumn("right");
    this.isActionAdd = this.grid.getSetting("actions.add", false);
    this.isActionEdit = this.grid.getSetting("actions.edit", false);
    this.isActionDelete = this.grid.getSetting("actions.delete", false);
    this.noDataMessage = this.grid.getSetting("noDataMessage");
  }

  getVisibleCells(cells: Cell[]): Cell[] {
    return (cells || []).filter((cell: Cell) => !cell.getColumn().hide);
  }

  protected trackByIdOrIndex(index: number, item: any): string | number {
    return item?.id || index;
  }
}
