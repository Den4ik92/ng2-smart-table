import { Component, Input } from '@angular/core';
import { FilterDefault } from "./filter-default";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./filter-types/checkbox-filter.component";
import * as i3 from "./filter-types/completer-filter.component";
import * as i4 from "./filter-types/input-filter.component";
import * as i5 from "./filter-types/select-filter.component";
function DefaultFilterComponent_select_filter_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "select-filter", 3);
    i0.ɵɵlistener("filter", function DefaultFilterComponent_select_filter_1_Template_select_filter_filter_0_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.onFilter($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("query", ctx_r0.query)("ngClass", ctx_r0.inputClass)("column", ctx_r0.column);
} }
function DefaultFilterComponent_checkbox_filter_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "checkbox-filter", 3);
    i0.ɵɵlistener("filter", function DefaultFilterComponent_checkbox_filter_2_Template_checkbox_filter_filter_0_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r6.onFilter($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("query", ctx_r1.query)("ngClass", ctx_r1.inputClass)("column", ctx_r1.column);
} }
function DefaultFilterComponent_completer_filter_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "completer-filter", 3);
    i0.ɵɵlistener("filter", function DefaultFilterComponent_completer_filter_3_Template_completer_filter_filter_0_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r8.onFilter($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("query", ctx_r2.query)("ngClass", ctx_r2.inputClass)("column", ctx_r2.column);
} }
function DefaultFilterComponent_input_filter_4_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input-filter", 3);
    i0.ɵɵlistener("filter", function DefaultFilterComponent_input_filter_4_Template_input_filter_filter_0_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r10 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r10.onFilter($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("query", ctx_r3.query)("ngClass", ctx_r3.inputClass)("column", ctx_r3.column);
} }
export class DefaultFilterComponent extends FilterDefault {
}
DefaultFilterComponent.ɵfac = /*@__PURE__*/ function () { let ɵDefaultFilterComponent_BaseFactory; return function DefaultFilterComponent_Factory(t) { return (ɵDefaultFilterComponent_BaseFactory || (ɵDefaultFilterComponent_BaseFactory = i0.ɵɵgetInheritedFactory(DefaultFilterComponent)))(t || DefaultFilterComponent); }; }();
DefaultFilterComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DefaultFilterComponent, selectors: [["default-table-filter"]], inputs: { query: "query" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 5, vars: 4, consts: [[3, "ngSwitch"], [3, "query", "ngClass", "column", "filter", 4, "ngSwitchCase"], [3, "query", "ngClass", "column", "filter", 4, "ngSwitchDefault"], [3, "query", "ngClass", "column", "filter"]], template: function DefaultFilterComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementContainerStart(0, 0);
        i0.ɵɵtemplate(1, DefaultFilterComponent_select_filter_1_Template, 1, 3, "select-filter", 1);
        i0.ɵɵtemplate(2, DefaultFilterComponent_checkbox_filter_2_Template, 1, 3, "checkbox-filter", 1);
        i0.ɵɵtemplate(3, DefaultFilterComponent_completer_filter_3_Template, 1, 3, "completer-filter", 1);
        i0.ɵɵtemplate(4, DefaultFilterComponent_input_filter_4_Template, 1, 3, "input-filter", 2);
        i0.ɵɵelementContainerEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngSwitch", ctx.column.getFilterType());
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", "list");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", "checkbox");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", "completer");
    } }, dependencies: [i1.NgClass, i1.NgSwitch, i1.NgSwitchCase, i1.NgSwitchDefault, i2.CheckboxFilterComponent, i3.CompleterFilterComponent, i4.InputFilterComponent, i5.SelectFilterComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DefaultFilterComponent, [{
        type: Component,
        args: [{
                selector: 'default-table-filter',
                template: `
    <ng-container [ngSwitch]="column.getFilterType()">
      <select-filter *ngSwitchCase="'list'"
                     [query]="query"
                     [ngClass]="inputClass"
                     [column]="column"
                     (filter)="onFilter($event)">
      </select-filter>
      <checkbox-filter *ngSwitchCase="'checkbox'"
                       [query]="query"
                       [ngClass]="inputClass"
                       [column]="column"
                       (filter)="onFilter($event)">
      </checkbox-filter>
      <completer-filter *ngSwitchCase="'completer'"
                        [query]="query"
                        [ngClass]="inputClass"
                        [column]="column"
                        (filter)="onFilter($event)">
      </completer-filter>
      <input-filter *ngSwitchDefault
                    [query]="query"
                    [ngClass]="inputClass"
                    [column]="column"
                    (filter)="onFilter($event)">
      </input-filter>
    </ng-container>
  `,
            }]
    }], null, { query: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1maWx0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmcyLXNtYXJ0LXRhYmxlL3NyYy9saWIvY29tcG9uZW50cy9maWx0ZXIvZGVmYXVsdC1maWx0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRS9DLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7O0lBTXpDLHdDQUkyQztJQUE1Qiw0TEFBVSxlQUFBLHVCQUFnQixDQUFBLElBQUM7SUFDMUMsaUJBQWdCOzs7SUFKRCxvQ0FBZSw4QkFBQSx5QkFBQTs7OztJQUs5QiwwQ0FJNkM7SUFBNUIsZ01BQVUsZUFBQSx1QkFBZ0IsQ0FBQSxJQUFDO0lBQzVDLGlCQUFrQjs7O0lBSkQsb0NBQWUsOEJBQUEseUJBQUE7Ozs7SUFLaEMsMkNBSThDO0lBQTVCLGtNQUFVLGVBQUEsdUJBQWdCLENBQUEsSUFBQztJQUM3QyxpQkFBbUI7OztJQUpELG9DQUFlLDhCQUFBLHlCQUFBOzs7O0lBS2pDLHVDQUkwQztJQUE1Qiw0TEFBVSxlQUFBLHdCQUFnQixDQUFBLElBQUM7SUFDekMsaUJBQWU7OztJQUpELG9DQUFlLDhCQUFBLHlCQUFBOztBQVFuQyxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsYUFBYTs7c1FBQTVDLHNCQUFzQixTQUF0QixzQkFBc0I7eUVBQXRCLHNCQUFzQjtRQTVCL0IsZ0NBQWtEO1FBQ2hELDJGQUtnQjtRQUNoQiwrRkFLa0I7UUFDbEIsaUdBS21CO1FBQ25CLHlGQUtlO1FBQ2pCLDBCQUFlOztRQXpCRCxxREFBbUM7UUFDL0IsZUFBb0I7UUFBcEIscUNBQW9CO1FBTWxCLGVBQXdCO1FBQXhCLHlDQUF3QjtRQU12QixlQUF5QjtRQUF6QiwwQ0FBeUI7O3VGQWVyQyxzQkFBc0I7Y0EvQmxDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTJCVDthQUNGO2dCQUVVLEtBQUs7a0JBQWIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7RmlsdGVyRGVmYXVsdH0gZnJvbSBcIi4vZmlsdGVyLWRlZmF1bHRcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGVmYXVsdC10YWJsZS1maWx0ZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cImNvbHVtbi5nZXRGaWx0ZXJUeXBlKClcIj5cbiAgICAgIDxzZWxlY3QtZmlsdGVyICpuZ1N3aXRjaENhc2U9XCInbGlzdCdcIlxuICAgICAgICAgICAgICAgICAgICAgW3F1ZXJ5XT1cInF1ZXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cImlucHV0Q2xhc3NcIlxuICAgICAgICAgICAgICAgICAgICAgW2NvbHVtbl09XCJjb2x1bW5cIlxuICAgICAgICAgICAgICAgICAgICAgKGZpbHRlcik9XCJvbkZpbHRlcigkZXZlbnQpXCI+XG4gICAgICA8L3NlbGVjdC1maWx0ZXI+XG4gICAgICA8Y2hlY2tib3gtZmlsdGVyICpuZ1N3aXRjaENhc2U9XCInY2hlY2tib3gnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgW3F1ZXJ5XT1cInF1ZXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwiaW5wdXRDbGFzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgIFtjb2x1bW5dPVwiY29sdW1uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgKGZpbHRlcik9XCJvbkZpbHRlcigkZXZlbnQpXCI+XG4gICAgICA8L2NoZWNrYm94LWZpbHRlcj5cbiAgICAgIDxjb21wbGV0ZXItZmlsdGVyICpuZ1N3aXRjaENhc2U9XCInY29tcGxldGVyJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBbcXVlcnldPVwicXVlcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwiaW5wdXRDbGFzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBbY29sdW1uXT1cImNvbHVtblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAoZmlsdGVyKT1cIm9uRmlsdGVyKCRldmVudClcIj5cbiAgICAgIDwvY29tcGxldGVyLWZpbHRlcj5cbiAgICAgIDxpbnB1dC1maWx0ZXIgKm5nU3dpdGNoRGVmYXVsdFxuICAgICAgICAgICAgICAgICAgICBbcXVlcnldPVwicXVlcnlcIlxuICAgICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJpbnB1dENsYXNzXCJcbiAgICAgICAgICAgICAgICAgICAgW2NvbHVtbl09XCJjb2x1bW5cIlxuICAgICAgICAgICAgICAgICAgICAoZmlsdGVyKT1cIm9uRmlsdGVyKCRldmVudClcIj5cbiAgICAgIDwvaW5wdXQtZmlsdGVyPlxuICAgIDwvbmctY29udGFpbmVyPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBEZWZhdWx0RmlsdGVyQ29tcG9uZW50IGV4dGVuZHMgRmlsdGVyRGVmYXVsdCB7XG4gIEBJbnB1dCgpIHF1ZXJ5OiBzdHJpbmc7XG59XG4iXX0=