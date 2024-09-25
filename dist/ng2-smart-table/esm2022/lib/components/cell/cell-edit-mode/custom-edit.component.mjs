import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef, } from '@angular/core';
import { EditCellDefault } from './edit-cell-default';
import * as i0 from "@angular/core";
export class CustomEditComponent extends EditCellDefault {
    constructor(resolver) {
        super();
        this.resolver = resolver;
    }
    ngOnChanges(changes) {
        const editor = this.cell.getColumn().editor;
        if (this.cell && !this.customComponent && editor && editor.type == 'custom') {
            const componentFactory = this.resolver.resolveComponentFactory(editor.component);
            this.customComponent = this.dynamicTarget.createComponent(componentFactory);
            // set @Inputs and @Outputs of custom component
            this.customComponent.instance.cell = this.cell;
            this.customComponent.instance.inputClass = this.inputClass;
            this.customComponent.instance.onStopEditing.subscribe(() => this.onStopEditing());
            this.customComponent.instance.onEdited.subscribe((event) => this.onEdited(event));
            this.customComponent.instance.onClick.subscribe((event) => this.onClick(event));
        }
    }
    ngOnDestroy() {
        if (this.customComponent) {
            this.customComponent.destroy();
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: CustomEditComponent, deps: [{ token: i0.ComponentFactoryResolver }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: CustomEditComponent, selector: "table-cell-custom-editor", viewQueries: [{ propertyName: "dynamicTarget", first: true, predicate: ["dynamicTarget"], descendants: true, read: ViewContainerRef, static: true }], usesInheritance: true, usesOnChanges: true, ngImport: i0, template: `
    <ng-template #dynamicTarget></ng-template>
  `, isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: CustomEditComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'table-cell-custom-editor',
                    template: `
    <ng-template #dynamicTarget></ng-template>
  `,
                }]
        }], ctorParameters: () => [{ type: i0.ComponentFactoryResolver }], propDecorators: { dynamicTarget: [{
                type: ViewChild,
                args: ['dynamicTarget', { read: ViewContainerRef, static: true }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWVkaXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmcyLXNtYXJ0LXRhYmxlL3NyYy9saWIvY29tcG9uZW50cy9jZWxsL2NlbGwtZWRpdC1tb2RlL2N1c3RvbS1lZGl0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULHdCQUF3QixFQUN4QixTQUFTLEVBQ1QsZ0JBQWdCLEdBSWpCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFTdEQsTUFBTSxPQUFPLG1CQUFvQixTQUFRLGVBQWU7SUFLdEQsWUFBb0IsUUFBa0M7UUFDcEQsS0FBSyxFQUFFLENBQUM7UUFEVSxhQUFRLEdBQVIsUUFBUSxDQUEwQjtJQUV0RCxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLE1BQU0sTUFBTSxHQUFzQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLE1BQU0sQ0FBQTtRQUM5RSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsSUFBSSxJQUFJLFFBQVEsRUFBRSxDQUFDO1lBQzVFLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDakYsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBRTVFLCtDQUErQztZQUMvQyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztZQUMvQyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUMzRCxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO1lBQ2xGLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFVLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN2RixJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBVSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDdkYsQ0FBQztJQUNILENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDekIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNqQyxDQUFDO0lBQ0gsQ0FBQzsrR0E1QlUsbUJBQW1CO21HQUFuQixtQkFBbUIsMkpBR00sZ0JBQWdCLHVGQVAxQzs7R0FFVDs7NEZBRVUsbUJBQW1CO2tCQU4vQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSwwQkFBMEI7b0JBQ3BDLFFBQVEsRUFBRTs7R0FFVDtpQkFDRjs2RkFJdUUsYUFBYTtzQkFBbEYsU0FBUzt1QkFBQyxlQUFlLEVBQUUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRWRpdENlbGxEZWZhdWx0IH0gZnJvbSAnLi9lZGl0LWNlbGwtZGVmYXVsdCc7XG5pbXBvcnQgeyBTbWFydFRhYmxlRWRpdG9yQW5kRmlsdGVyIH0gZnJvbSAnLi4vLi4vLi4vbGliL2ludGVyZmFjZXMvc21hcnQtdGFibGUubW9kZWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGFibGUtY2VsbC1jdXN0b20tZWRpdG9yJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctdGVtcGxhdGUgI2R5bmFtaWNUYXJnZXQ+PC9uZy10ZW1wbGF0ZT5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgQ3VzdG9tRWRpdENvbXBvbmVudCBleHRlbmRzIEVkaXRDZWxsRGVmYXVsdCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcblxuICBjdXN0b21Db21wb25lbnQ6IGFueTtcbiAgQFZpZXdDaGlsZCgnZHluYW1pY1RhcmdldCcsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiwgc3RhdGljOiB0cnVlIH0pIGR5bmFtaWNUYXJnZXQ6IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGNvbnN0IGVkaXRvcjogU21hcnRUYWJsZUVkaXRvckFuZEZpbHRlciB8IGZhbHNlID0gdGhpcy5jZWxsLmdldENvbHVtbigpLmVkaXRvclxuICAgIGlmICh0aGlzLmNlbGwgJiYgIXRoaXMuY3VzdG9tQ29tcG9uZW50ICYmIGVkaXRvciAmJiBlZGl0b3IudHlwZSA9PSAnY3VzdG9tJykge1xuICAgICAgY29uc3QgY29tcG9uZW50RmFjdG9yeSA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoZWRpdG9yLmNvbXBvbmVudCk7XG4gICAgICB0aGlzLmN1c3RvbUNvbXBvbmVudCA9IHRoaXMuZHluYW1pY1RhcmdldC5jcmVhdGVDb21wb25lbnQoY29tcG9uZW50RmFjdG9yeSk7XG5cbiAgICAgIC8vIHNldCBASW5wdXRzIGFuZCBAT3V0cHV0cyBvZiBjdXN0b20gY29tcG9uZW50XG4gICAgICB0aGlzLmN1c3RvbUNvbXBvbmVudC5pbnN0YW5jZS5jZWxsID0gdGhpcy5jZWxsO1xuICAgICAgdGhpcy5jdXN0b21Db21wb25lbnQuaW5zdGFuY2UuaW5wdXRDbGFzcyA9IHRoaXMuaW5wdXRDbGFzcztcbiAgICAgIHRoaXMuY3VzdG9tQ29tcG9uZW50Lmluc3RhbmNlLm9uU3RvcEVkaXRpbmcuc3Vic2NyaWJlKCgpID0+IHRoaXMub25TdG9wRWRpdGluZygpKTtcbiAgICAgIHRoaXMuY3VzdG9tQ29tcG9uZW50Lmluc3RhbmNlLm9uRWRpdGVkLnN1YnNjcmliZSgoZXZlbnQ6IGFueSkgPT4gdGhpcy5vbkVkaXRlZChldmVudCkpO1xuICAgICAgdGhpcy5jdXN0b21Db21wb25lbnQuaW5zdGFuY2Uub25DbGljay5zdWJzY3JpYmUoKGV2ZW50OiBhbnkpID0+IHRoaXMub25DbGljayhldmVudCkpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLmN1c3RvbUNvbXBvbmVudCkge1xuICAgICAgdGhpcy5jdXN0b21Db21wb25lbnQuZGVzdHJveSgpO1xuICAgIH1cbiAgfVxufVxuIl19