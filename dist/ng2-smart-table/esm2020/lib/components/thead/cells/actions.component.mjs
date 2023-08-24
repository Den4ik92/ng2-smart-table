import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Grid } from '../../../lib/grid';
import * as i0 from "@angular/core";
export class ActionsComponent {
    constructor() {
        this.create = new EventEmitter();
    }
    ngOnChanges() {
        this.createButtonContent = this.grid.getSetting('add.createButtonContent');
        this.cancelButtonContent = this.grid.getSetting('add.cancelButtonContent');
    }
}
ActionsComponent.ɵfac = function ActionsComponent_Factory(t) { return new (t || ActionsComponent)(); };
ActionsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ActionsComponent, selectors: [["ng2-st-actions"]], inputs: { grid: "grid" }, outputs: { create: "create" }, features: [i0.ɵɵNgOnChangesFeature], decls: 2, vars: 2, consts: [["href", "#", 1, "ng2-smart-action", "ng2-smart-action-add-create", 3, "innerHTML", "click"], ["href", "#", 1, "ng2-smart-action", "ng2-smart-action-add-cancel", 3, "innerHTML", "click"]], template: function ActionsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "a", 0);
        i0.ɵɵlistener("click", function ActionsComponent_Template_a_click_0_listener($event) { $event.preventDefault(); return ctx.create.emit($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(1, "a", 1);
        i0.ɵɵlistener("click", function ActionsComponent_Template_a_click_1_listener($event) { $event.preventDefault(); return ctx.grid.createFormShown = false; });
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("innerHTML", ctx.createButtonContent, i0.ɵɵsanitizeHtml);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("innerHTML", ctx.cancelButtonContent, i0.ɵɵsanitizeHtml);
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ActionsComponent, [{
        type: Component,
        args: [{
                selector: 'ng2-st-actions',
                template: `
    <a href="#" class="ng2-smart-action ng2-smart-action-add-create"
        [innerHTML]="createButtonContent"
        (click)="$event.preventDefault();create.emit($event)"></a>
    <a href="#" class="ng2-smart-action ng2-smart-action-add-cancel"
        [innerHTML]="cancelButtonContent"
        (click)="$event.preventDefault();grid.createFormShown = false;"></a>
  `,
            }]
    }], null, { grid: [{
            type: Input
        }], create: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9ucy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZzItc21hcnQtdGFibGUvc3JjL2xpYi9jb21wb25lbnRzL3RoZWFkL2NlbGxzL2FjdGlvbnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFFakYsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLG1CQUFtQixDQUFDOztBQWF6QyxNQUFNLE9BQU8sZ0JBQWdCO0lBWDdCO1FBY1ksV0FBTSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7S0FTNUM7SUFKQyxXQUFXO1FBQ1QsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFDM0UsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDN0UsQ0FBQzs7Z0ZBWFUsZ0JBQWdCO21FQUFoQixnQkFBZ0I7UUFSekIsNEJBRTBEO1FBQXRELHVGQUFTLHVCQUF1QixTQUFDLHVCQUFtQixJQUFDO1FBQUMsaUJBQUk7UUFDOUQsNEJBRW9FO1FBQWhFLHVGQUFTLHVCQUF1QixvQ0FBd0IsS0FBSyxJQUFFO1FBQUMsaUJBQUk7O1FBSnBFLHNFQUFpQztRQUdqQyxlQUFpQztRQUFqQyxzRUFBaUM7O3VGQUk1QixnQkFBZ0I7Y0FYNUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFFBQVEsRUFBRTs7Ozs7OztHQU9UO2FBQ0Y7Z0JBR1UsSUFBSTtrQkFBWixLQUFLO1lBQ0ksTUFBTTtrQkFBZixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEdyaWQgfSBmcm9tICcuLi8uLi8uLi9saWIvZ3JpZCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nMi1zdC1hY3Rpb25zJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibmcyLXNtYXJ0LWFjdGlvbiBuZzItc21hcnQtYWN0aW9uLWFkZC1jcmVhdGVcIlxuICAgICAgICBbaW5uZXJIVE1MXT1cImNyZWF0ZUJ1dHRvbkNvbnRlbnRcIlxuICAgICAgICAoY2xpY2spPVwiJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7Y3JlYXRlLmVtaXQoJGV2ZW50KVwiPjwvYT5cbiAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibmcyLXNtYXJ0LWFjdGlvbiBuZzItc21hcnQtYWN0aW9uLWFkZC1jYW5jZWxcIlxuICAgICAgICBbaW5uZXJIVE1MXT1cImNhbmNlbEJ1dHRvbkNvbnRlbnRcIlxuICAgICAgICAoY2xpY2spPVwiJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7Z3JpZC5jcmVhdGVGb3JtU2hvd24gPSBmYWxzZTtcIj48L2E+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIEFjdGlvbnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG4gIEBJbnB1dCgpIGdyaWQ6IEdyaWQ7XG4gIEBPdXRwdXQoKSBjcmVhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBjcmVhdGVCdXR0b25Db250ZW50OiBzdHJpbmc7XG4gIGNhbmNlbEJ1dHRvbkNvbnRlbnQ6IHN0cmluZztcblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLmNyZWF0ZUJ1dHRvbkNvbnRlbnQgPSB0aGlzLmdyaWQuZ2V0U2V0dGluZygnYWRkLmNyZWF0ZUJ1dHRvbkNvbnRlbnQnKTtcbiAgICB0aGlzLmNhbmNlbEJ1dHRvbkNvbnRlbnQgPSB0aGlzLmdyaWQuZ2V0U2V0dGluZygnYWRkLmNhbmNlbEJ1dHRvbkNvbnRlbnQnKTtcbiAgfVxufVxuIl19