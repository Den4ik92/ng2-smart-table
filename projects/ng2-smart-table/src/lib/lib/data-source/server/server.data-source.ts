import { HttpParams } from '@angular/common/http';
import { computed, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize, switchMap, take } from 'rxjs/operators';
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
  sort: SmartTableSortItem | null;
  filters: SmartTableFilterItem[];
  page: number;
  limit: number;
}) => Observable<HttpParams>;

export type RequestFunction<T extends Record<string, any> = any> = (
  params: HttpParams,
) => Observable<{ total: number; data: T[] }>;

export class ServerDataSource<T extends Record<string, any> = any> extends DataSource<T> {
  paramPrepareFunction: ParamsPrepareFunction;
  requestFunction: RequestFunction<T>;

  readonly count = computed(() => this.pagingConf().total);
  readonly pending = signal(false);

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
      this.pending.set(true);
      this.paramPrepareFunction({
        sort: this.sortConf(),
        filters: this.filters(),
        page: this.pagingConf().page,
        limit: this.pagingConf().perPage,
      })
        .pipe(
          switchMap((params) => this.requestFunction(params)),
          take(1),
          finalize(() => {
            this.pending.set(false);
          }),
        )
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
