import { LocalDataSource } from './data-source/local/local.data-source';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';
import { EventEmitter } from '@angular/core';
import { Column } from './data-set/column';
import { Row } from './data-set/row';
import { DataSet } from './data-set/data-set';
import { SmartTableSettings, SmartTableSortItem } from './interfaces/smart-table.models';
export declare class Grid {
    createFormShown: boolean;
    source: LocalDataSource;
    settings: SmartTableSettings;
    dataSet: DataSet;
    onSelectRowSource: Subject<any>;
    onDeselectRowSource: Subject<any>;
    private sourceOnChangedSubscription;
    private sourceOnUpdatedSubscription;
    constructor(source: LocalDataSource, settings: SmartTableSettings);
    detach(): void;
    showActionColumn(position: string): boolean;
    isCurrentActionsPosition(position: string): boolean;
    isActionsVisible(): boolean;
    isMultiSelectVisible(): boolean;
    getNewRow(): Row;
    setSettings(settings: SmartTableSettings): void;
    getDataSet(): DataSet;
    setSource(source: LocalDataSource): void;
    getSetting<T>(name: string, defaultValue?: any): T;
    getColumns(): Array<Column>;
    getRows(): Array<Row>;
    selectRow(row: Row, state: boolean): void;
    multipleSelectRow(row: Row): void;
    onSelectRow(): Observable<any>;
    onDeselectRow(): Observable<any>;
    edit(row: Row): void;
    create(row: Row, confirmEmitter: EventEmitter<any>): void;
    save(row: Row, confirmEmitter: EventEmitter<any>): void;
    delete(row: Row, confirmEmitter: EventEmitter<any>): void;
    processDataChange(changes: any): void;
    shouldProcessChange(changes: any): boolean;
    prepareSource(source: LocalDataSource): LocalDataSource;
    getInitialSort(): SmartTableSortItem | false;
    getSelectedRowsData(): Array<any>;
    selectAllRows(status: boolean): void;
    getFirstRow(): Row;
    getLastRow(): Row;
}
