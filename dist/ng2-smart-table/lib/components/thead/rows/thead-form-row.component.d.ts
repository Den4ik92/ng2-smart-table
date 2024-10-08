import { EventEmitter, OnChanges } from "@angular/core";
import { Cell } from "../../../lib/data-set/cell";
import { Row } from "../../../lib/data-set/row";
import { Grid } from "../../../lib/grid";
import * as i0 from "@angular/core";
export declare class TheadFormRowComponent implements OnChanges {
    grid: Grid;
    row: Row;
    createConfirm: EventEmitter<any>;
    create: EventEmitter<any>;
    isMultiSelectVisible: boolean;
    showActionColumnLeft: boolean;
    showActionColumnRight: boolean;
    addInputClass: string;
    onCreate(event: any): void;
    ngOnChanges(): void;
    getVisibleCells(cells: Array<Cell>): Array<Cell>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TheadFormRowComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TheadFormRowComponent, "[ng2-st-thead-form-row]", never, { "grid": { "alias": "grid"; "required": false; }; "row": { "alias": "row"; "required": false; }; "createConfirm": { "alias": "createConfirm"; "required": false; }; }, { "create": "create"; }, never, never, false, never>;
}
