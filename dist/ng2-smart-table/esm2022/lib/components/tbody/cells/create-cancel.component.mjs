import { Component, EventEmitter, Input } from "@angular/core";
import { Row } from "../../../lib/data-set/row";
import { Grid } from "../../../lib/grid";
import * as i0 from "@angular/core";
export class TbodyCreateCancelComponent {
    constructor() {
        this.cancelButtonContent = "";
        this.saveButtonContent = "";
    }
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
        this.saveButtonContent = this.grid.getSetting("edit.saveButtonContent", "save");
        this.cancelButtonContent = this.grid.getSetting("edit.cancelButtonContent", "cancel");
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: TbodyCreateCancelComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.3.12", type: TbodyCreateCancelComponent, selector: "ng2-st-tbody-create-cancel", inputs: { grid: "grid", row: "row", editConfirm: "editConfirm", editCancel: "editCancel" }, usesOnChanges: true, ngImport: i0, template: `
    @if (!row.pending) {
      <a
        href="#"
        [id]="'row-' + row.index + '_editing-confirm-button'"
        class="ng2-smart-action ng2-smart-action-edit-save"
        [innerHTML]="saveButtonContent"
        (click)="onSave($event)"
      ></a>
      <a
        href="#"
        [id]="'row-' + row.index + '_editing-cancel-button'"
        class="ng2-smart-action ng2-smart-action-edit-cancel"
        [innerHTML]="cancelButtonContent"
        (click)="onCancelEdit($event)"
      ></a>
    } @else {
      <div style="display: flex;">
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
        <svg
          (click)="$event.stopPropagation()"
          style="height: 2rem; width: 2rem; "
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
    }
    `, isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: TbodyCreateCancelComponent, decorators: [{
            type: Component,
            args: [{
                    selector: "ng2-st-tbody-create-cancel",
                    template: `
    @if (!row.pending) {
      <a
        href="#"
        [id]="'row-' + row.index + '_editing-confirm-button'"
        class="ng2-smart-action ng2-smart-action-edit-save"
        [innerHTML]="saveButtonContent"
        (click)="onSave($event)"
      ></a>
      <a
        href="#"
        [id]="'row-' + row.index + '_editing-cancel-button'"
        class="ng2-smart-action ng2-smart-action-edit-cancel"
        [innerHTML]="cancelButtonContent"
        (click)="onCancelEdit($event)"
      ></a>
    } @else {
      <div style="display: flex;">
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
        <svg
          (click)="$event.stopPropagation()"
          style="height: 2rem; width: 2rem; "
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
    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLWNhbmNlbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZzItc21hcnQtdGFibGUvc3JjL2xpYi9jb21wb25lbnRzL3Rib2R5L2NlbGxzL2NyZWF0ZS1jYW5jZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUUxRSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDaEQsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLG1CQUFtQixDQUFDOztBQWtGekMsTUFBTSxPQUFPLDBCQUEwQjtJQWhGdkM7UUFzRkUsd0JBQW1CLEdBQVcsRUFBRSxDQUFDO1FBQ2pDLHNCQUFpQixHQUFXLEVBQUUsQ0FBQztLQXlCaEM7SUF2QkMsTUFBTSxDQUFDLEtBQVU7UUFDZixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCxZQUFZLENBQUMsS0FBVTtRQUNyQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUMvQixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FDM0Msd0JBQXdCLEVBQ3hCLE1BQU0sQ0FDUCxDQUFDO1FBQ0YsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUM3QywwQkFBMEIsRUFDMUIsUUFBUSxDQUNULENBQUM7SUFDSixDQUFDOytHQS9CVSwwQkFBMEI7bUdBQTFCLDBCQUEwQixtTEE5RTNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBNEVQOzs0RkFFUSwwQkFBMEI7a0JBaEZ0QyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSw0QkFBNEI7b0JBQ3RDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQTRFUDtpQkFDSjs4QkFFVSxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csR0FBRztzQkFBWCxLQUFLO2dCQUNHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBQ0csVUFBVTtzQkFBbEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgUm93IH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9kYXRhLXNldC9yb3dcIjtcbmltcG9ydCB7IEdyaWQgfSBmcm9tIFwiLi4vLi4vLi4vbGliL2dyaWRcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIm5nMi1zdC10Ym9keS1jcmVhdGUtY2FuY2VsXCIsXG4gIHRlbXBsYXRlOiBgXG4gICAgQGlmICghcm93LnBlbmRpbmcpIHtcbiAgICAgIDxhXG4gICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgW2lkXT1cIidyb3ctJyArIHJvdy5pbmRleCArICdfZWRpdGluZy1jb25maXJtLWJ1dHRvbidcIlxuICAgICAgICBjbGFzcz1cIm5nMi1zbWFydC1hY3Rpb24gbmcyLXNtYXJ0LWFjdGlvbi1lZGl0LXNhdmVcIlxuICAgICAgICBbaW5uZXJIVE1MXT1cInNhdmVCdXR0b25Db250ZW50XCJcbiAgICAgICAgKGNsaWNrKT1cIm9uU2F2ZSgkZXZlbnQpXCJcbiAgICAgID48L2E+XG4gICAgICA8YVxuICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgIFtpZF09XCIncm93LScgKyByb3cuaW5kZXggKyAnX2VkaXRpbmctY2FuY2VsLWJ1dHRvbidcIlxuICAgICAgICBjbGFzcz1cIm5nMi1zbWFydC1hY3Rpb24gbmcyLXNtYXJ0LWFjdGlvbi1lZGl0LWNhbmNlbFwiXG4gICAgICAgIFtpbm5lckhUTUxdPVwiY2FuY2VsQnV0dG9uQ29udGVudFwiXG4gICAgICAgIChjbGljayk9XCJvbkNhbmNlbEVkaXQoJGV2ZW50KVwiXG4gICAgICA+PC9hPlxuICAgIH0gQGVsc2Uge1xuICAgICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7XCI+XG4gICAgICAgIDxzdmdcbiAgICAgICAgICAoY2xpY2spPVwiJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXCJcbiAgICAgICAgICBzdHlsZT1cImhlaWdodDogMnJlbTsgd2lkdGg6IDJyZW07XCJcbiAgICAgICAgICB2ZXJzaW9uPVwiMS4xXCJcbiAgICAgICAgICBpZD1cIkw5XCJcbiAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIlxuICAgICAgICAgIHg9XCIwcHhcIlxuICAgICAgICAgIHk9XCIwcHhcIlxuICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTAwIDEwMFwiXG4gICAgICAgICAgZW5hYmxlLWJhY2tncm91bmQ9XCJuZXcgMCAwIDAgMFwiXG4gICAgICAgICAgeG1sOnNwYWNlPVwicHJlc2VydmVcIlxuICAgICAgICAgID5cbiAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgZmlsbD1cIiNlOWU5ZTlcIlxuICAgICAgICAgICAgZD1cIk03Myw1MGMwLTEyLjctMTAuMy0yMy0yMy0yM1MyNywzNy4zLDI3LDUwIE0zMC45LDUwYzAtMTAuNSw4LjUtMTkuMSwxOS4xLTE5LjFTNjkuMSwzOS41LDY5LjEsNTBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgPGFuaW1hdGVUcmFuc2Zvcm1cbiAgICAgICAgICAgICAgYXR0cmlidXRlTmFtZT1cInRyYW5zZm9ybVwiXG4gICAgICAgICAgICAgIGF0dHJpYnV0ZVR5cGU9XCJYTUxcIlxuICAgICAgICAgICAgICB0eXBlPVwicm90YXRlXCJcbiAgICAgICAgICAgICAgZHVyPVwiMXNcIlxuICAgICAgICAgICAgICBmcm9tPVwiMCA1MCA1MFwiXG4gICAgICAgICAgICAgIHRvPVwiMzYwIDUwIDUwXCJcbiAgICAgICAgICAgICAgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L3BhdGg+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgICA8c3ZnXG4gICAgICAgICAgKGNsaWNrKT1cIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKVwiXG4gICAgICAgICAgc3R5bGU9XCJoZWlnaHQ6IDJyZW07IHdpZHRoOiAycmVtOyBcIlxuICAgICAgICAgIHZlcnNpb249XCIxLjFcIlxuICAgICAgICAgIGlkPVwiTDlcIlxuICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiXG4gICAgICAgICAgeD1cIjBweFwiXG4gICAgICAgICAgeT1cIjBweFwiXG4gICAgICAgICAgdmlld0JveD1cIjAgMCAxMDAgMTAwXCJcbiAgICAgICAgICBlbmFibGUtYmFja2dyb3VuZD1cIm5ldyAwIDAgMCAwXCJcbiAgICAgICAgICB4bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiXG4gICAgICAgICAgPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICBmaWxsPVwiI2U5ZTllOVwiXG4gICAgICAgICAgICBkPVwiTTczLDUwYzAtMTIuNy0xMC4zLTIzLTIzLTIzUzI3LDM3LjMsMjcsNTAgTTMwLjksNTBjMC0xMC41LDguNS0xOS4xLDE5LjEtMTkuMVM2OS4xLDM5LjUsNjkuMSw1MFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICA8YW5pbWF0ZVRyYW5zZm9ybVxuICAgICAgICAgICAgICBhdHRyaWJ1dGVOYW1lPVwidHJhbnNmb3JtXCJcbiAgICAgICAgICAgICAgYXR0cmlidXRlVHlwZT1cIlhNTFwiXG4gICAgICAgICAgICAgIHR5cGU9XCJyb3RhdGVcIlxuICAgICAgICAgICAgICBkdXI9XCIxc1wiXG4gICAgICAgICAgICAgIGZyb209XCIwIDUwIDUwXCJcbiAgICAgICAgICAgICAgdG89XCIzNjAgNTAgNTBcIlxuICAgICAgICAgICAgICByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgIDwvcGF0aD5cbiAgICAgICAgPC9zdmc+XG4gICAgICA8L2Rpdj5cbiAgICB9XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgVGJvZHlDcmVhdGVDYW5jZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBncmlkITogR3JpZDtcbiAgQElucHV0KCkgcm93ITogUm93O1xuICBASW5wdXQoKSBlZGl0Q29uZmlybSE6IEV2ZW50RW1pdHRlcjxhbnk+O1xuICBASW5wdXQoKSBlZGl0Q2FuY2VsITogRXZlbnRFbWl0dGVyPGFueT47XG5cbiAgY2FuY2VsQnV0dG9uQ29udGVudDogc3RyaW5nID0gXCJcIjtcbiAgc2F2ZUJ1dHRvbkNvbnRlbnQ6IHN0cmluZyA9IFwiXCI7XG5cbiAgb25TYXZlKGV2ZW50OiBhbnkpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuZ3JpZC5zYXZlKHRoaXMucm93LCB0aGlzLmVkaXRDb25maXJtKTtcbiAgfVxuXG4gIG9uQ2FuY2VsRWRpdChldmVudDogYW55KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLmVkaXRDYW5jZWwuZW1pdCh0cnVlKTtcbiAgICB0aGlzLnJvdy5pc0luRWRpdGluZyA9IGZhbHNlO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy5zYXZlQnV0dG9uQ29udGVudCA9IHRoaXMuZ3JpZC5nZXRTZXR0aW5nKFxuICAgICAgXCJlZGl0LnNhdmVCdXR0b25Db250ZW50XCIsXG4gICAgICBcInNhdmVcIlxuICAgICk7XG4gICAgdGhpcy5jYW5jZWxCdXR0b25Db250ZW50ID0gdGhpcy5ncmlkLmdldFNldHRpbmcoXG4gICAgICBcImVkaXQuY2FuY2VsQnV0dG9uQ29udGVudFwiLFxuICAgICAgXCJjYW5jZWxcIlxuICAgICk7XG4gIH1cbn1cbiJdfQ==