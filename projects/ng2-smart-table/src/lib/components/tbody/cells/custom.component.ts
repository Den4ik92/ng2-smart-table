import {
  ChangeDetectionStrategy,
  Component,
  Input,
  output
} from "@angular/core";
import { Row } from "../../../lib/data-set/row";

import { DataSource } from "ng2-smart-table";
import { Grid } from "../../../lib/grid";
import { SmartTableCustomAction } from "../../../lib/interfaces/smart-table.models";

@Component({
  selector: "ng2-st-tbody-custom",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @for (action of customActions(); track $index) {
    <a
      [id]="'row-' + row.index + '_action-' + action.name + '-button'"
      href="#"
      class="ng2-smart-action ng2-smart-action-custom-custom"
      [innerHTML]="action.title"
      (click)="
        $event.stopPropagation(); $event.preventDefault(); onCustom(action)
      "
    ></a>
    }
  `,
  standalone: true,
})
export class TbodyCustomComponent {
  @Input() grid!: Grid;
  @Input() row!: Row;
  @Input() source!: DataSource;
  readonly custom = output<any>();

  onCustom(action: any) {
    this.custom.emit({
      action: action.name,
      data: this.row.getData(),
      source: this.source,
    });
  }

  customActions() {
    return this.grid.getSetting<SmartTableCustomAction[] | undefined>(
      "actions.custom"
    );
  }
}
