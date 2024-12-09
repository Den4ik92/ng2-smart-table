import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Column } from '../../../lib/data-set/column';
import { LocalDataSource } from '../../../lib/data-source/local/local.data-source';

@Component({
    selector: 'ng2-st-column-title',
    template: `
    <div class="ng2-smart-title">
      <ng2-smart-table-title [source]="source" [column]="column" (sort)="sort.emit($event)"></ng2-smart-table-title>
    </div>
  `,
    standalone: false
})
export class ColumnTitleComponent {

  @Input() column!: Column;
  @Input() source!: LocalDataSource;

  @Output() sort = new EventEmitter<any>();

}
