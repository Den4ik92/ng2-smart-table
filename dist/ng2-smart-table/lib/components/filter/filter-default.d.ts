import { EventEmitter } from '@angular/core';
import { Column } from '../../lib/data-set/column';
import { LocalDataSource } from '../../lib/data-source/local/local.data-source';
import * as i0 from "@angular/core";
export declare class FilterDefault {
    column: Column;
    source: LocalDataSource;
    inputClass: string;
    query: string;
    filter: EventEmitter<any>;
    onFilter(query: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FilterDefault, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FilterDefault, "ng-component", never, { "column": "column"; "source": "source"; "inputClass": "inputClass"; "query": "query"; }, { "filter": "filter"; }, never, never, false, never>;
}
