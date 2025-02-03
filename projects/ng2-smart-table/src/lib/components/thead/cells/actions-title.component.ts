import {
  Component,
  computed,
  input
} from "@angular/core";

import { Grid } from "../../../lib/grid";

@Component({
  selector: "[ng2-st-actions-title]",
  template: ` <div class="ng2-smart-title">{{ actionsColumnTitle() }}</div> `,
  standalone: true,
  host: {
    class: "ng2-smart-actions",
  },
})
export class ActionsTitleComponent {
  readonly grid = input.required<Grid>();

  readonly actionsColumnTitle = computed(() => {
    const actions = this.grid().settings().actions;
    if (!actions) {
      return "Actions";
    }
    return actions.columnTitle || "Actions";
  });
}
