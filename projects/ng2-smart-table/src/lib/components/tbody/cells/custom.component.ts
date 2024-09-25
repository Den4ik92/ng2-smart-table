import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from "@angular/core";
import { Row } from "../../../lib/data-set/row";
import { LocalDataSource } from "./../../../lib/data-source/local/local.data-source";

import { Grid } from "../../../lib/grid";
import { SmartTableCustomAction } from "../../../lib/interfaces/smart-table.models";

@Component({
  selector: "ng2-st-tbody-custom",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @for (action of customActions(); track action) {
      <a
        [id]="'row-' + row.index + '_action-' + action.name + '-button'"
        href="#"
        class="ng2-smart-action ng2-smart-action-custom-custom"
        [innerHTML]="action.title"
        (click)="$event.stopPropagation(); $event.preventDefault(); onCustom(action)"
      ></a>
    }
    `,
})
export class TbodyCustomComponent {
  @Input() grid!: Grid;
  @Input() row!: Row;
  @Input() source!: LocalDataSource;
  @Output() custom = new EventEmitter<any>();

  onCustom(action: any) {
    this.custom.emit({
      action: action.name,
      data: this.row.getData(),
      source: this.source,
    });
  }

  customActions() {
    return this.grid.getSetting<SmartTableCustomAction[] | undefined>("actions.custom");
  }
}
