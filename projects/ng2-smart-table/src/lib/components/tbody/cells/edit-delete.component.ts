import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  effect,
  EventEmitter,
  inject,
  input,
  output,
  OutputEmitterRef,
} from "@angular/core";

import { Row } from "../../../lib/data-set/row";
import { LocalDataSource } from "../../../lib/data-source/local/local.data-source";
import { Grid } from "../../../lib/grid";

@Component({
  selector: "ng2-st-tbody-edit-delete",
  template: `
    @if (!row().pending) { @if (isActionEdit) {
    <a
      href="#"
      [id]="'row-' + row().index + '_action-edit-button'"
      class="ng2-smart-action ng2-smart-action-edit-edit"
      [innerHTML]="editRowButtonContent"
      (click)="onEdit($event)"
    ></a>
    } @if (isActionDelete) {
    <a
      href="#"
      [id]="'row-' + row().index + '_action-delete-button'"
      class="ng2-smart-action ng2-smart-action-delete-delete"
      [innerHTML]="deleteRowButtonContent"
      (click)="onDelete($event)"
    ></a>
    } } @else {
    <div style="display: flex;">
      @if (isActionEdit) {
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
      } @if (isActionDelete) {
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
      }
    </div>
    }
  `,
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TbodyEditDeleteComponent {
  private readonly cdr = inject(ChangeDetectorRef);
  readonly grid = input.required<Grid>();
  readonly row = input.required<Row>();
  readonly source = input.required<LocalDataSource>();
  readonly deleteConfirm = input.required<
    EventEmitter<any> | OutputEmitterRef<any>
  >();

  readonly edit = output<any>();
  readonly delete = output<any>();

  isActionEdit = false;
  isActionDelete = false;
  isExternalMode = false;
  editRowButtonContent = "Edit";
  deleteRowButtonContent = "Delete";

  constructor() {
    effect(() => {
      const settings = this.grid().settings();
      const actions = settings.actions;
      if (actions) {
        this.isActionDelete = !!actions.delete;
        this.isActionEdit = !!actions.edit;
      }
      this.isExternalMode = settings.mode === 'external';
      this.editRowButtonContent = settings.edit
        ? settings.edit.editButtonContent || "Edit"
        : "Edit";
      this.deleteRowButtonContent = settings.delete
        ? settings.delete.deleteButtonContent || "Delete"
        : "Delete";
      this.cdr.detectChanges();


    });
  }

  onEdit(event: any) {
    event.preventDefault();
    event.stopPropagation();
    this.edit.emit({
      data: this.row().getData(),
      source: this.source,
    });
    if (!this.isExternalMode) {
      this.grid().edit(this.row());
    }
  }

  onDelete(event: any) {
    event.preventDefault();
    event.stopPropagation();
    if (this.isExternalMode) {
      this.delete.emit({
        data: this.row().getData(),
        source: this.source(),
      });
    } else {
      this.grid().delete(this.row(), this.deleteConfirm());
    }
  }
}
