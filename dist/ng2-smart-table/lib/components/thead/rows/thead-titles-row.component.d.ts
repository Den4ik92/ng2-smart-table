import { EventEmitter, OnChanges } from '@angular/core';
import { Grid } from '../../../lib/grid';
import { Column } from "../../../lib/data-set/column";
import { LocalDataSource } from '../../../lib/data-source/local/local.data-source';
import * as i0 from "@angular/core";
export declare class TheadTitlesRowComponent implements OnChanges {
    grid: Grid;
    source: LocalDataSource;
    sort: EventEmitter<any>;
    selectAllRows: EventEmitter<any>;
    isMultiSelectVisible: boolean;
    showActionColumnLeft: boolean;
    showActionColumnRight: boolean;
    ngOnChanges(): void;
    getVisibleColumns(columns: Array<Column>): Array<Column>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TheadTitlesRowComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TheadTitlesRowComponent, "[ng2-st-thead-titles-row]", never, { "grid": "grid"; "source": "source"; }, { "sort": "sort"; "selectAllRows": "selectAllRows"; }, never, never, false, never>;
}
