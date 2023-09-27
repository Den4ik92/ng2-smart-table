import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Grid } from '../../lib/grid';
import { LocalDataSource } from '../../lib/data-source/local/local.data-source';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "../cell/cell.component";
import * as i4 from "./cells/create-cancel.component";
import * as i5 from "./cells/edit-delete.component";
import * as i6 from "./cells/custom.component";
export class Ng2SmartTableTbodyComponent {
    constructor() {
        this.rowClassFunction = () => '';
        this.save = new EventEmitter();
        this.cancel = new EventEmitter();
        this.edit = new EventEmitter();
        this.editCancel = new EventEmitter();
        this.delete = new EventEmitter();
        this.custom = new EventEmitter();
        this.edited = new EventEmitter();
        this.userSelectRow = new EventEmitter();
        this.userClickedRow = new EventEmitter();
        this.editRowSelect = new EventEmitter();
        this.multipleSelectRow = new EventEmitter();
        this.isMultiSelectVisible = false;
        this.showActionColumnLeft = false;
        this.showActionColumnRight = false;
        this.mode = 'inline';
        this.editInputClass = '';
        this.isActionAdd = false;
        this.isActionEdit = false;
        this.isActionDelete = false;
        this.noDataMessage = false;
    }
    get tableColumnsCount() {
        const actionColumns = this.isActionAdd || this.isActionEdit || this.isActionDelete ? 1 : 0;
        return this.grid.getColumns().length + actionColumns;
    }
    ngOnChanges() {
        this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
        this.showActionColumnLeft = this.grid.showActionColumn('left');
        this.mode = this.grid.getSetting('mode', 'inline');
        this.editInputClass = this.grid.getSetting('edit.inputClass', '');
        this.showActionColumnRight = this.grid.showActionColumn('right');
        this.isActionAdd = this.grid.getSetting('actions.add', false);
        this.isActionEdit = this.grid.getSetting('actions.edit', false);
        this.isActionDelete = this.grid.getSetting('actions.delete', false);
        this.noDataMessage = this.grid.getSetting('noDataMessage');
    }
    getVisibleCells(cells) {
        return (cells || []).filter((cell) => !cell.getColumn().hide);
    }
    trackByIdOrIndex(index, item) {
        return item?.id || index;
    }
}
Ng2SmartTableTbodyComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: Ng2SmartTableTbodyComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
Ng2SmartTableTbodyComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: Ng2SmartTableTbodyComponent, selector: "[ng2-st-tbody]", inputs: { grid: "grid", source: "source", deleteConfirm: "deleteConfirm", editConfirm: "editConfirm", rowClassFunction: "rowClassFunction" }, outputs: { save: "save", cancel: "cancel", edit: "edit", editCancel: "editCancel", delete: "delete", custom: "custom", edited: "edited", userSelectRow: "userSelectRow", userClickedRow: "userClickedRow", editRowSelect: "editRowSelect", multipleSelectRow: "multipleSelectRow" }, usesOnChanges: true, ngImport: i0, template: "<tr *ngFor=\"let row of grid.getRows(); trackBy: trackByIdOrIndex\" (click)=\"userClickedRow.emit(row)\" class=\"ng2-smart-row\" [className]=\"rowClassFunction(row)\" [ngClass]=\"{selected: row.isSelected}\">\n  <td *ngIf=\"isMultiSelectVisible\" class=\"ng2-smart-actions ng2-smart-action-multiple-select\" (click)=\"multipleSelectRow.emit(row); $event.stopPropagation();\">\n    <input type=\"checkbox\" class=\"form-control\" [ngModel]=\"row.isSelected\">\n  </td>\n  <td *ngIf=\"!row.isInEditing && showActionColumnLeft\" class=\"ng2-smart-actions\" (click)=\"$event.stopPropagation()\">\n    <ng2-st-tbody-custom [grid]=\"grid\" (custom)=\"custom.emit($event)\" [row]=\"row\" [source]=\"source\"></ng2-st-tbody-custom>\n\n    <ng2-st-tbody-edit-delete [grid]=\"grid\"\n                              [deleteConfirm]=\"deleteConfirm\"\n                              [editConfirm]=\"editConfirm\"\n                              (edit)=\"edit.emit(row)\"\n                              (delete)=\"delete.emit(row)\"\n                              (editRowSelect)=\"editRowSelect.emit($event)\"\n                              [row]=\"row\"\n                              [source]=\"source\">\n    </ng2-st-tbody-edit-delete>\n  </td>\n   <td *ngIf=\"row.isInEditing && showActionColumnLeft\"  class=\"ng2-smart-actions\">\n    <ng2-st-tbody-create-cancel [grid]=\"grid\" [row]=\"row\" [editConfirm]=\"editConfirm\" [editCancel]=\"editCancel\"></ng2-st-tbody-create-cancel>\n  </td>\n  <td *ngFor=\"let cell of getVisibleCells(row.cells)\">\n    <ng2-smart-table-cell [cell]=\"cell\"\n                          [grid]=\"grid\"\n                          [row]=\"row\"\n                          [isNew]=\"false\"\n                          [mode]=\"mode\"\n                          [editConfirm]=\"editConfirm\"\n                          [inputClass]=\"editInputClass\"\n                          [isInEditing]=\"row.isInEditing\">\n    </ng2-smart-table-cell>\n  </td>\n\n  <td *ngIf=\"row.isInEditing && showActionColumnRight\"  class=\"ng2-smart-actions\">\n    <ng2-st-tbody-create-cancel [grid]=\"grid\" [row]=\"row\" [editConfirm]=\"editConfirm\"></ng2-st-tbody-create-cancel>\n  </td>\n\n  <td *ngIf=\"!row.isInEditing && showActionColumnRight\" class=\"ng2-smart-actions\">\n    <ng2-st-tbody-custom [grid]=\"grid\" (custom)=\"custom.emit($event)\" [row]=\"row\" [source]=\"source\"></ng2-st-tbody-custom>\n\n    <ng2-st-tbody-edit-delete [grid]=\"grid\"\n                              [deleteConfirm]=\"deleteConfirm\"\n                              [editConfirm]=\"editConfirm\"\n                              [row]=\"row\"\n                              [source]=\"source\"\n                              (edit)=\"edit.emit(row)\"\n                              (delete)=\"delete.emit(row)\"\n                              (editRowSelect)=\"editRowSelect.emit($event)\">\n    </ng2-st-tbody-edit-delete>\n  </td>\n</tr>\n\n<tr *ngIf=\"grid.getRows().length == 0\">\n  <td [attr.colspan]=\"tableColumnsCount\">\n    {{ noDataMessage }}\n  </td>\n</tr>\n", styles: [":host .ng2-smart-row.selected{background:rgba(0,0,0,.05)}:host .ng2-smart-row .ng2-smart-actions.ng2-smart-action-multiple-select{text-align:center}:host ::ng-deep ng2-st-tbody-edit-delete a:first-child,:host ::ng-deep ng2-st-tbody-create-cancel a:first-child{margin-right:.25rem}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.CheckboxControlValueAccessor, selector: "input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "component", type: i3.CellComponent, selector: "ng2-smart-table-cell", inputs: ["grid", "row", "editConfirm", "createConfirm", "isNew", "cell", "inputClass", "mode", "isInEditing"], outputs: ["edited"] }, { kind: "component", type: i4.TbodyCreateCancelComponent, selector: "ng2-st-tbody-create-cancel", inputs: ["grid", "row", "editConfirm", "editCancel"] }, { kind: "component", type: i5.TbodyEditDeleteComponent, selector: "ng2-st-tbody-edit-delete", inputs: ["grid", "row", "source", "deleteConfirm", "editConfirm"], outputs: ["edit", "delete", "editRowSelect"] }, { kind: "component", type: i6.TbodyCustomComponent, selector: "ng2-st-tbody-custom", inputs: ["grid", "row", "source"], outputs: ["custom"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: Ng2SmartTableTbodyComponent, decorators: [{
            type: Component,
            args: [{ selector: '[ng2-st-tbody]', template: "<tr *ngFor=\"let row of grid.getRows(); trackBy: trackByIdOrIndex\" (click)=\"userClickedRow.emit(row)\" class=\"ng2-smart-row\" [className]=\"rowClassFunction(row)\" [ngClass]=\"{selected: row.isSelected}\">\n  <td *ngIf=\"isMultiSelectVisible\" class=\"ng2-smart-actions ng2-smart-action-multiple-select\" (click)=\"multipleSelectRow.emit(row); $event.stopPropagation();\">\n    <input type=\"checkbox\" class=\"form-control\" [ngModel]=\"row.isSelected\">\n  </td>\n  <td *ngIf=\"!row.isInEditing && showActionColumnLeft\" class=\"ng2-smart-actions\" (click)=\"$event.stopPropagation()\">\n    <ng2-st-tbody-custom [grid]=\"grid\" (custom)=\"custom.emit($event)\" [row]=\"row\" [source]=\"source\"></ng2-st-tbody-custom>\n\n    <ng2-st-tbody-edit-delete [grid]=\"grid\"\n                              [deleteConfirm]=\"deleteConfirm\"\n                              [editConfirm]=\"editConfirm\"\n                              (edit)=\"edit.emit(row)\"\n                              (delete)=\"delete.emit(row)\"\n                              (editRowSelect)=\"editRowSelect.emit($event)\"\n                              [row]=\"row\"\n                              [source]=\"source\">\n    </ng2-st-tbody-edit-delete>\n  </td>\n   <td *ngIf=\"row.isInEditing && showActionColumnLeft\"  class=\"ng2-smart-actions\">\n    <ng2-st-tbody-create-cancel [grid]=\"grid\" [row]=\"row\" [editConfirm]=\"editConfirm\" [editCancel]=\"editCancel\"></ng2-st-tbody-create-cancel>\n  </td>\n  <td *ngFor=\"let cell of getVisibleCells(row.cells)\">\n    <ng2-smart-table-cell [cell]=\"cell\"\n                          [grid]=\"grid\"\n                          [row]=\"row\"\n                          [isNew]=\"false\"\n                          [mode]=\"mode\"\n                          [editConfirm]=\"editConfirm\"\n                          [inputClass]=\"editInputClass\"\n                          [isInEditing]=\"row.isInEditing\">\n    </ng2-smart-table-cell>\n  </td>\n\n  <td *ngIf=\"row.isInEditing && showActionColumnRight\"  class=\"ng2-smart-actions\">\n    <ng2-st-tbody-create-cancel [grid]=\"grid\" [row]=\"row\" [editConfirm]=\"editConfirm\"></ng2-st-tbody-create-cancel>\n  </td>\n\n  <td *ngIf=\"!row.isInEditing && showActionColumnRight\" class=\"ng2-smart-actions\">\n    <ng2-st-tbody-custom [grid]=\"grid\" (custom)=\"custom.emit($event)\" [row]=\"row\" [source]=\"source\"></ng2-st-tbody-custom>\n\n    <ng2-st-tbody-edit-delete [grid]=\"grid\"\n                              [deleteConfirm]=\"deleteConfirm\"\n                              [editConfirm]=\"editConfirm\"\n                              [row]=\"row\"\n                              [source]=\"source\"\n                              (edit)=\"edit.emit(row)\"\n                              (delete)=\"delete.emit(row)\"\n                              (editRowSelect)=\"editRowSelect.emit($event)\">\n    </ng2-st-tbody-edit-delete>\n  </td>\n</tr>\n\n<tr *ngIf=\"grid.getRows().length == 0\">\n  <td [attr.colspan]=\"tableColumnsCount\">\n    {{ noDataMessage }}\n  </td>\n</tr>\n", styles: [":host .ng2-smart-row.selected{background:rgba(0,0,0,.05)}:host .ng2-smart-row .ng2-smart-actions.ng2-smart-action-multiple-select{text-align:center}:host ::ng-deep ng2-st-tbody-edit-delete a:first-child,:host ::ng-deep ng2-st-tbody-create-cancel a:first-child{margin-right:.25rem}\n"] }]
        }], propDecorators: { grid: [{
                type: Input
            }], source: [{
                type: Input
            }], deleteConfirm: [{
                type: Input
            }], editConfirm: [{
                type: Input
            }], rowClassFunction: [{
                type: Input
            }], save: [{
                type: Output
            }], cancel: [{
                type: Output
            }], edit: [{
                type: Output
            }], editCancel: [{
                type: Output
            }], delete: [{
                type: Output
            }], custom: [{
                type: Output
            }], edited: [{
                type: Output
            }], userSelectRow: [{
                type: Output
            }], userClickedRow: [{
                type: Output
            }], editRowSelect: [{
                type: Output
            }], multipleSelectRow: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGJvZHkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmcyLXNtYXJ0LXRhYmxlL3NyYy9saWIvY29tcG9uZW50cy90Ym9keS90Ym9keS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZzItc21hcnQtdGFibGUvc3JjL2xpYi9jb21wb25lbnRzL3Rib2R5L3Rib2R5LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdkUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXRDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQzs7Ozs7Ozs7QUFPaEYsTUFBTSxPQUFPLDJCQUEyQjtJQUx4QztRQVdXLHFCQUFnQixHQUFhLEdBQUUsRUFBRSxDQUFBLEVBQUUsQ0FBQztRQUVuQyxTQUFJLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUMvQixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNqQyxTQUFJLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUMvQixlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNyQyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNqQyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNqQyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNqQyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDeEMsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3pDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUN4QyxzQkFBaUIsR0FBRyxJQUFJLFlBQVksRUFB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QUFNO2dCQUNHLGNBQWM7c0JBQXZCLE1BQU07Z0JBQ0csYUFBYTtzQkFBdEIsTUFBTTtnQkFDRyxpQkFBaUI7c0JBQTFCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBHcmlkIH0gZnJvbSAnLi4vLi4vbGliL2dyaWQnO1xuaW1wb3J0IHsgQ2VsbCB9IGZyb20gJy4uLy4uL2xpYi9kYXRhLXNldC9jZWxsJztcbmltcG9ydCB7IExvY2FsRGF0YVNvdXJjZSB9IGZyb20gJy4uLy4uL2xpYi9kYXRhLXNvdXJjZS9sb2NhbC9sb2NhbC5kYXRhLXNvdXJjZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1tuZzItc3QtdGJvZHldJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGJvZHkuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL3Rib2R5LmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgTmcyU21hcnRUYWJsZVRib2R5Q29tcG9uZW50IHtcblxuICBASW5wdXQoKSBncmlkITogR3JpZDtcbiAgQElucHV0KCkgc291cmNlITogTG9jYWxEYXRhU291cmNlO1xuICBASW5wdXQoKSBkZWxldGVDb25maXJtITogRXZlbnRFbWl0dGVyPGFueT47XG4gIEBJbnB1dCgpIGVkaXRDb25maXJtITogRXZlbnRFbWl0dGVyPGFueT47XG4gIEBJbnB1dCgpIHJvd0NsYXNzRnVuY3Rpb246IEZ1bmN0aW9uID0gKCk9PicnO1xuXG4gIEBPdXRwdXQoKSBzYXZlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBjYW5jZWwgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGVkaXQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGVkaXRDYW5jZWwgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGRlbGV0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgY3VzdG9tID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBlZGl0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIHVzZXJTZWxlY3RSb3cgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIHVzZXJDbGlja2VkUm93ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBlZGl0Um93U2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBtdWx0aXBsZVNlbGVjdFJvdyA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIGlzTXVsdGlTZWxlY3RWaXNpYmxlOiBib29sZWFuID0gZmFsc2U7XG4gIHNob3dBY3Rpb25Db2x1bW5MZWZ0OiBib29sZWFuID0gZmFsc2U7XG4gIHNob3dBY3Rpb25Db2x1bW5SaWdodDogYm9vbGVhbiA9IGZhbHNlO1xuICBtb2RlOiAnaW5saW5lJyB8ICdleHRlcm5hbCcgfCAnY2xpY2stdG8tZWRpdCcgPSAnaW5saW5lJztcbiAgZWRpdElucHV0Q2xhc3M6IHN0cmluZyA9ICcnO1xuICBpc0FjdGlvbkFkZDogYm9vbGVhbiA9IGZhbHNlO1xuICBpc0FjdGlvbkVkaXQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgaXNBY3Rpb25EZWxldGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgbm9EYXRhTWVzc2FnZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGdldCB0YWJsZUNvbHVtbnNDb3VudCgpIHtcbiAgICBjb25zdCBhY3Rpb25Db2x1bW5zID0gdGhpcy5pc0FjdGlvbkFkZCB8fCB0aGlzLmlzQWN0aW9uRWRpdCB8fCB0aGlzLmlzQWN0aW9uRGVsZXRlID8gMSA6IDA7XG4gICAgcmV0dXJuIHRoaXMuZ3JpZC5nZXRDb2x1bW5zKCkubGVuZ3RoICsgYWN0aW9uQ29sdW1ucztcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIHRoaXMuaXNNdWx0aVNlbGVjdFZpc2libGUgPSB0aGlzLmdyaWQuaXNNdWx0aVNlbGVjdFZpc2libGUoKTtcbiAgICB0aGlzLnNob3dBY3Rpb25Db2x1bW5MZWZ0ID0gdGhpcy5ncmlkLnNob3dBY3Rpb25Db2x1bW4oJ2xlZnQnKTtcbiAgICB0aGlzLm1vZGUgPSB0aGlzLmdyaWQuZ2V0U2V0dGluZygnbW9kZScsICdpbmxpbmUnKTtcbiAgICB0aGlzLmVkaXRJbnB1dENsYXNzID0gdGhpcy5ncmlkLmdldFNldHRpbmcoJ2VkaXQuaW5wdXRDbGFzcycsICcnKTtcbiAgICB0aGlzLnNob3dBY3Rpb25Db2x1bW5SaWdodCA9IHRoaXMuZ3JpZC5zaG93QWN0aW9uQ29sdW1uKCdyaWdodCcpO1xuICAgIHRoaXMuaXNBY3Rpb25BZGQgPSB0aGlzLmdyaWQuZ2V0U2V0dGluZygnYWN0aW9ucy5hZGQnLCBmYWxzZSk7XG4gICAgdGhpcy5pc0FjdGlvbkVkaXQgPSB0aGlzLmdyaWQuZ2V0U2V0dGluZygnYWN0aW9ucy5lZGl0JywgZmFsc2UpO1xuICAgIHRoaXMuaXNBY3Rpb25EZWxldGUgPSB0aGlzLmdyaWQuZ2V0U2V0dGluZygnYWN0aW9ucy5kZWxldGUnLCBmYWxzZSk7XG4gICAgdGhpcy5ub0RhdGFNZXNzYWdlID0gdGhpcy5ncmlkLmdldFNldHRpbmcoJ25vRGF0YU1lc3NhZ2UnKTtcbiAgfVxuXG4gIGdldFZpc2libGVDZWxscyhjZWxsczogQ2VsbFtdKTogQ2VsbFtdIHtcbiAgICByZXR1cm4gKGNlbGxzIHx8IFtdKS5maWx0ZXIoKGNlbGw6IENlbGwpID0+ICFjZWxsLmdldENvbHVtbigpLmhpZGUpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHRyYWNrQnlJZE9ySW5kZXgoaW5kZXg6IG51bWJlciwgaXRlbTogYW55KTogc3RyaW5nIHwgbnVtYmVyIHsgICBcbiAgICByZXR1cm4gaXRlbT8uaWQgfHwgaW5kZXg7XG4gIH1cbn1cbiIsIjx0ciAqbmdGb3I9XCJsZXQgcm93IG9mIGdyaWQuZ2V0Um93cygpOyB0cmFja0J5OiB0cmFja0J5SWRPckluZGV4XCIgKGNsaWNrKT1cInVzZXJDbGlja2VkUm93LmVtaXQocm93KVwiIGNsYXNzPVwibmcyLXNtYXJ0LXJvd1wiIFtjbGFzc05hbWVdPVwicm93Q2xhc3NGdW5jdGlvbihyb3cpXCIgW25nQ2xhc3NdPVwie3NlbGVjdGVkOiByb3cuaXNTZWxlY3RlZH1cIj5cbiAgPHRkICpuZ0lmPVwiaXNNdWx0aVNlbGVjdFZpc2libGVcIiBjbGFzcz1cIm5nMi1zbWFydC1hY3Rpb25zIG5nMi1zbWFydC1hY3Rpb24tbXVsdGlwbGUtc2VsZWN0XCIgKGNsaWNrKT1cIm11bHRpcGxlU2VsZWN0Um93LmVtaXQocm93KTsgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1wiPlxuICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIFtuZ01vZGVsXT1cInJvdy5pc1NlbGVjdGVkXCI+XG4gIDwvdGQ+XG4gIDx0ZCAqbmdJZj1cIiFyb3cuaXNJbkVkaXRpbmcgJiYgc2hvd0FjdGlvbkNvbHVtbkxlZnRcIiBjbGFzcz1cIm5nMi1zbWFydC1hY3Rpb25zXCIgKGNsaWNrKT1cIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKVwiPlxuICAgIDxuZzItc3QtdGJvZHktY3VzdG9tIFtncmlkXT1cImdyaWRcIiAoY3VzdG9tKT1cImN1c3RvbS5lbWl0KCRldmVudClcIiBbcm93XT1cInJvd1wiIFtzb3VyY2VdPVwic291cmNlXCI+PC9uZzItc3QtdGJvZHktY3VzdG9tPlxuXG4gICAgPG5nMi1zdC10Ym9keS1lZGl0LWRlbGV0ZSBbZ3JpZF09XCJncmlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkZWxldGVDb25maXJtXT1cImRlbGV0ZUNvbmZpcm1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2VkaXRDb25maXJtXT1cImVkaXRDb25maXJtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlZGl0KT1cImVkaXQuZW1pdChyb3cpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChkZWxldGUpPVwiZGVsZXRlLmVtaXQocm93KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZWRpdFJvd1NlbGVjdCk9XCJlZGl0Um93U2VsZWN0LmVtaXQoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcm93XT1cInJvd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbc291cmNlXT1cInNvdXJjZVwiPlxuICAgIDwvbmcyLXN0LXRib2R5LWVkaXQtZGVsZXRlPlxuICA8L3RkPlxuICAgPHRkICpuZ0lmPVwicm93LmlzSW5FZGl0aW5nICYmIHNob3dBY3Rpb25Db2x1bW5MZWZ0XCIgIGNsYXNzPVwibmcyLXNtYXJ0LWFjdGlvbnNcIj5cbiAgICA8bmcyLXN0LXRib2R5LWNyZWF0ZS1jYW5jZWwgW2dyaWRdPVwiZ3JpZFwiIFtyb3ddPVwicm93XCIgW2VkaXRDb25maXJtXT1cImVkaXRDb25maXJtXCIgW2VkaXRDYW5jZWxdPVwiZWRpdENhbmNlbFwiPjwvbmcyLXN0LXRib2R5LWNyZWF0ZS1jYW5jZWw+XG4gIDwvdGQ+XG4gIDx0ZCAqbmdGb3I9XCJsZXQgY2VsbCBvZiBnZXRWaXNpYmxlQ2VsbHMocm93LmNlbGxzKVwiPlxuICAgIDxuZzItc21hcnQtdGFibGUtY2VsbCBbY2VsbF09XCJjZWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW2dyaWRdPVwiZ3JpZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtyb3ddPVwicm93XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW2lzTmV3XT1cImZhbHNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW21vZGVdPVwibW9kZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtlZGl0Q29uZmlybV09XCJlZGl0Q29uZmlybVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtpbnB1dENsYXNzXT1cImVkaXRJbnB1dENsYXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW2lzSW5FZGl0aW5nXT1cInJvdy5pc0luRWRpdGluZ1wiPlxuICAgIDwvbmcyLXNtYXJ0LXRhYmxlLWNlbGw+XG4gIDwvdGQ+XG5cbiAgPHRkICpuZ0lmPVwicm93LmlzSW5FZGl0aW5nICYmIHNob3dBY3Rpb25Db2x1bW5SaWdodFwiICBjbGFzcz1cIm5nMi1zbWFydC1hY3Rpb25zXCI+XG4gICAgPG5nMi1zdC10Ym9keS1jcmVhdGUtY2FuY2VsIFtncmlkXT1cImdyaWRcIiBbcm93XT1cInJvd1wiIFtlZGl0Q29uZmlybV09XCJlZGl0Q29uZmlybVwiPjwvbmcyLXN0LXRib2R5LWNyZWF0ZS1jYW5jZWw+XG4gIDwvdGQ+XG5cbiAgPHRkICpuZ0lmPVwiIXJvdy5pc0luRWRpdGluZyAmJiBzaG93QWN0aW9uQ29sdW1uUmlnaHRcIiBjbGFzcz1cIm5nMi1zbWFydC1hY3Rpb25zXCI+XG4gICAgPG5nMi1zdC10Ym9keS1jdXN0b20gW2dyaWRdPVwiZ3JpZFwiIChjdXN0b20pPVwiY3VzdG9tLmVtaXQoJGV2ZW50KVwiIFtyb3ddPVwicm93XCIgW3NvdXJjZV09XCJzb3VyY2VcIj48L25nMi1zdC10Ym9keS1jdXN0b20+XG5cbiAgICA8bmcyLXN0LXRib2R5LWVkaXQtZGVsZXRlIFtncmlkXT1cImdyaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2RlbGV0ZUNvbmZpcm1dPVwiZGVsZXRlQ29uZmlybVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZWRpdENvbmZpcm1dPVwiZWRpdENvbmZpcm1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3Jvd109XCJyb3dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3NvdXJjZV09XCJzb3VyY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGVkaXQpPVwiZWRpdC5lbWl0KHJvdylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGRlbGV0ZSk9XCJkZWxldGUuZW1pdChyb3cpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlZGl0Um93U2VsZWN0KT1cImVkaXRSb3dTZWxlY3QuZW1pdCgkZXZlbnQpXCI+XG4gICAgPC9uZzItc3QtdGJvZHktZWRpdC1kZWxldGU+XG4gIDwvdGQ+XG48L3RyPlxuXG48dHIgKm5nSWY9XCJncmlkLmdldFJvd3MoKS5sZW5ndGggPT0gMFwiPlxuICA8dGQgW2F0dHIuY29sc3Bhbl09XCJ0YWJsZUNvbHVtbnNDb3VudFwiPlxuICAgIHt7IG5vRGF0YU1lc3NhZ2UgfX1cbiAgPC90ZD5cbjwvdHI+XG4iXX0=