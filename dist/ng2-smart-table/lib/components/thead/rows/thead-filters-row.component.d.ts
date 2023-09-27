import { EventEmitter, OnChanges } from '@angular/core';
import { Grid } from '../../../lib/grid';
import { Column } from "../../../lib/data-set/column";
import { LocalDataSource } from '../../../lib/data-source/local/local.data-source';
import * as i0 from "@angular/core";
export declare class TheadFitlersRowComponent implements OnChanges {
    grid: Grid;
    source: LocalDataSource;
    create: EventEmitter<any>;
    filter: EventEmitter<any>;
    isMultiSelectVisible: boolean;
    showActionColumnLeft: boolean;
    showActionColumnRight: boolean;
    filterInputClass: string;
    ngOnChanges(): void;
    getVisibleColumns(columns: Array<Column>): Array<Column>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TheadFitlersRowComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TheadFitlersRowComponent, "[ng2-st-thead-filters-row]", never, { "grid": "grid"; "source": "source"; }, { "create": "create"; "filter": "filter"; }, never, never, false, never>;
}
