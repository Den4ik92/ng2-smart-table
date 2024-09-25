import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Row } from "../../../lib/data-set/row";
import { LocalDataSource } from "../../../lib/data-source/local/local.data-source";
import { Grid } from "../../../lib/grid";
import * as i0 from "@angular/core";
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: TbodyEditDeleteComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.3.12", type: TbodyEditDeleteComponent, selector: "ng2-st-tbody-edit-delete", inputs: { grid: "grid", row: "row", source: "source", deleteConfirm: "deleteConfirm", editConfirm: "editConfirm" }, outputs: { edit: "edit", delete: "delete", editRowSelect: "editRowSelect" }, usesOnChanges: true, ngImport: i0, template: `
    @if (!row.pending) {
      @if (isActionEdit) {
        <a
          href="#"
          [id]="'row-' + row.index + '_action-edit-button'"
          class="ng2-smart-action ng2-smart-action-edit-edit"
          [innerHTML]="editRowButtonContent"
          (click)="onEdit($event)"
        ></a>
      }
      @if (isActionDelete) {
        <a
          href="#"
          [id]="'row-' + row.index + '_action-delete-button'"
          class="ng2-smart-action ng2-smart-action-delete-delete"
          [innerHTML]="deleteRowButtonContent"
          (click)="onDelete($event)"
        ></a>
      }
    } @else {
      <div style="display: flex;">
        @if (isActionEdit) {
          <svg
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
        }
        @if (isActionDelete) {
          <svg
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
        }
      </div>
    }
    `, isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: TbodyEditDeleteComponent, decorators: [{
            type: Component,
            args: [{
                    selector: "ng2-st-tbody-edit-delete",
                    template: `
    @if (!row.pending) {
      @if (isActionEdit) {
        <a
          href="#"
          [id]="'row-' + row.index + '_action-edit-button'"
          class="ng2-smart-action ng2-smart-action-edit-edit"
          [innerHTML]="editRowButtonContent"
          (click)="onEdit($event)"
        ></a>
      }
      @if (isActionDelete) {
        <a
          href="#"
          [id]="'row-' + row.index + '_action-delete-button'"
          class="ng2-smart-action ng2-smart-action-delete-delete"
          [innerHTML]="deleteRowButtonContent"
          (click)="onDelete($event)"
        ></a>
      }
    } @else {
      <div style="display: flex;">
        @if (isActionEdit) {
          <svg
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
        }
        @if (isActionDelete) {
          <svg
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
        }
      </div>
    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1kZWxldGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmcyLXNtYXJ0LXRhYmxlL3NyYy9saWIvY29tcG9uZW50cy90Ym9keS9jZWxscy9lZGl0LWRlbGV0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFDUCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ25GLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7QUEwRnpDLE1BQU0sT0FBTyx3QkFBd0I7SUF4RnJDO1FBK0ZZLFNBQUksR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQy9CLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ2pDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUVsRCxpQkFBWSxHQUFZLEtBQUssQ0FBQztRQUM5QixtQkFBYyxHQUFZLEtBQUssQ0FBQztRQUNoQyx5QkFBb0IsR0FBVyxFQUFFLENBQUM7UUFDbEMsMkJBQXNCLEdBQVcsRUFBRSxDQUFDO0tBdUNyQztJQXJDQyxNQUFNLENBQUMsS0FBVTtRQUNmLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFFeEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRWxDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ2IsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFO1lBQ3hCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtTQUNwQixDQUFDLENBQUM7UUFDSCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFLLFVBQVUsRUFBRSxDQUFDO1lBQ2hELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMzQixDQUFDO0lBQ0gsQ0FBQztJQUVELFFBQVEsQ0FBQyxLQUFVO1FBQ2pCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFFeEIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSyxVQUFVLEVBQUUsQ0FBQztZQUNoRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztnQkFDZixJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUU7Z0JBQ3hCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTthQUNwQixDQUFDLENBQUM7UUFDTCxDQUFDO2FBQU0sQ0FBQztZQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ2pELENBQUM7SUFDSCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQzNFLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FDaEQsNEJBQTRCLENBQzdCLENBQUM7SUFDSixDQUFDOytHQXBEVSx3QkFBd0I7bUdBQXhCLHdCQUF3QixzUkF0RnpCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FvRlA7OzRGQUVRLHdCQUF3QjtrQkF4RnBDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtvQkFDcEMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FvRlA7aUJBQ0o7OEJBRVUsSUFBSTtzQkFBWixLQUFLO2dCQUNHLEdBQUc7c0JBQVgsS0FBSztnQkFDRyxNQUFNO3NCQUFkLEtBQUs7Z0JBQ0csYUFBYTtzQkFBckIsS0FBSztnQkFDRyxXQUFXO3NCQUFuQixLQUFLO2dCQUVJLElBQUk7c0JBQWIsTUFBTTtnQkFDRyxNQUFNO3NCQUFmLE1BQU07Z0JBQ0csYUFBYTtzQkFBdEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPdXRwdXRcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgUm93IH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9kYXRhLXNldC9yb3dcIjtcbmltcG9ydCB7IExvY2FsRGF0YVNvdXJjZSB9IGZyb20gXCIuLi8uLi8uLi9saWIvZGF0YS1zb3VyY2UvbG9jYWwvbG9jYWwuZGF0YS1zb3VyY2VcIjtcbmltcG9ydCB7IEdyaWQgfSBmcm9tIFwiLi4vLi4vLi4vbGliL2dyaWRcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIm5nMi1zdC10Ym9keS1lZGl0LWRlbGV0ZVwiLFxuICB0ZW1wbGF0ZTogYFxuICAgIEBpZiAoIXJvdy5wZW5kaW5nKSB7XG4gICAgICBAaWYgKGlzQWN0aW9uRWRpdCkge1xuICAgICAgICA8YVxuICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICBbaWRdPVwiJ3Jvdy0nICsgcm93LmluZGV4ICsgJ19hY3Rpb24tZWRpdC1idXR0b24nXCJcbiAgICAgICAgICBjbGFzcz1cIm5nMi1zbWFydC1hY3Rpb24gbmcyLXNtYXJ0LWFjdGlvbi1lZGl0LWVkaXRcIlxuICAgICAgICAgIFtpbm5lckhUTUxdPVwiZWRpdFJvd0J1dHRvbkNvbnRlbnRcIlxuICAgICAgICAgIChjbGljayk9XCJvbkVkaXQoJGV2ZW50KVwiXG4gICAgICAgID48L2E+XG4gICAgICB9XG4gICAgICBAaWYgKGlzQWN0aW9uRGVsZXRlKSB7XG4gICAgICAgIDxhXG4gICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgIFtpZF09XCIncm93LScgKyByb3cuaW5kZXggKyAnX2FjdGlvbi1kZWxldGUtYnV0dG9uJ1wiXG4gICAgICAgICAgY2xhc3M9XCJuZzItc21hcnQtYWN0aW9uIG5nMi1zbWFydC1hY3Rpb24tZGVsZXRlLWRlbGV0ZVwiXG4gICAgICAgICAgW2lubmVySFRNTF09XCJkZWxldGVSb3dCdXR0b25Db250ZW50XCJcbiAgICAgICAgICAoY2xpY2spPVwib25EZWxldGUoJGV2ZW50KVwiXG4gICAgICAgID48L2E+XG4gICAgICB9XG4gICAgfSBAZWxzZSB7XG4gICAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTogZmxleDtcIj5cbiAgICAgICAgQGlmIChpc0FjdGlvbkVkaXQpIHtcbiAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAoY2xpY2spPVwiJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXCJcbiAgICAgICAgICAgIHN0eWxlPVwiaGVpZ2h0OiAycmVtOyB3aWR0aDogMnJlbTtcIlxuICAgICAgICAgICAgdmVyc2lvbj1cIjEuMVwiXG4gICAgICAgICAgICBpZD1cIkw5XCJcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCJcbiAgICAgICAgICAgIHg9XCIwcHhcIlxuICAgICAgICAgICAgeT1cIjBweFwiXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDEwMCAxMDBcIlxuICAgICAgICAgICAgZW5hYmxlLWJhY2tncm91bmQ9XCJuZXcgMCAwIDAgMFwiXG4gICAgICAgICAgICB4bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBmaWxsPVwiI2U5ZTllOVwiXG4gICAgICAgICAgICAgIGQ9XCJNNzMsNTBjMC0xMi43LTEwLjMtMjMtMjMtMjNTMjcsMzcuMywyNyw1MCBNMzAuOSw1MGMwLTEwLjUsOC41LTE5LjEsMTkuMS0xOS4xUzY5LjEsMzkuNSw2OS4xLDUwXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8YW5pbWF0ZVRyYW5zZm9ybVxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWU9XCJ0cmFuc2Zvcm1cIlxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZVR5cGU9XCJYTUxcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJyb3RhdGVcIlxuICAgICAgICAgICAgICAgIGR1cj1cIjFzXCJcbiAgICAgICAgICAgICAgICBmcm9tPVwiMCA1MCA1MFwiXG4gICAgICAgICAgICAgICAgdG89XCIzNjAgNTAgNTBcIlxuICAgICAgICAgICAgICAgIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvcGF0aD5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgfVxuICAgICAgICBAaWYgKGlzQWN0aW9uRGVsZXRlKSB7XG4gICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgKGNsaWNrKT1cIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKVwiXG4gICAgICAgICAgICBzdHlsZT1cImhlaWdodDogMnJlbTsgd2lkdGg6IDJyZW07XCJcbiAgICAgICAgICAgIHZlcnNpb249XCIxLjFcIlxuICAgICAgICAgICAgaWQ9XCJMOVwiXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiXG4gICAgICAgICAgICB4PVwiMHB4XCJcbiAgICAgICAgICAgIHk9XCIwcHhcIlxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxMDAgMTAwXCJcbiAgICAgICAgICAgIGVuYWJsZS1iYWNrZ3JvdW5kPVwibmV3IDAgMCAwIDBcIlxuICAgICAgICAgICAgeG1sOnNwYWNlPVwicHJlc2VydmVcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgZmlsbD1cIiNlOWU5ZTlcIlxuICAgICAgICAgICAgICBkPVwiTTczLDUwYzAtMTIuNy0xMC4zLTIzLTIzLTIzUzI3LDM3LjMsMjcsNTAgTTMwLjksNTBjMC0xMC41LDguNS0xOS4xLDE5LjEtMTkuMVM2OS4xLDM5LjUsNjkuMSw1MFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGFuaW1hdGVUcmFuc2Zvcm1cbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVOYW1lPVwidHJhbnNmb3JtXCJcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVUeXBlPVwiWE1MXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwicm90YXRlXCJcbiAgICAgICAgICAgICAgICBkdXI9XCIxc1wiXG4gICAgICAgICAgICAgICAgZnJvbT1cIjAgNTAgNTBcIlxuICAgICAgICAgICAgICAgIHRvPVwiMzYwIDUwIDUwXCJcbiAgICAgICAgICAgICAgICByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3BhdGg+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgIH1cbiAgICBgLFxufSlcbmV4cG9ydCBjbGFzcyBUYm9keUVkaXREZWxldGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBncmlkITogR3JpZDtcbiAgQElucHV0KCkgcm93ITogUm93O1xuICBASW5wdXQoKSBzb3VyY2UhOiBMb2NhbERhdGFTb3VyY2U7XG4gIEBJbnB1dCgpIGRlbGV0ZUNvbmZpcm0hOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgQElucHV0KCkgZWRpdENvbmZpcm0hOiBFdmVudEVtaXR0ZXI8YW55PjtcblxuICBAT3V0cHV0KCkgZWRpdCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgZGVsZXRlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBlZGl0Um93U2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgaXNBY3Rpb25FZGl0OiBib29sZWFuID0gZmFsc2U7XG4gIGlzQWN0aW9uRGVsZXRlOiBib29sZWFuID0gZmFsc2U7XG4gIGVkaXRSb3dCdXR0b25Db250ZW50OiBzdHJpbmcgPSBcIlwiO1xuICBkZWxldGVSb3dCdXR0b25Db250ZW50OiBzdHJpbmcgPSBcIlwiO1xuXG4gIG9uRWRpdChldmVudDogYW55KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIHRoaXMuZWRpdFJvd1NlbGVjdC5lbWl0KHRoaXMucm93KTtcblxuICAgIHRoaXMuZWRpdC5lbWl0KHtcbiAgICAgIGRhdGE6IHRoaXMucm93LmdldERhdGEoKSxcbiAgICAgIHNvdXJjZTogdGhpcy5zb3VyY2UsXG4gICAgfSk7XG4gICAgaWYgKHRoaXMuZ3JpZC5nZXRTZXR0aW5nKFwibW9kZVwiKSAhPT0gXCJleHRlcm5hbFwiKSB7XG4gICAgICB0aGlzLmdyaWQuZWRpdCh0aGlzLnJvdyk7XG4gICAgfVxuICB9XG5cbiAgb25EZWxldGUoZXZlbnQ6IGFueSkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICBpZiAodGhpcy5ncmlkLmdldFNldHRpbmcoXCJtb2RlXCIpID09PSBcImV4dGVybmFsXCIpIHtcbiAgICAgIHRoaXMuZGVsZXRlLmVtaXQoe1xuICAgICAgICBkYXRhOiB0aGlzLnJvdy5nZXREYXRhKCksXG4gICAgICAgIHNvdXJjZTogdGhpcy5zb3VyY2UsXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5ncmlkLmRlbGV0ZSh0aGlzLnJvdywgdGhpcy5kZWxldGVDb25maXJtKTtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLmlzQWN0aW9uRWRpdCA9IHRoaXMuZ3JpZC5nZXRTZXR0aW5nKFwiYWN0aW9ucy5lZGl0XCIpO1xuICAgIHRoaXMuaXNBY3Rpb25EZWxldGUgPSB0aGlzLmdyaWQuZ2V0U2V0dGluZyhcImFjdGlvbnMuZGVsZXRlXCIpO1xuICAgIHRoaXMuZWRpdFJvd0J1dHRvbkNvbnRlbnQgPSB0aGlzLmdyaWQuZ2V0U2V0dGluZyhcImVkaXQuZWRpdEJ1dHRvbkNvbnRlbnRcIik7XG4gICAgdGhpcy5kZWxldGVSb3dCdXR0b25Db250ZW50ID0gdGhpcy5ncmlkLmdldFNldHRpbmcoXG4gICAgICBcImRlbGV0ZS5kZWxldGVCdXR0b25Db250ZW50XCJcbiAgICApO1xuICB9XG59XG4iXX0=