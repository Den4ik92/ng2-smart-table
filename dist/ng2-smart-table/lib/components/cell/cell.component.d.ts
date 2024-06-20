import { EventEmitter } from '@angular/core';
import { Cell } from '../../lib/data-set/cell';
import { Row } from '../../lib/data-set/row';
import { Grid } from '../../lib/grid';
import * as i0 from "@angular/core";
export declare class CellComponent {
    grid: Grid;
    row: Row;
    editConfirm: EventEmitter<any>;
    createConfirm: EventEmitter<any>;
    isNew: boolean;
    cell: Cell;
    inputClass: string;
    mode: string;
    isInEditing: boolean;
    edited: EventEmitter<any>;
    onEdited(event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CellComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CellComponent, "ng2-smart-table-cell", never, { "grid": { "alias": "grid"; "required": false; }; "row": { "alias": "row"; "required": false; }; "editConfirm": { "alias": "editConfirm"; "required": false; }; "createConfirm": { "alias": "createConfirm"; "required": false; }; "isNew": { "alias": "isNew"; "required": false; }; "cell": { "alias": "cell"; "required": false; }; "inputClass": { "alias": "inputClass"; "required": false; }; "mode": { "alias": "mode"; "required": false; }; "isInEditing": { "alias": "isInEditing"; "required": false; }; }, { "edited": "edited"; }, never, never, false, never>;
}
