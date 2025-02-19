import { HttpParams } from '@angular/common/http';
import { computed } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import {
  SmartTableFilterItem,
  SmartTableOnChangedEventName,
  SmartTableOnChangedEventToEmit,
  SmartTablePagerSettings,
  SmartTableSortItem,
} from '../../interfaces/smart-table.models';
import { DataSource } from '../data-source';

// must return observable because of prepare can take some time
export type ParamsPrepareFunction = (options: {
  sort: SmartTableSortItem;
  filters: SmartTableFilterItem[];
  page: number;
  limit: number;
}) => Observable<HttpParams>;

export type RequestFunction<T extends Record<string, any> = any> = (
  params: HttpParams,
) => Observable<{ total: number; data: T[] }>;

export class ServerDataSource<T extends Record<string, any> = any> extends DataSource<T> {
  readonly count = computed(() => this.pagingConf().total);
  paramPrepareFunction: ParamsPrepareFunction;
  requestFunction: RequestFunction<T>;

  constructor(
    paramPrepareFunction: ParamsPrepareFunction,
    requestFunction: RequestFunction<T>,
    private initPagingConf?: Partial<SmartTablePagerSettings>,
  ) {
    super();
    this.pagingConf.update((old) => ({ ...old, ...this.initPagingConf }));
    this.paramPrepareFunction = paramPrepareFunction;
    this.requestFunction = requestFunction;
  }

  getAll(): Promise<T[]> {
    return Promise.resolve(this.data());
  }

  getSort(): SmartTableSortItem {
    return this.sortConf;
  }

  getFilters(): SmartTableFilterItem[] {
    return this.filters;
  }

  override emitOnChanged(eventData: SmartTableOnChangedEventToEmit, newElements?: T[] | undefined): void {
    if (
      [
        SmartTableOnChangedEventName.filter,
        SmartTableOnChangedEventName.sort,
        SmartTableOnChangedEventName.page,
        SmartTableOnChangedEventName.paging,
        SmartTableOnChangedEventName.refresh,
      ].includes(eventData.action as SmartTableOnChangedEventName)
    ) {
      this.paramPrepareFunction({
        sort: this.sortConf,
        filters: this.filters,
        page: this.pagingConf().page,
        limit: this.pagingConf().perPage,
      })
        .pipe(switchMap((params) => this.requestFunction(params)))
        .subscribe((res) => {
          this.data.set(res.data);
          this.pagingConf.update((old) => ({ ...old, total: res.total }));
          super.emitOnChanged(eventData, res.data);
        });
    } else {
      super.emitOnChanged(eventData, newElements);
    }
  }
}
