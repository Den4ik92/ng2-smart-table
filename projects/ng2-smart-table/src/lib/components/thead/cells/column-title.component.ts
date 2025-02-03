import { Component, input } from '@angular/core';

import { Column } from '../../../lib/data-set/column';
import { DataSource } from '../../../lib/data-source/data-source';
import { TitleComponent } from './title/title.component';

@Component({
  selector: 'ng2-st-column-title',
  template: `
    <div class="ng2-smart-title">
      <ng2-smart-table-title [source]="source()" [column]="column()"></ng2-smart-table-title>
    </div>
  `,
  standalone: true,
  imports: [TitleComponent],
})
export class ColumnTitleComponent {
  readonly source = input.required<DataSource>();
  readonly column = input.required<Column>();
}
