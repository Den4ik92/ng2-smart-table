import { Component, Input } from '@angular/core';
import { Grid } from '../../../lib/grid';
import { LocalDataSource } from '../../../lib/data-source/local/local.data-source';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
export class CheckboxSelectAllComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: CheckboxSelectAllComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: CheckboxSelectAllComponent, selector: "[ng2-st-checkbox-select-all]", inputs: { grid: "grid", source: "source" }, ngImport: i0, template: `
    <input type="checkbox" [ngModel]="this.grid.dataSet.isAllSelected">
  `, isInline: true, dependencies: [{ kind: "directive", type: i1.CheckboxControlValueAccessor, selector: "input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: CheckboxSelectAllComponent, decorators: [{
            type: Component,
            args: [{
                    selector: '[ng2-st-checkbox-select-all]',
                    template: `
    <input type="checkbox" [ngModel]="this.grid.dataSet.isAllSelected">
  `,
                }]
        }], propDecorators: { grid: [{
                type: Input
            }], source: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gtc2VsZWN0LWFsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZzItc21hcnQtdGFibGUvc3JjL2xpYi9jb21wb25lbnRzL3RoZWFkL2NlbGxzL2NoZWNrYm94LXNlbGVjdC1hbGwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sa0RBQWtELENBQUM7OztBQU9uRixNQUFNLE9BQU8sMEJBQTBCOytHQUExQiwwQkFBMEI7bUdBQTFCLDBCQUEwQixnSEFKM0I7O0dBRVQ7OzRGQUVVLDBCQUEwQjtrQkFOdEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsOEJBQThCO29CQUN4QyxRQUFRLEVBQUU7O0dBRVQ7aUJBQ0Y7OEJBR1UsSUFBSTtzQkFBWixLQUFLO2dCQUNHLE1BQU07c0JBQWQsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgR3JpZCB9IGZyb20gJy4uLy4uLy4uL2xpYi9ncmlkJztcbmltcG9ydCB7IExvY2FsRGF0YVNvdXJjZSB9IGZyb20gJy4uLy4uLy4uL2xpYi9kYXRhLXNvdXJjZS9sb2NhbC9sb2NhbC5kYXRhLXNvdXJjZSc7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdbbmcyLXN0LWNoZWNrYm94LXNlbGVjdC1hbGxdJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgW25nTW9kZWxdPVwidGhpcy5ncmlkLmRhdGFTZXQuaXNBbGxTZWxlY3RlZFwiPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBDaGVja2JveFNlbGVjdEFsbENvbXBvbmVudCB7XG5cbiAgQElucHV0KCkgZ3JpZCE6IEdyaWQ7XG4gIEBJbnB1dCgpIHNvdXJjZSE6IExvY2FsRGF0YVNvdXJjZTtcbn1cbiJdfQ==