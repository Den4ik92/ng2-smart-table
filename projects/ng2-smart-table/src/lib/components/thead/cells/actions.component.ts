import {
  Component,
  computed,
  input,
  output
} from "@angular/core";

import { Grid } from "../../../lib/grid";

@Component({
  selector: "ng2-st-actions",
  template: `
    <a
      href="#"
      class="ng2-smart-action ng2-smart-action-add-create"
      [innerHTML]="createButtonContent()"
      (click)="$event.preventDefault(); create.emit($event)"
    ></a>
    <a
      href="#"
      class="ng2-smart-action ng2-smart-action-add-cancel"
      [innerHTML]="cancelButtonContent()"
      (click)="$event.preventDefault(); grid().createFormShown = false"
    ></a>
  `,
  standalone: true,
})
export class ActionsComponent {
  readonly grid = input.required<Grid>();
  readonly create = output<any>();

  createButtonContent = computed(() => {
    const addOptions = this.grid().settings().add
    if (!addOptions) {
      return "Create"
    }
    return addOptions?.createButtonContent || "Create"
  });
  cancelButtonContent = computed(() => {
    const addOptions = this.grid().settings().add
    if (!addOptions) {
      return "Cancel"
    }
    return addOptions?.cancelButtonContent || "Cancel"
  });
}
