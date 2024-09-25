import { Component, EventEmitter, Input, Output, } from "@angular/core";
import { Row } from "../../../lib/data-set/row";
import { Grid } from "../../../lib/grid";
import * as i0 from "@angular/core";
import * as i1 from "../../cell/cell.component";
import * as i2 from "../cells/actions.component";
export class TheadFormRowComponent {
    constructor() {
        this.create = new EventEmitter();
        this.isMultiSelectVisible = false;
        this.showActionColumnLeft = false;
        this.showActionColumnRight = false;
        this.addInputClass = "";
    }
    onCreate(event) {
        event.stopPropagation();
        this.grid.create(this.grid.getNewRow(), this.createConfirm);
    }
    ngOnChanges() {
        this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
        this.showActionColumnLeft = this.grid.showActionColumn("left");
        this.showActionColumnRight = this.grid.showActionColumn("right");
        this.addInputClass = this.grid.getSetting("add.inputClass", "");
    }
    getVisibleCells(cells) {
        return (cells || []).filter((cell) => !cell.getColumn().hide);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: TheadFormRowComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.3.12", type: TheadFormRowComponent, selector: "[ng2-st-thead-form-row]", inputs: { grid: "grid", row: "row", createConfirm: "createConfirm" }, outputs: { create: "create" }, usesOnChanges: true, ngImport: i0, template: `
    @if (grid.isMultiSelectVisible()) {
    <td></td>
    } @if (showActionColumnLeft) {
    <td class="ng2-smart-actions">
      <ng2-st-actions
        [grid]="grid"
        (create)="onCreate($event)"
      ></ng2-st-actions>
    </td>
    } @for (cell of getVisibleCells(grid.getNewRow().getCells()); track cell) {
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
  `, isInline: true, dependencies: [{ kind: "component", type: i1.CellComponent, selector: "ng2-smart-table-cell", inputs: ["grid", "row", "editConfirm", "createConfirm", "isNew", "cell", "inputClass", "mode", "isInEditing"], outputs: ["edited"] }, { kind: "component", type: i2.ActionsComponent, selector: "ng2-st-actions", inputs: ["grid"], outputs: ["create"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: TheadFormRowComponent, decorators: [{
            type: Component,
            args: [{
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
    } @for (cell of getVisibleCells(grid.getNewRow().getCells()); track cell) {
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
                }]
        }], propDecorators: { grid: [{
                type: Input
            }], row: [{
                type: Input
            }], createConfirm: [{
                type: Input
            }], create: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlYWQtZm9ybS1yb3cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmcyLXNtYXJ0LXRhYmxlL3NyYy9saWIvY29tcG9uZW50cy90aGVhZC9yb3dzL3RoZWFkLWZvcm0tcm93LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7QUFxQ3pDLE1BQU0sT0FBTyxxQkFBcUI7SUFuQ2xDO1FBd0NZLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBRTNDLHlCQUFvQixHQUFZLEtBQUssQ0FBQztRQUN0Qyx5QkFBb0IsR0FBWSxLQUFLLENBQUM7UUFDdEMsMEJBQXFCLEdBQVksS0FBSyxDQUFDO1FBQ3ZDLGtCQUFhLEdBQUcsRUFBRSxDQUFDO0tBa0JwQjtJQWhCQyxRQUFRLENBQUMsS0FBVTtRQUNqQixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFFeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBQzdELElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVELGVBQWUsQ0FBQyxLQUFrQjtRQUNoQyxPQUFPLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEUsQ0FBQzsrR0EzQlUscUJBQXFCO21HQUFyQixxQkFBcUIseUxBakN0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQStCVDs7NEZBRVUscUJBQXFCO2tCQW5DakMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUseUJBQXlCO29CQUNuQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0ErQlQ7aUJBQ0Y7OEJBRVUsSUFBSTtzQkFBWixLQUFLO2dCQUNHLEdBQUc7c0JBQVgsS0FBSztnQkFDRyxhQUFhO3NCQUFyQixLQUFLO2dCQUVJLE1BQU07c0JBQWYsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPdXRwdXQsXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IENlbGwgfSBmcm9tIFwiLi4vLi4vLi4vbGliL2RhdGEtc2V0L2NlbGxcIjtcbmltcG9ydCB7IFJvdyB9IGZyb20gXCIuLi8uLi8uLi9saWIvZGF0YS1zZXQvcm93XCI7XG5pbXBvcnQgeyBHcmlkIH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9ncmlkXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJbbmcyLXN0LXRoZWFkLWZvcm0tcm93XVwiLFxuICB0ZW1wbGF0ZTogYFxuICAgIEBpZiAoZ3JpZC5pc011bHRpU2VsZWN0VmlzaWJsZSgpKSB7XG4gICAgPHRkPjwvdGQ+XG4gICAgfSBAaWYgKHNob3dBY3Rpb25Db2x1bW5MZWZ0KSB7XG4gICAgPHRkIGNsYXNzPVwibmcyLXNtYXJ0LWFjdGlvbnNcIj5cbiAgICAgIDxuZzItc3QtYWN0aW9uc1xuICAgICAgICBbZ3JpZF09XCJncmlkXCJcbiAgICAgICAgKGNyZWF0ZSk9XCJvbkNyZWF0ZSgkZXZlbnQpXCJcbiAgICAgID48L25nMi1zdC1hY3Rpb25zPlxuICAgIDwvdGQ+XG4gICAgfSBAZm9yIChjZWxsIG9mIGdldFZpc2libGVDZWxscyhncmlkLmdldE5ld1JvdygpLmdldENlbGxzKCkpOyB0cmFjayBjZWxsKSB7XG4gICAgPHRkPlxuICAgICAgPG5nMi1zbWFydC10YWJsZS1jZWxsXG4gICAgICAgIFtjZWxsXT1cImNlbGxcIlxuICAgICAgICBbZ3JpZF09XCJncmlkXCJcbiAgICAgICAgW2lzTmV3XT1cInRydWVcIlxuICAgICAgICBbY3JlYXRlQ29uZmlybV09XCJjcmVhdGVDb25maXJtXCJcbiAgICAgICAgW2lucHV0Q2xhc3NdPVwiYWRkSW5wdXRDbGFzc1wiXG4gICAgICAgIFtpc0luRWRpdGluZ109XCJncmlkLmdldE5ld1JvdygpLmlzSW5FZGl0aW5nXCJcbiAgICAgICAgKGVkaXRlZCk9XCJvbkNyZWF0ZSgkZXZlbnQpXCJcbiAgICAgID5cbiAgICAgIDwvbmcyLXNtYXJ0LXRhYmxlLWNlbGw+XG4gICAgPC90ZD5cbiAgICB9IEBpZiAoc2hvd0FjdGlvbkNvbHVtblJpZ2h0KSB7XG4gICAgPHRkIGNsYXNzPVwibmcyLXNtYXJ0LWFjdGlvbnNcIj5cbiAgICAgIDxuZzItc3QtYWN0aW9uc1xuICAgICAgICBbZ3JpZF09XCJncmlkXCJcbiAgICAgICAgKGNyZWF0ZSk9XCJvbkNyZWF0ZSgkZXZlbnQpXCJcbiAgICAgID48L25nMi1zdC1hY3Rpb25zPlxuICAgIDwvdGQ+XG4gICAgfVxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBUaGVhZEZvcm1Sb3dDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBncmlkITogR3JpZDtcbiAgQElucHV0KCkgcm93ITogUm93O1xuICBASW5wdXQoKSBjcmVhdGVDb25maXJtITogRXZlbnRFbWl0dGVyPGFueT47XG5cbiAgQE91dHB1dCgpIGNyZWF0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIGlzTXVsdGlTZWxlY3RWaXNpYmxlOiBib29sZWFuID0gZmFsc2U7XG4gIHNob3dBY3Rpb25Db2x1bW5MZWZ0OiBib29sZWFuID0gZmFsc2U7XG4gIHNob3dBY3Rpb25Db2x1bW5SaWdodDogYm9vbGVhbiA9IGZhbHNlO1xuICBhZGRJbnB1dENsYXNzID0gXCJcIjtcblxuICBvbkNyZWF0ZShldmVudDogYW55KSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICB0aGlzLmdyaWQuY3JlYXRlKHRoaXMuZ3JpZC5nZXROZXdSb3coKSwgdGhpcy5jcmVhdGVDb25maXJtKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIHRoaXMuaXNNdWx0aVNlbGVjdFZpc2libGUgPSB0aGlzLmdyaWQuaXNNdWx0aVNlbGVjdFZpc2libGUoKTtcbiAgICB0aGlzLnNob3dBY3Rpb25Db2x1bW5MZWZ0ID0gdGhpcy5ncmlkLnNob3dBY3Rpb25Db2x1bW4oXCJsZWZ0XCIpO1xuICAgIHRoaXMuc2hvd0FjdGlvbkNvbHVtblJpZ2h0ID0gdGhpcy5ncmlkLnNob3dBY3Rpb25Db2x1bW4oXCJyaWdodFwiKTtcbiAgICB0aGlzLmFkZElucHV0Q2xhc3MgPSB0aGlzLmdyaWQuZ2V0U2V0dGluZyhcImFkZC5pbnB1dENsYXNzXCIsIFwiXCIpO1xuICB9XG5cbiAgZ2V0VmlzaWJsZUNlbGxzKGNlbGxzOiBBcnJheTxDZWxsPik6IEFycmF5PENlbGw+IHtcbiAgICByZXR1cm4gKGNlbGxzIHx8IFtdKS5maWx0ZXIoKGNlbGw6IENlbGwpID0+ICFjZWxsLmdldENvbHVtbigpLmhpZGUpO1xuICB9XG59XG4iXX0=