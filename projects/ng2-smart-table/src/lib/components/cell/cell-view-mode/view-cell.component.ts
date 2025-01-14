import { ChangeDetectionStrategy, Component, input } from "@angular/core";

import { Cell } from "../../../lib/data-set/cell";
import { CustomViewComponent } from "./custom-view.component";

@Component({
  selector: "table-cell-view-mode",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div>
      @switch (cell().getColumn().type) { @case ('custom') {
      <custom-view-component [cell]="cell()"></custom-view-component>
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
