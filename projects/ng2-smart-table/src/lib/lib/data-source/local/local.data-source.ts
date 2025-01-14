import { deepExtend } from '../../helpers';
import { SmartTableFilterConf, SmartTableFilterItem, SmartTablePagingItem, SmartTableSortItem } from '../../interfaces/smart-table.models';
import { DataSource } from '../data-source';
import { LocalFilter } from './local.filter';
import { LocalPager } from './local.pager';
import { LocalSorter } from './local.sorter';

export class LocalDataSource<T = any> extends DataSource<T> {

  protected data: T[] = [];
  protected filteredAndSorted: T[] = [];
  protected sortConf: SmartTableSortItem[] = [];
  protected filterConf: SmartTableFilterConf = {
    filters: [],
    andOperator: true,
  };
  protected pagingConf: SmartTablePagingItem | false = false;

  constructor(data: T[] = []) {
    super();

    this.data = data;
  }

  load(data: any): Promise<true> {
    this.data = data;
    return super.loadEmit();
  }

  prepend(element: T): Promise<true> {
    this.reset(true);
    this.data.unshift(element);
    return super.prependEmit(element);
  }

  appendMany(elements: T[]): Promise<true> {
    this.reset(true);
    this.data = [...this.data, ...elements];
    return super.loadEmit();
  }

  append(element: T): Promise<true> {
    this.reset(true);

    this.data.push(element);
    return super.appendEmit(element);
  }

  add(element: T): Promise<true> {
    this.data.push(element);
    return super.addEmit(element);
  }

  remove(element: T): Promise<true> {
    this.data = this.data.filter(el => el !== element);
    return super.removeEmit(element);
  }

  update(element: T, values: T): Promise<true> {
    return new Promise((resolve, reject) => {
      this.find(element).then((found) => {
        found = deepExtend(found as any, values);
        super.updateEmit(found).then(resolve).catch(reject);
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
    const data = this.data.slice(0);
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
      if (this.pagingConf) {
        this.pagingConf.page = 1;
      }
    } else {
      this.setFilter([], true, false);
      this.setSort([], false);
      if (this.pagingConf) {
        this.setPage(1);
       }
    }
  }

  empty(): Promise<true> {
    this.data = [];
    return super.emptyEmit();
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
    if (doEmit) {
      super.setSortEmit();
    }
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
    if (this.pagingConf) {
      this.pagingConf.page = 1;
    }
    if (doEmit) {
      super.setFilterEmit();
    }
    return this;
  }

  addFilter(fieldConf: SmartTableFilterItem, andOperator = true, doEmit = true): LocalDataSource {
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
    if (doEmit) {
      super.addFilterEmit();
    }
    return this;
  }

  setPaging(page = 1, perPage: number, doEmit = true): void {
    if (this.pagingConf) {
      this.pagingConf.page = page;
      this.pagingConf.perPage = perPage;
    } else {
      this.pagingConf = {
        page, perPage
      }
    }
    if (doEmit) {
      super.setPagingEmit();
    }
    return;
  }

  setPage(page: number, doEmit = true): void {
    if (!this.pagingConf) {
      return;
    }
    this.pagingConf.page = page;
    if(doEmit) {
      super.setPageEmit();
    }
    return;
  }

  getSort(): SmartTableSortItem[] {
    return this.sortConf;
  }

  getFilter(): SmartTableFilterConf {
    return this.filterConf;
  }

  getPaging(): SmartTablePagingItem | false {
    return this.pagingConf;
  }

  protected prepareData(data: T[]): T[] {
    data = this.filter(data);
    data = this.sort(data);
    this.filteredAndSorted = data.slice(0);
    if(this.pagingConf) {
      return this.paginate(data);
    } else return data
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
