import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { DefaultFilter } from './default-filter';
import * as i0 from "@angular/core";
export declare class InputFilterComponent extends DefaultFilter implements OnInit, OnChanges {
    inputControl: UntypedFormControl;
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<InputFilterComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InputFilterComponent, "input-filter", never, {}, {}, never, never, false, never>;
}
