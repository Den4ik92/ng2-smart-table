import { ChangeDetectionStrategy, Component, input } from "@angular/core";

import { Cell } from "../../../lib/data-set/cell";
import { CustomViewComponent } from "./custom-view.component";

@Component({
  selector: "ng2-table-cell-view-mode",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div>
      @switch (cell().getColumn().type) { @case ('custom') {
      <ng2-custom-view-component [cell]="cell()"></ng2-custom-view-component>
      } @case ('html') {
      <div [innerHTML]="cell().getValue()"></div>
      } @default {
      <div>{{ cell().getValue() }}</div>
      } }
    </div>
  `,
  standalone: true,
  imports: [CustomViewComponent],
})
export class ViewCellComponent {
  readonly cell = input.required< Cell>()
}
