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
  protected onChangedSource = new Subject<SmartTableOnChangedEvent>();
  protected sortConf: SmartTableSortItem = { field: '', direction: 'asc' };
  protected filters: SmartTableFilterItem[] = [];

  readonly pagingConf = signal<SmartTablePagerSettings>({
    page: 1,
    perPage: 100,
    total: 0,
    display: false,
    perPageSelect: [],
  });

  protected data: T[] = [];
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

  prepend(element: T): Promise<true> {
    this.data.unshift(element);
    this.emitOnChanged({ action: SmartTableOnChangedEventName.prepend, newItems: [element] });
    return Promise.resolve(true);
  }

  appendMany(elements: T[]): Promise<true> {
    this.data = [...this.data, ...elements];
    this.emitOnChanged({ action: SmartTableOnChangedEventName.appendMany, newItems: elements }, this.data);
    return Promise.resolve(true);
  }

  append(element: T): Promise<true> {
    this.data.push(element);
    this.emitOnChanged({ action: SmartTableOnChangedEventName.append, newItems: [element] });
    return Promise.resolve(true);
  }

  add(element: T): Promise<true> {
    this.data.push(element);
    this.emitOnChanged({ action: SmartTableOnChangedEventName.add, newItems: [element] });
    return Promise.resolve(true);
  }

  remove(element: T): Promise<true> {
    this.data = this.data.filter((el) => el !== element);
    this.emitOnChanged({ action: SmartTableOnChangedEventName.remove, item: element }, this.data);
    return Promise.resolve(true);
  }

  update(oldItem: T, newItem: T): Promise<true> {
    this.emitOnChanged({ action: SmartTableOnChangedEventName.update, oldItem, newItem });
    return Promise.resolve(true);
  }

  empty(): Promise<true> {
    this.data = [];
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

  addFilter(newFilter: SmartTableFilterItem, doEmit = true,) {
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
    const actionData = (): SmartTableOnChangedEvent => {
      const elements = newElements || this.data;
      const emitData: SmartTableOnChangedEvent = {
        ...eventData,
        elements,
        paging: this.pagingConf(),
        filters: this.getFilters(),
        sort: this.getSort(),
      };
      if (eventData.action === SmartTableOnChangedEventName.remove) {
        return {
          ...emitData,
          elements: elements.filter((el) => el !== eventData.item),
        };
      }
      return emitData;
    };
    this.onChangedSource.next(actionData());
  }
}
