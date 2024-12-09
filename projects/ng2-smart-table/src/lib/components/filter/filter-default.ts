import { Input, Component, output } from '@angular/core';

import { Column } from '../../lib/data-set/column';
import { LocalDataSource } from '../../lib/data-source/local/local.data-source';

@Component({ template: '' })
export class FilterDefault {

  @Input() column!: Column;
  @Input() source!: LocalDataSource;
  @Input() inputClass: string = '';
  @Input() query: string = '';

  readonly filter = output<any>();

  onFilter(query: string) {
    this.source.addFilter({
      field: this.column.id,
      search: query,
      filter: this.column.getFilterFunction(),
    });
  }
}
