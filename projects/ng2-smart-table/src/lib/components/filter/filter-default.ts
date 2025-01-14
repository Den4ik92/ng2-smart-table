import { Component, input, Input, output } from '@angular/core';

import { Column } from '../../lib/data-set/column';
import { LocalDataSource } from '../../lib/data-source/local/local.data-source';

@Component({ template: '' })
export class FilterDefault {
  readonly column = input.required<Column>();
  readonly source = input.required<LocalDataSource>();
  readonly inputClass = input<string>('');
  @Input() query = '';

  readonly filter = output<any>();

  onFilter(query: string) {
    this.source().addFilter({
      field: this.column().id,
      search: query,
      filter: this.column().getFilterFunction(),
    });
  }
}
