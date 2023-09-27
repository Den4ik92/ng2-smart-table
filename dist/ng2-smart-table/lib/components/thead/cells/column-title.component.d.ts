import { EventEmitter } from '@angular/core';
import { Column } from '../../../lib/data-set/column';
import { LocalDataSource } from '../../../lib/data-source/local/local.data-source';
import * as i0 from "@angular/core";
export declare class ColumnTitleComponent {
    column: Column;
    source: LocalDataSource;
    sort: EventEmitter<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ColumnTitleComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ColumnTitleComponent, "ng2-st-column-title", never, { "column": "column"; "source": "source"; }, { "sort": "sort"; }, never, never, false, never>;
}
