import { Component, input } from "@angular/core";

import { FormsModule } from "@angular/forms";
import { Grid } from "../../../lib/grid";
@Component({
  selector: "[ng2-st-checkbox-select-all]",
  template: `
    <input type="checkbox" [ngModel]="this.grid().dataSet.isAllSelected()" />
  `,
  standalone: true,
  imports: [FormsModule],
})
export class CheckboxSelectAllComponent {
  readonly grid = input.required<Grid>();
}
