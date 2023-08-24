import { Component } from '@angular/core';
import { EditCellDefault } from './edit-cell-default';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../cell-editors/checkbox-editor.component";
import * as i3 from "../cell-editors/completer-editor.component";
import * as i4 from "../cell-editors/input-editor.component";
import * as i5 from "../cell-editors/select-editor.component";
import * as i6 from "../cell-editors/textarea-editor.component";
function DefaultEditComponent_select_editor_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "select-editor", 5);
    i0.ɵɵlistener("onClick", function DefaultEditComponent_select_editor_1_Template_select_editor_onClick_0_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r5.onClick($event)); })("onEdited", function DefaultEditComponent_select_editor_1_Template_select_editor_onEdited_0_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r7 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r7.onEdited($event)); })("onStopEditing", function DefaultEditComponent_select_editor_1_Template_select_editor_onStopEditing_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r8 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r8.onStopEditing()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("cell", ctx_r0.cell)("inputClass", ctx_r0.inputClass);
} }
function DefaultEditComponent_textarea_editor_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "textarea-editor", 5);
    i0.ɵɵlistener("onClick", function DefaultEditComponent_textarea_editor_2_Template_textarea_editor_onClick_0_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r9 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r9.onClick($event)); })("onEdited", function DefaultEditComponent_textarea_editor_2_Template_textarea_editor_onEdited_0_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r11 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r11.onEdited($event)); })("onStopEditing", function DefaultEditComponent_textarea_editor_2_Template_textarea_editor_onStopEditing_0_listener() { i0.ɵɵrestoreView(_r10); const ctx_r12 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r12.onStopEditing()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("cell", ctx_r1.cell)("inputClass", ctx_r1.inputClass);
} }
function DefaultEditComponent_checkbox_editor_3_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "checkbox-editor", 6);
    i0.ɵɵlistener("onClick", function DefaultEditComponent_checkbox_editor_3_Template_checkbox_editor_onClick_0_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r13 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r13.onClick($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("cell", ctx_r2.cell)("inputClass", ctx_r2.inputClass);
} }
function DefaultEditComponent_completer_editor_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "completer-editor", 7);
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("cell", ctx_r3.cell);
} }
function DefaultEditComponent_input_editor_5_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input-editor", 5);
    i0.ɵɵlistener("onClick", function DefaultEditComponent_input_editor_5_Template_input_editor_onClick_0_listener($event) { i0.ɵɵrestoreView(_r16); const ctx_r15 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r15.onClick($event)); })("onEdited", function DefaultEditComponent_input_editor_5_Template_input_editor_onEdited_0_listener($event) { i0.ɵɵrestoreView(_r16); const ctx_r17 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r17.onEdited($event)); })("onStopEditing", function DefaultEditComponent_input_editor_5_Template_input_editor_onStopEditing_0_listener() { i0.ɵɵrestoreView(_r16); const ctx_r18 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r18.onStopEditing()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("cell", ctx_r4.cell)("inputClass", ctx_r4.inputClass);
} }
export class DefaultEditComponent extends EditCellDefault {
    constructor() {
        super();
    }
    getEditorType() {
        return this.cell.getColumn().editor && this.cell.getColumn().editor.type;
    }
}
DefaultEditComponent.ɵfac = function DefaultEditComponent_Factory(t) { return new (t || DefaultEditComponent)(); };
DefaultEditComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DefaultEditComponent, selectors: [["table-cell-default-editor"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 6, vars: 5, consts: [[3, "ngSwitch"], [3, "cell", "inputClass", "onClick", "onEdited", "onStopEditing", 4, "ngSwitchCase"], [3, "cell", "inputClass", "onClick", 4, "ngSwitchCase"], [3, "cell", 4, "ngSwitchCase"], [3, "cell", "inputClass", "onClick", "onEdited", "onStopEditing", 4, "ngSwitchDefault"], [3, "cell", "inputClass", "onClick", "onEdited", "onStopEditing"], [3, "cell", "inputClass", "onClick"], [3, "cell"]], template: function DefaultEditComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, DefaultEditComponent_select_editor_1_Template, 1, 2, "select-editor", 1);
        i0.ɵɵtemplate(2, DefaultEditComponent_textarea_editor_2_Template, 1, 2, "textarea-editor", 1);
        i0.ɵɵtemplate(3, DefaultEditComponent_checkbox_editor_3_Template, 1, 2, "checkbox-editor", 2);
        i0.ɵɵtemplate(4, DefaultEditComponent_completer_editor_4_Template, 1, 1, "completer-editor", 3);
        i0.ɵɵtemplate(5, DefaultEditComponent_input_editor_5_Template, 1, 2, "input-editor", 4);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngSwitch", ctx.getEditorType());
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", "list");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", "textarea");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", "checkbox");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", "completer");
    } }, dependencies: [i1.NgSwitch, i1.NgSwitchCase, i1.NgSwitchDefault, i2.CheckboxEditorComponent, i3.CompleterEditorComponent, i4.InputEditorComponent, i5.SelectEditorComponent, i6.TextareaEditorComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DefaultEditComponent, [{
        type: Component,
        args: [{ selector: 'table-cell-default-editor', template: "<div [ngSwitch]=\"getEditorType()\">\n    <select-editor *ngSwitchCase=\"'list'\"\n                   [cell]=\"cell\"\n                   [inputClass]=\"inputClass\"\n                   (onClick)=\"onClick($event)\"\n                   (onEdited)=\"onEdited($event)\"\n                   (onStopEditing)=\"onStopEditing()\">\n    </select-editor>\n\n    <textarea-editor *ngSwitchCase=\"'textarea'\"\n                     [cell]=\"cell\"\n                     [inputClass]=\"inputClass\"\n                     (onClick)=\"onClick($event)\"\n                     (onEdited)=\"onEdited($event)\"\n                     (onStopEditing)=\"onStopEditing()\">\n    </textarea-editor>\n\n    <checkbox-editor *ngSwitchCase=\"'checkbox'\"\n                     [cell]=\"cell\"\n                     [inputClass]=\"inputClass\"\n                     (onClick)=\"onClick($event)\">\n    </checkbox-editor>\n\n    <completer-editor *ngSwitchCase=\"'completer'\"\n                      [cell]=\"cell\">\n    </completer-editor>\n\n    <input-editor *ngSwitchDefault\n                  [cell]=\"cell\"\n                  [inputClass]=\"inputClass\"\n                  (onClick)=\"onClick($event)\"\n                  (onEdited)=\"onEdited($event)\"\n                  (onStopEditing)=\"onStopEditing()\">\n    </input-editor>\n</div>" }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1lZGl0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nMi1zbWFydC10YWJsZS9zcmMvbGliL2NvbXBvbmVudHMvY2VsbC9jZWxsLWVkaXQtbW9kZS9kZWZhdWx0LWVkaXQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmcyLXNtYXJ0LXRhYmxlL3NyYy9saWIvY29tcG9uZW50cy9jZWxsL2NlbGwtZWRpdC1tb2RlL2RlZmF1bHQtZWRpdC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7OztJQ0RsRCx3Q0FLaUQ7SUFGbEMsNExBQVcsZUFBQSxzQkFBZSxDQUFBLElBQUMsaUxBQ2YsZUFBQSx1QkFBZ0IsQ0FBQSxJQURELHFMQUVWLGVBQUEsc0JBQWUsQ0FBQSxJQUZMO0lBRzFDLGlCQUFnQjs7O0lBTEQsa0NBQWEsaUNBQUE7Ozs7SUFPNUIsMENBS21EO0lBRmxDLGlNQUFXLGVBQUEsc0JBQWUsQ0FBQSxJQUFDLHVMQUNmLGVBQUEsd0JBQWdCLENBQUEsSUFERCwyTEFFVixlQUFBLHVCQUFlLENBQUEsSUFGTDtJQUc1QyxpQkFBa0I7OztJQUxELGtDQUFhLGlDQUFBOzs7O0lBTzlCLDBDQUc2QztJQUE1QixrTUFBVyxlQUFBLHVCQUFlLENBQUEsSUFBQztJQUM1QyxpQkFBa0I7OztJQUhELGtDQUFhLGlDQUFBOzs7SUFLOUIsc0NBRW1COzs7SUFERCxrQ0FBYTs7OztJQUcvQix1Q0FLZ0Q7SUFGbEMsNExBQVcsZUFBQSx1QkFBZSxDQUFBLElBQUMsaUxBQ2YsZUFBQSx3QkFBZ0IsQ0FBQSxJQURELHFMQUVWLGVBQUEsdUJBQWUsQ0FBQSxJQUZMO0lBR3pDLGlCQUFlOzs7SUFMRCxrQ0FBYSxpQ0FBQTs7QURuQi9CLE1BQU0sT0FBTyxvQkFBcUIsU0FBUSxlQUFlO0lBRXZEO1FBQ0UsS0FBSyxFQUFFLENBQUM7SUFDVixDQUFDO0lBRUQsYUFBYTtRQUNYLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQzNFLENBQUM7O3dGQVJVLG9CQUFvQjt1RUFBcEIsb0JBQW9CO1FDVGpDLDhCQUFrQztRQUM5Qix5RkFNZ0I7UUFFaEIsNkZBTWtCO1FBRWxCLDZGQUlrQjtRQUVsQiwrRkFFbUI7UUFFbkIsdUZBTWU7UUFDbkIsaUJBQU07O1FBbENELDhDQUE0QjtRQUNiLGVBQW9CO1FBQXBCLHFDQUFvQjtRQVFsQixlQUF3QjtRQUF4Qix5Q0FBd0I7UUFReEIsZUFBd0I7UUFBeEIseUNBQXdCO1FBTXZCLGVBQXlCO1FBQXpCLDBDQUF5Qjs7dUZEZG5DLG9CQUFvQjtjQUpoQyxTQUFTOzJCQUNFLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBFZGl0Q2VsbERlZmF1bHQgfSBmcm9tICcuL2VkaXQtY2VsbC1kZWZhdWx0JztcbmltcG9ydCB7IENlbGwgfSBmcm9tICcuLi8uLi8uLi9saWIvZGF0YS1zZXQvY2VsbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhYmxlLWNlbGwtZGVmYXVsdC1lZGl0b3InLFxuICB0ZW1wbGF0ZVVybDogJy4vZGVmYXVsdC1lZGl0LmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgRGVmYXVsdEVkaXRDb21wb25lbnQgZXh0ZW5kcyBFZGl0Q2VsbERlZmF1bHQge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBnZXRFZGl0b3JUeXBlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuY2VsbC5nZXRDb2x1bW4oKS5lZGl0b3IgJiYgdGhpcy5jZWxsLmdldENvbHVtbigpLmVkaXRvci50eXBlO1xuICB9XG59XG4iLCI8ZGl2IFtuZ1N3aXRjaF09XCJnZXRFZGl0b3JUeXBlKClcIj5cbiAgICA8c2VsZWN0LWVkaXRvciAqbmdTd2l0Y2hDYXNlPVwiJ2xpc3QnXCJcbiAgICAgICAgICAgICAgICAgICBbY2VsbF09XCJjZWxsXCJcbiAgICAgICAgICAgICAgICAgICBbaW5wdXRDbGFzc109XCJpbnB1dENsYXNzXCJcbiAgICAgICAgICAgICAgICAgICAob25DbGljayk9XCJvbkNsaWNrKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgIChvbkVkaXRlZCk9XCJvbkVkaXRlZCgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAob25TdG9wRWRpdGluZyk9XCJvblN0b3BFZGl0aW5nKClcIj5cbiAgICA8L3NlbGVjdC1lZGl0b3I+XG5cbiAgICA8dGV4dGFyZWEtZWRpdG9yICpuZ1N3aXRjaENhc2U9XCIndGV4dGFyZWEnXCJcbiAgICAgICAgICAgICAgICAgICAgIFtjZWxsXT1cImNlbGxcIlxuICAgICAgICAgICAgICAgICAgICAgW2lucHV0Q2xhc3NdPVwiaW5wdXRDbGFzc1wiXG4gICAgICAgICAgICAgICAgICAgICAob25DbGljayk9XCJvbkNsaWNrKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICAgKG9uRWRpdGVkKT1cIm9uRWRpdGVkKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICAgKG9uU3RvcEVkaXRpbmcpPVwib25TdG9wRWRpdGluZygpXCI+XG4gICAgPC90ZXh0YXJlYS1lZGl0b3I+XG5cbiAgICA8Y2hlY2tib3gtZWRpdG9yICpuZ1N3aXRjaENhc2U9XCInY2hlY2tib3gnXCJcbiAgICAgICAgICAgICAgICAgICAgIFtjZWxsXT1cImNlbGxcIlxuICAgICAgICAgICAgICAgICAgICAgW2lucHV0Q2xhc3NdPVwiaW5wdXRDbGFzc1wiXG4gICAgICAgICAgICAgICAgICAgICAob25DbGljayk9XCJvbkNsaWNrKCRldmVudClcIj5cbiAgICA8L2NoZWNrYm94LWVkaXRvcj5cblxuICAgIDxjb21wbGV0ZXItZWRpdG9yICpuZ1N3aXRjaENhc2U9XCInY29tcGxldGVyJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgW2NlbGxdPVwiY2VsbFwiPlxuICAgIDwvY29tcGxldGVyLWVkaXRvcj5cblxuICAgIDxpbnB1dC1lZGl0b3IgKm5nU3dpdGNoRGVmYXVsdFxuICAgICAgICAgICAgICAgICAgW2NlbGxdPVwiY2VsbFwiXG4gICAgICAgICAgICAgICAgICBbaW5wdXRDbGFzc109XCJpbnB1dENsYXNzXCJcbiAgICAgICAgICAgICAgICAgIChvbkNsaWNrKT1cIm9uQ2xpY2soJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAob25FZGl0ZWQpPVwib25FZGl0ZWQoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAob25TdG9wRWRpdGluZyk9XCJvblN0b3BFZGl0aW5nKClcIj5cbiAgICA8L2lucHV0LWVkaXRvcj5cbjwvZGl2PiJdfQ==