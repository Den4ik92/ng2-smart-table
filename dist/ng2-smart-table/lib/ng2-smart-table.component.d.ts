import { SimpleChange, EventEmitter, OnChanges } from '@angular/core';
import { Grid } from './lib/grid';
import { Row } from './lib/data-set/row';
import { LocalDataSource } from './lib/data-source/local/local.data-source';
import { SmartTableConfirmDeleteEvent, SmartTableConfirmEditEvent, SmartTableCreateConfirm, SmartTableCustomEvent, SmartTableRowClickedEvent, SmartTableRowSelectEvent, SmartTableSettings } from './lib/interfaces/smart-table.models';
import * as i0 from "@angular/core";
export declare class Ng2SmartTableComponent implements OnChanges {
    source: LocalDataSource;
    settings: SmartTableSettings;
    multiRowSelect: EventEmitter<SmartTableRowSelectEvent<any>>;
    rowClicked: EventEmitter<SmartTableRowClickedEvent<any>>;
    listScrollEnd: EventEmitter<boolean>;
    delete: EventEmitter<any>;
    edit: EventEmitter<any>;
    editCancel: EventEmitter<any>;
    create: EventEmitter<any>;
    custom: EventEmitter<SmartTableCustomEvent<any>>;
    deleteConfirm: EventEmitter<SmartTableConfirmDeleteEvent<any>>;
    editConfirm: EventEmitter<SmartTableConfirmEditEvent<any, any>>;
    createConfirm: EventEmitter<SmartTableCreateConfirm<any>>;
    rowHover: EventEmitter<any>;
    tableClass: string;
    tableId: string;
    perPageSelect: number[];
    isHideHeader: boolean;
    isHideSubHeader: boolean;
    isPagerDisplay: boolean;
    rowClassFunction: Function;
    private currentScrollTop;
    grid: Grid;
    defaultSettings: SmartTableSettings;
    ngOnChanges(changes: {
        [propertyName: string]: SimpleChange;
    }): void;
    protected multipleSelectRow(row: Row): void;
    protected onSelectAllRows(): void;
    protected onSelectRow(row: Row, state: boolean): void;
    protected emitUserRowClicked(row: Row): void;
    protected onScroll(event: Event & {
        target: HTMLElement;
    }): void;
    private initGrid;
    private prepareSource;
    private prepareSettings;
    private emitUserSelectRow;
    static ɵfac: i0.ɵɵFactoryDeclaration<Ng2SmartTableComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<Ng2SmartTableComponent, "ng2-smart-table", never, { "source": "source"; "settings": "settings"; }, { "multiRowSelect": "multiRowSelect"; "rowClicked": "rowClicked"; "listScrollEnd": "listScrollEnd"; "delete": "delete"; "edit": "edit"; "editCancel": "editCancel"; "create": "create"; "custom": "custom"; "deleteConfirm": "deleteConfirm"; "editConfirm": "editConfirm"; "createConfirm": "createConfirm"; "rowHover": "rowHover"; }, never, never, false, never>;
}
