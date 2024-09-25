import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Cell } from '../../../lib/data-set/cell';
import * as i0 from "@angular/core";
import * as i1 from "./custom-edit.component";
import * as i2 from "./default-edit.component";
export class EditCellComponent {
    constructor() {
        this.inputClass = '';
        this.edited = new EventEmitter();
    }
    onEdited(event) {
        this.edited.next(event);
        return false;
    }
    getEditorType() {
        const editor = this.cell.getColumn().editor;
        if (editor) {
            return editor.type;
        }
        return 'text';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: EditCellComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.3.12", type: EditCellComponent, selector: "table-cell-edit-mode", inputs: { cell: "cell", inputClass: "inputClass" }, outputs: { edited: "edited" }, ngImport: i0, template: `
      <div>
        @switch (getEditorType()) {
          @case ('custom') {
            <table-cell-custom-editor
              [cell]="cell"
              [inputClass]="inputClass"
              (edited)="onEdited($event)">
            </table-cell-custom-editor>
          }
          @default {
            <table-cell-default-editor
              [cell]="cell"
              [inputClass]="inputClass"
              (edited)="onEdited($event)">
            </table-cell-default-editor>
          }
        }
      </div>
      `, isInline: true, dependencies: [{ kind: "component", type: i1.CustomEditComponent, selector: "table-cell-custom-editor" }, { kind: "component", type: i2.DefaultEditComponent, selector: "table-cell-default-editor" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: EditCellComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'table-cell-edit-mode',
                    template: `
      <div>
        @switch (getEditorType()) {
          @case ('custom') {
            <table-cell-custom-editor
              [cell]="cell"
              [inputClass]="inputClass"
              (edited)="onEdited($event)">
            </table-cell-custom-editor>
          }
          @default {
            <table-cell-default-editor
              [cell]="cell"
              [inputClass]="inputClass"
              (edited)="onEdited($event)">
            </table-cell-default-editor>
          }
        }
      </div>
      `,
                }]
        }], propDecorators: { cell: [{
                type: Input
            }], inputClass: [{
                type: Input
            }], edited: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1jZWxsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nMi1zbWFydC10YWJsZS9zcmMvbGliL2NvbXBvbmVudHMvY2VsbC9jZWxsLWVkaXQtbW9kZS9lZGl0LWNlbGwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdkUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLDRCQUE0QixDQUFDOzs7O0FBMEJsRCxNQUFNLE9BQU8saUJBQWlCO0lBdkI5QjtRQTBCVyxlQUFVLEdBQVcsRUFBRSxDQUFDO1FBRXZCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0tBYzVDO0lBWkMsUUFBUSxDQUFDLEtBQVU7UUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEIsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQsYUFBYTtRQUNYLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsTUFBTSxDQUFBO1FBQzNDLElBQUksTUFBTSxFQUFFLENBQUM7WUFDWCxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUE7UUFDcEIsQ0FBQztRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7K0dBbEJVLGlCQUFpQjttR0FBakIsaUJBQWlCLCtJQXJCbEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FtQkw7OzRGQUVNLGlCQUFpQjtrQkF2QjdCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtvQkFDaEMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BbUJMO2lCQUNOOzhCQUdVLElBQUk7c0JBQVosS0FBSztnQkFDRyxVQUFVO3NCQUFsQixLQUFLO2dCQUVJLE1BQU07c0JBQWYsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENlbGwgfSBmcm9tICcuLi8uLi8uLi9saWIvZGF0YS1zZXQvY2VsbCc7XG5pbXBvcnQgeyBTbWFydFRhYmxlRWRpdG9yQW5kRmlsdGVyVHlwZXMgfSBmcm9tICcuLi8uLi8uLi9saWIvaW50ZXJmYWNlcy9zbWFydC10YWJsZS5tb2RlbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YWJsZS1jZWxsLWVkaXQtbW9kZScsXG4gIHRlbXBsYXRlOiBgXG4gICAgICA8ZGl2PlxuICAgICAgICBAc3dpdGNoIChnZXRFZGl0b3JUeXBlKCkpIHtcbiAgICAgICAgICBAY2FzZSAoJ2N1c3RvbScpIHtcbiAgICAgICAgICAgIDx0YWJsZS1jZWxsLWN1c3RvbS1lZGl0b3JcbiAgICAgICAgICAgICAgW2NlbGxdPVwiY2VsbFwiXG4gICAgICAgICAgICAgIFtpbnB1dENsYXNzXT1cImlucHV0Q2xhc3NcIlxuICAgICAgICAgICAgICAoZWRpdGVkKT1cIm9uRWRpdGVkKCRldmVudClcIj5cbiAgICAgICAgICAgIDwvdGFibGUtY2VsbC1jdXN0b20tZWRpdG9yPlxuICAgICAgICAgIH1cbiAgICAgICAgICBAZGVmYXVsdCB7XG4gICAgICAgICAgICA8dGFibGUtY2VsbC1kZWZhdWx0LWVkaXRvclxuICAgICAgICAgICAgICBbY2VsbF09XCJjZWxsXCJcbiAgICAgICAgICAgICAgW2lucHV0Q2xhc3NdPVwiaW5wdXRDbGFzc1wiXG4gICAgICAgICAgICAgIChlZGl0ZWQpPVwib25FZGl0ZWQoJGV2ZW50KVwiPlxuICAgICAgICAgICAgPC90YWJsZS1jZWxsLWRlZmF1bHQtZWRpdG9yPlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgICBgLFxufSlcbmV4cG9ydCBjbGFzcyBFZGl0Q2VsbENvbXBvbmVudCB7XG5cbiAgQElucHV0KCkgY2VsbCE6IENlbGw7XG4gIEBJbnB1dCgpIGlucHV0Q2xhc3M6IHN0cmluZyA9ICcnO1xuXG4gIEBPdXRwdXQoKSBlZGl0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBvbkVkaXRlZChldmVudDogYW55KTogYm9vbGVhbiB7XG4gICAgdGhpcy5lZGl0ZWQubmV4dChldmVudCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZ2V0RWRpdG9yVHlwZSgpOiBTbWFydFRhYmxlRWRpdG9yQW5kRmlsdGVyVHlwZXMge1xuICAgIGNvbnN0IGVkaXRvciA9IHRoaXMuY2VsbC5nZXRDb2x1bW4oKS5lZGl0b3JcbiAgICBpZiAoZWRpdG9yKSB7XG4gICAgICByZXR1cm4gZWRpdG9yLnR5cGVcbiAgICB9XG4gICAgcmV0dXJuICd0ZXh0JztcbiAgfVxufVxuIl19