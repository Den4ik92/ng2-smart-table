import { Output, EventEmitter, Input, Component } from '@angular/core';

import { Column } from '../../lib/data-set/column';
import { LocalDataSource } from '../../lib/data-source/local/local.data-source';

@Component({
    template: '',
    standalone: false
})
export class FilterDefault {

  @Input() column!: Column;
  @Input() source!: LocalDataSource;
  @Input() inputClass: string = '';
  @Input() query: string = '';

  @Output() filter = new EventEmitter<any>();

  onFilter(query: string) {
    this.source.addFilter({
      field: this.column.id,
      search: query,
      filter: this.column.getFilterFunction(),
    });
  }
}
