import { EventEmitter, OnChanges } from "@angular/core";
import { Row } from "../../../lib/data-set/row";
import { Grid } from "../../../lib/grid";
import * as i0 from "@angular/core";
export declare class TbodyCreateCancelComponent implements OnChanges {
    grid: Grid;
    row: Row;
    editConfirm: EventEmitter<any>;
    editCancel: EventEmitter<any>;
    cancelButtonContent: string;
    saveButtonContent: string;
    onSave(event: any): void;
    onCancelEdit(event: any): void;
    ngOnChanges(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TbodyCreateCancelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TbodyCreateCancelComponent, "ng2-st-tbody-create-cancel", never, { "grid": { "alias": "grid"; "required": false; }; "row": { "alias": "row"; "required": false; }; "editConfirm": { "alias": "editConfirm"; "required": false; }; "editCancel": { "alias": "editCancel"; "required": false; }; }, {}, never, never, false, never>;
}
