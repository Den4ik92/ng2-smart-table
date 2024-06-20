import { EventEmitter } from '@angular/core';
import { Cell } from '../../../lib/data-set/cell';
import * as i0 from "@angular/core";
export declare class EditCellDefault {
    cell: Cell;
    inputClass: string;
    edited: EventEmitter<any>;
    onEdited(event: any): boolean;
    onStopEditing(): boolean;
    onClick(event: MouseEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EditCellDefault, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EditCellDefault, "ng-component", never, { "cell": { "alias": "cell"; "required": false; }; "inputClass": { "alias": "inputClass"; "required": false; }; }, { "edited": "edited"; }, never, never, false, never>;
}
