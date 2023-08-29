import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Cell } from '../../../lib/data-set/cell';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./custom-view.component";
function ViewCellComponent_custom_view_component_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "custom-view-component", 4);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("cell", ctx_r0.cell);
} }
function ViewCellComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 5);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("innerHTML", ctx_r1.cell.getValue(), i0.ɵɵsanitizeHtml);
} }
function ViewCellComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r2.cell.getValue());
} }
export class ViewCellComponent {
}
ViewCellComponent.ɵfac = function ViewCellComponent_Factory(t) { return new (t || ViewCellComponent)(); };
ViewCellComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ViewCellComponent, selectors: [["table-cell-view-mode"]], inputs: { cell: "cell" }, decls: 4, vars: 3, consts: [[3, "ngSwitch"], [3, "cell", 4, "ngSwitchCase"], [3, "innerHTML", 4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "cell"], [3, "innerHTML"]], template: function ViewCellComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, ViewCellComponent_custom_view_component_1_Template, 1, 1, "custom-view-component", 1);
        i0.ɵɵtemplate(2, ViewCellComponent_div_2_Template, 1, 1, "div", 2);
        i0.ɵɵtemplate(3, ViewCellComponent_div_3_Template, 2, 1, "div", 3);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngSwitch", ctx.cell.getColumn().type);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", "custom");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", "html");
    } }, dependencies: [i1.NgSwitch, i1.NgSwitchCase, i1.NgSwitchDefault, i2.CustomViewComponent], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ViewCellComponent, [{
        type: Component,
        args: [{
                selector: 'table-cell-view-mode',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <div [ngSwitch]="cell.getColumn().type">
        <custom-view-component *ngSwitchCase="'custom'" [cell]="cell"></custom-view-component>
        <div *ngSwitchCase="'html'" [innerHTML]="cell.getValue()"></div>
        <div *ngSwitchDefault>{{ cell.getValue() }}</div>
    </div>
    `,
            }]
    }], null, { cell: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy1jZWxsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nMi1zbWFydC10YWJsZS9zcmMvbGliL2NvbXBvbmVudHMvY2VsbC9jZWxsLXZpZXctbW9kZS92aWV3LWNlbGwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7Ozs7SUFPMUMsMkNBQXNGOzs7SUFBdEMsa0NBQWE7OztJQUM3RCx5QkFBZ0U7OztJQUFwQyxxRUFBNkI7OztJQUN6RCwyQkFBc0I7SUFBQSxZQUFxQjtJQUFBLGlCQUFNOzs7SUFBM0IsZUFBcUI7SUFBckIsNENBQXFCOztBQUluRCxNQUFNLE9BQU8saUJBQWlCOztrRkFBakIsaUJBQWlCO29FQUFqQixpQkFBaUI7UUFQMUIsOEJBQXdDO1FBQ3BDLHNHQUFzRjtRQUN0RixrRUFBZ0U7UUFDaEUsa0VBQWlEO1FBQ3JELGlCQUFNOztRQUpELG9EQUFrQztRQUNYLGVBQXNCO1FBQXRCLHVDQUFzQjtRQUN4QyxlQUFvQjtRQUFwQixxQ0FBb0I7O3VGQUtyQixpQkFBaUI7Y0FYN0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxRQUFRLEVBQUU7Ozs7OztLQU1QO2FBQ0o7Z0JBR1UsSUFBSTtrQkFBWixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDZWxsIH0gZnJvbSAnLi4vLi4vLi4vbGliL2RhdGEtc2V0L2NlbGwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YWJsZS1jZWxsLXZpZXctbW9kZScsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgW25nU3dpdGNoXT1cImNlbGwuZ2V0Q29sdW1uKCkudHlwZVwiPlxuICAgICAgICA8Y3VzdG9tLXZpZXctY29tcG9uZW50ICpuZ1N3aXRjaENhc2U9XCInY3VzdG9tJ1wiIFtjZWxsXT1cImNlbGxcIj48L2N1c3RvbS12aWV3LWNvbXBvbmVudD5cbiAgICAgICAgPGRpdiAqbmdTd2l0Y2hDYXNlPVwiJ2h0bWwnXCIgW2lubmVySFRNTF09XCJjZWxsLmdldFZhbHVlKClcIj48L2Rpdj5cbiAgICAgICAgPGRpdiAqbmdTd2l0Y2hEZWZhdWx0Pnt7IGNlbGwuZ2V0VmFsdWUoKSB9fTwvZGl2PlxuICAgIDwvZGl2PlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIFZpZXdDZWxsQ29tcG9uZW50IHtcblxuICBASW5wdXQoKSBjZWxsOiBDZWxsO1xufVxuIl19