import { Observable, Subject } from 'rxjs';
import { SmartTableFilterConf, SmartTableOnChangedEvent, SmartTableOnChangedEventName, SmartTableOnChangedEventType, SmartTablePagingItem, SmartTableSortItem } from '../interfaces/smart-table.models';

export abstract class DataSource<T=any> {

  protected onChangedSource = new Subject<SmartTableOnChangedEvent>();
  protected onAddedSource = new Subject<any>();
  protected onUpdatedSource = new Subject<any>();
  protected onRemovedSource = new Subject<any>();

  abstract getAll(): Promise<T[]>;
  abstract getElements(): Promise<T[]>;
  abstract getSort(): SmartTableSortItem[];
  abstract getFilter(): SmartTableFilterConf;
  abstract getPaging(): SmartTablePagingItem | false;
  abstract count(): number;

  refresh(): void {
    this.emitOnChanged(SmartTableOnChangedEventName.refresh);
  }

  loadEmit(): Promise<true> {
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

  prependEmit(element: T): Promise<true> {
    this.emitOnAdded(element);
    this.emitOnChanged(SmartTableOnChangedEventName.prepend);
    return Promise.resolve(true);
  }

  appendEmit(element: T): Promise<true> {
    this.emitOnAdded(element);
    this.emitOnChanged(SmartTableOnChangedEventName.append);
    return Promise.resolve(true);
  }

  addEmit(element: T): Promise<true> {
    this.emitOnAdded(element);
    this.emitOnChanged(SmartTableOnChangedEventName.add);
    return Promise.resolve(true);
  }

  removeEmit(element: T): Promise<true> {
    this.emitOnRemoved(element);
    this.emitOnChanged(SmartTableOnChangedEventName.remove);
    return Promise.resolve(true);
  }

  updateEmit(element: T): Promise<true> {
    this.emitOnUpdated(element);
    this.emitOnChanged(SmartTableOnChangedEventName.update);
    return Promise.resolve(true);
  }

  emptyEmit(): Promise<true> {
    this.emitOnChanged(SmartTableOnChangedEventName.empty);
    return Promise.resolve(true);
  }

  setSortEmit() {
    this.emitOnChanged(SmartTableOnChangedEventName.sort);
  }

  setFilterEmit() {
    this.emitOnChanged(SmartTableOnChangedEventName.filter);
  }

  addFilterEmit() {
    this.emitOnChanged(SmartTableOnChangedEventName.filter);
  }

  setPagingEmit() {
    this.emitOnChanged(SmartTableOnChangedEventName.paging);
  }

  setPageEmit() {
    this.emitOnChanged(SmartTableOnChangedEventName.page);
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
