import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from "@angular/core";

import { Column } from "../../../lib/data-set/column";
import { LocalDataSource } from "../../../lib/data-source/local/local.data-source";
import { Grid } from "../../../lib/grid";

@Component({
  selector: "[ng2-st-thead-filters-row]",
  template: `
    @if (isMultiSelectVisible) {
    <th></th>
    } @if (showActionColumnLeft) {
    <th ng2-st-add-button [grid]="grid" (create)="create.emit($event)"></th>
    } @for (column of getVisibleColumns(grid.getColumns()); track column.id) {
    <th class="ng2-smart-th {{ column.id }}">
      <ng2-smart-table-filter
        [source]="source"
        [column]="column"
        [inputClass]="filterInputClass"
        (filter)="filter.emit($event)"
      >
      </ng2-smart-table-filter>
    </th>
    } @if (showActionColumnRight) {
    <th
      ng2-st-add-button
      [grid]="grid"
      [source]="source"
      (create)="create.emit($event)"
    ></th>
    }
  `,
})
export class TheadFitlersRowComponent implements OnChanges {
  @Input() grid!: Grid;
  @Input() source!: LocalDataSource;

  @Output() create = new EventEmitter<any>();
  @Output() filter = new EventEmitter<any>();

  isMultiSelectVisible: boolean = false;
  showActionColumnLeft: boolean = false;
  showActionColumnRight: boolean = false;
  filterInputClass: string = "";

  ngOnChanges() {
    this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
    this.showActionColumnLeft = this.grid.showActionColumn("left");
    this.showActionColumnRight = this.grid.showActionColumn("right");
    this.filterInputClass = this.grid.getSetting("filter.inputClass", "");
  }

  getVisibleColumns(columns: Array<Column>): Array<Column> {
    return (columns || []).filter((column: Column) => !column.hide);
  }
}
