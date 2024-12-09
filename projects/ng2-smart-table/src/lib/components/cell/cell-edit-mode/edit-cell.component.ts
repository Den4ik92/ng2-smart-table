import { Component, Input, output } from "@angular/core";

import { Cell } from "../../../lib/data-set/cell";
import { SmartTableEditorAndFilterTypes } from "../../../lib/interfaces/smart-table.models";
import { CustomEditComponent } from "./custom-edit.component";
import { DefaultEditComponent } from "./default-edit.component";

@Component({
  selector: "table-cell-edit-mode",
  template: `
    <div>
      @switch (getEditorType()) { @case ('custom') {
      <table-cell-custom-editor
        [cell]="cell"
        [inputClass]="inputClass"
        (edited)="onEdited($event)"
      >
      </table-cell-custom-editor>
      } @default {
      <table-cell-default-editor
        [cell]="cell"
        [inputClass]="inputClass"
        (edited)="onEdited($event)"
      >
      </table-cell-default-editor>
      } }
    </div>
  `,
  standalone: true,
  imports: [CustomEditComponent, DefaultEditComponent],
})
export class EditCellComponent {
  @Input() cell!: Cell;
  @Input() inputClass = "";

  readonly edited = output<any>();

  onEdited(event: any): boolean {
    this.edited.emit(event);
    return false;
  }

  getEditorType(): SmartTableEditorAndFilterTypes {
    const editor = this.cell.getColumn().editor;
    if (editor) {
      return editor.type;
    }
    return "text";
  }
}
