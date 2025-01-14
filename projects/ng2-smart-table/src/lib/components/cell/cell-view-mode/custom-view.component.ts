import { Component, input } from "@angular/core";

import { NgComponentOutlet } from "@angular/common";
import { Cell } from "../../../lib/data-set/cell";

@Component({
  selector: "custom-view-component",
  template: `<ng-template
    *ngComponentOutlet="
      cell().getColumn().renderComponent;
      inputs: { rowData: cell().getRow().getData(), value: cell().getValue() }
    "
  ></ng-template>`,
  imports: [NgComponentOutlet],
  standalone: true,
})
export class CustomViewComponent {
  readonly cell = input.required<Cell>();
}
