import { OnInit } from '@angular/core';
import { DefaultEditor } from './default-editor';
import * as i0 from "@angular/core";
export declare class CompleterEditorComponent extends DefaultEditor implements OnInit {
    completerStr: string;
    constructor();
    ngOnInit(): void;
    onEditedCompleter(event: {
        title: '';
    }): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<CompleterEditorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CompleterEditorComponent, "completer-editor", never, {}, {}, never, never, false, never>;
}
