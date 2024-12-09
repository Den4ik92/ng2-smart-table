import { Component } from "@angular/core";

import { FormsModule } from "@angular/forms";
import { DefaultEditor } from "./default-editor";

@Component({
  selector: "textarea-editor",
  styleUrls: ["./editor.component.scss"],
  template: `
    <textarea
      [class]="inputClass"
      class="form-control"
      [(ngModel)]="cell.newValue"
      [name]="cell.getId()"
      [disabled]="!cell.isEditable()"
      [placeholder]="cell.getTitle()"
      (click)="onClick.emit($event)"
      (keydown.enter)="onEdited.emit($event)"
      (keydown.esc)="onStopEditing.emit('')"
    >
    </textarea>
  `,
  standalone: true,
  imports: [FormsModule],
})
export class TextareaEditorComponent extends DefaultEditor {
  constructor() {
    super();
  }
}
