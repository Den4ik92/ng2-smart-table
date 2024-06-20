import { Component, EventEmitter, Input } from "@angular/core";
import { Row } from "../../../lib/data-set/row";
import { Grid } from "../../../lib/grid";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TbodyCreateCancelComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TbodyCreateCancelComponent, selector: "ng2-st-tbody-create-cancel", inputs: { grid: "grid", row: "row", editConfirm: "editConfirm", editCancel: "editCancel" }, usesOnChanges: true, ngImport: i0, template: `
    <ng-container *ngIf="!row.pending; else loader">
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
    </ng-container>
    <ng-template #loader>
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
    </ng-template>
  `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TbodyCreateCancelComponent, decorators: [{
            type: Component,
            args: [{
                    selector: "ng2-st-tbody-create-cancel",
                    template: `
    <ng-container *ngIf="!row.pending; else loader">
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
    </ng-container>
    <ng-template #loader>
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
    </ng-template>
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLWNhbmNlbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZzItc21hcnQtdGFibGUvc3JjL2xpYi9jb21wb25lbnRzL3Rib2R5L2NlbGxzL2NyZWF0ZS1jYW5jZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUUxRSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDaEQsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7QUFtRnpDLE1BQU0sT0FBTywwQkFBMEI7SUFqRnZDO1FBdUZFLHdCQUFtQixHQUFXLEVBQUUsQ0FBQztRQUNqQyxzQkFBaUIsR0FBVyxFQUFFLENBQUM7S0F5QmhDO0lBdkJDLE1BQU0sQ0FBQyxLQUFVO1FBQ2YsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsWUFBWSxDQUFDLEtBQVU7UUFDckIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDL0IsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQzNDLHdCQUF3QixFQUN4QixNQUFNLENBQ1AsQ0FBQztRQUNGLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FDN0MsMEJBQTBCLEVBQzFCLFFBQVEsQ0FDVCxDQUFDO0lBQ0osQ0FBQzsrR0EvQlUsMEJBQTBCO21HQUExQiwwQkFBMEIsbUxBL0UzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E2RVQ7OzRGQUVVLDBCQUEwQjtrQkFqRnRDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtvQkFDdEMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTZFVDtpQkFDRjs4QkFFVSxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csR0FBRztzQkFBWCxLQUFLO2dCQUNHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBQ0csVUFBVTtzQkFBbEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgUm93IH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9kYXRhLXNldC9yb3dcIjtcbmltcG9ydCB7IEdyaWQgfSBmcm9tIFwiLi4vLi4vLi4vbGliL2dyaWRcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIm5nMi1zdC10Ym9keS1jcmVhdGUtY2FuY2VsXCIsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFyb3cucGVuZGluZzsgZWxzZSBsb2FkZXJcIj5cbiAgICAgIDxhXG4gICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgW2lkXT1cIidyb3ctJyArIHJvdy5pbmRleCArICdfZWRpdGluZy1jb25maXJtLWJ1dHRvbidcIlxuICAgICAgICBjbGFzcz1cIm5nMi1zbWFydC1hY3Rpb24gbmcyLXNtYXJ0LWFjdGlvbi1lZGl0LXNhdmVcIlxuICAgICAgICBbaW5uZXJIVE1MXT1cInNhdmVCdXR0b25Db250ZW50XCJcbiAgICAgICAgKGNsaWNrKT1cIm9uU2F2ZSgkZXZlbnQpXCJcbiAgICAgID48L2E+XG4gICAgICA8YVxuICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgIFtpZF09XCIncm93LScgKyByb3cuaW5kZXggKyAnX2VkaXRpbmctY2FuY2VsLWJ1dHRvbidcIlxuICAgICAgICBjbGFzcz1cIm5nMi1zbWFydC1hY3Rpb24gbmcyLXNtYXJ0LWFjdGlvbi1lZGl0LWNhbmNlbFwiXG4gICAgICAgIFtpbm5lckhUTUxdPVwiY2FuY2VsQnV0dG9uQ29udGVudFwiXG4gICAgICAgIChjbGljayk9XCJvbkNhbmNlbEVkaXQoJGV2ZW50KVwiXG4gICAgICA+PC9hPlxuICAgIDwvbmctY29udGFpbmVyPlxuICAgIDxuZy10ZW1wbGF0ZSAjbG9hZGVyPlxuICAgICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7XCI+XG4gICAgICAgIDxzdmdcbiAgICAgICAgICAoY2xpY2spPVwiJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXCJcbiAgICAgICAgICBzdHlsZT1cImhlaWdodDogMnJlbTsgd2lkdGg6IDJyZW07XCJcbiAgICAgICAgICB2ZXJzaW9uPVwiMS4xXCJcbiAgICAgICAgICBpZD1cIkw5XCJcbiAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIlxuICAgICAgICAgIHg9XCIwcHhcIlxuICAgICAgICAgIHk9XCIwcHhcIlxuICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTAwIDEwMFwiXG4gICAgICAgICAgZW5hYmxlLWJhY2tncm91bmQ9XCJuZXcgMCAwIDAgMFwiXG4gICAgICAgICAgeG1sOnNwYWNlPVwicHJlc2VydmVcIlxuICAgICAgICA+XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgIGZpbGw9XCIjZTllOWU5XCJcbiAgICAgICAgICAgIGQ9XCJNNzMsNTBjMC0xMi43LTEwLjMtMjMtMjMtMjNTMjcsMzcuMywyNyw1MCBNMzAuOSw1MGMwLTEwLjUsOC41LTE5LjEsMTkuMS0xOS4xUzY5LjEsMzkuNSw2OS4xLDUwXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8YW5pbWF0ZVRyYW5zZm9ybVxuICAgICAgICAgICAgICBhdHRyaWJ1dGVOYW1lPVwidHJhbnNmb3JtXCJcbiAgICAgICAgICAgICAgYXR0cmlidXRlVHlwZT1cIlhNTFwiXG4gICAgICAgICAgICAgIHR5cGU9XCJyb3RhdGVcIlxuICAgICAgICAgICAgICBkdXI9XCIxc1wiXG4gICAgICAgICAgICAgIGZyb209XCIwIDUwIDUwXCJcbiAgICAgICAgICAgICAgdG89XCIzNjAgNTAgNTBcIlxuICAgICAgICAgICAgICByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L3BhdGg+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgICA8c3ZnXG4gICAgICAgICAgKGNsaWNrKT1cIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKVwiXG4gICAgICAgICAgc3R5bGU9XCJoZWlnaHQ6IDJyZW07IHdpZHRoOiAycmVtOyBcIlxuICAgICAgICAgIHZlcnNpb249XCIxLjFcIlxuICAgICAgICAgIGlkPVwiTDlcIlxuICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiXG4gICAgICAgICAgeD1cIjBweFwiXG4gICAgICAgICAgeT1cIjBweFwiXG4gICAgICAgICAgdmlld0JveD1cIjAgMCAxMDAgMTAwXCJcbiAgICAgICAgICBlbmFibGUtYmFja2dyb3VuZD1cIm5ldyAwIDAgMCAwXCJcbiAgICAgICAgICB4bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiXG4gICAgICAgID5cbiAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgZmlsbD1cIiNlOWU5ZTlcIlxuICAgICAgICAgICAgZD1cIk03Myw1MGMwLTEyLjctMTAuMy0yMy0yMy0yM1MyNywzNy4zLDI3LDUwIE0zMC45LDUwYzAtMTAuNSw4LjUtMTkuMSwxOS4xLTE5LjFTNjkuMSwzOS41LDY5LjEsNTBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxhbmltYXRlVHJhbnNmb3JtXG4gICAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWU9XCJ0cmFuc2Zvcm1cIlxuICAgICAgICAgICAgICBhdHRyaWJ1dGVUeXBlPVwiWE1MXCJcbiAgICAgICAgICAgICAgdHlwZT1cInJvdGF0ZVwiXG4gICAgICAgICAgICAgIGR1cj1cIjFzXCJcbiAgICAgICAgICAgICAgZnJvbT1cIjAgNTAgNTBcIlxuICAgICAgICAgICAgICB0bz1cIjM2MCA1MCA1MFwiXG4gICAgICAgICAgICAgIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvcGF0aD5cbiAgICAgICAgPC9zdmc+XG4gICAgICA8L2Rpdj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBUYm9keUNyZWF0ZUNhbmNlbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIGdyaWQhOiBHcmlkO1xuICBASW5wdXQoKSByb3chOiBSb3c7XG4gIEBJbnB1dCgpIGVkaXRDb25maXJtITogRXZlbnRFbWl0dGVyPGFueT47XG4gIEBJbnB1dCgpIGVkaXRDYW5jZWwhOiBFdmVudEVtaXR0ZXI8YW55PjtcblxuICBjYW5jZWxCdXR0b25Db250ZW50OiBzdHJpbmcgPSBcIlwiO1xuICBzYXZlQnV0dG9uQ29udGVudDogc3RyaW5nID0gXCJcIjtcblxuICBvblNhdmUoZXZlbnQ6IGFueSkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5ncmlkLnNhdmUodGhpcy5yb3csIHRoaXMuZWRpdENvbmZpcm0pO1xuICB9XG5cbiAgb25DYW5jZWxFZGl0KGV2ZW50OiBhbnkpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuZWRpdENhbmNlbC5lbWl0KHRydWUpO1xuICAgIHRoaXMucm93LmlzSW5FZGl0aW5nID0gZmFsc2U7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLnNhdmVCdXR0b25Db250ZW50ID0gdGhpcy5ncmlkLmdldFNldHRpbmcoXG4gICAgICBcImVkaXQuc2F2ZUJ1dHRvbkNvbnRlbnRcIixcbiAgICAgIFwic2F2ZVwiXG4gICAgKTtcbiAgICB0aGlzLmNhbmNlbEJ1dHRvbkNvbnRlbnQgPSB0aGlzLmdyaWQuZ2V0U2V0dGluZyhcbiAgICAgIFwiZWRpdC5jYW5jZWxCdXR0b25Db250ZW50XCIsXG4gICAgICBcImNhbmNlbFwiXG4gICAgKTtcbiAgfVxufVxuIl19