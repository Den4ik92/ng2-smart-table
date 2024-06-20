import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Row } from "../../../lib/data-set/row";
import { LocalDataSource } from "../../../lib/data-source/local/local.data-source";
import { Grid } from "../../../lib/grid";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class TbodyEditDeleteComponent {
    constructor() {
        this.edit = new EventEmitter();
        this.delete = new EventEmitter();
        this.editRowSelect = new EventEmitter();
        this.isActionEdit = false;
        this.isActionDelete = false;
        this.editRowButtonContent = "";
        this.deleteRowButtonContent = "";
    }
    onEdit(event) {
        event.preventDefault();
        event.stopPropagation();
        this.editRowSelect.emit(this.row);
        this.edit.emit({
            data: this.row.getData(),
            source: this.source,
        });
        if (this.grid.getSetting("mode") !== "external") {
            this.grid.edit(this.row);
        }
    }
    onDelete(event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.grid.getSetting("mode") === "external") {
            this.delete.emit({
                data: this.row.getData(),
                source: this.source,
            });
        }
        else {
            this.grid.delete(this.row, this.deleteConfirm);
        }
    }
    ngOnChanges() {
        this.isActionEdit = this.grid.getSetting("actions.edit");
        this.isActionDelete = this.grid.getSetting("actions.delete");
        this.editRowButtonContent = this.grid.getSetting("edit.editButtonContent");
        this.deleteRowButtonContent = this.grid.getSetting("delete.deleteButtonContent");
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TbodyEditDeleteComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TbodyEditDeleteComponent, selector: "ng2-st-tbody-edit-delete", inputs: { grid: "grid", row: "row", source: "source", deleteConfirm: "deleteConfirm", editConfirm: "editConfirm" }, outputs: { edit: "edit", delete: "delete", editRowSelect: "editRowSelect" }, usesOnChanges: true, ngImport: i0, template: `
    <ng-container *ngIf="!row.pending; else loader">
      <a
        href="#"
        *ngIf="isActionEdit"
        [id]="'row-' + row.index + '_action-edit-button'"
        class="ng2-smart-action ng2-smart-action-edit-edit"
        [innerHTML]="editRowButtonContent"
        (click)="onEdit($event)"
      ></a>
      <a
        href="#"
        *ngIf="isActionDelete"
        [id]="'row-' + row.index + '_action-delete-button'"
        class="ng2-smart-action ng2-smart-action-delete-delete"
        [innerHTML]="deleteRowButtonContent"
        (click)="onDelete($event)"
      ></a>
    </ng-container>
    <ng-template #loader>
      <div style="display: flex;">
        <svg
          *ngIf="isActionEdit"
          (click)="$event.stopPropagation()"
          style="height: 2rem; width: 2rem;"
          version="1.1"
          id="L9"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 100 100"
          enable-background="new 0 0 0 0"
          xml:space="preserve"
        >
          <path
            fill="#e9e9e9"
            d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
          >
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              dur="1s"
              from="0 50 50"
              to="360 50 50"
              repeatCount="indefinite"
            />
          </path>
        </svg>
        <svg
          *ngIf="isActionDelete"
          (click)="$event.stopPropagation()"
          style="height: 2rem; width: 2rem;"
          version="1.1"
          id="L9"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 100 100"
          enable-background="new 0 0 0 0"
          xml:space="preserve"
        >
          <path
            fill="#e9e9e9"
            d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
          >
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              dur="1s"
              from="0 50 50"
              to="360 50 50"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      </div>
    </ng-template>
  `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TbodyEditDeleteComponent, decorators: [{
            type: Component,
            args: [{
                    selector: "ng2-st-tbody-edit-delete",
                    template: `
    <ng-container *ngIf="!row.pending; else loader">
      <a
        href="#"
        *ngIf="isActionEdit"
        [id]="'row-' + row.index + '_action-edit-button'"
        class="ng2-smart-action ng2-smart-action-edit-edit"
        [innerHTML]="editRowButtonContent"
        (click)="onEdit($event)"
      ></a>
      <a
        href="#"
        *ngIf="isActionDelete"
        [id]="'row-' + row.index + '_action-delete-button'"
        class="ng2-smart-action ng2-smart-action-delete-delete"
        [innerHTML]="deleteRowButtonContent"
        (click)="onDelete($event)"
      ></a>
    </ng-container>
    <ng-template #loader>
      <div style="display: flex;">
        <svg
          *ngIf="isActionEdit"
          (click)="$event.stopPropagation()"
          style="height: 2rem; width: 2rem;"
          version="1.1"
          id="L9"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 100 100"
          enable-background="new 0 0 0 0"
          xml:space="preserve"
        >
          <path
            fill="#e9e9e9"
            d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
          >
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              dur="1s"
              from="0 50 50"
              to="360 50 50"
              repeatCount="indefinite"
            />
          </path>
        </svg>
        <svg
          *ngIf="isActionDelete"
          (click)="$event.stopPropagation()"
          style="height: 2rem; width: 2rem;"
          version="1.1"
          id="L9"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 100 100"
          enable-background="new 0 0 0 0"
          xml:space="preserve"
        >
          <path
            fill="#e9e9e9"
            d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
          >
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              dur="1s"
              from="0 50 50"
              to="360 50 50"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      </div>
    </ng-template>
  `,
                }]
        }], propDecorators: { grid: [{
                type: Input
            }], row: [{
                type: Input
            }], source: [{
                type: Input
            }], deleteConfirm: [{
                type: Input
            }], editConfirm: [{
                type: Input
            }], edit: [{
                type: Output
            }], delete: [{
                type: Output
            }], editRowSelect: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1kZWxldGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmcyLXNtYXJ0LXRhYmxlL3NyYy9saWIvY29tcG9uZW50cy90Ym9keS9jZWxscy9lZGl0LWRlbGV0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFDUCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ25GLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7O0FBdUZ6QyxNQUFNLE9BQU8sd0JBQXdCO0lBckZyQztRQTRGWSxTQUFJLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUMvQixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNqQyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFFbEQsaUJBQVksR0FBWSxLQUFLLENBQUM7UUFDOUIsbUJBQWMsR0FBWSxLQUFLLENBQUM7UUFDaEMseUJBQW9CLEdBQVcsRUFBRSxDQUFDO1FBQ2xDLDJCQUFzQixHQUFXLEVBQUUsQ0FBQztLQXVDckM7SUFyQ0MsTUFBTSxDQUFDLEtBQVU7UUFDZixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBRXhCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVsQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUNiLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRTtZQUN4QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07U0FDcEIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSyxVQUFVLEVBQUU7WUFDL0MsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzFCO0lBQ0gsQ0FBQztJQUVELFFBQVEsQ0FBQyxLQUFVO1FBQ2pCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFFeEIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSyxVQUFVLEVBQUU7WUFDL0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0JBQ2YsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFO2dCQUN4QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07YUFDcEIsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQ2hEO0lBQ0gsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUMzRSxJQUFJLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQ2hELDRCQUE0QixDQUM3QixDQUFDO0lBQ0osQ0FBQzsrR0FwRFUsd0JBQXdCO21HQUF4Qix3QkFBd0Isc1JBbkZ6Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBaUZUOzs0RkFFVSx3QkFBd0I7a0JBckZwQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSwwQkFBMEI7b0JBQ3BDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBaUZUO2lCQUNGOzhCQUVVLElBQUk7c0JBQVosS0FBSztnQkFDRyxHQUFHO3NCQUFYLEtBQUs7Z0JBQ0csTUFBTTtzQkFBZCxLQUFLO2dCQUNHLGFBQWE7c0JBQXJCLEtBQUs7Z0JBQ0csV0FBVztzQkFBbkIsS0FBSztnQkFFSSxJQUFJO3NCQUFiLE1BQU07Z0JBQ0csTUFBTTtzQkFBZixNQUFNO2dCQUNHLGFBQWE7c0JBQXRCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT3V0cHV0XG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IFJvdyB9IGZyb20gXCIuLi8uLi8uLi9saWIvZGF0YS1zZXQvcm93XCI7XG5pbXBvcnQgeyBMb2NhbERhdGFTb3VyY2UgfSBmcm9tIFwiLi4vLi4vLi4vbGliL2RhdGEtc291cmNlL2xvY2FsL2xvY2FsLmRhdGEtc291cmNlXCI7XG5pbXBvcnQgeyBHcmlkIH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9ncmlkXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJuZzItc3QtdGJvZHktZWRpdC1kZWxldGVcIixcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIXJvdy5wZW5kaW5nOyBlbHNlIGxvYWRlclwiPlxuICAgICAgPGFcbiAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAqbmdJZj1cImlzQWN0aW9uRWRpdFwiXG4gICAgICAgIFtpZF09XCIncm93LScgKyByb3cuaW5kZXggKyAnX2FjdGlvbi1lZGl0LWJ1dHRvbidcIlxuICAgICAgICBjbGFzcz1cIm5nMi1zbWFydC1hY3Rpb24gbmcyLXNtYXJ0LWFjdGlvbi1lZGl0LWVkaXRcIlxuICAgICAgICBbaW5uZXJIVE1MXT1cImVkaXRSb3dCdXR0b25Db250ZW50XCJcbiAgICAgICAgKGNsaWNrKT1cIm9uRWRpdCgkZXZlbnQpXCJcbiAgICAgID48L2E+XG4gICAgICA8YVxuICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICpuZ0lmPVwiaXNBY3Rpb25EZWxldGVcIlxuICAgICAgICBbaWRdPVwiJ3Jvdy0nICsgcm93LmluZGV4ICsgJ19hY3Rpb24tZGVsZXRlLWJ1dHRvbidcIlxuICAgICAgICBjbGFzcz1cIm5nMi1zbWFydC1hY3Rpb24gbmcyLXNtYXJ0LWFjdGlvbi1kZWxldGUtZGVsZXRlXCJcbiAgICAgICAgW2lubmVySFRNTF09XCJkZWxldGVSb3dCdXR0b25Db250ZW50XCJcbiAgICAgICAgKGNsaWNrKT1cIm9uRGVsZXRlKCRldmVudClcIlxuICAgICAgPjwvYT5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8bmctdGVtcGxhdGUgI2xvYWRlcj5cbiAgICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OiBmbGV4O1wiPlxuICAgICAgICA8c3ZnXG4gICAgICAgICAgKm5nSWY9XCJpc0FjdGlvbkVkaXRcIlxuICAgICAgICAgIChjbGljayk9XCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcIlxuICAgICAgICAgIHN0eWxlPVwiaGVpZ2h0OiAycmVtOyB3aWR0aDogMnJlbTtcIlxuICAgICAgICAgIHZlcnNpb249XCIxLjFcIlxuICAgICAgICAgIGlkPVwiTDlcIlxuICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiXG4gICAgICAgICAgeD1cIjBweFwiXG4gICAgICAgICAgeT1cIjBweFwiXG4gICAgICAgICAgdmlld0JveD1cIjAgMCAxMDAgMTAwXCJcbiAgICAgICAgICBlbmFibGUtYmFja2dyb3VuZD1cIm5ldyAwIDAgMCAwXCJcbiAgICAgICAgICB4bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiXG4gICAgICAgID5cbiAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgZmlsbD1cIiNlOWU5ZTlcIlxuICAgICAgICAgICAgZD1cIk03Myw1MGMwLTEyLjctMTAuMy0yMy0yMy0yM1MyNywzNy4zLDI3LDUwIE0zMC45LDUwYzAtMTAuNSw4LjUtMTkuMSwxOS4xLTE5LjFTNjkuMSwzOS41LDY5LjEsNTBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxhbmltYXRlVHJhbnNmb3JtXG4gICAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWU9XCJ0cmFuc2Zvcm1cIlxuICAgICAgICAgICAgICBhdHRyaWJ1dGVUeXBlPVwiWE1MXCJcbiAgICAgICAgICAgICAgdHlwZT1cInJvdGF0ZVwiXG4gICAgICAgICAgICAgIGR1cj1cIjFzXCJcbiAgICAgICAgICAgICAgZnJvbT1cIjAgNTAgNTBcIlxuICAgICAgICAgICAgICB0bz1cIjM2MCA1MCA1MFwiXG4gICAgICAgICAgICAgIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvcGF0aD5cbiAgICAgICAgPC9zdmc+XG4gICAgICAgIDxzdmdcbiAgICAgICAgICAqbmdJZj1cImlzQWN0aW9uRGVsZXRlXCJcbiAgICAgICAgICAoY2xpY2spPVwiJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXCJcbiAgICAgICAgICBzdHlsZT1cImhlaWdodDogMnJlbTsgd2lkdGg6IDJyZW07XCJcbiAgICAgICAgICB2ZXJzaW9uPVwiMS4xXCJcbiAgICAgICAgICBpZD1cIkw5XCJcbiAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIlxuICAgICAgICAgIHg9XCIwcHhcIlxuICAgICAgICAgIHk9XCIwcHhcIlxuICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTAwIDEwMFwiXG4gICAgICAgICAgZW5hYmxlLWJhY2tncm91bmQ9XCJuZXcgMCAwIDAgMFwiXG4gICAgICAgICAgeG1sOnNwYWNlPVwicHJlc2VydmVcIlxuICAgICAgICA+XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgIGZpbGw9XCIjZTllOWU5XCJcbiAgICAgICAgICAgIGQ9XCJNNzMsNTBjMC0xMi43LTEwLjMtMjMtMjMtMjNTMjcsMzcuMywyNyw1MCBNMzAuOSw1MGMwLTEwLjUsOC41LTE5LjEsMTkuMS0xOS4xUzY5LjEsMzkuNSw2OS4xLDUwXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8YW5pbWF0ZVRyYW5zZm9ybVxuICAgICAgICAgICAgICBhdHRyaWJ1dGVOYW1lPVwidHJhbnNmb3JtXCJcbiAgICAgICAgICAgICAgYXR0cmlidXRlVHlwZT1cIlhNTFwiXG4gICAgICAgICAgICAgIHR5cGU9XCJyb3RhdGVcIlxuICAgICAgICAgICAgICBkdXI9XCIxc1wiXG4gICAgICAgICAgICAgIGZyb209XCIwIDUwIDUwXCJcbiAgICAgICAgICAgICAgdG89XCIzNjAgNTAgNTBcIlxuICAgICAgICAgICAgICByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L3BhdGg+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgPC9kaXY+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgVGJvZHlFZGl0RGVsZXRlQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgZ3JpZCE6IEdyaWQ7XG4gIEBJbnB1dCgpIHJvdyE6IFJvdztcbiAgQElucHV0KCkgc291cmNlITogTG9jYWxEYXRhU291cmNlO1xuICBASW5wdXQoKSBkZWxldGVDb25maXJtITogRXZlbnRFbWl0dGVyPGFueT47XG4gIEBJbnB1dCgpIGVkaXRDb25maXJtITogRXZlbnRFbWl0dGVyPGFueT47XG5cbiAgQE91dHB1dCgpIGVkaXQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGRlbGV0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgZWRpdFJvd1NlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIGlzQWN0aW9uRWRpdDogYm9vbGVhbiA9IGZhbHNlO1xuICBpc0FjdGlvbkRlbGV0ZTogYm9vbGVhbiA9IGZhbHNlO1xuICBlZGl0Um93QnV0dG9uQ29udGVudDogc3RyaW5nID0gXCJcIjtcbiAgZGVsZXRlUm93QnV0dG9uQ29udGVudDogc3RyaW5nID0gXCJcIjtcblxuICBvbkVkaXQoZXZlbnQ6IGFueSkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICB0aGlzLmVkaXRSb3dTZWxlY3QuZW1pdCh0aGlzLnJvdyk7XG5cbiAgICB0aGlzLmVkaXQuZW1pdCh7XG4gICAgICBkYXRhOiB0aGlzLnJvdy5nZXREYXRhKCksXG4gICAgICBzb3VyY2U6IHRoaXMuc291cmNlLFxuICAgIH0pO1xuICAgIGlmICh0aGlzLmdyaWQuZ2V0U2V0dGluZyhcIm1vZGVcIikgIT09IFwiZXh0ZXJuYWxcIikge1xuICAgICAgdGhpcy5ncmlkLmVkaXQodGhpcy5yb3cpO1xuICAgIH1cbiAgfVxuXG4gIG9uRGVsZXRlKGV2ZW50OiBhbnkpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgaWYgKHRoaXMuZ3JpZC5nZXRTZXR0aW5nKFwibW9kZVwiKSA9PT0gXCJleHRlcm5hbFwiKSB7XG4gICAgICB0aGlzLmRlbGV0ZS5lbWl0KHtcbiAgICAgICAgZGF0YTogdGhpcy5yb3cuZ2V0RGF0YSgpLFxuICAgICAgICBzb3VyY2U6IHRoaXMuc291cmNlLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZ3JpZC5kZWxldGUodGhpcy5yb3csIHRoaXMuZGVsZXRlQ29uZmlybSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy5pc0FjdGlvbkVkaXQgPSB0aGlzLmdyaWQuZ2V0U2V0dGluZyhcImFjdGlvbnMuZWRpdFwiKTtcbiAgICB0aGlzLmlzQWN0aW9uRGVsZXRlID0gdGhpcy5ncmlkLmdldFNldHRpbmcoXCJhY3Rpb25zLmRlbGV0ZVwiKTtcbiAgICB0aGlzLmVkaXRSb3dCdXR0b25Db250ZW50ID0gdGhpcy5ncmlkLmdldFNldHRpbmcoXCJlZGl0LmVkaXRCdXR0b25Db250ZW50XCIpO1xuICAgIHRoaXMuZGVsZXRlUm93QnV0dG9uQ29udGVudCA9IHRoaXMuZ3JpZC5nZXRTZXR0aW5nKFxuICAgICAgXCJkZWxldGUuZGVsZXRlQnV0dG9uQ29udGVudFwiXG4gICAgKTtcbiAgfVxufVxuIl19