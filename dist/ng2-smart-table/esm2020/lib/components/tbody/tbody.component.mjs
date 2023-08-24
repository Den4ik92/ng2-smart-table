import { Component, Input, Output, EventEmitter, } from '@angular/core';
import { Grid } from '../../lib/grid';
import { DataSource } from '../../lib/data-source/data-source';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "../cell/cell.component";
import * as i4 from "./cells/create-cancel.component";
import * as i5 from "./cells/edit-delete.component";
import * as i6 from "./cells/custom.component";
const _c0 = ["ng2-st-tbody", ""];
function Ng2SmartTableTbodyComponent_tr_0_td_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 7);
    i0.ɵɵlistener("click", function Ng2SmartTableTbodyComponent_tr_0_td_1_Template_td_click_0_listener($event) { i0.ɵɵrestoreView(_r11); const row_r2 = i0.ɵɵnextContext().$implicit; const ctx_r9 = i0.ɵɵnextContext(); ctx_r9.multipleSelectRow.emit(row_r2); return i0.ɵɵresetView($event.stopPropagation()); });
    i0.ɵɵelement(1, "input", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", row_r2.isSelected);
} }
function Ng2SmartTableTbodyComponent_tr_0_td_2_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 9);
    i0.ɵɵlistener("click", function Ng2SmartTableTbodyComponent_tr_0_td_2_Template_td_click_0_listener($event) { return $event.stopPropagation(); });
    i0.ɵɵelementStart(1, "ng2-st-tbody-custom", 10);
    i0.ɵɵlistener("custom", function Ng2SmartTableTbodyComponent_tr_0_td_2_Template_ng2_st_tbody_custom_custom_1_listener($event) { i0.ɵɵrestoreView(_r15); const ctx_r14 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r14.custom.emit($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "ng2-st-tbody-edit-delete", 11);
    i0.ɵɵlistener("edit", function Ng2SmartTableTbodyComponent_tr_0_td_2_Template_ng2_st_tbody_edit_delete_edit_2_listener() { i0.ɵɵrestoreView(_r15); const row_r2 = i0.ɵɵnextContext().$implicit; const ctx_r16 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r16.edit.emit(row_r2)); })("delete", function Ng2SmartTableTbodyComponent_tr_0_td_2_Template_ng2_st_tbody_edit_delete_delete_2_listener() { i0.ɵɵrestoreView(_r15); const row_r2 = i0.ɵɵnextContext().$implicit; const ctx_r18 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r18.delete.emit(row_r2)); })("editRowSelect", function Ng2SmartTableTbodyComponent_tr_0_td_2_Template_ng2_st_tbody_edit_delete_editRowSelect_2_listener($event) { i0.ɵɵrestoreView(_r15); const ctx_r20 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r20.editRowSelect.emit($event)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const row_r2 = i0.ɵɵnextContext().$implicit;
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("grid", ctx_r4.grid)("row", row_r2)("source", ctx_r4.source);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("grid", ctx_r4.grid)("deleteConfirm", ctx_r4.deleteConfirm)("editConfirm", ctx_r4.editConfirm)("row", row_r2)("source", ctx_r4.source);
} }
function Ng2SmartTableTbodyComponent_tr_0_td_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 12);
    i0.ɵɵelement(1, "ng2-st-tbody-create-cancel", 13);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r2 = i0.ɵɵnextContext().$implicit;
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("grid", ctx_r5.grid)("row", row_r2)("editConfirm", ctx_r5.editConfirm);
} }
function Ng2SmartTableTbodyComponent_tr_0_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵelement(1, "ng2-smart-table-cell", 14);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const cell_r23 = ctx.$implicit;
    const row_r2 = i0.ɵɵnextContext().$implicit;
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("cell", cell_r23)("grid", ctx_r6.grid)("row", row_r2)("isNew", false)("mode", ctx_r6.mode)("editConfirm", ctx_r6.editConfirm)("inputClass", ctx_r6.editInputClass)("isInEditing", row_r2.isInEditing);
} }
function Ng2SmartTableTbodyComponent_tr_0_td_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 12);
    i0.ɵɵelement(1, "ng2-st-tbody-create-cancel", 13);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r2 = i0.ɵɵnextContext().$implicit;
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("grid", ctx_r7.grid)("row", row_r2)("editConfirm", ctx_r7.editConfirm);
} }
function Ng2SmartTableTbodyComponent_tr_0_td_6_Template(rf, ctx) { if (rf & 1) {
    const _r27 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 12)(1, "ng2-st-tbody-custom", 10);
    i0.ɵɵlistener("custom", function Ng2SmartTableTbodyComponent_tr_0_td_6_Template_ng2_st_tbody_custom_custom_1_listener($event) { i0.ɵɵrestoreView(_r27); const ctx_r26 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r26.custom.emit($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "ng2-st-tbody-edit-delete", 11);
    i0.ɵɵlistener("edit", function Ng2SmartTableTbodyComponent_tr_0_td_6_Template_ng2_st_tbody_edit_delete_edit_2_listener() { i0.ɵɵrestoreView(_r27); const row_r2 = i0.ɵɵnextContext().$implicit; const ctx_r28 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r28.edit.emit(row_r2)); })("delete", function Ng2SmartTableTbodyComponent_tr_0_td_6_Template_ng2_st_tbody_edit_delete_delete_2_listener() { i0.ɵɵrestoreView(_r27); const row_r2 = i0.ɵɵnextContext().$implicit; const ctx_r30 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r30.delete.emit(row_r2)); })("editRowSelect", function Ng2SmartTableTbodyComponent_tr_0_td_6_Template_ng2_st_tbody_edit_delete_editRowSelect_2_listener($event) { i0.ɵɵrestoreView(_r27); const ctx_r32 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r32.editRowSelect.emit($event)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const row_r2 = i0.ɵɵnextContext().$implicit;
    const ctx_r8 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("grid", ctx_r8.grid)("row", row_r2)("source", ctx_r8.source);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("grid", ctx_r8.grid)("deleteConfirm", ctx_r8.deleteConfirm)("editConfirm", ctx_r8.editConfirm)("row", row_r2)("source", ctx_r8.source);
} }
const _c1 = function (a0) { return { selected: a0 }; };
function Ng2SmartTableTbodyComponent_tr_0_Template(rf, ctx) { if (rf & 1) {
    const _r35 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr", 2);
    i0.ɵɵlistener("click", function Ng2SmartTableTbodyComponent_tr_0_Template_tr_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r35); const row_r2 = restoredCtx.$implicit; const ctx_r34 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r34.userClickedRow.emit(row_r2)); })("mouseover", function Ng2SmartTableTbodyComponent_tr_0_Template_tr_mouseover_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r35); const row_r2 = restoredCtx.$implicit; const ctx_r36 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r36.rowHover.emit(row_r2)); });
    i0.ɵɵtemplate(1, Ng2SmartTableTbodyComponent_tr_0_td_1_Template, 2, 1, "td", 3);
    i0.ɵɵtemplate(2, Ng2SmartTableTbodyComponent_tr_0_td_2_Template, 3, 8, "td", 4);
    i0.ɵɵtemplate(3, Ng2SmartTableTbodyComponent_tr_0_td_3_Template, 2, 3, "td", 5);
    i0.ɵɵtemplate(4, Ng2SmartTableTbodyComponent_tr_0_td_4_Template, 2, 8, "td", 6);
    i0.ɵɵtemplate(5, Ng2SmartTableTbodyComponent_tr_0_td_5_Template, 2, 3, "td", 5);
    i0.ɵɵtemplate(6, Ng2SmartTableTbodyComponent_tr_0_td_6_Template, 3, 8, "td", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r2 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("className", ctx_r0.rowClassFunction(row_r2))("ngClass", i0.ɵɵpureFunction1(8, _c1, row_r2.isSelected));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.isMultiSelectVisible);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !row_r2.isInEditing && ctx_r0.showActionColumnLeft);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", row_r2.isInEditing && ctx_r0.showActionColumnLeft);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r0.getVisibleCells(row_r2.cells));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", row_r2.isInEditing && ctx_r0.showActionColumnRight);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !row_r2.isInEditing && ctx_r0.showActionColumnRight);
} }
function Ng2SmartTableTbodyComponent_tr_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵattribute("colspan", ctx_r1.tableColumnsCount);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.noDataMessage, " ");
} }
export class Ng2SmartTableTbodyComponent {
    constructor() {
        this.save = new EventEmitter();
        this.cancel = new EventEmitter();
        this.edit = new EventEmitter();
        this.delete = new EventEmitter();
        this.custom = new EventEmitter();
        this.edited = new EventEmitter();
        this.userSelectRow = new EventEmitter();
        this.userClickedRow = new EventEmitter();
        this.editRowSelect = new EventEmitter();
        this.multipleSelectRow = new EventEmitter();
        this.rowHover = new EventEmitter();
    }
    get tableColumnsCount() {
        const actionColumns = this.isActionAdd || this.isActionEdit || this.isActionDelete ? 1 : 0;
        return this.grid.getColumns().length + actionColumns;
    }
    ngOnChanges() {
        this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
        this.showActionColumnLeft = this.grid.showActionColumn('left');
        this.mode = this.grid.getSetting('mode');
        this.editInputClass = this.grid.getSetting('edit.inputClass');
        this.showActionColumnRight = this.grid.showActionColumn('right');
        this.isActionAdd = this.grid.getSetting('actions.add');
        this.isActionEdit = this.grid.getSetting('actions.edit');
        this.isActionDelete = this.grid.getSetting('actions.delete');
        this.noDataMessage = this.grid.getSetting('noDataMessage');
    }
    getVisibleCells(cells) {
        return (cells || []).filter((cell) => !cell.getColumn().hide);
    }
}
Ng2SmartTableTbodyComponent.ɵfac = function Ng2SmartTableTbodyComponent_Factory(t) { return new (t || Ng2SmartTableTbodyComponent)(); };
Ng2SmartTableTbodyComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Ng2SmartTableTbodyComponent, selectors: [["", "ng2-st-tbody", ""]], inputs: { grid: "grid", source: "source", deleteConfirm: "deleteConfirm", editConfirm: "editConfirm", rowClassFunction: "rowClassFunction" }, outputs: { save: "save", cancel: "cancel", edit: "edit", delete: "delete", custom: "custom", edited: "edited", userSelectRow: "userSelectRow", userClickedRow: "userClickedRow", editRowSelect: "editRowSelect", multipleSelectRow: "multipleSelectRow", rowHover: "rowHover" }, features: [i0.ɵɵNgOnChangesFeature], attrs: _c0, decls: 2, vars: 2, consts: [["class", "ng2-smart-row", 3, "className", "ngClass", "click", "mouseover", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "ng2-smart-row", 3, "className", "ngClass", "click", "mouseover"], ["class", "ng2-smart-actions ng2-smart-action-multiple-select", 3, "click", 4, "ngIf"], ["class", "ng2-smart-actions", 3, "click", 4, "ngIf"], ["class", "ng2-smart-actions", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "ng2-smart-actions", "ng2-smart-action-multiple-select", 3, "click"], ["type", "checkbox", 1, "form-control", 3, "ngModel"], [1, "ng2-smart-actions", 3, "click"], [3, "grid", "row", "source", "custom"], [3, "grid", "deleteConfirm", "editConfirm", "row", "source", "edit", "delete", "editRowSelect"], [1, "ng2-smart-actions"], [3, "grid", "row", "editConfirm"], [3, "cell", "grid", "row", "isNew", "mode", "editConfirm", "inputClass", "isInEditing"]], template: function Ng2SmartTableTbodyComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, Ng2SmartTableTbodyComponent_tr_0_Template, 7, 10, "tr", 0);
        i0.ɵɵtemplate(1, Ng2SmartTableTbodyComponent_tr_1_Template, 3, 2, "tr", 1);
    } if (rf & 2) {
        i0.ɵɵproperty("ngForOf", ctx.grid.getRows());
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.grid.getRows().length == 0);
    } }, dependencies: [i1.NgClass, i1.NgForOf, i1.NgIf, i2.CheckboxControlValueAccessor, i2.NgControlStatus, i2.NgModel, i3.CellComponent, i4.TbodyCreateCancelComponent, i5.TbodyEditDeleteComponent, i6.TbodyCustomComponent], styles: ["[_nghost-%COMP%]   .ng2-smart-row.selected[_ngcontent-%COMP%]{background:rgba(0,0,0,.05)}[_nghost-%COMP%]   .ng2-smart-row[_ngcontent-%COMP%]   .ng2-smart-actions.ng2-smart-action-multiple-select[_ngcontent-%COMP%]{text-align:center}[_nghost-%COMP%]     ng2-st-tbody-edit-delete a:first-child, [_nghost-%COMP%]     ng2-st-tbody-create-cancel a:first-child{margin-right:.25rem}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Ng2SmartTableTbodyComponent, [{
        type: Component,
        args: [{ selector: '[ng2-st-tbody]', template: "<tr *ngFor=\"let row of grid.getRows()\" (click)=\"userClickedRow.emit(row)\" (mouseover)=\"rowHover.emit(row)\" class=\"ng2-smart-row\" [className]=\"rowClassFunction(row)\" [ngClass]=\"{selected: row.isSelected}\">\n  <td *ngIf=\"isMultiSelectVisible\" class=\"ng2-smart-actions ng2-smart-action-multiple-select\" (click)=\"multipleSelectRow.emit(row); $event.stopPropagation();\">\n    <input type=\"checkbox\" class=\"form-control\" [ngModel]=\"row.isSelected\">\n  </td>\n  <td *ngIf=\"!row.isInEditing && showActionColumnLeft\" class=\"ng2-smart-actions\" (click)=\"$event.stopPropagation()\">\n    <ng2-st-tbody-custom [grid]=\"grid\" (custom)=\"custom.emit($event)\" [row]=\"row\" [source]=\"source\"></ng2-st-tbody-custom>\n\n    <ng2-st-tbody-edit-delete [grid]=\"grid\"\n                              [deleteConfirm]=\"deleteConfirm\"\n                              [editConfirm]=\"editConfirm\"\n                              (edit)=\"edit.emit(row)\"\n                              (delete)=\"delete.emit(row)\"\n                              (editRowSelect)=\"editRowSelect.emit($event)\"\n                              [row]=\"row\"\n                              [source]=\"source\">\n    </ng2-st-tbody-edit-delete>\n  </td>\n   <td *ngIf=\"row.isInEditing && showActionColumnLeft\"  class=\"ng2-smart-actions\">\n    <ng2-st-tbody-create-cancel [grid]=\"grid\" [row]=\"row\" [editConfirm]=\"editConfirm\"></ng2-st-tbody-create-cancel>\n  </td>\n  <td *ngFor=\"let cell of getVisibleCells(row.cells)\">\n    <ng2-smart-table-cell [cell]=\"cell\"\n                          [grid]=\"grid\"\n                          [row]=\"row\"\n                          [isNew]=\"false\"\n                          [mode]=\"mode\"\n                          [editConfirm]=\"editConfirm\"\n                          [inputClass]=\"editInputClass\"\n                          [isInEditing]=\"row.isInEditing\">\n    </ng2-smart-table-cell>\n  </td>\n\n  <td *ngIf=\"row.isInEditing && showActionColumnRight\"  class=\"ng2-smart-actions\">\n    <ng2-st-tbody-create-cancel [grid]=\"grid\" [row]=\"row\" [editConfirm]=\"editConfirm\"></ng2-st-tbody-create-cancel>\n  </td>\n\n  <td *ngIf=\"!row.isInEditing && showActionColumnRight\" class=\"ng2-smart-actions\">\n    <ng2-st-tbody-custom [grid]=\"grid\" (custom)=\"custom.emit($event)\" [row]=\"row\" [source]=\"source\"></ng2-st-tbody-custom>\n\n    <ng2-st-tbody-edit-delete [grid]=\"grid\"\n                              [deleteConfirm]=\"deleteConfirm\"\n                              [editConfirm]=\"editConfirm\"\n                              [row]=\"row\"\n                              [source]=\"source\"\n                              (edit)=\"edit.emit(row)\"\n                              (delete)=\"delete.emit(row)\"\n                              (editRowSelect)=\"editRowSelect.emit($event)\">\n    </ng2-st-tbody-edit-delete>\n  </td>\n</tr>\n\n<tr *ngIf=\"grid.getRows().length == 0\">\n  <td [attr.colspan]=\"tableColumnsCount\">\n    {{ noDataMessage }}\n  </td>\n</tr>\n", styles: [":host .ng2-smart-row.selected{background:rgba(0,0,0,.05)}:host .ng2-smart-row .ng2-smart-actions.ng2-smart-action-multiple-select{text-align:center}:host ::ng-deep ng2-st-tbody-edit-delete a:first-child,:host ::ng-deep ng2-st-tbody-create-cancel a:first-child{margin-right:.25rem}\n"] }]
    }], null, { grid: [{
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
        }], rowHover: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGJvZHkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmcyLXNtYXJ0LXRhYmxlL3NyYy9saWIvY29tcG9uZW50cy90Ym9keS90Ym9keS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZzItc21hcnQtdGFibGUvc3JjL2xpYi9jb21wb25lbnRzL3Rib2R5L3Rib2R5LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEdBQUcsTUFBTSxlQUFlLENBQUM7QUFFdkUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7Ozs7Ozs7Ozs7SUNGN0QsNkJBQTZKO0lBQWpFLHFOQUFTLHFDQUEyQixTQUFFLGVBQUEsd0JBQXdCLENBQUEsSUFBRTtJQUMxSiwyQkFBdUU7SUFDekUsaUJBQUs7OztJQUR5QyxlQUEwQjtJQUExQiwyQ0FBMEI7Ozs7SUFFeEUsNkJBQWtIO0lBQW5DLG9IQUFTLHdCQUF3QixJQUFDO0lBQy9HLCtDQUFnRztJQUE3RCxvTUFBVSxlQUFBLDJCQUFtQixDQUFBLElBQUM7SUFBK0IsaUJBQXNCO0lBRXRILG9EQU80QztJQUpsQiwyT0FBUSxlQUFBLHlCQUFjLENBQUEsSUFBQyxrT0FDYixlQUFBLDJCQUFnQixDQUFBLElBREgsME1BRU4sZUFBQSxrQ0FBMEIsQ0FBQSxJQUZwQjtJQUtqRCxpQkFBMkIsRUFBQTs7OztJQVZOLGVBQWE7SUFBYixrQ0FBYSxlQUFBLHlCQUFBO0lBRVIsZUFBYTtJQUFiLGtDQUFhLHVDQUFBLG1DQUFBLGVBQUEseUJBQUE7OztJQVV4Qyw4QkFBK0U7SUFDOUUsaURBQStHO0lBQ2pILGlCQUFLOzs7O0lBRHlCLGVBQWE7SUFBYixrQ0FBYSxlQUFBLG1DQUFBOzs7SUFFM0MsMEJBQW9EO0lBQ2xELDJDQVF1QjtJQUN6QixpQkFBSzs7Ozs7SUFUbUIsZUFBYTtJQUFiLCtCQUFhLHFCQUFBLGVBQUEsZ0JBQUEscUJBQUEsbUNBQUEscUNBQUEsbUNBQUE7OztJQVdyQyw4QkFBZ0Y7SUFDOUUsaURBQStHO0lBQ2pILGlCQUFLOzs7O0lBRHlCLGVBQWE7SUFBYixrQ0FBYSxlQUFBLG1DQUFBOzs7O0lBRzNDLDhCQUFnRiw4QkFBQTtJQUMzQyxvTUFBVSxlQUFBLDJCQUFtQixDQUFBLElBQUM7SUFBK0IsaUJBQXNCO0lBRXRILG9EQU91RTtJQUY3QywyT0FBUSxlQUFBLHlCQUFjLENBQUEsSUFBQyxrT0FDYixlQUFBLDJCQUFnQixDQUFBLElBREgsME1BRU4sZUFBQSxrQ0FBMEIsQ0FBQSxJQUZwQjtJQUdqRCxpQkFBMkIsRUFBQTs7OztJQVZOLGVBQWE7SUFBYixrQ0FBYSxlQUFBLHlCQUFBO0lBRVIsZUFBYTtJQUFiLGtDQUFhLHVDQUFBLG1DQUFBLGVBQUEseUJBQUE7Ozs7O0lBdkMzQyw2QkFBNE07SUFBckssK05BQVMsZUFBQSxtQ0FBd0IsQ0FBQSxJQUFDLDBOQUFjLGVBQUEsNkJBQWtCLENBQUEsSUFBaEM7SUFDdkUsK0VBRUs7SUFDTCwrRUFZSztJQUNKLCtFQUVJO0lBQ0wsK0VBVUs7SUFFTCwrRUFFSztJQUVMLCtFQVlLO0lBQ1AsaUJBQUs7Ozs7SUFqRDRILDJEQUFtQywwREFBQTtJQUM3SixlQUEwQjtJQUExQixrREFBMEI7SUFHMUIsZUFBOEM7SUFBOUMseUVBQThDO0lBYTdDLGVBQTZDO0lBQTdDLHdFQUE2QztJQUc5QixlQUE2QjtJQUE3Qiw4REFBNkI7SUFZN0MsZUFBOEM7SUFBOUMseUVBQThDO0lBSTlDLGVBQStDO0lBQS9DLDBFQUErQzs7O0lBZXRELDBCQUF1QyxTQUFBO0lBRW5DLFlBQ0Y7SUFBQSxpQkFBSyxFQUFBOzs7SUFGRCxlQUFrQztJQUFsQyxtREFBa0M7SUFDcEMsZUFDRjtJQURFLHFEQUNGOztBRDNDRixNQUFNLE9BQU8sMkJBQTJCO0lBTHhDO1FBYVksU0FBSSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDL0IsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDakMsU0FBSSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDL0IsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDakMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDakMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDakMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3hDLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUN6QyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDeEMsc0JBQWlCLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUM1QyxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztLQWdDOUM7SUFwQkMsSUFBSSxpQkFBaUI7UUFDbkIsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNGLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxNQUFNLEdBQUcsYUFBYSxDQUFDO0lBQ3ZELENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUM3RCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVELGVBQWUsQ0FBQyxLQUFrQjtRQUNoQyxPQUFPLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEUsQ0FBQzs7c0dBakRVLDJCQUEyQjs4RUFBM0IsMkJBQTJCO1FDWHhDLDJFQWlESztRQUVMLDBFQUlLOztRQXZEZSw0Q0FBaUI7UUFtRGhDLGVBQWdDO1FBQWhDLHFEQUFnQzs7dUZEeEN4QiwyQkFBMkI7Y0FMdkMsU0FBUzsyQkFDRSxnQkFBZ0I7Z0JBTWpCLElBQUk7a0JBQVosS0FBSztZQUNHLE1BQU07a0JBQWQsS0FBSztZQUNHLGFBQWE7a0JBQXJCLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBQ0csZ0JBQWdCO2tCQUF4QixLQUFLO1lBRUksSUFBSTtrQkFBYixNQUFNO1lBQ0csTUFBTTtrQkFBZixNQUFNO1lBQ0csSUFBSTtrQkFBYixNQUFNO1lBQ0csTUFBTTtrQkFBZixNQUFNO1lBQ0csTUFBTTtrQkFBZixNQUFNO1lBQ0csTUFBTTtrQkFBZixNQUFNO1lBQ0csYUFBYTtrQkFBdEIsTUFBTTtZQUNHLGNBQWM7a0JBQXZCLE1BQU07WUFDRyxhQUFhO2tCQUF0QixNQUFNO1lBQ0csaUJBQWlCO2tCQUExQixNQUFNO1lBQ0csUUFBUTtrQkFBakIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEdyaWQgfSBmcm9tICcuLi8uLi9saWIvZ3JpZCc7XG5pbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnLi4vLi4vbGliL2RhdGEtc291cmNlL2RhdGEtc291cmNlJztcbmltcG9ydCB7IENlbGwgfSBmcm9tICcuLi8uLi9saWIvZGF0YS1zZXQvY2VsbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1tuZzItc3QtdGJvZHldJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGJvZHkuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL3Rib2R5LmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgTmcyU21hcnRUYWJsZVRib2R5Q29tcG9uZW50IHtcblxuICBASW5wdXQoKSBncmlkOiBHcmlkO1xuICBASW5wdXQoKSBzb3VyY2U6IERhdGFTb3VyY2U7XG4gIEBJbnB1dCgpIGRlbGV0ZUNvbmZpcm06IEV2ZW50RW1pdHRlcjxhbnk+O1xuICBASW5wdXQoKSBlZGl0Q29uZmlybTogRXZlbnRFbWl0dGVyPGFueT47XG4gIEBJbnB1dCgpIHJvd0NsYXNzRnVuY3Rpb246IEZ1bmN0aW9uO1xuXG4gIEBPdXRwdXQoKSBzYXZlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBjYW5jZWwgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGVkaXQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGRlbGV0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgY3VzdG9tID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBlZGl0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIHVzZXJTZWxlY3RSb3cgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIHVzZXJDbGlja2VkUm93ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBlZGl0Um93U2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBtdWx0aXBsZVNlbGVjdFJvdyA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgcm93SG92ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBpc011bHRpU2VsZWN0VmlzaWJsZTogYm9vbGVhbjtcbiAgc2hvd0FjdGlvbkNvbHVtbkxlZnQ6IGJvb2xlYW47XG4gIHNob3dBY3Rpb25Db2x1bW5SaWdodDogYm9vbGVhbjtcbiAgbW9kZTogc3RyaW5nO1xuICBlZGl0SW5wdXRDbGFzczogc3RyaW5nO1xuICBpc0FjdGlvbkFkZDogYm9vbGVhbjtcbiAgaXNBY3Rpb25FZGl0OiBib29sZWFuO1xuICBpc0FjdGlvbkRlbGV0ZTogYm9vbGVhbjtcbiAgbm9EYXRhTWVzc2FnZTogYm9vbGVhbjtcblxuICBnZXQgdGFibGVDb2x1bW5zQ291bnQoKSB7XG4gICAgY29uc3QgYWN0aW9uQ29sdW1ucyA9IHRoaXMuaXNBY3Rpb25BZGQgfHwgdGhpcy5pc0FjdGlvbkVkaXQgfHwgdGhpcy5pc0FjdGlvbkRlbGV0ZSA/IDEgOiAwO1xuICAgIHJldHVybiB0aGlzLmdyaWQuZ2V0Q29sdW1ucygpLmxlbmd0aCArIGFjdGlvbkNvbHVtbnM7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLmlzTXVsdGlTZWxlY3RWaXNpYmxlID0gdGhpcy5ncmlkLmlzTXVsdGlTZWxlY3RWaXNpYmxlKCk7XG4gICAgdGhpcy5zaG93QWN0aW9uQ29sdW1uTGVmdCA9IHRoaXMuZ3JpZC5zaG93QWN0aW9uQ29sdW1uKCdsZWZ0Jyk7XG4gICAgdGhpcy5tb2RlID0gdGhpcy5ncmlkLmdldFNldHRpbmcoJ21vZGUnKTtcbiAgICB0aGlzLmVkaXRJbnB1dENsYXNzID0gdGhpcy5ncmlkLmdldFNldHRpbmcoJ2VkaXQuaW5wdXRDbGFzcycpO1xuICAgIHRoaXMuc2hvd0FjdGlvbkNvbHVtblJpZ2h0ID0gdGhpcy5ncmlkLnNob3dBY3Rpb25Db2x1bW4oJ3JpZ2h0Jyk7XG4gICAgdGhpcy5pc0FjdGlvbkFkZCA9IHRoaXMuZ3JpZC5nZXRTZXR0aW5nKCdhY3Rpb25zLmFkZCcpO1xuICAgIHRoaXMuaXNBY3Rpb25FZGl0ID0gdGhpcy5ncmlkLmdldFNldHRpbmcoJ2FjdGlvbnMuZWRpdCcpO1xuICAgIHRoaXMuaXNBY3Rpb25EZWxldGUgPSB0aGlzLmdyaWQuZ2V0U2V0dGluZygnYWN0aW9ucy5kZWxldGUnKTtcbiAgICB0aGlzLm5vRGF0YU1lc3NhZ2UgPSB0aGlzLmdyaWQuZ2V0U2V0dGluZygnbm9EYXRhTWVzc2FnZScpO1xuICB9XG5cbiAgZ2V0VmlzaWJsZUNlbGxzKGNlbGxzOiBBcnJheTxDZWxsPik6IEFycmF5PENlbGw+IHtcbiAgICByZXR1cm4gKGNlbGxzIHx8IFtdKS5maWx0ZXIoKGNlbGw6IENlbGwpID0+ICFjZWxsLmdldENvbHVtbigpLmhpZGUpO1xuICB9XG59XG4iLCI8dHIgKm5nRm9yPVwibGV0IHJvdyBvZiBncmlkLmdldFJvd3MoKVwiIChjbGljayk9XCJ1c2VyQ2xpY2tlZFJvdy5lbWl0KHJvdylcIiAobW91c2VvdmVyKT1cInJvd0hvdmVyLmVtaXQocm93KVwiIGNsYXNzPVwibmcyLXNtYXJ0LXJvd1wiIFtjbGFzc05hbWVdPVwicm93Q2xhc3NGdW5jdGlvbihyb3cpXCIgW25nQ2xhc3NdPVwie3NlbGVjdGVkOiByb3cuaXNTZWxlY3RlZH1cIj5cbiAgPHRkICpuZ0lmPVwiaXNNdWx0aVNlbGVjdFZpc2libGVcIiBjbGFzcz1cIm5nMi1zbWFydC1hY3Rpb25zIG5nMi1zbWFydC1hY3Rpb24tbXVsdGlwbGUtc2VsZWN0XCIgKGNsaWNrKT1cIm11bHRpcGxlU2VsZWN0Um93LmVtaXQocm93KTsgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1wiPlxuICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIFtuZ01vZGVsXT1cInJvdy5pc1NlbGVjdGVkXCI+XG4gIDwvdGQ+XG4gIDx0ZCAqbmdJZj1cIiFyb3cuaXNJbkVkaXRpbmcgJiYgc2hvd0FjdGlvbkNvbHVtbkxlZnRcIiBjbGFzcz1cIm5nMi1zbWFydC1hY3Rpb25zXCIgKGNsaWNrKT1cIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKVwiPlxuICAgIDxuZzItc3QtdGJvZHktY3VzdG9tIFtncmlkXT1cImdyaWRcIiAoY3VzdG9tKT1cImN1c3RvbS5lbWl0KCRldmVudClcIiBbcm93XT1cInJvd1wiIFtzb3VyY2VdPVwic291cmNlXCI+PC9uZzItc3QtdGJvZHktY3VzdG9tPlxuXG4gICAgPG5nMi1zdC10Ym9keS1lZGl0LWRlbGV0ZSBbZ3JpZF09XCJncmlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkZWxldGVDb25maXJtXT1cImRlbGV0ZUNvbmZpcm1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2VkaXRDb25maXJtXT1cImVkaXRDb25maXJtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlZGl0KT1cImVkaXQuZW1pdChyb3cpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChkZWxldGUpPVwiZGVsZXRlLmVtaXQocm93KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZWRpdFJvd1NlbGVjdCk9XCJlZGl0Um93U2VsZWN0LmVtaXQoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcm93XT1cInJvd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbc291cmNlXT1cInNvdXJjZVwiPlxuICAgIDwvbmcyLXN0LXRib2R5LWVkaXQtZGVsZXRlPlxuICA8L3RkPlxuICAgPHRkICpuZ0lmPVwicm93LmlzSW5FZGl0aW5nICYmIHNob3dBY3Rpb25Db2x1bW5MZWZ0XCIgIGNsYXNzPVwibmcyLXNtYXJ0LWFjdGlvbnNcIj5cbiAgICA8bmcyLXN0LXRib2R5LWNyZWF0ZS1jYW5jZWwgW2dyaWRdPVwiZ3JpZFwiIFtyb3ddPVwicm93XCIgW2VkaXRDb25maXJtXT1cImVkaXRDb25maXJtXCI+PC9uZzItc3QtdGJvZHktY3JlYXRlLWNhbmNlbD5cbiAgPC90ZD5cbiAgPHRkICpuZ0Zvcj1cImxldCBjZWxsIG9mIGdldFZpc2libGVDZWxscyhyb3cuY2VsbHMpXCI+XG4gICAgPG5nMi1zbWFydC10YWJsZS1jZWxsIFtjZWxsXT1cImNlbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBbZ3JpZF09XCJncmlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW3Jvd109XCJyb3dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBbaXNOZXddPVwiZmFsc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBbbW9kZV09XCJtb2RlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW2VkaXRDb25maXJtXT1cImVkaXRDb25maXJtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW2lucHV0Q2xhc3NdPVwiZWRpdElucHV0Q2xhc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBbaXNJbkVkaXRpbmddPVwicm93LmlzSW5FZGl0aW5nXCI+XG4gICAgPC9uZzItc21hcnQtdGFibGUtY2VsbD5cbiAgPC90ZD5cblxuICA8dGQgKm5nSWY9XCJyb3cuaXNJbkVkaXRpbmcgJiYgc2hvd0FjdGlvbkNvbHVtblJpZ2h0XCIgIGNsYXNzPVwibmcyLXNtYXJ0LWFjdGlvbnNcIj5cbiAgICA8bmcyLXN0LXRib2R5LWNyZWF0ZS1jYW5jZWwgW2dyaWRdPVwiZ3JpZFwiIFtyb3ddPVwicm93XCIgW2VkaXRDb25maXJtXT1cImVkaXRDb25maXJtXCI+PC9uZzItc3QtdGJvZHktY3JlYXRlLWNhbmNlbD5cbiAgPC90ZD5cblxuICA8dGQgKm5nSWY9XCIhcm93LmlzSW5FZGl0aW5nICYmIHNob3dBY3Rpb25Db2x1bW5SaWdodFwiIGNsYXNzPVwibmcyLXNtYXJ0LWFjdGlvbnNcIj5cbiAgICA8bmcyLXN0LXRib2R5LWN1c3RvbSBbZ3JpZF09XCJncmlkXCIgKGN1c3RvbSk9XCJjdXN0b20uZW1pdCgkZXZlbnQpXCIgW3Jvd109XCJyb3dcIiBbc291cmNlXT1cInNvdXJjZVwiPjwvbmcyLXN0LXRib2R5LWN1c3RvbT5cblxuICAgIDxuZzItc3QtdGJvZHktZWRpdC1kZWxldGUgW2dyaWRdPVwiZ3JpZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGVsZXRlQ29uZmlybV09XCJkZWxldGVDb25maXJtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtlZGl0Q29uZmlybV09XCJlZGl0Q29uZmlybVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcm93XT1cInJvd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbc291cmNlXT1cInNvdXJjZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZWRpdCk9XCJlZGl0LmVtaXQocm93KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZGVsZXRlKT1cImRlbGV0ZS5lbWl0KHJvdylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGVkaXRSb3dTZWxlY3QpPVwiZWRpdFJvd1NlbGVjdC5lbWl0KCRldmVudClcIj5cbiAgICA8L25nMi1zdC10Ym9keS1lZGl0LWRlbGV0ZT5cbiAgPC90ZD5cbjwvdHI+XG5cbjx0ciAqbmdJZj1cImdyaWQuZ2V0Um93cygpLmxlbmd0aCA9PSAwXCI+XG4gIDx0ZCBbYXR0ci5jb2xzcGFuXT1cInRhYmxlQ29sdW1uc0NvdW50XCI+XG4gICAge3sgbm9EYXRhTWVzc2FnZSB9fVxuICA8L3RkPlxuPC90cj5cbiJdfQ==