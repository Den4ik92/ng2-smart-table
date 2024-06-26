import { ComponentFactoryResolver, OnInit, OnDestroy } from '@angular/core';
import { Cell } from '../../../lib/data-set/cell';
import { ViewCell } from './view-cell';
import * as i0 from "@angular/core";
export declare class CustomViewComponent implements OnInit, OnDestroy {
    private resolver;
    customComponent: any;
    cell: Cell;
    dynamicTarget: any;
    constructor(resolver: ComponentFactoryResolver);
    ngOnInit(): void;
    ngOnDestroy(): void;
    protected createCustomComponent(): void;
    protected patchInstance(): void;
    protected getPatch(): ViewCell;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomViewComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomViewComponent, "custom-view-component", never, { "cell": { "alias": "cell"; "required": false; }; }, {}, never, never, false, never>;
}
