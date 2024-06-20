import { EventEmitter, OnChanges } from "@angular/core";
import { Row } from "../../../lib/data-set/row";
import { LocalDataSource } from "../../../lib/data-source/local/local.data-source";
import { Grid } from "../../../lib/grid";
import * as i0 from "@angular/core";
export declare class TbodyEditDeleteComponent implements OnChanges {
    grid: Grid;
    row: Row;
    source: LocalDataSource;
    deleteConfirm: EventEmitter<any>;
    editConfirm: EventEmitter<any>;
    edit: EventEmitter<any>;
    delete: EventEmitter<any>;
    editRowSelect: EventEmitter<any>;
    isActionEdit: boolean;
    isActionDelete: boolean;
    editRowButtonContent: string;
    deleteRowButtonContent: string;
    onEdit(event: any): void;
    onDelete(event: any): void;
    ngOnChanges(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TbodyEditDeleteComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TbodyEditDeleteComponent, "ng2-st-tbody-edit-delete", never, { "grid": { "alias": "grid"; "required": false; }; "row": { "alias": "row"; "required": false; }; "source": { "alias": "source"; "required": false; }; "deleteConfirm": { "alias": "deleteConfirm"; "required": false; }; "editConfirm": { "alias": "editConfirm"; "required": false; }; }, { "edit": "edit"; "delete": "delete"; "editRowSelect": "editRowSelect"; }, never, never, false, never>;
}
