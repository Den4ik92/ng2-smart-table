import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Cell } from '../../../lib/data-set/cell';
import * as i0 from "@angular/core";
import * as i1 from "./custom-view.component";
export class ViewCellComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: ViewCellComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.3.12", type: ViewCellComponent, selector: "table-cell-view-mode", inputs: { cell: "cell" }, ngImport: i0, template: `
    <div>
      @switch (cell.getColumn().type) {
        @case ('custom') {
          <custom-view-component [cell]="cell"></custom-view-component>
        }
        @case ('html') {
          <div [innerHTML]="cell.getValue()"></div>
        }
        @default {
          <div>{{ cell.getValue() }}</div>
        }
      }
    </div>
    `, isInline: true, dependencies: [{ kind: "component", type: i1.CustomViewComponent, selector: "custom-view-component", inputs: ["cell"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: ViewCellComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'table-cell-view-mode',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: `
    <div>
      @switch (cell.getColumn().type) {
        @case ('custom') {
          <custom-view-component [cell]="cell"></custom-view-component>
        }
        @case ('html') {
          <div [innerHTML]="cell.getValue()"></div>
        }
        @default {
          <div>{{ cell.getValue() }}</div>
        }
      }
    </div>
    `,
                }]
        }], propDecorators: { cell: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy1jZWxsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nMi1zbWFydC10YWJsZS9zcmMvbGliL2NvbXBvbmVudHMvY2VsbC9jZWxsLXZpZXctbW9kZS92aWV3LWNlbGwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7O0FBcUJsRCxNQUFNLE9BQU8saUJBQWlCOytHQUFqQixpQkFBaUI7bUdBQWpCLGlCQUFpQixzRkFoQmxCOzs7Ozs7Ozs7Ozs7OztLQWNQOzs0RkFFUSxpQkFBaUI7a0JBbkI3QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7O0tBY1A7aUJBQ0o7OEJBRVUsSUFBSTtzQkFBWixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDZWxsIH0gZnJvbSAnLi4vLi4vLi4vbGliL2RhdGEtc2V0L2NlbGwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YWJsZS1jZWxsLXZpZXctbW9kZScsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXY+XG4gICAgICBAc3dpdGNoIChjZWxsLmdldENvbHVtbigpLnR5cGUpIHtcbiAgICAgICAgQGNhc2UgKCdjdXN0b20nKSB7XG4gICAgICAgICAgPGN1c3RvbS12aWV3LWNvbXBvbmVudCBbY2VsbF09XCJjZWxsXCI+PC9jdXN0b20tdmlldy1jb21wb25lbnQ+XG4gICAgICAgIH1cbiAgICAgICAgQGNhc2UgKCdodG1sJykge1xuICAgICAgICAgIDxkaXYgW2lubmVySFRNTF09XCJjZWxsLmdldFZhbHVlKClcIj48L2Rpdj5cbiAgICAgICAgfVxuICAgICAgICBAZGVmYXVsdCB7XG4gICAgICAgICAgPGRpdj57eyBjZWxsLmdldFZhbHVlKCkgfX08L2Rpdj5cbiAgICAgICAgfVxuICAgICAgfVxuICAgIDwvZGl2PlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIFZpZXdDZWxsQ29tcG9uZW50IHtcbiAgQElucHV0KCkgY2VsbCE6IENlbGw7XG59XG4iXX0=