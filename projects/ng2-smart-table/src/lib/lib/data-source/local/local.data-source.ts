import { computed } from '@angular/core';
import { SmartTableOnChangedEventName, SmartTableOnChangedEventToEmit } from '../../interfaces/smart-table.models';
import { DataSource } from '../data-source';
import { isElementSatisfied } from './local.filter';
import { paginateList } from './local.pager';
import { localSort } from './local.sorter';

export class LocalDataSource<T extends Record<string, any> = any> extends DataSource<T> {
  private readonly filteredAndSorted = computed<T[]>(() => {
    let list = this.data().slice(0);
    const filters = this.filters();
    const sortConf = this.sortConf();

    if (filters.length) {
      list = list.filter((element) => isElementSatisfied(element, filters));
    }
    if (sortConf) {
      const { field, direction, compare } = sortConf;
      if (!field) {
        return list;
      }
      list = localSort<T>(list, field, direction, compare);
    }
    return list;
  });

  readonly paginatedList = computed<T[]>(() => {
    return this.paginate(this.filteredAndSorted());
  });

  readonly count = computed(() => this.filteredAndSorted().length);

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
      this.filters.set([]);
      this.pagingConf.update((old) => ({ ...old, page: 1 }));
    } else {
      this.setFilters([], false);
      if (this.pagingConf().display) {
        this.setPage(1);
      }
    }
  }

  override async emitOnChanged(event: SmartTableOnChangedEventToEmit, newElements?: T[]) {
    super.emitOnChanged(event, this.paginatedList());
    if (this.pagingConf().display && this.isPageOutOfBounce()) {
      this.setPage(this.pagingConf().page - 1);
    }
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
