import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, } from "@angular/core";
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
  `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TbodyEditDeleteComponent, decorators: [{
            type: Component,
            args: [{
                    selector: "ng2-st-tbody-edit-delete",
                    changeDetection: ChangeDetectionStrategy.OnPush,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1kZWxldGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmcyLXNtYXJ0LXRhYmxlL3NyYy9saWIvY29tcG9uZW50cy90Ym9keS9jZWxscy9lZGl0LWRlbGV0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUNuRixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7OztBQXdGekMsTUFBTSxPQUFPLHdCQUF3QjtJQXRGckM7UUE2RlksU0FBSSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDL0IsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDakMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBRWxELGlCQUFZLEdBQVksS0FBSyxDQUFDO1FBQzlCLG1CQUFjLEdBQVksS0FBSyxDQUFDO1FBQ2hDLHlCQUFvQixHQUFXLEVBQUUsQ0FBQztRQUNsQywyQkFBc0IsR0FBVyxFQUFFLENBQUM7S0F1Q3JDO0lBckNDLE1BQU0sQ0FBQyxLQUFVO1FBQ2YsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUV4QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDYixJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUU7WUFDeEIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1NBQ3BCLENBQUMsQ0FBQztRQUNILElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssVUFBVSxFQUFFO1lBQy9DLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUMxQjtJQUNILENBQUM7SUFFRCxRQUFRLENBQUMsS0FBVTtRQUNqQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBRXhCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssVUFBVSxFQUFFO1lBQy9DLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUNmLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRTtnQkFDeEIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO2FBQ3BCLENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUNoRDtJQUNILENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDM0UsSUFBSSxDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUNoRCw0QkFBNEIsQ0FDN0IsQ0FBQztJQUNKLENBQUM7K0dBcERVLHdCQUF3QjttR0FBeEIsd0JBQXdCLHNSQW5GekI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWlGVDs7NEZBRVUsd0JBQXdCO2tCQXRGcEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsMEJBQTBCO29CQUNwQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FpRlQ7aUJBQ0Y7OEJBRVUsSUFBSTtzQkFBWixLQUFLO2dCQUNHLEdBQUc7c0JBQVgsS0FBSztnQkFDRyxNQUFNO3NCQUFkLEtBQUs7Z0JBQ0csYUFBYTtzQkFBckIsS0FBSztnQkFDRyxXQUFXO3NCQUFuQixLQUFLO2dCQUVJLElBQUk7c0JBQWIsTUFBTTtnQkFDRyxNQUFNO3NCQUFmLE1BQU07Z0JBQ0csYUFBYTtzQkFBdEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT3V0cHV0LFxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBSb3cgfSBmcm9tIFwiLi4vLi4vLi4vbGliL2RhdGEtc2V0L3Jvd1wiO1xuaW1wb3J0IHsgTG9jYWxEYXRhU291cmNlIH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9kYXRhLXNvdXJjZS9sb2NhbC9sb2NhbC5kYXRhLXNvdXJjZVwiO1xuaW1wb3J0IHsgR3JpZCB9IGZyb20gXCIuLi8uLi8uLi9saWIvZ3JpZFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibmcyLXN0LXRib2R5LWVkaXQtZGVsZXRlXCIsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhcm93LnBlbmRpbmc7IGVsc2UgbG9hZGVyXCI+XG4gICAgICA8YVxuICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICpuZ0lmPVwiaXNBY3Rpb25FZGl0XCJcbiAgICAgICAgW2lkXT1cIidyb3ctJyArIHJvdy5pbmRleCArICdfYWN0aW9uLWVkaXQtYnV0dG9uJ1wiXG4gICAgICAgIGNsYXNzPVwibmcyLXNtYXJ0LWFjdGlvbiBuZzItc21hcnQtYWN0aW9uLWVkaXQtZWRpdFwiXG4gICAgICAgIFtpbm5lckhUTUxdPVwiZWRpdFJvd0J1dHRvbkNvbnRlbnRcIlxuICAgICAgICAoY2xpY2spPVwib25FZGl0KCRldmVudClcIlxuICAgICAgPjwvYT5cbiAgICAgIDxhXG4gICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgKm5nSWY9XCJpc0FjdGlvbkRlbGV0ZVwiXG4gICAgICAgIFtpZF09XCIncm93LScgKyByb3cuaW5kZXggKyAnX2FjdGlvbi1kZWxldGUtYnV0dG9uJ1wiXG4gICAgICAgIGNsYXNzPVwibmcyLXNtYXJ0LWFjdGlvbiBuZzItc21hcnQtYWN0aW9uLWRlbGV0ZS1kZWxldGVcIlxuICAgICAgICBbaW5uZXJIVE1MXT1cImRlbGV0ZVJvd0J1dHRvbkNvbnRlbnRcIlxuICAgICAgICAoY2xpY2spPVwib25EZWxldGUoJGV2ZW50KVwiXG4gICAgICA+PC9hPlxuICAgIDwvbmctY29udGFpbmVyPlxuICAgIDxuZy10ZW1wbGF0ZSAjbG9hZGVyPlxuICAgICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7XCI+XG4gICAgICAgIDxzdmdcbiAgICAgICAgICAqbmdJZj1cImlzQWN0aW9uRWRpdFwiXG4gICAgICAgICAgKGNsaWNrKT1cIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKVwiXG4gICAgICAgICAgc3R5bGU9XCJoZWlnaHQ6IDJyZW07IHdpZHRoOiAycmVtO1wiXG4gICAgICAgICAgdmVyc2lvbj1cIjEuMVwiXG4gICAgICAgICAgaWQ9XCJMOVwiXG4gICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCJcbiAgICAgICAgICB4PVwiMHB4XCJcbiAgICAgICAgICB5PVwiMHB4XCJcbiAgICAgICAgICB2aWV3Qm94PVwiMCAwIDEwMCAxMDBcIlxuICAgICAgICAgIGVuYWJsZS1iYWNrZ3JvdW5kPVwibmV3IDAgMCAwIDBcIlxuICAgICAgICAgIHhtbDpzcGFjZT1cInByZXNlcnZlXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICBmaWxsPVwiI2U5ZTllOVwiXG4gICAgICAgICAgICBkPVwiTTczLDUwYzAtMTIuNy0xMC4zLTIzLTIzLTIzUzI3LDM3LjMsMjcsNTAgTTMwLjksNTBjMC0xMC41LDguNS0xOS4xLDE5LjEtMTkuMVM2OS4xLDM5LjUsNjkuMSw1MFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGFuaW1hdGVUcmFuc2Zvcm1cbiAgICAgICAgICAgICAgYXR0cmlidXRlTmFtZT1cInRyYW5zZm9ybVwiXG4gICAgICAgICAgICAgIGF0dHJpYnV0ZVR5cGU9XCJYTUxcIlxuICAgICAgICAgICAgICB0eXBlPVwicm90YXRlXCJcbiAgICAgICAgICAgICAgZHVyPVwiMXNcIlxuICAgICAgICAgICAgICBmcm9tPVwiMCA1MCA1MFwiXG4gICAgICAgICAgICAgIHRvPVwiMzYwIDUwIDUwXCJcbiAgICAgICAgICAgICAgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9wYXRoPlxuICAgICAgICA8L3N2Zz5cbiAgICAgICAgPHN2Z1xuICAgICAgICAgICpuZ0lmPVwiaXNBY3Rpb25EZWxldGVcIlxuICAgICAgICAgIChjbGljayk9XCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcIlxuICAgICAgICAgIHN0eWxlPVwiaGVpZ2h0OiAycmVtOyB3aWR0aDogMnJlbTtcIlxuICAgICAgICAgIHZlcnNpb249XCIxLjFcIlxuICAgICAgICAgIGlkPVwiTDlcIlxuICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiXG4gICAgICAgICAgeD1cIjBweFwiXG4gICAgICAgICAgeT1cIjBweFwiXG4gICAgICAgICAgdmlld0JveD1cIjAgMCAxMDAgMTAwXCJcbiAgICAgICAgICBlbmFibGUtYmFja2dyb3VuZD1cIm5ldyAwIDAgMCAwXCJcbiAgICAgICAgICB4bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiXG4gICAgICAgID5cbiAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgZmlsbD1cIiNlOWU5ZTlcIlxuICAgICAgICAgICAgZD1cIk03Myw1MGMwLTEyLjctMTAuMy0yMy0yMy0yM1MyNywzNy4zLDI3LDUwIE0zMC45LDUwYzAtMTAuNSw4LjUtMTkuMSwxOS4xLTE5LjFTNjkuMSwzOS41LDY5LjEsNTBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxhbmltYXRlVHJhbnNmb3JtXG4gICAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWU9XCJ0cmFuc2Zvcm1cIlxuICAgICAgICAgICAgICBhdHRyaWJ1dGVUeXBlPVwiWE1MXCJcbiAgICAgICAgICAgICAgdHlwZT1cInJvdGF0ZVwiXG4gICAgICAgICAgICAgIGR1cj1cIjFzXCJcbiAgICAgICAgICAgICAgZnJvbT1cIjAgNTAgNTBcIlxuICAgICAgICAgICAgICB0bz1cIjM2MCA1MCA1MFwiXG4gICAgICAgICAgICAgIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvcGF0aD5cbiAgICAgICAgPC9zdmc+XG4gICAgICA8L2Rpdj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBUYm9keUVkaXREZWxldGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBncmlkITogR3JpZDtcbiAgQElucHV0KCkgcm93ITogUm93O1xuICBASW5wdXQoKSBzb3VyY2UhOiBMb2NhbERhdGFTb3VyY2U7XG4gIEBJbnB1dCgpIGRlbGV0ZUNvbmZpcm0hOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgQElucHV0KCkgZWRpdENvbmZpcm0hOiBFdmVudEVtaXR0ZXI8YW55PjtcblxuICBAT3V0cHV0KCkgZWRpdCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgZGVsZXRlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBlZGl0Um93U2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgaXNBY3Rpb25FZGl0OiBib29sZWFuID0gZmFsc2U7XG4gIGlzQWN0aW9uRGVsZXRlOiBib29sZWFuID0gZmFsc2U7XG4gIGVkaXRSb3dCdXR0b25Db250ZW50OiBzdHJpbmcgPSBcIlwiO1xuICBkZWxldGVSb3dCdXR0b25Db250ZW50OiBzdHJpbmcgPSBcIlwiO1xuXG4gIG9uRWRpdChldmVudDogYW55KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIHRoaXMuZWRpdFJvd1NlbGVjdC5lbWl0KHRoaXMucm93KTtcblxuICAgIHRoaXMuZWRpdC5lbWl0KHtcbiAgICAgIGRhdGE6IHRoaXMucm93LmdldERhdGEoKSxcbiAgICAgIHNvdXJjZTogdGhpcy5zb3VyY2UsXG4gICAgfSk7XG4gICAgaWYgKHRoaXMuZ3JpZC5nZXRTZXR0aW5nKFwibW9kZVwiKSAhPT0gXCJleHRlcm5hbFwiKSB7XG4gICAgICB0aGlzLmdyaWQuZWRpdCh0aGlzLnJvdyk7XG4gICAgfVxuICB9XG5cbiAgb25EZWxldGUoZXZlbnQ6IGFueSkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICBpZiAodGhpcy5ncmlkLmdldFNldHRpbmcoXCJtb2RlXCIpID09PSBcImV4dGVybmFsXCIpIHtcbiAgICAgIHRoaXMuZGVsZXRlLmVtaXQoe1xuICAgICAgICBkYXRhOiB0aGlzLnJvdy5nZXREYXRhKCksXG4gICAgICAgIHNvdXJjZTogdGhpcy5zb3VyY2UsXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5ncmlkLmRlbGV0ZSh0aGlzLnJvdywgdGhpcy5kZWxldGVDb25maXJtKTtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLmlzQWN0aW9uRWRpdCA9IHRoaXMuZ3JpZC5nZXRTZXR0aW5nKFwiYWN0aW9ucy5lZGl0XCIpO1xuICAgIHRoaXMuaXNBY3Rpb25EZWxldGUgPSB0aGlzLmdyaWQuZ2V0U2V0dGluZyhcImFjdGlvbnMuZGVsZXRlXCIpO1xuICAgIHRoaXMuZWRpdFJvd0J1dHRvbkNvbnRlbnQgPSB0aGlzLmdyaWQuZ2V0U2V0dGluZyhcImVkaXQuZWRpdEJ1dHRvbkNvbnRlbnRcIik7XG4gICAgdGhpcy5kZWxldGVSb3dCdXR0b25Db250ZW50ID0gdGhpcy5ncmlkLmdldFNldHRpbmcoXG4gICAgICBcImRlbGV0ZS5kZWxldGVCdXR0b25Db250ZW50XCJcbiAgICApO1xuICB9XG59XG4iXX0=