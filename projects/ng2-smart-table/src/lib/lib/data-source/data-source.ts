import { signal } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
  SmartTableFilterItem,
  SmartTableOnChangedEvent,
  SmartTableOnChangedEventName,
  SmartTableOnChangedEventToEmit,
  SmartTablePagerSettings,
  SmartTableSortItem,
} from '../interfaces/smart-table.models';

export abstract class DataSource<T = any> {
  protected readonly onChangedSource = new Subject<SmartTableOnChangedEvent>();
  protected sortConf: SmartTableSortItem = { field: '', direction: 'asc' };
  protected filters: SmartTableFilterItem[] = [];

  readonly pagingConf = signal<SmartTablePagerSettings>({
    page: 1,
    perPage: 100,
    total: 0,
    display: false,
    perPageSelect: [],
  });

  protected readonly data = signal<T[]>([]);
  /**
   * return all elements
   */
  abstract getAll(): Promise<T[]>;
  abstract getSort(): SmartTableSortItem;
  abstract getFilters(): SmartTableFilterItem[];
  abstract count(): number;

  refresh(): void {
    this.emitOnChanged({ action: SmartTableOnChangedEventName.refresh });
  }

  columnRefresh(): void {
    this.emitOnChanged({ action: SmartTableOnChangedEventName.columnRefresh });
  }

  onChanged(): Observable<SmartTableOnChangedEvent> {
    return this.onChangedSource.asObservable();
  }

  async prepend(element: T): Promise<true> {
    this.data.update((old) => [element, ...old]);
    this.emitOnChanged({ action: SmartTableOnChangedEventName.prepend, newItems: [element] });
    return Promise.resolve(true);
  }

  async appendMany(elements: T[]): Promise<true> {
    this.data.update((old) => [ ...old, ...elements,]);
    this.emitOnChanged({ action: SmartTableOnChangedEventName.appendMany, newItems: elements });
    return Promise.resolve(true);
  }

  async add(element: T): Promise<true> {
    this.data.update((old) => [ ...old, element,]);
    this.emitOnChanged({ action: SmartTableOnChangedEventName.add, newItems: [element] });
    return Promise.resolve(true);
  }

  async remove(element: T): Promise<true> {
    this.data.update((old) => old.filter((el) => el !== element));
    this.emitOnChanged({ action: SmartTableOnChangedEventName.remove, item: element });
    return Promise.resolve(true);
  }

  async update(oldItem: T, newItem: T): Promise<true> {
    this.emitOnChanged({ action: SmartTableOnChangedEventName.update, oldItem, newItem });
    return Promise.resolve(true);
  }

  async empty(): Promise<true> {
    this.data.set([]);
    this.emitOnChanged({ action: SmartTableOnChangedEventName.empty });
    return Promise.resolve(true);
  }

  setSort(conf: SmartTableSortItem, doEmit = true) {
    this.sortConf = conf;
    this.pagingConf.update((old) => ({ ...old, page: 1 }));
    if (doEmit) {
      this.emitOnChanged({ action: SmartTableOnChangedEventName.sort });
    }
  }

  async addFilter(newFilter: SmartTableFilterItem, doEmit = true) {
    if (!newFilter.field) {
      return;
    }
    const foundIndex = this.filters.findIndex((filter) => filter.field === newFilter.field);
    if (foundIndex === -1) {
      if (newFilter.search) {
        this.filters.push(newFilter);
      }
    } else {
      if (newFilter.search) {
        this.filters[foundIndex].search = newFilter.search;
      } else {
        this.filters.splice(foundIndex, 1);
      }
    }
    this.pagingConf.update((old) => ({ ...old, page: 1 }));
    if (doEmit) {
      this.emitOnChanged({ action: SmartTableOnChangedEventName.filter });
    }
  }

  setFilters(newFilters: SmartTableFilterItem[], doEmit = true) {
    this.filters = [...newFilters];
    this.pagingConf.update((old) => ({ ...old, page: 1 }));
    if (doEmit) {
      this.emitOnChanged({ action: SmartTableOnChangedEventName.filter });
    }
  }

  setPaging(page = 1, perPage: number, doEmit = true) {
    this.pagingConf.update((old) => ({ ...old, page: page, perPage: perPage }));
    if (doEmit) {
      this.emitOnChanged({ action: SmartTableOnChangedEventName.paging });
    }
  }

  setPage(page: number, doEmit = true) {
    this.pagingConf.update((old) => ({ ...old, page: page }));
    if (doEmit) {
      this.emitOnChanged({ action: SmartTableOnChangedEventName.page });
    }
  }

  emitOnChanged(eventData: SmartTableOnChangedEventToEmit, newElements?: T[]) {
    const actionData: SmartTableOnChangedEvent = {
      ...eventData,
      elements: newElements || this.data(),
      paging: this.pagingConf(),
      filters: this.getFilters(),
      sort: this.getSort(),
    };
    if (eventData.action === SmartTableOnChangedEventName.remove) {
      actionData.elements = (newElements || this.data()).filter((el) => el !== eventData.item);
    }
    this.onChangedSource.next(actionData);
  }
}
