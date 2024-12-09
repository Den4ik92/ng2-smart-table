import { Component } from "@angular/core";

import { SmartTableEditorAndFilterTypes } from "../../../lib/interfaces/smart-table.models";
import { CheckboxEditorComponent } from "../cell-editors/checkbox-editor.component";
import { InputEditorComponent } from "../cell-editors/input-editor.component";
import { SelectEditorComponent } from "../cell-editors/select-editor.component";
import { TextareaEditorComponent } from "../cell-editors/textarea-editor.component";
import { EditCellDefault } from "./edit-cell-default";

@Component({
  selector: "table-cell-default-editor",
  templateUrl: "./default-edit.component.html",
  imports: [
    SelectEditorComponent,
    TextareaEditorComponent,
    CheckboxEditorComponent,
    InputEditorComponent,
  ],
  standalone: true,
})
export class DefaultEditComponent extends EditCellDefault {
  constructor() {
    super();
  }

  getEditorType(): SmartTableEditorAndFilterTypes {
    const editor = this.cell.getColumn().editor;
    if (editor) {
      return editor.type;
    }
    return "text";
  }
}
