import { Component, input, output } from "@angular/core";

import { Column } from "../../../lib/data-set/column";
import { LocalDataSource } from "../../../lib/data-source/local/local.data-source";
import { TitleComponent } from "./title/title.component";

@Component({
  selector: "ng2-st-column-title",
  template: `
    <div class="ng2-smart-title">
      <ng2-smart-table-title
        [source]="source()"
        [column]="column()"
        (sort)="sort.emit($event)"
      ></ng2-smart-table-title>
    </div>
  `,
  standalone: true,
  imports: [TitleComponent],
})
export class ColumnTitleComponent {
  readonly source = input.required<LocalDataSource>();
  readonly column = input.required<Column>();

  readonly sort = output<any>();
}
