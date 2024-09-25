import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Grid } from '../../../lib/grid';
import { LocalDataSource } from '../../../lib/data-source/local/local.data-source';
import * as i0 from "@angular/core";
import * as i1 from "../../filter/filter.component";
import * as i2 from "../cells/add-button.component";
export class TheadFitlersRowComponent {
    constructor() {
        this.create = new EventEmitter();
        this.filter = new EventEmitter();
        this.isMultiSelectVisible = false;
        this.showActionColumnLeft = false;
        this.showActionColumnRight = false;
        this.filterInputClass = '';
    }
    ngOnChanges() {
        this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
        this.showActionColumnLeft = this.grid.showActionColumn('left');
        this.showActionColumnRight = this.grid.showActionColumn('right');
        this.filterInputClass = this.grid.getSetting('filter.inputClass', '');
    }
    getVisibleColumns(columns) {
        return (columns || []).filter((column) => !column.hide);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: TheadFitlersRowComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.3.12", type: TheadFitlersRowComponent, selector: "[ng2-st-thead-filters-row]", inputs: { grid: "grid", source: "source" }, outputs: { create: "create", filter: "filter" }, usesOnChanges: true, ngImport: i0, template: `
    @if (isMultiSelectVisible) {
      <th></th>
    }
    @if (showActionColumnLeft) {
      <th ng2-st-add-button
        [grid]="grid"
        (create)="create.emit($event)">
      </th>
    }
    @for (column of getVisibleColumns(grid.getColumns()); track column) {
      <th class="ng2-smart-th {{ column.id }}">
        <ng2-smart-table-filter [source]="source"
          [column]="column"
          [inputClass]="filterInputClass"
          (filter)="filter.emit($event)">
        </ng2-smart-table-filter>
      </th>
    }
    @if (showActionColumnRight) {
      <th ng2-st-add-button
        [grid]="grid"
        [source]="source"
        (create)="create.emit($event)">
      </th>
    }
    `, isInline: true, dependencies: [{ kind: "component", type: i1.FilterComponent, selector: "ng2-smart-table-filter" }, { kind: "component", type: i2.AddButtonComponent, selector: "[ng2-st-add-button]", inputs: ["grid", "source"], outputs: ["create"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: TheadFitlersRowComponent, decorators: [{
            type: Component,
            args: [{
                    selector: '[ng2-st-thead-filters-row]',
                    template: `
    @if (isMultiSelectVisible) {
      <th></th>
    }
    @if (showActionColumnLeft) {
      <th ng2-st-add-button
        [grid]="grid"
        (create)="create.emit($event)">
      </th>
    }
    @for (column of getVisibleColumns(grid.getColumns()); track column) {
      <th class="ng2-smart-th {{ column.id }}">
        <ng2-smart-table-filter [source]="source"
          [column]="column"
          [inputClass]="filterInputClass"
          (filter)="filter.emit($event)">
        </ng2-smart-table-filter>
      </th>
    }
    @if (showActionColumnRight) {
      <th ng2-st-add-button
        [grid]="grid"
        [source]="source"
        (create)="create.emit($event)">
      </th>
    }
    `,
                }]
        }], propDecorators: { grid: [{
                type: Input
            }], source: [{
                type: Input
            }], create: [{
                type: Output
            }], filter: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlYWQtZmlsdGVycy1yb3cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmcyLXNtYXJ0LXRhYmxlL3NyYy9saWIvY29tcG9uZW50cy90aGVhZC9yb3dzL3RoZWFkLWZpbHRlcnMtcm93LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBRWhGLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUV6QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sa0RBQWtELENBQUM7Ozs7QUFnQ25GLE1BQU0sT0FBTyx3QkFBd0I7SUE5QnJDO1FBbUNZLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ2pDLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBRTNDLHlCQUFvQixHQUFZLEtBQUssQ0FBQztRQUN0Qyx5QkFBb0IsR0FBWSxLQUFLLENBQUM7UUFDdEMsMEJBQXFCLEdBQVksS0FBSyxDQUFDO1FBQ3ZDLHFCQUFnQixHQUFXLEVBQUUsQ0FBQztLQVkvQjtJQVZDLFdBQVc7UUFDVCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBQzdELElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBRUQsaUJBQWlCLENBQUMsT0FBc0I7UUFDdEMsT0FBTyxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFjLEVBQUUsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xFLENBQUM7K0dBdEJVLHdCQUF3QjttR0FBeEIsd0JBQXdCLG9MQTVCekI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBMEJQOzs0RkFFUSx3QkFBd0I7a0JBOUJwQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSw0QkFBNEI7b0JBQ3RDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0EwQlA7aUJBQ0o7OEJBR1UsSUFBSTtzQkFBWixLQUFLO2dCQUNHLE1BQU07c0JBQWQsS0FBSztnQkFFSSxNQUFNO3NCQUFmLE1BQU07Z0JBQ0csTUFBTTtzQkFBZixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgR3JpZCB9IGZyb20gJy4uLy4uLy4uL2xpYi9ncmlkJztcbmltcG9ydCB7IENvbHVtbiB9IGZyb20gXCIuLi8uLi8uLi9saWIvZGF0YS1zZXQvY29sdW1uXCI7XG5pbXBvcnQgeyBMb2NhbERhdGFTb3VyY2UgfSBmcm9tICcuLi8uLi8uLi9saWIvZGF0YS1zb3VyY2UvbG9jYWwvbG9jYWwuZGF0YS1zb3VyY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdbbmcyLXN0LXRoZWFkLWZpbHRlcnMtcm93XScsXG4gIHRlbXBsYXRlOiBgXG4gICAgQGlmIChpc011bHRpU2VsZWN0VmlzaWJsZSkge1xuICAgICAgPHRoPjwvdGg+XG4gICAgfVxuICAgIEBpZiAoc2hvd0FjdGlvbkNvbHVtbkxlZnQpIHtcbiAgICAgIDx0aCBuZzItc3QtYWRkLWJ1dHRvblxuICAgICAgICBbZ3JpZF09XCJncmlkXCJcbiAgICAgICAgKGNyZWF0ZSk9XCJjcmVhdGUuZW1pdCgkZXZlbnQpXCI+XG4gICAgICA8L3RoPlxuICAgIH1cbiAgICBAZm9yIChjb2x1bW4gb2YgZ2V0VmlzaWJsZUNvbHVtbnMoZ3JpZC5nZXRDb2x1bW5zKCkpOyB0cmFjayBjb2x1bW4pIHtcbiAgICAgIDx0aCBjbGFzcz1cIm5nMi1zbWFydC10aCB7eyBjb2x1bW4uaWQgfX1cIj5cbiAgICAgICAgPG5nMi1zbWFydC10YWJsZS1maWx0ZXIgW3NvdXJjZV09XCJzb3VyY2VcIlxuICAgICAgICAgIFtjb2x1bW5dPVwiY29sdW1uXCJcbiAgICAgICAgICBbaW5wdXRDbGFzc109XCJmaWx0ZXJJbnB1dENsYXNzXCJcbiAgICAgICAgICAoZmlsdGVyKT1cImZpbHRlci5lbWl0KCRldmVudClcIj5cbiAgICAgICAgPC9uZzItc21hcnQtdGFibGUtZmlsdGVyPlxuICAgICAgPC90aD5cbiAgICB9XG4gICAgQGlmIChzaG93QWN0aW9uQ29sdW1uUmlnaHQpIHtcbiAgICAgIDx0aCBuZzItc3QtYWRkLWJ1dHRvblxuICAgICAgICBbZ3JpZF09XCJncmlkXCJcbiAgICAgICAgW3NvdXJjZV09XCJzb3VyY2VcIlxuICAgICAgICAoY3JlYXRlKT1cImNyZWF0ZS5lbWl0KCRldmVudClcIj5cbiAgICAgIDwvdGg+XG4gICAgfVxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIFRoZWFkRml0bGVyc1Jvd0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cbiAgQElucHV0KCkgZ3JpZCE6IEdyaWQ7XG4gIEBJbnB1dCgpIHNvdXJjZSE6IExvY2FsRGF0YVNvdXJjZTtcblxuICBAT3V0cHV0KCkgY3JlYXRlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBmaWx0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBpc011bHRpU2VsZWN0VmlzaWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuICBzaG93QWN0aW9uQ29sdW1uTGVmdDogYm9vbGVhbiA9IGZhbHNlO1xuICBzaG93QWN0aW9uQ29sdW1uUmlnaHQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgZmlsdGVySW5wdXRDbGFzczogc3RyaW5nID0gJyc7XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy5pc011bHRpU2VsZWN0VmlzaWJsZSA9IHRoaXMuZ3JpZC5pc011bHRpU2VsZWN0VmlzaWJsZSgpO1xuICAgIHRoaXMuc2hvd0FjdGlvbkNvbHVtbkxlZnQgPSB0aGlzLmdyaWQuc2hvd0FjdGlvbkNvbHVtbignbGVmdCcpO1xuICAgIHRoaXMuc2hvd0FjdGlvbkNvbHVtblJpZ2h0ID0gdGhpcy5ncmlkLnNob3dBY3Rpb25Db2x1bW4oJ3JpZ2h0Jyk7XG4gICAgdGhpcy5maWx0ZXJJbnB1dENsYXNzID0gdGhpcy5ncmlkLmdldFNldHRpbmcoJ2ZpbHRlci5pbnB1dENsYXNzJywgJycpO1xuICB9XG5cbiAgZ2V0VmlzaWJsZUNvbHVtbnMoY29sdW1uczogQXJyYXk8Q29sdW1uPik6IEFycmF5PENvbHVtbj4ge1xuICAgIHJldHVybiAoY29sdW1ucyB8fCBbXSkuZmlsdGVyKChjb2x1bW46IENvbHVtbikgPT4gIWNvbHVtbi5oaWRlKTtcbiAgfVxufVxuIl19