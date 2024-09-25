import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Grid } from '../../../lib/grid';
import { LocalDataSource } from '../../../lib/data-source/local/local.data-source';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../cells/actions-title.component";
import * as i3 from "../cells/checkbox-select-all.component";
import * as i4 from "../cells/column-title.component";
export class TheadTitlesRowComponent {
    constructor() {
        this.sort = new EventEmitter();
        this.selectAllRows = new EventEmitter();
        this.isMultiSelectVisible = false;
        this.showActionColumnLeft = false;
        this.showActionColumnRight = false;
    }
    ngOnChanges() {
        this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
        this.showActionColumnLeft = this.grid.showActionColumn('left');
        this.showActionColumnRight = this.grid.showActionColumn('right');
    }
    getVisibleColumns(columns) {
        return (columns || []).filter((column) => !column.hide);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: TheadTitlesRowComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.3.12", type: TheadTitlesRowComponent, selector: "[ng2-st-thead-titles-row]", inputs: { grid: "grid", source: "source" }, outputs: { sort: "sort", selectAllRows: "selectAllRows" }, usesOnChanges: true, ngImport: i0, template: `
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
    @for (column of getVisibleColumns(grid.getColumns()); track column) {
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
    `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "component", type: i2.ActionsTitleComponent, selector: "[ng2-st-actions-title]", inputs: ["grid"] }, { kind: "component", type: i3.CheckboxSelectAllComponent, selector: "[ng2-st-checkbox-select-all]", inputs: ["grid", "source"] }, { kind: "component", type: i4.ColumnTitleComponent, selector: "ng2-st-column-title", inputs: ["column", "source"], outputs: ["sort"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: TheadTitlesRowComponent, decorators: [{
            type: Component,
            args: [{
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
    @for (column of getVisibleColumns(grid.getColumns()); track column) {
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
                }]
        }], propDecorators: { grid: [{
                type: Input
            }], source: [{
                type: Input
            }], sort: [{
                type: Output
            }], selectAllRows: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlYWQtdGl0bGVzLXJvdy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZzItc21hcnQtdGFibGUvc3JjL2xpYi9jb21wb25lbnRzL3RoZWFkL3Jvd3MvdGhlYWQtdGl0bGVzLXJvdy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUVoRixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFekMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtEQUFrRCxDQUFDOzs7Ozs7QUE0Qm5GLE1BQU0sT0FBTyx1QkFBdUI7SUExQnBDO1FBK0JZLFNBQUksR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQy9CLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUVsRCx5QkFBb0IsR0FBRyxLQUFLLENBQUM7UUFDN0IseUJBQW9CLEdBQUcsS0FBSyxDQUFDO1FBQzdCLDBCQUFxQixHQUFHLEtBQUssQ0FBQztLQVcvQjtJQVRDLFdBQVc7UUFDVCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBQzdELElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxPQUFzQjtRQUN0QyxPQUFPLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQWMsRUFBRSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEUsQ0FBQzsrR0FwQlUsdUJBQXVCO21HQUF2Qix1QkFBdUIsNkxBeEJ4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQXNCUDs7NEZBRVEsdUJBQXVCO2tCQTFCbkMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsMkJBQTJCO29CQUNyQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FzQlA7aUJBQ0o7OEJBR1UsSUFBSTtzQkFBWixLQUFLO2dCQUNHLE1BQU07c0JBQWQsS0FBSztnQkFFSSxJQUFJO3NCQUFiLE1BQU07Z0JBQ0csYUFBYTtzQkFBdEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEdyaWQgfSBmcm9tICcuLi8uLi8uLi9saWIvZ3JpZCc7XG5pbXBvcnQgeyBDb2x1bW4gfSBmcm9tIFwiLi4vLi4vLi4vbGliL2RhdGEtc2V0L2NvbHVtblwiO1xuaW1wb3J0IHsgTG9jYWxEYXRhU291cmNlIH0gZnJvbSAnLi4vLi4vLi4vbGliL2RhdGEtc291cmNlL2xvY2FsL2xvY2FsLmRhdGEtc291cmNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnW25nMi1zdC10aGVhZC10aXRsZXMtcm93XScsXG4gIHRlbXBsYXRlOiBgXG4gICAgQGlmIChpc011bHRpU2VsZWN0VmlzaWJsZSkge1xuICAgICAgPHRoIG5nMi1zdC1jaGVja2JveC1zZWxlY3QtYWxsXG4gICAgICAgIFtncmlkXT1cImdyaWRcIlxuICAgICAgICBbc291cmNlXT1cInNvdXJjZVwiXG4gICAgICAgIChjbGljayk9XCJzZWxlY3RBbGxSb3dzLmVtaXQoJGV2ZW50KVwiPlxuICAgICAgPC90aD5cbiAgICB9XG4gICAgQGlmIChzaG93QWN0aW9uQ29sdW1uTGVmdCkge1xuICAgICAgPHRoIG5nMi1zdC1hY3Rpb25zLXRpdGxlIFtncmlkXT1cImdyaWRcIj48L3RoPlxuICAgIH1cbiAgICBAZm9yIChjb2x1bW4gb2YgZ2V0VmlzaWJsZUNvbHVtbnMoZ3JpZC5nZXRDb2x1bW5zKCkpOyB0cmFjayBjb2x1bW4pIHtcbiAgICAgIDx0aFxuICAgICAgICBjbGFzcz1cIm5nMi1zbWFydC10aCB7eyBjb2x1bW4uaWQgfX1cIlxuICAgICAgICBbbmdDbGFzc109XCJjb2x1bW4uY2xhc3NcIlxuICAgICAgICBbc3R5bGUud2lkdGhdPVwiY29sdW1uLndpZHRoXCI+XG4gICAgICAgIDxuZzItc3QtY29sdW1uLXRpdGxlIFtzb3VyY2VdPVwic291cmNlXCIgW2NvbHVtbl09XCJjb2x1bW5cIiAoc29ydCk9XCJzb3J0LmVtaXQoJGV2ZW50KVwiPjwvbmcyLXN0LWNvbHVtbi10aXRsZT5cbiAgICAgIDwvdGg+XG4gICAgfVxuICAgIEBpZiAoc2hvd0FjdGlvbkNvbHVtblJpZ2h0KSB7XG4gICAgICA8dGggbmcyLXN0LWFjdGlvbnMtdGl0bGUgW2dyaWRdPVwiZ3JpZFwiPjwvdGg+XG4gICAgfVxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIFRoZWFkVGl0bGVzUm93Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuICBASW5wdXQoKSBncmlkITogR3JpZDtcbiAgQElucHV0KCkgc291cmNlITogTG9jYWxEYXRhU291cmNlO1xuXG4gIEBPdXRwdXQoKSBzb3J0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBzZWxlY3RBbGxSb3dzID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgaXNNdWx0aVNlbGVjdFZpc2libGUgPSBmYWxzZTtcbiAgc2hvd0FjdGlvbkNvbHVtbkxlZnQgPSBmYWxzZTtcbiAgc2hvd0FjdGlvbkNvbHVtblJpZ2h0ID0gZmFsc2U7XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy5pc011bHRpU2VsZWN0VmlzaWJsZSA9IHRoaXMuZ3JpZC5pc011bHRpU2VsZWN0VmlzaWJsZSgpO1xuICAgIHRoaXMuc2hvd0FjdGlvbkNvbHVtbkxlZnQgPSB0aGlzLmdyaWQuc2hvd0FjdGlvbkNvbHVtbignbGVmdCcpO1xuICAgIHRoaXMuc2hvd0FjdGlvbkNvbHVtblJpZ2h0ID0gdGhpcy5ncmlkLnNob3dBY3Rpb25Db2x1bW4oJ3JpZ2h0Jyk7XG4gIH1cblxuICBnZXRWaXNpYmxlQ29sdW1ucyhjb2x1bW5zOiBBcnJheTxDb2x1bW4+KTogQXJyYXk8Q29sdW1uPiB7XG4gICAgcmV0dXJuIChjb2x1bW5zIHx8IFtdKS5maWx0ZXIoKGNvbHVtbjogQ29sdW1uKSA9PiAhY29sdW1uLmhpZGUpO1xuICB9XG59XG4iXX0=