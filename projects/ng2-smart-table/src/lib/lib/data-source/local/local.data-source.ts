import { LocalSorter } from './local.sorter';
import { LocalFilter } from './local.filter';
import { LocalPager } from './local.pager';
import { DataSource } from '../data-source';
import { deepExtend } from '../../helpers';
import { SmartTableFilterConf, SmartTableFilterItem, SmartTablePagingItem, SmartTableSortItem } from '../../interfaces/smart-table.models';

export class LocalDataSource<T=any> extends DataSource<T> {

  protected data: T[] = [];
  protected filteredAndSorted: T[] = [];
  protected sortConf: SmartTableSortItem[] = [];
  protected filterConf: SmartTableFilterConf = {
    filters: [],
    andOperator: true,
  };
  protected pagingConf: SmartTablePagingItem = {
    page: 1,
	  perPage: 1,
  };

  constructor(data: T[] = []) {
    super();

    this.data = data;
  }

  load(data: any): Promise<true> {
    this.data = data;
    return super.load(data);
  }

  prepend(element: T): Promise<true> {
    this.reset(true);
    this.data.unshift(element);
    return super.prepend(element);
  }

  append(element: T): Promise<true> {
    this.reset(true);

    this.data.push(element);
    return super.append(element);
  }

  add(element: T): Promise<true> {
    this.data.push(element);
    return super.add(element);
  }

  remove(element: T): Promise<true> {
    this.data = this.data.filter(el => el !== element);
    return super.remove(element);
  }

  update(element: T, values: T): Promise<true> {
    return new Promise((resolve, reject) => {
      this.find(element).then((found) => {
        found = deepExtend(found, values);
        super.update(found, values).then(resolve).catch(reject);
      }).catch(reject);
    });
  }

  find(element: T): Promise<T> {
    const found = this.data.find(el => el === element);
    if (found) {
      return Promise.resolve(found);
    }
    return Promise.reject(new Error('Element was not found in the dataset'));
  }

  getElements(): Promise<T[]> {
    const data = this.data.slice(0);
    return Promise.resolve(this.prepareData(data));
  }

  getFilteredAndSorted(): Promise<T[]> {
    let data = this.data.slice(0);
    this.prepareData(data);
    return Promise.resolve(this.filteredAndSorted);
  }

  getAll(): Promise<T[]> {
    const data = this.data.slice(0);
    return Promise.resolve(data);
  }

  reset(silent = false) {
    if (silent) {
      this.filterConf = {
        filters: [],
        andOperator: true,
      };
      this.sortConf = [];
      this.pagingConf.page = 1;
    } else {
      this.setFilter([], true, false);
      this.setSort([], false);
      this.setPage(1);
    }
  }

  empty(): Promise<true> {
    this.data = [];
    return super.empty();
  }

  count(): number {
    return this.filteredAndSorted.length;
  }

  /**
   *
   * Array of conf objects
   * [
   *  {field: string, direction: asc|desc|null, compare: Function|null},
   * ]
   * @param conf
   * @param doEmit
   * @returns {LocalDataSource}
   */
  setSort(conf: SmartTableSortItem[], doEmit = true): LocalDataSource {
    if (conf !== null) {
      conf.forEach((fieldConf) => {
        if (!fieldConf.field || typeof fieldConf.direction === 'undefined') {
          throw new Error('Sort configuration object is not valid');
        }
      });
      this.sortConf = conf;
    }
    super.setSort(conf, doEmit);
    return this;
  }

  /**
   *
   * Array of conf objects
   * [
   *  {field: string, search: string, filter: Function|null},
   * ]
   * @param conf
   * @param andOperator
   * @param doEmit
   * @returns {LocalDataSource}
   */
  setFilter(conf: SmartTableFilterItem[], andOperator = true, doEmit = true): LocalDataSource {
    if (conf && conf.length > 0) {
      conf.forEach((fieldConf) => {
        this.addFilter(fieldConf, andOperator, false);
      });
    } else {
      this.filterConf = {
        filters: [],
        andOperator: true,
      };
    }
    this.filterConf.andOperator = andOperator;
    this.pagingConf.page = 1;

    super.setFilter(conf, andOperator, doEmit);
    return this;
  }

  addFilter(fieldConf: SmartTableFilterItem, andOperator = true, doEmit: boolean = true): LocalDataSource {
    if (!fieldConf.field || typeof fieldConf.search === 'undefined') {
      throw new Error('Filter configuration object is not valid');
    }

    let found = false;
    this.filterConf.filters.forEach((currentFieldConf: any, index: any) => {
      if (currentFieldConf.field === fieldConf.field) {
        this.filterConf.filters[index] = fieldConf;
        found = true;
      }
    });
    if (!found) {
      this.filterConf.filters.push(fieldConf);
    }
    this.filterConf.andOperator = andOperator;
    super.addFilter(fieldConf, andOperator, doEmit);
    return this;
  }

  setPaging(page: number, perPage: number, doEmit: boolean = true): LocalDataSource {
    this.pagingConf.page = page;
    this.pagingConf.perPage = perPage;

    super.setPaging(page, perPage, doEmit);
    return this;
  }

  setPage(page: number, doEmit: boolean = true): LocalDataSource {
    this.pagingConf.page = page;
    super.setPage(page, doEmit);
    return this;
  }

  getSort(): SmartTableSortItem[] {
    return this.sortConf;
  }

  getFilter(): SmartTableFilterConf {
    return this.filterConf;
  }

  getPaging(): SmartTablePagingItem {
    return this.pagingConf;
  }

  protected prepareData(data: T[]): T[] {
    data = this.filter(data);
    data = this.sort(data);
    this.filteredAndSorted = data.slice(0);

    return this.paginate(data);
  }

  protected sort(data: T[]): T[] {
    if (this.sortConf) {
      this.sortConf.forEach((fieldConf) => {
        data = LocalSorter
          .sort(data, fieldConf.field, fieldConf.direction, fieldConf.compare);
      });
    }
    return data;
  }

  // TODO: refactor?
  protected filter(data: T[]): T[] {
    if (this.filterConf.filters) {
      if (this.filterConf.andOperator) {
        this.filterConf.filters.forEach((fieldConf: SmartTableFilterItem) => {
          if (fieldConf.search?.length > 0) {
            data = LocalFilter
              .filter(data, fieldConf.field, fieldConf.search, fieldConf.filter);
          }
        });
      } else {
        let mergedData: T[] = [];
        this.filterConf.filters.forEach((fieldConf: SmartTableFilterItem) => {
          if (fieldConf.search?.length > 0) {
            mergedData = mergedData.concat(LocalFilter
              .filter(data, fieldConf.field, fieldConf.search, fieldConf.filter));
          }
        });
        // remove non unique items
        data = mergedData.filter((elem: any, pos: any, arr: any) => {
          return arr.indexOf(elem) === pos;
        });
      }
    }
    return data;
  }

  protected paginate(data: T[]): T[] {
    if (this.pagingConf && this.pagingConf.page && this.pagingConf.perPage) {
      data = LocalPager.paginate(data, this.pagingConf.page, this.pagingConf.perPage);
    }
    return data;
  }
}
