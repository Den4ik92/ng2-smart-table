import { Subject } from 'rxjs';
import { Observable } from 'rxjs';
import { SmartTableFilterConf, SmartTableOnChangedEvent, SmartTableOnChangedEventType, SmartTablePagingItem, SmartTableSortItem } from '../interfaces/smart-table.models';
export declare abstract class DataSource<T = any> {
    protected onChangedSource: Subject<SmartTableOnChangedEvent<any>>;
    protected onAddedSource: Subject<any>;
    protected onUpdatedSource: Subject<any>;
    protected onRemovedSource: Subject<any>;
    abstract getAll(): Promise<T[]>;
    abstract getElements(): Promise<T[]>;
    abstract getSort(): SmartTableSortItem[];
    abstract getFilter(): SmartTableFilterConf;
    abstract getPaging(): SmartTablePagingItem | false;
    abstract count(): number;
    refresh(): void;
    loadEmit<T>(): Promise<true>;
    onChanged(): Observable<SmartTableOnChangedEvent>;
    onAdded(): Observable<any>;
    onUpdated(): Observable<any>;
    onRemoved(): Observable<any>;
    prependEmit(element: T): Promise<true>;
    appendEmit(element: T): Promise<true>;
    addEmit(element: T): Promise<true>;
    removeEmit(element: T): Promise<true>;
    updateEmit(element: T): Promise<true>;
    emptyEmit(): Promise<true>;
    setSortEmit(): void;
    setFilterEmit(): void;
    addFilterEmit(): void;
    setPagingEmit(): void;
    setPageEmit(): void;
    protected emitOnRemoved(element: T): void;
    protected emitOnUpdated(element: T): void;
    protected emitOnAdded(element: T): void;
    protected emitOnChanged(action: SmartTableOnChangedEventType): void;
}