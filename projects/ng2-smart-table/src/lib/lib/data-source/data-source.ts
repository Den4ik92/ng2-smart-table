import { computed, signal } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { isObjectsIdentical } from '../helpers';
import {
  BaseDataType,
  SmartTableFilterItem,
  SmartTableOnChangedEvent,
  SmartTableOnChangedEventName,
  SmartTableOnChangedEventToEmit,
  SmartTablePagerSettings,
  SmartTableSortItem,
} from '../interfaces/smart-table.models';

export abstract class DataSource<T extends BaseDataType = any> {
  protected readonly onChangedSource = new Subject<SmartTableOnChangedEvent>();
  protected readonly sortConf = signal<SmartTableSortItem>({ field: '', title: '', direction: 'desc' });
  protected readonly filters = signal<SmartTableFilterItem[]>([]);

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

  abstract count(): number;

  readonly getSort = computed<SmartTableSortItem>(() => this.sortConf());
  readonly getFilters = computed<SmartTableFilterItem[]>(() => this.filters());

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
    this.data.update((old) => [...old, ...elements]);
    this.updateTotal(elements.length);
    this.emitOnChanged({ action: SmartTableOnChangedEventName.appendMany, newItems: elements });
    return Promise.resolve(true);
  }

  async add(element: T): Promise<true> {
    this.data.update((old) => [...old, element]);
    this.updateTotal(1);
    this.emitOnChanged({ action: SmartTableOnChangedEventName.add, newItems: [element] });
    return Promise.resolve(true);
  }

  async remove(element: T): Promise<true> {
    this.data.update((old) => old.filter((el) => !isObjectsIdentical(el, element)));
    this.updateTotal(-1);
    this.emitOnChanged({ action: SmartTableOnChangedEventName.remove, item: element }, this.data());
    return Promise.resolve(true);
  }

  async update(oldItem: T, newItem: T): Promise<true> {
    this.data.update((old) =>
      old.map((el) => {
        if (isObjectsIdentical(el, oldItem)) {
          return newItem;
        }
        return el;
      }),
    );
    this.emitOnChanged({ action: SmartTableOnChangedEventName.update, oldItem, newItem });
    return Promise.resolve(true);
  }

  async empty(): Promise<true> {
    this.data.set([]);
    this.emitOnChanged({ action: SmartTableOnChangedEventName.empty });
    return Promise.resolve(true);
  }

  setSort(conf: SmartTableSortItem, doEmit = true) {
    this.sortConf.set(conf);
    this.pagingConf.update((old) => ({ ...old, page: 1 }));
    if (doEmit) {
      this.emitOnChanged({ action: SmartTableOnChangedEventName.sort });
    }
  }

  async addFilter(newFilter: SmartTableFilterItem, doEmit = true) {
    if (!newFilter.field) {
      return;
    }
    const foundIndex = this.filters().findIndex((filter) => filter.field === newFilter.field);
    const newSearchString =
      typeof newFilter.search === 'undefined' || newFilter.search === null ? '' : `${newFilter.search}`;
    if (foundIndex === -1) {
      if (newSearchString?.length) {
        this.filters.set([...this.filters(), newFilter]);
      }
    } else {
      const filtersTemp = this.filters().slice(0);
      if (newSearchString?.length) {
        filtersTemp[foundIndex].search = newFilter.search;
      } else {
        filtersTemp.splice(foundIndex, 1);
      }
      this.filters.set([...filtersTemp]);
    }
    this.pagingConf.update((old) => ({ ...old, page: 1 }));
    if (doEmit) {
      this.emitOnChanged({ action: SmartTableOnChangedEventName.filter });
    }
  }

  setFilters(newFilters: SmartTableFilterItem[], doEmit = true) {
    this.filters.set([...newFilters]);
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
    this.onChangedSource.next(actionData);
  }

  /**
   * @param difference number to plus total
   * @example -2 or 2
   */
  private updateTotal(difference: number) {
    this.pagingConf.update((old) => ({ ...old, total: old.total + difference }));
  }
}
