import { Component } from '@angular/core';
import { FilterDefault } from "./filter-default";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./filter-types/checkbox-filter.component";
import * as i3 from "./filter-types/input-filter.component";
import * as i4 from "./filter-types/select-filter.component";
export class DefaultFilterComponent extends FilterDefault {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: DefaultFilterComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.3.12", type: DefaultFilterComponent, selector: "default-table-filter", usesInheritance: true, ngImport: i0, template: `
@switch (column.getFilterType()) {
  @case ('list') {
    <select-filter
      [query]="query"
      [ngClass]="inputClass"
      [column]="column"
      (filter)="onFilter($event)">
    </select-filter>
  }
  @case ('checkbox') {
    <checkbox-filter
      [query]="query"
      [ngClass]="inputClass"
      [column]="column"
      (filter)="onFilter($event)">
    </checkbox-filter>
  }
  @default {
    <input-filter
      [query]="query"
      [ngClass]="inputClass"
      [column]="column"
      (filter)="onFilter($event)">
  </input-filter>
}
}
`, isInline: true, dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "component", type: i2.CheckboxFilterComponent, selector: "checkbox-filter" }, { kind: "component", type: i3.InputFilterComponent, selector: "input-filter" }, { kind: "component", type: i4.SelectFilterComponent, selector: "select-filter" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: DefaultFilterComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'default-table-filter',
                    template: `
@switch (column.getFilterType()) {
  @case ('list') {
    <select-filter
      [query]="query"
      [ngClass]="inputClass"
      [column]="column"
      (filter)="onFilter($event)">
    </select-filter>
  }
  @case ('checkbox') {
    <checkbox-filter
      [query]="query"
      [ngClass]="inputClass"
      [column]="column"
      (filter)="onFilter($event)">
    </checkbox-filter>
  }
  @default {
    <input-filter
      [query]="query"
      [ngClass]="inputClass"
      [column]="column"
      (filter)="onFilter($event)">
  </input-filter>
}
}
`,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1maWx0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmcyLXNtYXJ0LXRhYmxlL3NyYy9saWIvY29tcG9uZW50cy9maWx0ZXIvZGVmYXVsdC1maWx0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQVEsTUFBTSxlQUFlLENBQUM7QUFFL0MsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGtCQUFrQixDQUFDOzs7Ozs7QUFpQy9DLE1BQU0sT0FBTyxzQkFBdUIsU0FBUSxhQUFhOytHQUE1QyxzQkFBc0I7bUdBQXRCLHNCQUFzQixtRkE3QnZCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0EyQlg7OzRGQUVZLHNCQUFzQjtrQkEvQmxDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtvQkFDaEMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0EyQlg7aUJBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge0ZpbHRlckRlZmF1bHR9IGZyb20gXCIuL2ZpbHRlci1kZWZhdWx0XCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RlZmF1bHQtdGFibGUtZmlsdGVyJyxcbiAgdGVtcGxhdGU6IGBcbkBzd2l0Y2ggKGNvbHVtbi5nZXRGaWx0ZXJUeXBlKCkpIHtcbiAgQGNhc2UgKCdsaXN0Jykge1xuICAgIDxzZWxlY3QtZmlsdGVyXG4gICAgICBbcXVlcnldPVwicXVlcnlcIlxuICAgICAgW25nQ2xhc3NdPVwiaW5wdXRDbGFzc1wiXG4gICAgICBbY29sdW1uXT1cImNvbHVtblwiXG4gICAgICAoZmlsdGVyKT1cIm9uRmlsdGVyKCRldmVudClcIj5cbiAgICA8L3NlbGVjdC1maWx0ZXI+XG4gIH1cbiAgQGNhc2UgKCdjaGVja2JveCcpIHtcbiAgICA8Y2hlY2tib3gtZmlsdGVyXG4gICAgICBbcXVlcnldPVwicXVlcnlcIlxuICAgICAgW25nQ2xhc3NdPVwiaW5wdXRDbGFzc1wiXG4gICAgICBbY29sdW1uXT1cImNvbHVtblwiXG4gICAgICAoZmlsdGVyKT1cIm9uRmlsdGVyKCRldmVudClcIj5cbiAgICA8L2NoZWNrYm94LWZpbHRlcj5cbiAgfVxuICBAZGVmYXVsdCB7XG4gICAgPGlucHV0LWZpbHRlclxuICAgICAgW3F1ZXJ5XT1cInF1ZXJ5XCJcbiAgICAgIFtuZ0NsYXNzXT1cImlucHV0Q2xhc3NcIlxuICAgICAgW2NvbHVtbl09XCJjb2x1bW5cIlxuICAgICAgKGZpbHRlcik9XCJvbkZpbHRlcigkZXZlbnQpXCI+XG4gIDwvaW5wdXQtZmlsdGVyPlxufVxufVxuYCxcbn0pXG5leHBvcnQgY2xhc3MgRGVmYXVsdEZpbHRlckNvbXBvbmVudCBleHRlbmRzIEZpbHRlckRlZmF1bHQgeyAgXG5cbn1cbiJdfQ==