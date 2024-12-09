import { Component, Input } from "@angular/core";

import { FormsModule } from "@angular/forms";
import { LocalDataSource } from "../../../lib/data-source/local/local.data-source";
import { Grid } from "../../../lib/grid";
@Component({
  selector: "[ng2-st-checkbox-select-all]",
  template: `
    <input type="checkbox" [ngModel]="this.grid.dataSet.isAllSelected" />
  `,
  standalone: true,
  imports: [FormsModule],
})
export class CheckboxSelectAllComponent {
  @Input() grid!: Grid;
  @Input() source!: LocalDataSource;
}
