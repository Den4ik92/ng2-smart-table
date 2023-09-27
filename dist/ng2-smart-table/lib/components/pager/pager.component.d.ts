import { EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { LocalDataSource } from '../../lib/data-source/local/local.data-source';
import * as i0 from "@angular/core";
export declare class PagerComponent implements OnChanges {
    source: LocalDataSource;
    perPageSelect: number[];
    changePage: EventEmitter<any>;
    currentPerPage: number;
    protected pages: number[];
    protected page: number;
    protected count: number;
    protected perPage: number;
    protected dataChangedSub: Subscription | undefined;
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * We change the page here depending on the action performed against data source
     * if a new element was added to the end of the table - then change the page to the last
     * if a new element was added to the beginning of the table - then to the first page
     * @param changes
     */
    processPageChange(changes: any): void;
    shouldShow(): boolean;
    paginate(page: number): boolean;
    next(): boolean;
    prev(): boolean;
    getPage(): number;
    getPages(): number[];
    getLast(): number;
    isPageOutOfBounce(): boolean;
    initPages(): void;
    onChangePerPage(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PagerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PagerComponent, "ng2-smart-table-pager", never, { "source": "source"; "perPageSelect": "perPageSelect"; }, { "changePage": "changePage"; }, never, never, false, never>;
}
