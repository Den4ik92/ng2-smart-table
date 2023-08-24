import { Component } from '@angular/core';
import { FilterDefault } from './filter-default';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./default-filter.component";
import * as i3 from "./custom-filter.component";
function FilterComponent_div_0_custom_table_filter_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "custom-table-filter", 4);
    i0.ɵɵlistener("filter", function FilterComponent_div_0_custom_table_filter_1_Template_custom_table_filter_filter_0_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.onFilter($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("query", ctx_r1.query)("column", ctx_r1.column)("source", ctx_r1.source)("inputClass", ctx_r1.inputClass);
} }
function FilterComponent_div_0_default_table_filter_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "default-table-filter", 4);
    i0.ɵɵlistener("filter", function FilterComponent_div_0_default_table_filter_2_Template_default_table_filter_filter_0_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r5.onFilter($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("query", ctx_r2.query)("column", ctx_r2.column)("source", ctx_r2.source)("inputClass", ctx_r2.inputClass);
} }
function FilterComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵtemplate(1, FilterComponent_div_0_custom_table_filter_1_Template, 1, 4, "custom-table-filter", 2);
    i0.ɵɵtemplate(2, FilterComponent_div_0_default_table_filter_2_Template, 1, 4, "default-table-filter", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngSwitch", ctx_r0.column.getFilterType());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "custom");
} }
export class FilterComponent extends FilterDefault {
    constructor() {
        super(...arguments);
        this.query = '';
    }
    ngOnChanges(changes) {
        if (changes.source) {
            if (!changes.source.firstChange) {
                this.dataChangedSub.unsubscribe();
            }
            this.dataChangedSub = this.source.onChanged().subscribe((dataChanges) => {
                const filterConf = this.source.getFilter();
                if (filterConf && filterConf.filters && filterConf.filters.length === 0) {
                    this.query = '';
                    // add a check for existing filters an set the query if one exists for this column
                    // this covers instances where the filter is set by user code while maintaining existing functionality
                }
                else if (filterConf && filterConf.filters && filterConf.filters.length > 0) {
                    filterConf.filters.forEach((k, v) => {
                        if (k.field == this.column.id) {
                            this.query = k.search;
                        }
                    });
                }
            });
        }
    }
}
FilterComponent.ɵfac = /*@__PURE__*/ function () { let ɵFilterComponent_BaseFactory; return function FilterComponent_Factory(t) { return (ɵFilterComponent_BaseFactory || (ɵFilterComponent_BaseFactory = i0.ɵɵgetInheritedFactory(FilterComponent)))(t || FilterComponent); }; }();
FilterComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FilterComponent, selectors: [["ng2-smart-table-filter"]], features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], decls: 1, vars: 1, consts: [["class", "ng2-smart-filter", 3, "ngSwitch", 4, "ngIf"], [1, "ng2-smart-filter", 3, "ngSwitch"], [3, "query", "column", "source", "inputClass", "filter", 4, "ngSwitchCase"], [3, "query", "column", "source", "inputClass", "filter", 4, "ngSwitchDefault"], [3, "query", "column", "source", "inputClass", "filter"]], template: function FilterComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, FilterComponent_div_0_Template, 3, 2, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.column.isFilterable);
    } }, dependencies: [i1.NgIf, i1.NgSwitch, i1.NgSwitchCase, i1.NgSwitchDefault, i2.DefaultFilterComponent, i3.CustomFilterComponent], styles: ["[_nghost-%COMP%]   .ng2-smart-filter[_ngcontent-%COMP%]     input, [_nghost-%COMP%]   .ng2-smart-filter[_ngcontent-%COMP%]     select{width:100%;line-height:normal;padding:.375em .75em;font-weight:400}[_nghost-%COMP%]   .ng2-smart-filter[_ngcontent-%COMP%]     input[type=search]{box-sizing:inherit}[_nghost-%COMP%]   .ng2-smart-filter[_ngcontent-%COMP%]     .completer-dropdown-holder{font-weight:400}[_nghost-%COMP%]   .ng2-smart-filter[_ngcontent-%COMP%]     a{font-weight:400}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FilterComponent, [{
        type: Component,
        args: [{ selector: 'ng2-smart-table-filter', template: `
      <div class="ng2-smart-filter" *ngIf="column.isFilterable" [ngSwitch]="column.getFilterType()">
        <custom-table-filter *ngSwitchCase="'custom'"
                             [query]="query"
                             [column]="column"
                             [source]="source"
                             [inputClass]="inputClass"
                             (filter)="onFilter($event)">
        </custom-table-filter>
        <default-table-filter *ngSwitchDefault
                              [query]="query"
                              [column]="column"
                              [source]="source"
                              [inputClass]="inputClass"
                              (filter)="onFilter($event)">
        </default-table-filter>
      </div>
    `, styles: [":host .ng2-smart-filter ::ng-deep input,:host .ng2-smart-filter ::ng-deep select{width:100%;line-height:normal;padding:.375em .75em;font-weight:400}:host .ng2-smart-filter ::ng-deep input[type=search]{box-sizing:inherit}:host .ng2-smart-filter ::ng-deep .completer-dropdown-holder{font-weight:400}:host .ng2-smart-filter ::ng-deep a{font-weight:400}\n"] }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nMi1zbWFydC10YWJsZS9zcmMvbGliL2NvbXBvbmVudHMvZmlsdGVyL2ZpbHRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFDcEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7Ozs7O0lBUXpDLDhDQUtpRDtJQUE1Qix3TUFBVSxlQUFBLHVCQUFnQixDQUFBLElBQUM7SUFDaEQsaUJBQXNCOzs7SUFMRCxvQ0FBZSx5QkFBQSx5QkFBQSxpQ0FBQTs7OztJQU1wQywrQ0FLa0Q7SUFBNUIsME1BQVUsZUFBQSx1QkFBZ0IsQ0FBQSxJQUFDO0lBQ2pELGlCQUF1Qjs7O0lBTEQsb0NBQWUseUJBQUEseUJBQUEsaUNBQUE7OztJQVR2Qyw4QkFBOEY7SUFDNUYsc0dBTXNCO0lBQ3RCLHdHQU11QjtJQUN6QixpQkFBTTs7O0lBZm9ELHdEQUFtQztJQUNyRSxlQUFzQjtJQUF0Qix1Q0FBc0I7O0FBaUJwRCxNQUFNLE9BQU8sZUFBZ0IsU0FBUSxhQUFhO0lBdEJsRDs7UUF1QkUsVUFBSyxHQUFXLEVBQUUsQ0FBQztLQXlCcEI7SUF0QkMsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTtZQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUU7Z0JBQy9CLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDbkM7WUFDRCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQUU7Z0JBQ3RFLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQzNDLElBQUksVUFBVSxJQUFJLFVBQVUsQ0FBQyxPQUFPLElBQUksVUFBVSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO29CQUN2RSxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztvQkFFaEIsa0ZBQWtGO29CQUNsRixzR0FBc0c7aUJBQ3ZHO3FCQUFNLElBQUksVUFBVSxJQUFJLFVBQVUsQ0FBQyxPQUFPLElBQUksVUFBVSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO29CQUM1RSxVQUFVLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQU0sRUFBRSxDQUFNLEVBQUUsRUFBRTt3QkFDNUMsSUFBSSxDQUFDLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFOzRCQUM3QixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUM7eUJBQ3ZCO29CQUNILENBQUMsQ0FBQyxDQUFDO2lCQUNKO1lBQ0gsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7O21PQXpCVSxlQUFlLFNBQWYsZUFBZTtrRUFBZixlQUFlO1FBbEJ0QixnRUFlTTs7UUFmeUIsOENBQXlCOzt1RkFrQmpELGVBQWU7Y0F0QjNCLFNBQVM7MkJBQ0Usd0JBQXdCLFlBRXhCOzs7Ozs7Ozs7Ozs7Ozs7OztLQWlCUCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGaWx0ZXJEZWZhdWx0IH0gZnJvbSAnLi9maWx0ZXItZGVmYXVsdCc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmcyLXNtYXJ0LXRhYmxlLWZpbHRlcicsXG4gIHN0eWxlVXJsczogWycuL2ZpbHRlci5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgPGRpdiBjbGFzcz1cIm5nMi1zbWFydC1maWx0ZXJcIiAqbmdJZj1cImNvbHVtbi5pc0ZpbHRlcmFibGVcIiBbbmdTd2l0Y2hdPVwiY29sdW1uLmdldEZpbHRlclR5cGUoKVwiPlxuICAgICAgICA8Y3VzdG9tLXRhYmxlLWZpbHRlciAqbmdTd2l0Y2hDYXNlPVwiJ2N1c3RvbSdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcXVlcnldPVwicXVlcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY29sdW1uXT1cImNvbHVtblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzb3VyY2VdPVwic291cmNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2lucHV0Q2xhc3NdPVwiaW5wdXRDbGFzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIChmaWx0ZXIpPVwib25GaWx0ZXIoJGV2ZW50KVwiPlxuICAgICAgICA8L2N1c3RvbS10YWJsZS1maWx0ZXI+XG4gICAgICAgIDxkZWZhdWx0LXRhYmxlLWZpbHRlciAqbmdTd2l0Y2hEZWZhdWx0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcXVlcnldPVwicXVlcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NvbHVtbl09XCJjb2x1bW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3NvdXJjZV09XCJzb3VyY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2lucHV0Q2xhc3NdPVwiaW5wdXRDbGFzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZmlsdGVyKT1cIm9uRmlsdGVyKCRldmVudClcIj5cbiAgICAgICAgPC9kZWZhdWx0LXRhYmxlLWZpbHRlcj5cbiAgICAgIDwvZGl2PlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIEZpbHRlckNvbXBvbmVudCBleHRlbmRzIEZpbHRlckRlZmF1bHQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBxdWVyeTogc3RyaW5nID0gJyc7XG4gIHByb3RlY3RlZCBkYXRhQ2hhbmdlZFN1YjogU3Vic2NyaXB0aW9uO1xuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoY2hhbmdlcy5zb3VyY2UpIHtcbiAgICAgIGlmICghY2hhbmdlcy5zb3VyY2UuZmlyc3RDaGFuZ2UpIHtcbiAgICAgICAgdGhpcy5kYXRhQ2hhbmdlZFN1Yi51bnN1YnNjcmliZSgpO1xuICAgICAgfVxuICAgICAgdGhpcy5kYXRhQ2hhbmdlZFN1YiA9IHRoaXMuc291cmNlLm9uQ2hhbmdlZCgpLnN1YnNjcmliZSgoZGF0YUNoYW5nZXMpID0+IHtcbiAgICAgICAgY29uc3QgZmlsdGVyQ29uZiA9IHRoaXMuc291cmNlLmdldEZpbHRlcigpO1xuICAgICAgICBpZiAoZmlsdGVyQ29uZiAmJiBmaWx0ZXJDb25mLmZpbHRlcnMgJiYgZmlsdGVyQ29uZi5maWx0ZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMucXVlcnkgPSAnJztcblxuICAgICAgICAgIC8vIGFkZCBhIGNoZWNrIGZvciBleGlzdGluZyBmaWx0ZXJzIGFuIHNldCB0aGUgcXVlcnkgaWYgb25lIGV4aXN0cyBmb3IgdGhpcyBjb2x1bW5cbiAgICAgICAgICAvLyB0aGlzIGNvdmVycyBpbnN0YW5jZXMgd2hlcmUgdGhlIGZpbHRlciBpcyBzZXQgYnkgdXNlciBjb2RlIHdoaWxlIG1haW50YWluaW5nIGV4aXN0aW5nIGZ1bmN0aW9uYWxpdHlcbiAgICAgICAgfSBlbHNlIGlmIChmaWx0ZXJDb25mICYmIGZpbHRlckNvbmYuZmlsdGVycyAmJiBmaWx0ZXJDb25mLmZpbHRlcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGZpbHRlckNvbmYuZmlsdGVycy5mb3JFYWNoKChrOiBhbnksIHY6IGFueSkgPT4ge1xuICAgICAgICAgICAgaWYgKGsuZmllbGQgPT0gdGhpcy5jb2x1bW4uaWQpIHtcbiAgICAgICAgICAgICAgdGhpcy5xdWVyeSA9IGsuc2VhcmNoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==