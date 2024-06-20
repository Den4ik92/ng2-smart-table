import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, } from "@angular/core";
import { Row } from "../../../lib/data-set/row";
import { LocalDataSource } from "./../../../lib/data-source/local/local.data-source";
import { Grid } from "../../../lib/grid";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class TbodyCustomComponent {
    constructor() {
        this.custom = new EventEmitter();
    }
    onCustom(action) {
        this.custom.emit({
            action: action.name,
            data: this.row.getData(),
            source: this.source,
        });
    }
    customActions() {
        return this.grid.getSetting("actions.custom");
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TbodyCustomComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TbodyCustomComponent, selector: "ng2-st-tbody-custom", inputs: { grid: "grid", row: "row", source: "source" }, outputs: { custom: "custom" }, ngImport: i0, template: `
    <a
      *ngFor="let action of customActions()"
      [id]="'row-' + row.index + '_action-' + action.name + '-button'"
      href="#"
      class="ng2-smart-action ng2-smart-action-custom-custom"
      [innerHTML]="action.title"
      (click)="$event.stopPropagation(); $event.preventDefault(); onCustom(action)"
    ></a>
  `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TbodyCustomComponent, decorators: [{
            type: Component,
            args: [{
                    selector: "ng2-st-tbody-custom",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: `
    <a
      *ngFor="let action of customActions()"
      [id]="'row-' + row.index + '_action-' + action.name + '-button'"
      href="#"
      class="ng2-smart-action ng2-smart-action-custom-custom"
      [innerHTML]="action.title"
      (click)="$event.stopPropagation(); $event.preventDefault(); onCustom(action)"
    ></a>
  `,
                }]
        }], propDecorators: { grid: [{
                type: Input
            }], row: [{
                type: Input
            }], source: [{
                type: Input
            }], custom: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nMi1zbWFydC10YWJsZS9zcmMvbGliL2NvbXBvbmVudHMvdGJvZHkvY2VsbHMvY3VzdG9tLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBRXJGLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7O0FBaUJ6QyxNQUFNLE9BQU8sb0JBQW9CO0lBZGpDO1FBa0JZLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0tBYTVDO0lBWEMsUUFBUSxDQUFDLE1BQVc7UUFDbEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDZixNQUFNLEVBQUUsTUFBTSxDQUFDLElBQUk7WUFDbkIsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFO1lBQ3hCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtTQUNwQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsYUFBYTtRQUNYLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQXVDLGdCQUFnQixDQUFDLENBQUM7SUFDdEYsQ0FBQzsrR0FoQlUsb0JBQW9CO21HQUFwQixvQkFBb0Isa0pBWHJCOzs7Ozs7Ozs7R0FTVDs7NEZBRVUsb0JBQW9CO2tCQWRoQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxRQUFRLEVBQUU7Ozs7Ozs7OztHQVNUO2lCQUNGOzhCQUVVLElBQUk7c0JBQVosS0FBSztnQkFDRyxHQUFHO3NCQUFYLEtBQUs7Z0JBQ0csTUFBTTtzQkFBZCxLQUFLO2dCQUNJLE1BQU07c0JBQWYsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdyB9IGZyb20gXCIuLi8uLi8uLi9saWIvZGF0YS1zZXQvcm93XCI7XG5pbXBvcnQgeyBMb2NhbERhdGFTb3VyY2UgfSBmcm9tIFwiLi8uLi8uLi8uLi9saWIvZGF0YS1zb3VyY2UvbG9jYWwvbG9jYWwuZGF0YS1zb3VyY2VcIjtcblxuaW1wb3J0IHsgR3JpZCB9IGZyb20gXCIuLi8uLi8uLi9saWIvZ3JpZFwiO1xuaW1wb3J0IHsgU21hcnRUYWJsZUN1c3RvbUFjdGlvbiB9IGZyb20gXCIuLi8uLi8uLi9saWIvaW50ZXJmYWNlcy9zbWFydC10YWJsZS5tb2RlbHNcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIm5nMi1zdC10Ym9keS1jdXN0b21cIixcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGFcbiAgICAgICpuZ0Zvcj1cImxldCBhY3Rpb24gb2YgY3VzdG9tQWN0aW9ucygpXCJcbiAgICAgIFtpZF09XCIncm93LScgKyByb3cuaW5kZXggKyAnX2FjdGlvbi0nICsgYWN0aW9uLm5hbWUgKyAnLWJ1dHRvbidcIlxuICAgICAgaHJlZj1cIiNcIlxuICAgICAgY2xhc3M9XCJuZzItc21hcnQtYWN0aW9uIG5nMi1zbWFydC1hY3Rpb24tY3VzdG9tLWN1c3RvbVwiXG4gICAgICBbaW5uZXJIVE1MXT1cImFjdGlvbi50aXRsZVwiXG4gICAgICAoY2xpY2spPVwiJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpOyAkZXZlbnQucHJldmVudERlZmF1bHQoKTsgb25DdXN0b20oYWN0aW9uKVwiXG4gICAgPjwvYT5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgVGJvZHlDdXN0b21Db21wb25lbnQge1xuICBASW5wdXQoKSBncmlkITogR3JpZDtcbiAgQElucHV0KCkgcm93ITogUm93O1xuICBASW5wdXQoKSBzb3VyY2UhOiBMb2NhbERhdGFTb3VyY2U7XG4gIEBPdXRwdXQoKSBjdXN0b20gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBvbkN1c3RvbShhY3Rpb246IGFueSkge1xuICAgIHRoaXMuY3VzdG9tLmVtaXQoe1xuICAgICAgYWN0aW9uOiBhY3Rpb24ubmFtZSxcbiAgICAgIGRhdGE6IHRoaXMucm93LmdldERhdGEoKSxcbiAgICAgIHNvdXJjZTogdGhpcy5zb3VyY2UsXG4gICAgfSk7XG4gIH1cblxuICBjdXN0b21BY3Rpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmdyaWQuZ2V0U2V0dGluZzxTbWFydFRhYmxlQ3VzdG9tQWN0aW9uW10gfCB1bmRlZmluZWQ+KFwiYWN0aW9ucy5jdXN0b21cIik7XG4gIH1cbn1cbiJdfQ==