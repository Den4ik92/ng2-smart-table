import {
  Component,
  Input,
  OnChanges,
  output
} from "@angular/core";

import { Grid } from "../../../lib/grid";

@Component({
  selector: "ng2-st-actions",
  template: `
    <a
      href="#"
      class="ng2-smart-action ng2-smart-action-add-create"
      [innerHTML]="createButtonContent"
      (click)="$event.preventDefault(); create.emit($event)"
    ></a>
    <a
      href="#"
      class="ng2-smart-action ng2-smart-action-add-cancel"
      [innerHTML]="cancelButtonContent"
      (click)="$event.preventDefault(); grid.createFormShown = false"
    ></a>
  `,
  standalone: true,
})
export class ActionsComponent implements OnChanges {
  @Input() grid!: Grid;
  readonly create = output<any>();

  createButtonContent = "";
  cancelButtonContent = "";

  ngOnChanges() {
    this.createButtonContent = this.grid.getSetting("add.createButtonContent");
    this.cancelButtonContent = this.grid.getSetting("add.cancelButtonContent");
  }
}
