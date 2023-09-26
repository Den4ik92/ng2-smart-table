import { Subject } from 'rxjs';
import { Observable } from 'rxjs';
import { SmartTableFilterConf, SmartTableFilterItem, SmartTableOnChangedEvent, SmartTableOnChangedEventName, SmartTableOnChangedEventType, SmartTablePagingItem, SmartTableSortItem } from '../interfaces/smart-table.models';

export abstract class DataSource<T=any> {

  protected onChangedSource = new Subject<SmartTableOnChangedEvent>();
  protected onAddedSource = new Subject<any>();
  protected onUpdatedSource = new Subject<any>();
  protected onRemovedSource = new Subject<any>();

  abstract getAll(): Promise<T[]>;
  abstract getElements(): Promise<T[]>;
  abstract getSort(): SmartTableSortItem[];
  abstract getFilter(): SmartTableFilterConf;
  abstract getPaging(): SmartTablePagingItem;
  abstract count(): number;

  refresh(): void {
    this.emitOnChanged(SmartTableOnChangedEventName.refresh);
  }

  load<T>(data: Array<T>): Promise<true> {
    this.emitOnChanged(SmartTableOnChangedEventName.load);
    return Promise.resolve(true);
  }

  onChanged(): Observable<SmartTableOnChangedEvent> {
    return this.onChangedSource.asObservable();
  }

  onAdded(): Observable<any> {
    return this.onAddedSource.asObservable();
  }

  onUpdated(): Observable<any> {
    return this.onUpdatedSource.asObservable();
  }

  onRemoved(): Observable<any> {
    return this.onRemovedSource.asObservable();
  }

  prepend(element: T): Promise<true> {
    this.emitOnAdded(element);
    this.emitOnChanged(SmartTableOnChangedEventName.prepend);
    return Promise.resolve(true);
  }

  append(element: T): Promise<true> {
    this.emitOnAdded(element);
    this.emitOnChanged(SmartTableOnChangedEventName.append);
    return Promise.resolve(true);
  }

  add(element: T): Promise<true> {
    this.emitOnAdded(element);
    this.emitOnChanged(SmartTableOnChangedEventName.add);
    return Promise.resolve(true);
  }

  remove(element: T): Promise<true> {
    this.emitOnRemoved(element);
    this.emitOnChanged(SmartTableOnChangedEventName.remove);
    return Promise.resolve(true);
  }

  update(element: T, values: any): Promise<true> {
    this.emitOnUpdated(element);
    this.emitOnChanged(SmartTableOnChangedEventName.update);
    return Promise.resolve(true);
  }

  empty(): Promise<true> {
    this.emitOnChanged(SmartTableOnChangedEventName.empty);
    return Promise.resolve(true);
  }

  setSort(conf: Array<any>, doEmit?: boolean) {
    if (doEmit) {
      this.emitOnChanged(SmartTableOnChangedEventName.sort);
    }
  }

  setFilter(conf: Array<any>, andOperator?: boolean, doEmit?: boolean) {
    if (doEmit) {
      this.emitOnChanged(SmartTableOnChangedEventName.filter);
    }
  }

  addFilter(fieldConf: {}, andOperator?: boolean, doEmit?: boolean) {
    if (doEmit) {
      this.emitOnChanged(SmartTableOnChangedEventName.filter);
    }
  }

  setPaging(page: number, perPage: number, doEmit?: boolean) {
    if (doEmit) {
      this.emitOnChanged(SmartTableOnChangedEventName.paging);
    }
  }

  setPage(page: number, doEmit?: boolean) {
    if (doEmit) {
      this.emitOnChanged(SmartTableOnChangedEventName.page);
    }
  }

  protected emitOnRemoved(element: T) {
    this.onRemovedSource.next(element);
  }

  protected emitOnUpdated(element: T) {
    this.onUpdatedSource.next(element);
  }

  protected emitOnAdded(element: T) {
    this.onAddedSource.next(element);
  }

  protected emitOnChanged(action: SmartTableOnChangedEventType) {
    this.getElements().then((elements) => this.onChangedSource.next({
      action: action,
      elements: elements,
      paging: this.getPaging(),
      filter: this.getFilter(),
      sort: this.getSort(),
    }));
  }
}
