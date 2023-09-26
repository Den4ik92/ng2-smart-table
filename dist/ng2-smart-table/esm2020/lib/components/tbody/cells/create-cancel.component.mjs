import { Component, Input, EventEmitter } from '@angular/core';
import { Grid } from '../../../lib/grid';
import { Row } from '../../../lib/data-set/row';
import * as i0 from "@angular/core";
export class TbodyCreateCancelComponent {
    onSave(event) {
        event.preventDefault();
        event.stopPropagation();
        this.grid.save(this.row, this.editConfirm);
    }
    onCancelEdit(event) {
        event.preventDefault();
        event.stopPropagation();
        this.editCancel.emit(true);
        this.row.isInEditing = false;
    }
    ngOnChanges() {
        this.saveButtonContent = this.grid.getSetting('edit.saveButtonContent');
        this.cancelButtonContent = this.grid.getSetting('edit.cancelButtonContent');
    }
}
TbodyCreateCancelComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: TbodyCreateCancelComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
TbodyCreateCancelComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: TbodyCreateCancelComponent, selector: "ng2-st-tbody-create-cancel", inputs: { grid: "grid", row: "row", editConfirm: "editConfirm", editCancel: "editCancel" }, usesOnChanges: true, ngImport: i0, template: `
    <a href="#" class="ng2-smart-action ng2-smart-action-edit-save"
        [innerHTML]="saveButtonContent" (click)="onSave($event)"></a>
    <a href="#" class="ng2-smart-action ng2-smart-action-edit-cancel"
        [innerHTML]="cancelButtonContent" (click)="onCancelEdit($event)"></a>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: TbodyCreateCancelComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ng2-st-tbody-create-cancel',
                    template: `
    <a href="#" class="ng2-smart-action ng2-smart-action-edit-save"
        [innerHTML]="saveButtonContent" (click)="onSave($event)"></a>
    <a href="#" class="ng2-smart-action ng2-smart-action-edit-cancel"
        [innerHTML]="cancelButtonContent" (click)="onCancelEdit($event)"></a>
  `,
                }]
        }], propDecorators: { grid: [{
                type: Input
            }], row: [{
                type: Input
            }], editConfirm: [{
                type: Input
            }], editCancel: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLWNhbmNlbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZzItc21hcnQtdGFibGUvc3JjL2xpYi9jb21wb25lbnRzL3Rib2R5L2NlbGxzL2NyZWF0ZS1jYW5jZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUUxRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDekMsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLDJCQUEyQixDQUFDOztBQVdoRCxNQUFNLE9BQU8sMEJBQTBCO0lBVXJDLE1BQU0sQ0FBQyxLQUFVO1FBQ2YsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsWUFBWSxDQUFDLEtBQVU7UUFDckIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDL0IsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUN4RSxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsMEJBQTBCLENBQUMsQ0FBQTtJQUM3RSxDQUFDOzt1SEExQlUsMEJBQTBCOzJHQUExQiwwQkFBMEIsbUxBUDNCOzs7OztHQUtUOzJGQUVVLDBCQUEwQjtrQkFUdEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsNEJBQTRCO29CQUN0QyxRQUFRLEVBQUU7Ozs7O0dBS1Q7aUJBQ0Y7OEJBR1UsSUFBSTtzQkFBWixLQUFLO2dCQUNHLEdBQUc7c0JBQVgsS0FBSztnQkFDRyxXQUFXO3NCQUFuQixLQUFLO2dCQUNHLFVBQVU7c0JBQWxCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBHcmlkIH0gZnJvbSAnLi4vLi4vLi4vbGliL2dyaWQnO1xuaW1wb3J0IHsgUm93IH0gZnJvbSAnLi4vLi4vLi4vbGliL2RhdGEtc2V0L3Jvdyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nMi1zdC10Ym9keS1jcmVhdGUtY2FuY2VsJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibmcyLXNtYXJ0LWFjdGlvbiBuZzItc21hcnQtYWN0aW9uLWVkaXQtc2F2ZVwiXG4gICAgICAgIFtpbm5lckhUTUxdPVwic2F2ZUJ1dHRvbkNvbnRlbnRcIiAoY2xpY2spPVwib25TYXZlKCRldmVudClcIj48L2E+XG4gICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm5nMi1zbWFydC1hY3Rpb24gbmcyLXNtYXJ0LWFjdGlvbi1lZGl0LWNhbmNlbFwiXG4gICAgICAgIFtpbm5lckhUTUxdPVwiY2FuY2VsQnV0dG9uQ29udGVudFwiIChjbGljayk9XCJvbkNhbmNlbEVkaXQoJGV2ZW50KVwiPjwvYT5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgVGJvZHlDcmVhdGVDYW5jZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG4gIEBJbnB1dCgpIGdyaWQ6IEdyaWQ7XG4gIEBJbnB1dCgpIHJvdzogUm93O1xuICBASW5wdXQoKSBlZGl0Q29uZmlybTogRXZlbnRFbWl0dGVyPGFueT47XG4gIEBJbnB1dCgpIGVkaXRDYW5jZWw6IEV2ZW50RW1pdHRlcjxhbnk+O1xuXG4gIGNhbmNlbEJ1dHRvbkNvbnRlbnQ6IHN0cmluZztcbiAgc2F2ZUJ1dHRvbkNvbnRlbnQ6IHN0cmluZztcblxuICBvblNhdmUoZXZlbnQ6IGFueSkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5ncmlkLnNhdmUodGhpcy5yb3csIHRoaXMuZWRpdENvbmZpcm0pO1xuICB9XG5cbiAgb25DYW5jZWxFZGl0KGV2ZW50OiBhbnkpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuZWRpdENhbmNlbC5lbWl0KHRydWUpO1xuICAgIHRoaXMucm93LmlzSW5FZGl0aW5nID0gZmFsc2U7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLnNhdmVCdXR0b25Db250ZW50ID0gdGhpcy5ncmlkLmdldFNldHRpbmcoJ2VkaXQuc2F2ZUJ1dHRvbkNvbnRlbnQnKTtcbiAgICB0aGlzLmNhbmNlbEJ1dHRvbkNvbnRlbnQgPSB0aGlzLmdyaWQuZ2V0U2V0dGluZygnZWRpdC5jYW5jZWxCdXR0b25Db250ZW50JylcbiAgfVxufVxuIl19