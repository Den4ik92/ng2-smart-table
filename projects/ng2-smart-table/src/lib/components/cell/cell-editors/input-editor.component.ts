import { Component } from "@angular/core";

import { FormsModule } from "@angular/forms";
import { DefaultEditor } from "./default-editor";

@Component({
  selector: "input-editor",
  styleUrls: ["./editor.component.scss"],
  template: `
    <input
      [class]="inputClass()"
      class="form-control"
      [(ngModel)]="cell().newValue"
      [name]="cell().getId()"
      [placeholder]="cell().getTitle()"
      [disabled]="!cell().isEditable()"
    />
  `,
  standalone: true,
  imports: [FormsModule],
})
export class InputEditorComponent extends DefaultEditor {
  constructor() {
    super();
  }
}
