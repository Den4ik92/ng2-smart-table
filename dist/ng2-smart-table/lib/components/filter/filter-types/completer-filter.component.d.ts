import { OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { DefaultFilter } from './default-filter';
import * as i0 from "@angular/core";
export declare class CompleterFilterComponent extends DefaultFilter implements OnInit {
    completerContent: Subject<any>;
    constructor();
    ngOnInit(): void;
    inputTextChanged(event: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CompleterFilterComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CompleterFilterComponent, "completer-filter", never, {}, {}, never, never, false, never>;
}
