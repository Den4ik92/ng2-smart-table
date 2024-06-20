import { SmartTableSortDirection } from './../../../../lib/interfaces/smart-table.models';
import { LocalDataSource } from './../../../../lib/data-source/local/local.data-source';
import { EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { Column } from '../../../../lib/data-set/column';
import * as i0 from "@angular/core";
export declare class TitleComponent implements OnChanges {
    currentDirection: SmartTableSortDirection | '';
    column: Column;
    source: LocalDataSource;
    sort: EventEmitter<any>;
    protected dataChangedSub: Subscription | false;
    ngOnChanges(changes: SimpleChanges): void;
    _sort(event: any): void;
    changeSortDirection(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<TitleComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TitleComponent, "ng2-smart-table-title", never, { "column": { "alias": "column"; "required": false; }; "source": { "alias": "source"; "required": false; }; }, { "sort": "sort"; }, never, never, false, never>;
}
