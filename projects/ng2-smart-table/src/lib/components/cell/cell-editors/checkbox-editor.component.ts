import { Component, computed } from "@angular/core";

import { DefaultEditor } from "./default-editor";

@Component({
  selector: "checkbox-editor",
  styleUrls: ["./editor.component.scss"],
  template: `
    <input
      [class]="inputClass()"
      type="checkbox"
      class="form-control"
      [name]="cell().getId()"
      [disabled]="!cell().isEditable()"
      (change)="onChange($event)"
      [checked]="
        cell().getValue() === trueVal()
      "
    />
  `,
  standalone: true,
})
export class CheckboxEditorComponent extends DefaultEditor {
  readonly trueVal = computed(() => {
    return this.cell().getColumn().getConfig()?.true || true
  })
  readonly falseVal = computed(() => {
    return this.cell().getColumn().getConfig()?.false || false
  })


  constructor() {
    super();
  }

  onChange(event: any) {
    this.cell().newValue = event.target.checked ? this.trueVal() : this.falseVal();
  }
}
