import { ChangeDetectionStrategy, Component, computed, input, output, signal } from '@angular/core';

import { OverlayModule } from '@angular/cdk/overlay';
import { NgTemplateOutlet } from '@angular/common';
import { Column } from '../../lib/data-set/column';
import { DataSource } from '../../lib/data-source/data-source';
import { Grid } from '../../lib/grid';
import { SmartTableSortDirection } from '../../lib/interfaces/smart-table.models';
import { AddButtonComponent } from './cells/add-button.component';
import { ColumnTitleComponent } from './cells/title/title.component';
import { MobileFiltersComponent } from './mobile-filters/mobile-filters.component';
import { TheadFiltersRowComponent } from './rows/thead-filters-row.component';
import { TheadTitlesRowComponent } from './rows/thead-titles-row.component';

@Component({
  selector: '[ng2-st-thead]',
  templateUrl: './thead.component.html',
  styleUrls: ['./thead.component.scss'],
  imports: [
    TheadTitlesRowComponent,
    AddButtonComponent,
    MobileFiltersComponent,
    ColumnTitleComponent,
    TheadFiltersRowComponent,
    NgTemplateOutlet,
    OverlayModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Ng2SmartTableTheadComponent {
  readonly grid = input.required<Grid>();
  readonly source = input.required<DataSource>();
  readonly isMobileView = input<boolean>(false);

  readonly selectAllRows = output<void>();
  readonly create = output<void>();

  readonly isHideHeader = computed<boolean>(() => {
    return this.grid().settings()?.hideHeader || false;
  });
  readonly isHideSubHeader = computed<boolean>(() => {
    return this.grid().settings()?.hideSubHeader || false;
  });
  readonly columnsWithSort = computed(() =>
    this.grid()
      .dataSet.getColumns()
      .filter((column) => column.isSortable),
  );
  readonly columnsWithSortLength = computed(() => this.columnsWithSort().length);
  readonly columnsWithFiltersLength = computed(
    () =>
      this.grid()
        .dataSet.getColumns()
        .filter((column) => column.isFilterable).length,
  );

  readonly currentSortConfig = computed(() => this.source().getSort());

  readonly filterDropdownIsOpen = signal(false);

  protected toggleDropdown(state?: boolean) {
    this.filterDropdownIsOpen.update((value) => state ?? !value);
  }

  protected sortByColumn(column?: Column): void {
    const sort = this.currentSortConfig();
    const { id: field, title } = column || { id: sort.field, title: sort.title };
    const direction: SmartTableSortDirection =
      field === sort.field ? (sort.direction === 'asc' ? 'desc' : 'asc') : 'asc';
    this.source().setSort({
      field,
      title,
      direction: direction,
    });
    this.filterDropdownIsOpen.set(false);
  }

  readonly filterInputClass = computed<string>(() => {
    const filterOptions = this.grid().settings()?.filter;
    if (!filterOptions) {
      return '';
    }
    return filterOptions.inputClass || '';
  });
}
