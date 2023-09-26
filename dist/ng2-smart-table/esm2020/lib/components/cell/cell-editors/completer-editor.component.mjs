import { Component } from '@angular/core';
import { DefaultEditor } from './default-editor';
import * as i0 from "@angular/core";
export class CompleterEditorComponent extends DefaultEditor {
    constructor() {
        super();
        this.completerStr = '';
    }
    ngOnInit() {
        // if (this.cell.getColumn().editor && this.cell.getColumn().editor.type === 'completer') {
        //   const config = this.cell.getColumn().getConfig().completer;
        //   config.dataService = this.completerService.local(config.data, config.searchFields, config.titleField);
        //   config.dataService.descriptionField(config.descriptionField);
        // }
    }
    onEditedCompleter(event) {
        this.cell.newValue = event.title;
        return false;
    }
}
CompleterEditorComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: CompleterEditorComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
CompleterEditorComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: CompleterEditorComponent, selector: "completer-editor", usesInheritance: true, ngImport: i0, template: `
    <!-- <ng2-completer [(ngModel)]="completerStr"
                   [dataService]="cell.getColumn().getConfig().completer.dataService"
                   [minSearchLength]="cell.getColumn().getConfig().completer.minSearchLength || 0"
                   [pause]="cell.getColumn().getConfig().completer.pause || 0"
                   [placeholder]="cell.getColumn().getConfig().completer.placeholder || 'Start typing...'"
                   (selected)="onEditedCompleter($event)">
    </ng2-completer> -->
    `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: CompleterEditorComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'completer-editor',
                    template: `
    <!-- <ng2-completer [(ngModel)]="completerStr"
                   [dataService]="cell.getColumn().getConfig().completer.dataService"
                   [minSearchLength]="cell.getColumn().getConfig().completer.minSearchLength || 0"
                   [pause]="cell.getColumn().getConfig().completer.pause || 0"
                   [placeholder]="cell.getColumn().getConfig().completer.placeholder || 'Start typing...'"
                   (selected)="onEditedCompleter($event)">
    </ng2-completer> -->
    `,
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGxldGVyLWVkaXRvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZzItc21hcnQtdGFibGUvc3JjL2xpYi9jb21wb25lbnRzL2NlbGwvY2VsbC1lZGl0b3JzL2NvbXBsZXRlci1lZGl0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFFbEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDOztBQWNqRCxNQUFNLE9BQU8sd0JBQXlCLFNBQVEsYUFBYTtJQUl6RDtRQUNFLEtBQUssRUFBRSxDQUFDO1FBSFYsaUJBQVksR0FBVyxFQUFFLENBQUM7SUFJMUIsQ0FBQztJQUVELFFBQVE7UUFDTiwyRkFBMkY7UUFDM0YsZ0VBQWdFO1FBQ2hFLDJHQUEyRztRQUMzRyxrRUFBa0U7UUFDbEUsSUFBSTtJQUNOLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxLQUFvQjtRQUNwQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ2pDLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7cUhBbkJVLHdCQUF3Qjt5R0FBeEIsd0JBQXdCLCtFQVZ6Qjs7Ozs7Ozs7S0FRUDsyRkFFUSx3QkFBd0I7a0JBWnBDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsUUFBUSxFQUFFOzs7Ozs7OztLQVFQO2lCQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRGVmYXVsdEVkaXRvciB9IGZyb20gJy4vZGVmYXVsdC1lZGl0b3InO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjb21wbGV0ZXItZWRpdG9yJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8IS0tIDxuZzItY29tcGxldGVyIFsobmdNb2RlbCldPVwiY29tcGxldGVyU3RyXCJcbiAgICAgICAgICAgICAgICAgICBbZGF0YVNlcnZpY2VdPVwiY2VsbC5nZXRDb2x1bW4oKS5nZXRDb25maWcoKS5jb21wbGV0ZXIuZGF0YVNlcnZpY2VcIlxuICAgICAgICAgICAgICAgICAgIFttaW5TZWFyY2hMZW5ndGhdPVwiY2VsbC5nZXRDb2x1bW4oKS5nZXRDb25maWcoKS5jb21wbGV0ZXIubWluU2VhcmNoTGVuZ3RoIHx8IDBcIlxuICAgICAgICAgICAgICAgICAgIFtwYXVzZV09XCJjZWxsLmdldENvbHVtbigpLmdldENvbmZpZygpLmNvbXBsZXRlci5wYXVzZSB8fCAwXCJcbiAgICAgICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiY2VsbC5nZXRDb2x1bW4oKS5nZXRDb25maWcoKS5jb21wbGV0ZXIucGxhY2Vob2xkZXIgfHwgJ1N0YXJ0IHR5cGluZy4uLidcIlxuICAgICAgICAgICAgICAgICAgIChzZWxlY3RlZCk9XCJvbkVkaXRlZENvbXBsZXRlcigkZXZlbnQpXCI+XG4gICAgPC9uZzItY29tcGxldGVyPiAtLT5cbiAgICBgLFxufSlcbmV4cG9ydCBjbGFzcyBDb21wbGV0ZXJFZGl0b3JDb21wb25lbnQgZXh0ZW5kcyBEZWZhdWx0RWRpdG9yIGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb21wbGV0ZXJTdHI6IHN0cmluZyA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICAvLyBpZiAodGhpcy5jZWxsLmdldENvbHVtbigpLmVkaXRvciAmJiB0aGlzLmNlbGwuZ2V0Q29sdW1uKCkuZWRpdG9yLnR5cGUgPT09ICdjb21wbGV0ZXInKSB7XG4gICAgLy8gICBjb25zdCBjb25maWcgPSB0aGlzLmNlbGwuZ2V0Q29sdW1uKCkuZ2V0Q29uZmlnKCkuY29tcGxldGVyO1xuICAgIC8vICAgY29uZmlnLmRhdGFTZXJ2aWNlID0gdGhpcy5jb21wbGV0ZXJTZXJ2aWNlLmxvY2FsKGNvbmZpZy5kYXRhLCBjb25maWcuc2VhcmNoRmllbGRzLCBjb25maWcudGl0bGVGaWVsZCk7XG4gICAgLy8gICBjb25maWcuZGF0YVNlcnZpY2UuZGVzY3JpcHRpb25GaWVsZChjb25maWcuZGVzY3JpcHRpb25GaWVsZCk7XG4gICAgLy8gfVxuICB9XG5cbiAgb25FZGl0ZWRDb21wbGV0ZXIoZXZlbnQ6IHsgdGl0bGU6ICcnIH0pOiBib29sZWFuIHtcbiAgICB0aGlzLmNlbGwubmV3VmFsdWUgPSBldmVudC50aXRsZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiJdfQ==