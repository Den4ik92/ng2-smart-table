import { computed, signal } from '@angular/core';
import {
  SmartTableFilterItem,
  SmartTableOnChangedEventName,
  SmartTableOnChangedEventToEmit,
  SmartTableOnChangedEventType,
  SmartTableSortItem,
} from '../../interfaces/smart-table.models';
import { DataSource } from '../data-source';
import { isElementSatisfied } from './local.filter';
import { paginateList } from './local.pager';
import { LocalSorter } from './local.sorter';

export class LocalDataSource<T extends Record<string, any> = any> extends DataSource<T> {
  private readonly filteredAndSorted = signal<T[]>([]);

  constructor(data: T[] = []) {
    super();
    this.data.set(data);
  }

  async load(data: T[]): Promise<true> {
    this.data.set(data);
    this.emitOnChanged({ action: SmartTableOnChangedEventName.load }, data);
    return Promise.resolve(true);
  }

  override prepend(element: T): Promise<true> {
    this.reset(true);
    return super.prepend(element);
  }

  override appendMany(elements: T[]): Promise<true> {
    this.reset(true);
    return super.appendMany(elements);
  }

  override add(element: T): Promise<true> {
    this.reset(true);
    return super.add(element);
  }

  getAll(): Promise<T[]> {
    const data = this.data().slice(0);
    return Promise.resolve(data);
  }

  reset(silent = false) {
    if (silent) {
      this.filters = [];
      this.sortConf = { field: '', direction: 'asc' };
      this.pagingConf.update((old) => ({ ...old, page: 1 }));
    } else {
      this.setFilters([], false);
      this.setSort({ field: '', direction: 'asc' }, false);
      if (this.pagingConf().display) {
        this.setPage(1);
      }
    }
  }

  readonly count = computed(() => this.filteredAndSorted().length);

  getSort(): SmartTableSortItem {
    return this.sortConf;
  }

  getFilters(): SmartTableFilterItem[] {
    return this.filters;
  }

  override async emitOnChanged(event: SmartTableOnChangedEventToEmit, newElements?: T[]) {
    let renderData: T[] = this.filteredAndSorted().slice(0);
    const action = event.action as any;
    if (
      (['filter', 'refresh', 'load', 'add', 'prepend', 'appendMany'] satisfies SmartTableOnChangedEventType[]).includes(
        action,
      )
    ) {
      renderData = await this.filter(newElements || this.data().slice(0));
      renderData = await this.sort(renderData)
      this.filteredAndSorted.set(renderData);
    }
    if (action === SmartTableOnChangedEventName.sort) {
      renderData = await this.sort(renderData)
      this.filteredAndSorted.set(renderData);
    }
    if (
      this.pagingConf().display &&
      (['page', 'paging', 'refresh', 'load', 'sort', 'filter'] satisfies SmartTableOnChangedEventType[]).includes(
        action,
      )
    ) {
      renderData = this.paginate(this.filteredAndSorted());
    }
    super.emitOnChanged(event, renderData);

    if (this.pagingConf().display && this.isPageOutOfBounce()) {
      this.setPage(this.pagingConf().page - 1);
    }
  }

  protected async sort(data: T[]): Promise<T[]> {
    if (this.sortConf) {
      return LocalSorter.sort<T>(data, this.sortConf.field, this.sortConf.direction, this.sortConf.compare);
    }
    return data;
  }

  protected async filter(data: T[]): Promise<T[]> {
    if (!this.filters.length) {
      return data;
    }
    const filtered: T[] = [];

    await Promise.all(
      data.map(async (element) => {
        if (await isElementSatisfied(element, this.filters)) {
          filtered.push(element);
        }
      }),
    );

    return filtered;
  }

  protected paginate(data: T[]): T[] {
    if (this.pagingConf().display) {
      return paginateList(data, this.pagingConf().page, this.pagingConf().perPage);
    }
    return data;
  }

  private isPageOutOfBounce(): boolean {
    const { page, perPage } = this.pagingConf();
    return page * perPage >= this.count() + perPage && page > 1;
  }
}
