import { EventEmitter, AfterViewInit, ElementRef, OnChanges } from '@angular/core';
import { Grid } from '../../../lib/grid';
import { LocalDataSource } from '../../../lib/data-source/local/local.data-source';
import * as i0 from "@angular/core";
export declare class AddButtonComponent implements AfterViewInit, OnChanges {
    private ref;
    grid: Grid;
    source: LocalDataSource;
    create: EventEmitter<any>;
    isActionAdd: boolean;
    addNewButtonContent: string;
    constructor(ref: ElementRef);
    ngAfterViewInit(): void;
    ngOnChanges(): void;
    onAdd(event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AddButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AddButtonComponent, "[ng2-st-add-button]", never, { "grid": "grid"; "source": "source"; }, { "create": "create"; }, never, never, false, never>;
}
