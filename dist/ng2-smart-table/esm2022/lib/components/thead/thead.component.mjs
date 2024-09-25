import { LocalDataSource } from './../../lib/data-source/local/local.data-source';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Grid } from '../../lib/grid';
import * as i0 from "@angular/core";
import * as i1 from "./rows/thead-filters-row.component";
import * as i2 from "./rows/thead-form-row.component";
import * as i3 from "./rows/thead-titles-row.component";
export class Ng2SmartTableTheadComponent {
    constructor() {
        this.sort = new EventEmitter();
        this.selectAllRows = new EventEmitter();
        this.create = new EventEmitter();
        this.filter = new EventEmitter();
        this.isHideHeader = false;
        this.isHideSubHeader = false;
    }
    ngOnChanges() {
        this.isHideHeader = this.grid.getSetting('hideHeader', false);
        this.isHideSubHeader = this.grid.getSetting('hideSubHeader', false);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: Ng2SmartTableTheadComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.3.12", type: Ng2SmartTableTheadComponent, selector: "[ng2-st-thead]", inputs: { grid: "grid", source: "source", createConfirm: "createConfirm" }, outputs: { sort: "sort", selectAllRows: "selectAllRows", create: "create", filter: "filter" }, usesOnChanges: true, ngImport: i0, template: "@if (!isHideHeader) {\n  <tr ng2-st-thead-titles-row\n    class=\"ng2-smart-titles\"\n    [grid]=\"grid\"\n    [source]=\"source\"\n    (sort)=\"sort.emit($event)\"\n    (selectAllRows)=\"selectAllRows.emit($event)\">\n  </tr>\n}\n\n@if (!isHideSubHeader) {\n  <tr ng2-st-thead-filters-row\n    class=\"ng2-smart-filters\"\n    [grid]=\"grid\"\n    [source]=\"source\"\n    (create)=\"create.emit($event)\"\n    (filter)=\"filter.emit($event)\">\n  </tr>\n}\n\n@if (grid.createFormShown) {\n  <tr ng2-st-thead-form-row\n    [grid]=\"grid\"\n    [createConfirm]=\"createConfirm\">\n  </tr>\n}\n", dependencies: [{ kind: "component", type: i1.TheadFitlersRowComponent, selector: "[ng2-st-thead-filters-row]", inputs: ["grid", "source"], outputs: ["create", "filter"] }, { kind: "component", type: i2.TheadFormRowComponent, selector: "[ng2-st-thead-form-row]", inputs: ["grid", "row", "createConfirm"], outputs: ["create"] }, { kind: "component", type: i3.TheadTitlesRowComponent, selector: "[ng2-st-thead-titles-row]", inputs: ["grid", "source"], outputs: ["sort", "selectAllRows"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: Ng2SmartTableTheadComponent, decorators: [{
            type: Component,
            args: [{ selector: '[ng2-st-thead]', template: "@if (!isHideHeader) {\n  <tr ng2-st-thead-titles-row\n    class=\"ng2-smart-titles\"\n    [grid]=\"grid\"\n    [source]=\"source\"\n    (sort)=\"sort.emit($event)\"\n    (selectAllRows)=\"selectAllRows.emit($event)\">\n  </tr>\n}\n\n@if (!isHideSubHeader) {\n  <tr ng2-st-thead-filters-row\n    class=\"ng2-smart-filters\"\n    [grid]=\"grid\"\n    [source]=\"source\"\n    (create)=\"create.emit($event)\"\n    (filter)=\"filter.emit($event)\">\n  </tr>\n}\n\n@if (grid.createFormShown) {\n  <tr ng2-st-thead-form-row\n    [grid]=\"grid\"\n    [createConfirm]=\"createConfirm\">\n  </tr>\n}\n" }]
        }], propDecorators: { grid: [{
                type: Input
            }], source: [{
                type: Input
            }], createConfirm: [{
                type: Input
            }], sort: [{
                type: Output
            }], selectAllRows: [{
                type: Output
            }], create: [{
                type: Output
            }], filter: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlYWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmcyLXNtYXJ0LXRhYmxlL3NyYy9saWIvY29tcG9uZW50cy90aGVhZC90aGVhZC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZzItc21hcnQtdGFibGUvc3JjL2xpYi9jb21wb25lbnRzL3RoZWFkL3RoZWFkLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUNsRixPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBRWhGLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7QUFNdEMsTUFBTSxPQUFPLDJCQUEyQjtJQUp4QztRQVVjLFNBQUksR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQy9CLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUN4QyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNqQyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUUzQyxpQkFBWSxHQUFZLEtBQUssQ0FBQztRQUM5QixvQkFBZSxHQUFZLEtBQUssQ0FBQztLQU1wQztJQUpDLFdBQVc7UUFDUCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN0RSxDQUFDOytHQWpCUSwyQkFBMkI7bUdBQTNCLDJCQUEyQixzUENUeEMsbWxCQTBCQTs7NEZEakJhLDJCQUEyQjtrQkFKdkMsU0FBUzsrQkFDSSxnQkFBZ0I7OEJBS2pCLElBQUk7c0JBQVosS0FBSztnQkFDRyxNQUFNO3NCQUFkLEtBQUs7Z0JBQ0csYUFBYTtzQkFBckIsS0FBSztnQkFFSSxJQUFJO3NCQUFiLE1BQU07Z0JBQ0csYUFBYTtzQkFBdEIsTUFBTTtnQkFDRyxNQUFNO3NCQUFmLE1BQU07Z0JBQ0csTUFBTTtzQkFBZixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTG9jYWxEYXRhU291cmNlIH0gZnJvbSAnLi8uLi8uLi9saWIvZGF0YS1zb3VyY2UvbG9jYWwvbG9jYWwuZGF0YS1zb3VyY2UnO1xuaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgR3JpZCB9IGZyb20gJy4uLy4uL2xpYi9ncmlkJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdbbmcyLXN0LXRoZWFkXScsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3RoZWFkLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgTmcyU21hcnRUYWJsZVRoZWFkQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuICAgIEBJbnB1dCgpIGdyaWQhOiBHcmlkO1xuICAgIEBJbnB1dCgpIHNvdXJjZSE6IExvY2FsRGF0YVNvdXJjZTtcbiAgICBASW5wdXQoKSBjcmVhdGVDb25maXJtITogRXZlbnRFbWl0dGVyPGFueT47XG5cbiAgICBAT3V0cHV0KCkgc29ydCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAgIEBPdXRwdXQoKSBzZWxlY3RBbGxSb3dzID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gICAgQE91dHB1dCgpIGNyZWF0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAgIEBPdXRwdXQoKSBmaWx0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICAgIGlzSGlkZUhlYWRlcjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGlzSGlkZVN1YkhlYWRlcjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgICAgdGhpcy5pc0hpZGVIZWFkZXIgPSB0aGlzLmdyaWQuZ2V0U2V0dGluZygnaGlkZUhlYWRlcicsIGZhbHNlKTtcbiAgICAgIHRoaXMuaXNIaWRlU3ViSGVhZGVyID0gdGhpcy5ncmlkLmdldFNldHRpbmcoJ2hpZGVTdWJIZWFkZXInLCBmYWxzZSk7XG4gICAgfVxufVxuIiwiQGlmICghaXNIaWRlSGVhZGVyKSB7XG4gIDx0ciBuZzItc3QtdGhlYWQtdGl0bGVzLXJvd1xuICAgIGNsYXNzPVwibmcyLXNtYXJ0LXRpdGxlc1wiXG4gICAgW2dyaWRdPVwiZ3JpZFwiXG4gICAgW3NvdXJjZV09XCJzb3VyY2VcIlxuICAgIChzb3J0KT1cInNvcnQuZW1pdCgkZXZlbnQpXCJcbiAgICAoc2VsZWN0QWxsUm93cyk9XCJzZWxlY3RBbGxSb3dzLmVtaXQoJGV2ZW50KVwiPlxuICA8L3RyPlxufVxuXG5AaWYgKCFpc0hpZGVTdWJIZWFkZXIpIHtcbiAgPHRyIG5nMi1zdC10aGVhZC1maWx0ZXJzLXJvd1xuICAgIGNsYXNzPVwibmcyLXNtYXJ0LWZpbHRlcnNcIlxuICAgIFtncmlkXT1cImdyaWRcIlxuICAgIFtzb3VyY2VdPVwic291cmNlXCJcbiAgICAoY3JlYXRlKT1cImNyZWF0ZS5lbWl0KCRldmVudClcIlxuICAgIChmaWx0ZXIpPVwiZmlsdGVyLmVtaXQoJGV2ZW50KVwiPlxuICA8L3RyPlxufVxuXG5AaWYgKGdyaWQuY3JlYXRlRm9ybVNob3duKSB7XG4gIDx0ciBuZzItc3QtdGhlYWQtZm9ybS1yb3dcbiAgICBbZ3JpZF09XCJncmlkXCJcbiAgICBbY3JlYXRlQ29uZmlybV09XCJjcmVhdGVDb25maXJtXCI+XG4gIDwvdHI+XG59XG4iXX0=