import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

import { Column } from "../../../lib/data-set/column";
import { LocalDataSource } from '../../../lib/data-source/local/local.data-source';
import { Grid } from '../../../lib/grid';

@Component({
  selector: '[ng2-st-thead-titles-row]',
  template: `
    @if (isMultiSelectVisible) {
      <th ng2-st-checkbox-select-all
        [grid]="grid"
        [source]="source"
        (click)="selectAllRows.emit($event)">
      </th>
    }
    @if (showActionColumnLeft) {
      <th ng2-st-actions-title [grid]="grid"></th>
    }
    @for (column of getVisibleColumns(grid.getColumns()); track column.id) {
      <th
        class="ng2-smart-th {{ column.id }}"
        [ngClass]="column.class"
        [style.width]="column.width">
        <ng2-st-column-title [source]="source" [column]="column" (sort)="sort.emit($event)"></ng2-st-column-title>
      </th>
    }
    @if (showActionColumnRight) {
      <th ng2-st-actions-title [grid]="grid"></th>
    }
    `,
})
export class TheadTitlesRowComponent implements OnChanges {

  @Input() grid!: Grid;
  @Input() source!: LocalDataSource;

  @Output() sort = new EventEmitter<any>();
  @Output() selectAllRows = new EventEmitter<any>();

  isMultiSelectVisible = false;
  showActionColumnLeft = false;
  showActionColumnRight = false;

  ngOnChanges() {
    this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
    this.showActionColumnLeft = this.grid.showActionColumn('left');
    this.showActionColumnRight = this.grid.showActionColumn('right');
  }

  getVisibleColumns(columns: Array<Column>): Array<Column> {
    return (columns || []).filter((column: Column) => !column.hide);
  }
}
