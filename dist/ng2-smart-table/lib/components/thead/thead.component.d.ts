import { LocalDataSource } from './../../lib/data-source/local/local.data-source';
import { EventEmitter, OnChanges } from '@angular/core';
import { Grid } from '../../lib/grid';
import * as i0 from "@angular/core";
export declare class Ng2SmartTableTheadComponent implements OnChanges {
    grid: Grid;
    source: LocalDataSource;
    createConfirm: EventEmitter<any>;
    sort: EventEmitter<any>;
    selectAllRows: EventEmitter<any>;
    create: EventEmitter<any>;
    filter: EventEmitter<any>;
    isHideHeader: boolean;
    isHideSubHeader: boolean;
    ngOnChanges(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<Ng2SmartTableTheadComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<Ng2SmartTableTheadComponent, "[ng2-st-thead]", never, { "grid": { "alias": "grid"; "required": false; }; "source": { "alias": "source"; "required": false; }; "createConfirm": { "alias": "createConfirm"; "required": false; }; }, { "sort": "sort"; "selectAllRows": "selectAllRows"; "create": "create"; "filter": "filter"; }, never, never, false, never>;
}
