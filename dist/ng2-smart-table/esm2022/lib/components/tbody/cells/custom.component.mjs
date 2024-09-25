import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, } from "@angular/core";
import { Row } from "../../../lib/data-set/row";
import { LocalDataSource } from "./../../../lib/data-source/local/local.data-source";
import { Grid } from "../../../lib/grid";
import * as i0 from "@angular/core";
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: TbodyCustomComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.3.12", type: TbodyCustomComponent, selector: "ng2-st-tbody-custom", inputs: { grid: "grid", row: "row", source: "source" }, outputs: { custom: "custom" }, ngImport: i0, template: `
    @for (action of customActions(); track action) {
      <a
        [id]="'row-' + row.index + '_action-' + action.name + '-button'"
        href="#"
        class="ng2-smart-action ng2-smart-action-custom-custom"
        [innerHTML]="action.title"
        (click)="$event.stopPropagation(); $event.preventDefault(); onCustom(action)"
      ></a>
    }
    `, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: TbodyCustomComponent, decorators: [{
            type: Component,
            args: [{
                    selector: "ng2-st-tbody-custom",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: `
    @for (action of customActions(); track action) {
      <a
        [id]="'row-' + row.index + '_action-' + action.name + '-button'"
        href="#"
        class="ng2-smart-action ng2-smart-action-custom-custom"
        [innerHTML]="action.title"
        (click)="$event.stopPropagation(); $event.preventDefault(); onCustom(action)"
      ></a>
    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nMi1zbWFydC10YWJsZS9zcmMvbGliL2NvbXBvbmVudHMvdGJvZHkvY2VsbHMvY3VzdG9tLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBRXJGLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7QUFrQnpDLE1BQU0sT0FBTyxvQkFBb0I7SUFmakM7UUFtQlksV0FBTSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7S0FhNUM7SUFYQyxRQUFRLENBQUMsTUFBVztRQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNmLE1BQU0sRUFBRSxNQUFNLENBQUMsSUFBSTtZQUNuQixJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUU7WUFDeEIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1NBQ3BCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxhQUFhO1FBQ1gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBdUMsZ0JBQWdCLENBQUMsQ0FBQztJQUN0RixDQUFDOytHQWhCVSxvQkFBb0I7bUdBQXBCLG9CQUFvQixrSkFackI7Ozs7Ozs7Ozs7S0FVUDs7NEZBRVEsb0JBQW9CO2tCQWZoQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7S0FVUDtpQkFDSjs4QkFFVSxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csR0FBRztzQkFBWCxLQUFLO2dCQUNHLE1BQU07c0JBQWQsS0FBSztnQkFDSSxNQUFNO3NCQUFmLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPdXRwdXQsXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3cgfSBmcm9tIFwiLi4vLi4vLi4vbGliL2RhdGEtc2V0L3Jvd1wiO1xuaW1wb3J0IHsgTG9jYWxEYXRhU291cmNlIH0gZnJvbSBcIi4vLi4vLi4vLi4vbGliL2RhdGEtc291cmNlL2xvY2FsL2xvY2FsLmRhdGEtc291cmNlXCI7XG5cbmltcG9ydCB7IEdyaWQgfSBmcm9tIFwiLi4vLi4vLi4vbGliL2dyaWRcIjtcbmltcG9ydCB7IFNtYXJ0VGFibGVDdXN0b21BY3Rpb24gfSBmcm9tIFwiLi4vLi4vLi4vbGliL2ludGVyZmFjZXMvc21hcnQtdGFibGUubW9kZWxzXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJuZzItc3QtdGJvZHktY3VzdG9tXCIsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogYFxuICAgIEBmb3IgKGFjdGlvbiBvZiBjdXN0b21BY3Rpb25zKCk7IHRyYWNrIGFjdGlvbikge1xuICAgICAgPGFcbiAgICAgICAgW2lkXT1cIidyb3ctJyArIHJvdy5pbmRleCArICdfYWN0aW9uLScgKyBhY3Rpb24ubmFtZSArICctYnV0dG9uJ1wiXG4gICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgY2xhc3M9XCJuZzItc21hcnQtYWN0aW9uIG5nMi1zbWFydC1hY3Rpb24tY3VzdG9tLWN1c3RvbVwiXG4gICAgICAgIFtpbm5lckhUTUxdPVwiYWN0aW9uLnRpdGxlXCJcbiAgICAgICAgKGNsaWNrKT1cIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKTsgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IG9uQ3VzdG9tKGFjdGlvbilcIlxuICAgICAgPjwvYT5cbiAgICB9XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgVGJvZHlDdXN0b21Db21wb25lbnQge1xuICBASW5wdXQoKSBncmlkITogR3JpZDtcbiAgQElucHV0KCkgcm93ITogUm93O1xuICBASW5wdXQoKSBzb3VyY2UhOiBMb2NhbERhdGFTb3VyY2U7XG4gIEBPdXRwdXQoKSBjdXN0b20gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBvbkN1c3RvbShhY3Rpb246IGFueSkge1xuICAgIHRoaXMuY3VzdG9tLmVtaXQoe1xuICAgICAgYWN0aW9uOiBhY3Rpb24ubmFtZSxcbiAgICAgIGRhdGE6IHRoaXMucm93LmdldERhdGEoKSxcbiAgICAgIHNvdXJjZTogdGhpcy5zb3VyY2UsXG4gICAgfSk7XG4gIH1cblxuICBjdXN0b21BY3Rpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmdyaWQuZ2V0U2V0dGluZzxTbWFydFRhYmxlQ3VzdG9tQWN0aW9uW10gfCB1bmRlZmluZWQ+KFwiYWN0aW9ucy5jdXN0b21cIik7XG4gIH1cbn1cbiJdfQ==