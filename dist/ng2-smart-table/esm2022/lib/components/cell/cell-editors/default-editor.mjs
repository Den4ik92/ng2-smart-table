import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Cell } from '../../../lib/data-set/cell';
import * as i0 from "@angular/core";
export class DefaultEditor {
    constructor() {
        this.inputClass = '';
        this.onStopEditing = new EventEmitter();
        this.onEdited = new EventEmitter();
        this.onClick = new EventEmitter();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: DefaultEditor, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: DefaultEditor, selector: "ng-component", inputs: { cell: "cell", inputClass: "inputClass" }, outputs: { onStopEditing: "onStopEditing", onEdited: "onEdited", onClick: "onClick" }, ngImport: i0, template: '', isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: DefaultEditor, decorators: [{
            type: Component,
            args: [{
                    template: '',
                }]
        }], propDecorators: { cell: [{
                type: Input
            }], inputClass: [{
                type: Input
            }], onStopEditing: [{
                type: Output
            }], onEdited: [{
                type: Output
            }], onClick: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1lZGl0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZzItc21hcnQtdGFibGUvc3JjL2xpYi9jb21wb25lbnRzL2NlbGwvY2VsbC1lZGl0b3JzL2RlZmF1bHQtZWRpdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdkUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLDRCQUE0QixDQUFDOztBQUtsRCxNQUFNLE9BQU8sYUFBYTtJQUgxQjtRQUtXLGVBQVUsR0FBVyxFQUFFLENBQUM7UUFFdkIsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3hDLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ25DLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0tBQzdDOytHQVBZLGFBQWE7bUdBQWIsYUFBYSwrTEFGZCxFQUFFOzs0RkFFRCxhQUFhO2tCQUh6QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxFQUFFO2lCQUNiOzhCQUVVLElBQUk7c0JBQVosS0FBSztnQkFDRyxVQUFVO3NCQUFsQixLQUFLO2dCQUVJLGFBQWE7c0JBQXRCLE1BQU07Z0JBQ0csUUFBUTtzQkFBakIsTUFBTTtnQkFDRyxPQUFPO3NCQUFoQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2VsbCB9IGZyb20gJy4uLy4uLy4uL2xpYi9kYXRhLXNldC9jZWxsJztcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlOiAnJyxcbn0pXG5leHBvcnQgY2xhc3MgRGVmYXVsdEVkaXRvciBpbXBsZW1lbnRzIEVkaXRvciB7XG4gIEBJbnB1dCgpIGNlbGwhOiBDZWxsO1xuICBASW5wdXQoKSBpbnB1dENsYXNzOiBzdHJpbmcgPSAnJztcblxuICBAT3V0cHV0KCkgb25TdG9wRWRpdGluZyA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgb25FZGl0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIG9uQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFZGl0b3Ige1xuICBjZWxsOiBDZWxsO1xuICBpbnB1dENsYXNzOiBzdHJpbmc7XG4gIG9uU3RvcEVkaXRpbmc6IEV2ZW50RW1pdHRlcjxhbnk+O1xuICBvbkVkaXRlZDogRXZlbnRFbWl0dGVyPGFueT47XG4gIG9uQ2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+O1xufVxuIl19