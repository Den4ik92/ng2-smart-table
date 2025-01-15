import {
  ChangeDetectionStrategy,
  Component,
  computed,
  EventEmitter,
  input,
  OutputEmitterRef
} from "@angular/core";

import { Row } from "../../../lib/data-set/row";
import { Grid } from "../../../lib/grid";

@Component({
  selector: "ng2-st-tbody-create-cancel",
  template: `
    @if (!row().pending()) {
    <a
      href="#"
      [id]="'row-' + row().index + '_editing-confirm-button'"
      class="ng2-smart-action ng2-smart-action-edit-save"
      [innerHTML]="saveButtonContent()"
      (click)="onSave($event)"
    ></a>
    <a
      href="#"
      [id]="'row-' + row().index + '_editing-cancel-button'"
      class="ng2-smart-action ng2-smart-action-edit-cancel"
      [innerHTML]="cancelButtonContent()"
      (click)="onCancelEdit($event)"
    ></a>
    } @else {
    <div style="display: flex;">
      <svg
        role="none"
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
        role="none"
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
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TbodyCreateCancelComponent {
  readonly grid = input.required<Grid>();
  readonly row = input.required<Row>();
  readonly editConfirm = input.required<EventEmitter<any> | OutputEmitterRef<any>>();
  readonly editCancel = input.required<EventEmitter<any> | OutputEmitterRef<any>>();

  readonly cancelButtonContent = computed(() => {
    const edit = this.grid().settings().edit
    return edit ? edit.cancelButtonContent || "Cancel" : "Cancel"
  })
  readonly saveButtonContent = computed(() => {
    const edit = this.grid().settings().edit
    return edit ? edit.saveButtonContent || "Update" : "Update"
  })

  onSave(event: any) {
    event.preventDefault();
    event.stopPropagation();
    this.grid().save(this.row(), this.editConfirm());
  }

  onCancelEdit(event: any) {
    event.preventDefault();
    event.stopPropagation();
    this.editCancel().emit(true);
    this.row().isInEditing = false;
  }
}
