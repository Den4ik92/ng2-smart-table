import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cell } from '../../lib/data-set/cell';
import { Row } from '../../lib/data-set/row';
import { Grid } from '../../lib/grid';
import * as i0 from "@angular/core";
import * as i1 from "./cell-edit-mode/edit-cell.component";
import * as i2 from "./cell-view-mode/view-cell.component";
export class CellComponent {
    constructor() {
        this.inputClass = '';
        this.mode = 'inline';
        this.isInEditing = false;
        this.edited = new EventEmitter();
    }
    onEdited(event) {
        if (this.isNew) {
            this.grid.create(this.grid.getNewRow(), this.createConfirm);
        }
        else {
            this.grid.save(this.row, this.editConfirm);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: CellComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.3.12", type: CellComponent, selector: "ng2-smart-table-cell", inputs: { grid: "grid", row: "row", editConfirm: "editConfirm", createConfirm: "createConfirm", isNew: "isNew", cell: "cell", inputClass: "inputClass", mode: "mode", isInEditing: "isInEditing" }, outputs: { edited: "edited" }, ngImport: i0, template: `
    @if (!isInEditing) {
      <table-cell-view-mode [cell]="cell"></table-cell-view-mode>
    }
    @if (isInEditing) {
      <table-cell-edit-mode [cell]="cell"
        [inputClass]="inputClass"
        (edited)="onEdited($event)">
      </table-cell-edit-mode>
    }
    `, isInline: true, dependencies: [{ kind: "component", type: i1.EditCellComponent, selector: "table-cell-edit-mode", inputs: ["cell", "inputClass"], outputs: ["edited"] }, { kind: "component", type: i2.ViewCellComponent, selector: "table-cell-view-mode", inputs: ["cell"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: CellComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ng2-smart-table-cell',
                    template: `
    @if (!isInEditing) {
      <table-cell-view-mode [cell]="cell"></table-cell-view-mode>
    }
    @if (isInEditing) {
      <table-cell-edit-mode [cell]="cell"
        [inputClass]="inputClass"
        (edited)="onEdited($event)">
      </table-cell-edit-mode>
    }
    `,
                }]
        }], propDecorators: { grid: [{
                type: Input
            }], row: [{
                type: Input
            }], editConfirm: [{
                type: Input
            }], createConfirm: [{
                type: Input
            }], isNew: [{
                type: Input
            }], cell: [{
                type: Input
            }], inputClass: [{
                type: Input
            }], mode: [{
                type: Input
            }], isInEditing: [{
                type: Input
            }], edited: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZzItc21hcnQtdGFibGUvc3JjL2xpYi9jb21wb25lbnRzL2NlbGwvY2VsbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV2RSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzdDLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQWdCdEMsTUFBTSxPQUFPLGFBQWE7SUFkMUI7UUFzQlcsZUFBVSxHQUFXLEVBQUUsQ0FBQztRQUN4QixTQUFJLEdBQVcsUUFBUSxDQUFDO1FBQ3hCLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBRTVCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0tBUzVDO0lBUEMsUUFBUSxDQUFDLEtBQVU7UUFDakIsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDZixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM5RCxDQUFDO2FBQU0sQ0FBQztZQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzdDLENBQUM7SUFDSCxDQUFDOytHQXBCVSxhQUFhO21HQUFiLGFBQWEsK1JBWmQ7Ozs7Ozs7Ozs7S0FVUDs7NEZBRVEsYUFBYTtrQkFkekIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7S0FVUDtpQkFDSjs4QkFHVSxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csR0FBRztzQkFBWCxLQUFLO2dCQUNHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBQ0csYUFBYTtzQkFBckIsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLFVBQVU7c0JBQWxCLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBRUksTUFBTTtzQkFBZixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2VsbCB9IGZyb20gJy4uLy4uL2xpYi9kYXRhLXNldC9jZWxsJztcbmltcG9ydCB7IFJvdyB9IGZyb20gJy4uLy4uL2xpYi9kYXRhLXNldC9yb3cnO1xuaW1wb3J0IHsgR3JpZCB9IGZyb20gJy4uLy4uL2xpYi9ncmlkJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmcyLXNtYXJ0LXRhYmxlLWNlbGwnLFxuICB0ZW1wbGF0ZTogYFxuICAgIEBpZiAoIWlzSW5FZGl0aW5nKSB7XG4gICAgICA8dGFibGUtY2VsbC12aWV3LW1vZGUgW2NlbGxdPVwiY2VsbFwiPjwvdGFibGUtY2VsbC12aWV3LW1vZGU+XG4gICAgfVxuICAgIEBpZiAoaXNJbkVkaXRpbmcpIHtcbiAgICAgIDx0YWJsZS1jZWxsLWVkaXQtbW9kZSBbY2VsbF09XCJjZWxsXCJcbiAgICAgICAgW2lucHV0Q2xhc3NdPVwiaW5wdXRDbGFzc1wiXG4gICAgICAgIChlZGl0ZWQpPVwib25FZGl0ZWQoJGV2ZW50KVwiPlxuICAgICAgPC90YWJsZS1jZWxsLWVkaXQtbW9kZT5cbiAgICB9XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgQ2VsbENvbXBvbmVudCB7XG5cbiAgQElucHV0KCkgZ3JpZCE6IEdyaWQ7XG4gIEBJbnB1dCgpIHJvdyE6IFJvdztcbiAgQElucHV0KCkgZWRpdENvbmZpcm0hOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgQElucHV0KCkgY3JlYXRlQ29uZmlybSE6IEV2ZW50RW1pdHRlcjxhbnk+O1xuICBASW5wdXQoKSBpc05ldyE6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGNlbGwhOiBDZWxsO1xuICBASW5wdXQoKSBpbnB1dENsYXNzOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgbW9kZTogc3RyaW5nID0gJ2lubGluZSc7XG4gIEBJbnB1dCgpIGlzSW5FZGl0aW5nOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQE91dHB1dCgpIGVkaXRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIG9uRWRpdGVkKGV2ZW50OiBhbnkpIHtcbiAgICBpZiAodGhpcy5pc05ldykge1xuICAgICAgdGhpcy5ncmlkLmNyZWF0ZSh0aGlzLmdyaWQuZ2V0TmV3Um93KCksIHRoaXMuY3JlYXRlQ29uZmlybSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZ3JpZC5zYXZlKHRoaXMucm93LCB0aGlzLmVkaXRDb25maXJtKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==