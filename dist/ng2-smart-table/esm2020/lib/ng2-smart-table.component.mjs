import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Grid } from './lib/grid';
import { DataSource } from './lib/data-source/data-source';
import { deepExtend } from './lib/helpers';
import { LocalDataSource } from './lib/data-source/local/local.data-source';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./components/pager/pager.component";
import * as i3 from "./components/tbody/tbody.component";
import * as i4 from "./components/thead/thead.component";
export class Ng2SmartTableComponent {
    constructor() {
        this.multiRowSelect = new EventEmitter();
        this.rowClicked = new EventEmitter();
        this.delete = new EventEmitter();
        this.edit = new EventEmitter();
        this.editCancel = new EventEmitter();
        this.create = new EventEmitter();
        this.custom = new EventEmitter();
        this.deleteConfirm = new EventEmitter();
        this.editConfirm = new EventEmitter();
        this.createConfirm = new EventEmitter();
        this.rowHover = new EventEmitter();
        this.defaultSettings = {
            mode: 'inline',
            selectMode: 'single',
            /**
             * Points to an element in all data
             *
             * when < 0 all lines must be deselected
             */
            selectedRowIndex: 0,
            switchPageToSelectedRowPage: false,
            hideHeader: false,
            hideSubHeader: false,
            actions: {
                columnTitle: 'Actions',
                add: true,
                edit: true,
                delete: true,
                custom: [],
                position: 'left', // left|right
            },
            filter: {
                inputClass: '',
            },
            edit: {
                inputClass: '',
                editButtonContent: 'Edit',
                saveButtonContent: 'Update',
                cancelButtonContent: 'Cancel',
                confirmSave: false,
            },
            add: {
                inputClass: '',
                addButtonContent: 'Add New',
                createButtonContent: 'Create',
                cancelButtonContent: 'Cancel',
                confirmCreate: false,
            },
            delete: {
                deleteButtonContent: 'Delete',
                confirmDelete: false,
            },
            attr: {
                id: '',
                class: '',
            },
            noDataMessage: 'No data found',
            columns: {},
            pager: {
                display: true,
                page: 1,
                perPage: 10,
            },
            rowClassFunction: () => '',
        };
    }
    ngOnChanges(changes) {
        if (this.grid) {
            if (changes['settings']) {
                this.grid.setSettings(this.prepareSettings());
            }
            if (changes['source']) {
                this.source = this.prepareSource();
                this.grid.setSource(this.source);
            }
        }
        else {
            this.initGrid();
        }
        this.tableId = this.grid.getSetting('attr.id');
        this.tableClass = this.grid.getSetting('attr.class');
        this.isHideHeader = this.grid.getSetting('hideHeader');
        this.isHideSubHeader = this.grid.getSetting('hideSubHeader');
        this.isPagerDisplay = this.grid.getSetting('pager.display');
        this.isPagerDisplay = this.grid.getSetting('pager.display');
        this.perPageSelect = this.grid.getSetting('pager.perPageSelect');
        this.rowClassFunction = this.grid.getSetting('rowClassFunction');
    }
    multipleSelectRow(row) {
        this.grid.multipleSelectRow(row);
        this.emitUserSelectRow(row);
    }
    onSelectAllRows() {
        this.grid.dataSet.isAllSelected;
        this.grid.selectAllRows(!this.grid.dataSet.isAllSelected);
        this.emitUserSelectRow(null);
    }
    onSelectRow(row, state) {
        this.grid.selectRow(row, state);
    }
    initGrid() {
        this.source = this.prepareSource();
        this.grid = new Grid(this.source, this.prepareSettings());
    }
    prepareSource() {
        if (this.source instanceof DataSource) {
            return this.source;
        }
        return new LocalDataSource();
    }
    prepareSettings() {
        return deepExtend({}, this.defaultSettings, this.settings);
    }
    emitUserSelectRow(row) {
        this.multiRowSelect.emit({
            data: row ? row.getData() : null,
            isSelected: row ? row.getIsSelected() : null,
            source: this.source,
            selected: this.grid.dataSet.getSelectedRowsData(),
        });
    }
    emitUserRowClicked(row) {
        this.rowClicked.emit({
            data: row ? row.getData() : null,
            source: this.source,
        });
    }
}
Ng2SmartTableComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: Ng2SmartTableComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
Ng2SmartTableComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: Ng2SmartTableComponent, selector: "ng2-smart-table", inputs: { source: "source", settings: "settings" }, outputs: { multiRowSelect: "multiRowSelect", rowClicked: "rowClicked", delete: "delete", edit: "edit", editCancel: "editCancel", create: "create", custom: "custom", deleteConfirm: "deleteConfirm", editConfirm: "editConfirm", createConfirm: "createConfirm", rowHover: "rowHover" }, usesOnChanges: true, ngImport: i0, template: "<table [id]=\"tableId\" [ngClass]=\"tableClass\">\n\n  <thead ng2-st-thead *ngIf=\"!isHideHeader || !isHideSubHeader\"\n                      [grid]=\"grid\"\n                      [source]=\"source\"\n                      [createConfirm]=\"createConfirm\"\n                      (create)=\"create.emit($event)\"\n                      (selectAllRows)=\"onSelectAllRows()\">\n  </thead>\n\n  <tbody ng2-st-tbody [grid]=\"grid\"\n                      [source]=\"source\"\n                      [deleteConfirm]=\"deleteConfirm\"\n                      [editConfirm]=\"editConfirm\"\n                      [rowClassFunction]=\"rowClassFunction\"\n                      (edit)=\"edit.emit($event)\"\n                      (editCancel)=\"editCancel.emit($event)\"\n                      (delete)=\"delete.emit($event)\"\n                      (custom)=\"custom.emit($event)\"\n                      (userClickedRow)=\"emitUserRowClicked($event)\"\n                      (multipleSelectRow)=\"multipleSelectRow($event)\">\n  </tbody>\n\n</table>\n\n<ng2-smart-table-pager *ngIf=\"isPagerDisplay\"\n                        [source]=\"source\"\n                        [perPageSelect]=\"perPageSelect\">\n</ng2-smart-table-pager>\n", styles: [":host{font-size:1rem}:host ::ng-deep *{box-sizing:border-box}:host ::ng-deep button,:host ::ng-deep input,:host ::ng-deep optgroup,:host ::ng-deep select,:host ::ng-deep textarea{color:inherit;font:inherit;margin:0}:host ::ng-deep table{line-height:1.5em;border-collapse:collapse;border-spacing:0;display:table;width:100%;max-width:100%;overflow:auto;word-break:normal;word-break:keep-all}:host ::ng-deep table tr th{font-weight:700}:host ::ng-deep table tr section{font-size:.75em;font-weight:700}:host ::ng-deep table tr td,:host ::ng-deep table tr th{font-size:.875em;margin:0;padding:.5em 1em}:host ::ng-deep a{color:#1e6bb8;text-decoration:none}:host ::ng-deep a:hover{text-decoration:underline}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.PagerComponent, selector: "ng2-smart-table-pager", inputs: ["source", "perPageSelect"], outputs: ["changePage"] }, { kind: "component", type: i3.Ng2SmartTableTbodyComponent, selector: "[ng2-st-tbody]", inputs: ["grid", "source", "deleteConfirm", "editConfirm", "rowClassFunction"], outputs: ["save", "cancel", "edit", "editCancel", "delete", "custom", "edited", "userSelectRow", "userClickedRow", "editRowSelect", "multipleSelectRow"] }, { kind: "component", type: i4.Ng2SmartTableTheadComponent, selector: "[ng2-st-thead]", inputs: ["grid", "source", "createConfirm"], outputs: ["sort", "selectAllRows", "create", "filter"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: Ng2SmartTableComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ng2-smart-table', template: "<table [id]=\"tableId\" [ngClass]=\"tableClass\">\n\n  <thead ng2-st-thead *ngIf=\"!isHideHeader || !isHideSubHeader\"\n                      [grid]=\"grid\"\n                      [source]=\"source\"\n                      [createConfirm]=\"createConfirm\"\n                      (create)=\"create.emit($event)\"\n                      (selectAllRows)=\"onSelectAllRows()\">\n  </thead>\n\n  <tbody ng2-st-tbody [grid]=\"grid\"\n                      [source]=\"source\"\n                      [deleteConfirm]=\"deleteConfirm\"\n                      [editConfirm]=\"editConfirm\"\n                      [rowClassFunction]=\"rowClassFunction\"\n                      (edit)=\"edit.emit($event)\"\n                      (editCancel)=\"editCancel.emit($event)\"\n                      (delete)=\"delete.emit($event)\"\n                      (custom)=\"custom.emit($event)\"\n                      (userClickedRow)=\"emitUserRowClicked($event)\"\n                      (multipleSelectRow)=\"multipleSelectRow($event)\">\n  </tbody>\n\n</table>\n\n<ng2-smart-table-pager *ngIf=\"isPagerDisplay\"\n                        [source]=\"source\"\n                        [perPageSelect]=\"perPageSelect\">\n</ng2-smart-table-pager>\n", styles: [":host{font-size:1rem}:host ::ng-deep *{box-sizing:border-box}:host ::ng-deep button,:host ::ng-deep input,:host ::ng-deep optgroup,:host ::ng-deep select,:host ::ng-deep textarea{color:inherit;font:inherit;margin:0}:host ::ng-deep table{line-height:1.5em;border-collapse:collapse;border-spacing:0;display:table;width:100%;max-width:100%;overflow:auto;word-break:normal;word-break:keep-all}:host ::ng-deep table tr th{font-weight:700}:host ::ng-deep table tr section{font-size:.75em;font-weight:700}:host ::ng-deep table tr td,:host ::ng-deep table tr th{font-size:.875em;margin:0;padding:.5em 1em}:host ::ng-deep a{color:#1e6bb8;text-decoration:none}:host ::ng-deep a:hover{text-decoration:underline}\n"] }]
        }], propDecorators: { source: [{
                type: Input
            }], settings: [{
                type: Input
            }], multiRowSelect: [{
                type: Output
            }], rowClicked: [{
                type: Output
            }], delete: [{
                type: Output
            }], edit: [{
                type: Output
            }], editCancel: [{
                type: Output
            }], create: [{
                type: Output
            }], custom: [{
                type: Output
            }], deleteConfirm: [{
                type: Output
            }], editConfirm: [{
                type: Output
            }], createConfirm: [{
                type: Output
            }], rowHover: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLXNtYXJ0LXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nMi1zbWFydC10YWJsZS9zcmMvbGliL25nMi1zbWFydC10YWJsZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZzItc21hcnQtdGFibGUvc3JjL2xpYi9uZzItc21hcnQtdGFibGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFnQixZQUFZLEVBQXdCLE1BQU0sZUFBZSxDQUFDO0FBRzNHLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDbEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRTNELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJDQUEyQyxDQUFDOzs7Ozs7QUFRNUUsTUFBTSxPQUFPLHNCQUFzQjtJQUxuQztRQVVZLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQTRCLENBQUM7UUFDOUQsZUFBVSxHQUFHLElBQUksWUFBWSxFQUE2QixDQUFDO1FBQzNELFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ2pDLFNBQUksR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQy9CLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3JDLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ2pDLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBeUIsQ0FBQztRQUNuRCxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFnQyxDQUFDO1FBQ2pFLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQThCLENBQUM7UUFDN0Qsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBMkIsQ0FBQztR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Z0JBQ0csUUFBUTtzQkFBakIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgU2ltcGxlQ2hhbmdlLCBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcywgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgR3JpZCB9IGZyb20gJy4vbGliL2dyaWQnO1xuaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJy4vbGliL2RhdGEtc291cmNlL2RhdGEtc291cmNlJztcbmltcG9ydCB7IFJvdyB9IGZyb20gJy4vbGliL2RhdGEtc2V0L3Jvdyc7XG5pbXBvcnQgeyBkZWVwRXh0ZW5kIH0gZnJvbSAnLi9saWIvaGVscGVycyc7XG5pbXBvcnQgeyBMb2NhbERhdGFTb3VyY2UgfSBmcm9tICcuL2xpYi9kYXRhLXNvdXJjZS9sb2NhbC9sb2NhbC5kYXRhLXNvdXJjZSc7XG5pbXBvcnQgeyBTbWFydFRhYmxlQ29uZmlybURlbGV0ZUV2ZW50LCBTbWFydFRhYmxlQ29uZmlybUVkaXRFdmVudCwgU21hcnRUYWJsZUNyZWF0ZUNvbmZpcm0sIFNtYXJ0VGFibGVDdXN0b21FdmVudCwgU21hcnRUYWJsZVJvd0NsaWNrZWRFdmVudCwgU21hcnRUYWJsZVJvd1NlbGVjdEV2ZW50LCBTbWFydFRhYmxlU2V0dGluZ3MgfSBmcm9tICcuL2xpYi9pbnRlcmZhY2VzL3NtYXJ0LXRhYmxlLm1vZGVscyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nMi1zbWFydC10YWJsZScsXG4gIHN0eWxlVXJsczogWycuL25nMi1zbWFydC10YWJsZS5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vbmcyLXNtYXJ0LXRhYmxlLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgTmcyU21hcnRUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cbiAgQElucHV0KCkgc291cmNlOiBEYXRhU291cmNlO1xuICBASW5wdXQoKSBzZXR0aW5nczogU21hcnRUYWJsZVNldHRpbmdzO1xuXG4gIEBPdXRwdXQoKSBtdWx0aVJvd1NlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8U21hcnRUYWJsZVJvd1NlbGVjdEV2ZW50PigpO1xuICBAT3V0cHV0KCkgcm93Q2xpY2tlZCA9IG5ldyBFdmVudEVtaXR0ZXI8U21hcnRUYWJsZVJvd0NsaWNrZWRFdmVudD4oKTtcbiAgQE91dHB1dCgpIGRlbGV0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgZWRpdCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgZWRpdENhbmNlbCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgY3JlYXRlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBjdXN0b20gPSBuZXcgRXZlbnRFbWl0dGVyPFNtYXJ0VGFibGVDdXN0b21FdmVudD4oKTtcbiAgQE91dHB1dCgpIGRlbGV0ZUNvbmZpcm0gPSBuZXcgRXZlbnRFbWl0dGVyPFNtYXJ0VGFibGVDb25maXJtRGVsZXRlRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSBlZGl0Q29uZmlybSA9IG5ldyBFdmVudEVtaXR0ZXI8U21hcnRUYWJsZUNvbmZpcm1FZGl0RXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSBjcmVhdGVDb25maXJtID0gbmV3IEV2ZW50RW1pdHRlcjxTbWFydFRhYmxlQ3JlYXRlQ29uZmlybT4oKTtcbiAgQE91dHB1dCgpIHJvd0hvdmVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIHRhYmxlQ2xhc3M6IHN0cmluZztcbiAgdGFibGVJZDogc3RyaW5nO1xuICBwZXJQYWdlU2VsZWN0OiBhbnk7XG4gIGlzSGlkZUhlYWRlcjogYm9vbGVhbjtcbiAgaXNIaWRlU3ViSGVhZGVyOiBib29sZWFuO1xuICBpc1BhZ2VyRGlzcGxheTogYm9vbGVhbjtcbiAgcm93Q2xhc3NGdW5jdGlvbjogRnVuY3Rpb247XG5cbiAgZ3JpZDogR3JpZDtcbiAgZGVmYXVsdFNldHRpbmdzOiBTbWFydFRhYmxlU2V0dGluZ3MgPSB7XG4gICAgbW9kZTogJ2lubGluZScsIC8vIGlubGluZXxleHRlcm5hbHxjbGljay10by1lZGl0XG4gICAgc2VsZWN0TW9kZTogJ3NpbmdsZScsIC8vIHNpbmdsZXxtdWx0aVxuICAgIC8qKlxuICAgICAqIFBvaW50cyB0byBhbiBlbGVtZW50IGluIGFsbCBkYXRhXG4gICAgICpcbiAgICAgKiB3aGVuIDwgMCBhbGwgbGluZXMgbXVzdCBiZSBkZXNlbGVjdGVkXG4gICAgICovXG4gICAgc2VsZWN0ZWRSb3dJbmRleDogMCxcbiAgICBzd2l0Y2hQYWdlVG9TZWxlY3RlZFJvd1BhZ2U6IGZhbHNlLFxuICAgIGhpZGVIZWFkZXI6IGZhbHNlLFxuICAgIGhpZGVTdWJIZWFkZXI6IGZhbHNlLFxuICAgIGFjdGlvbnM6IHtcbiAgICAgIGNvbHVtblRpdGxlOiAnQWN0aW9ucycsXG4gICAgICBhZGQ6IHRydWUsXG4gICAgICBlZGl0OiB0cnVlLFxuICAgICAgZGVsZXRlOiB0cnVlLFxuICAgICAgY3VzdG9tOiBbXSxcbiAgICAgIHBvc2l0aW9uOiAnbGVmdCcsIC8vIGxlZnR8cmlnaHRcbiAgICB9LFxuICAgIGZpbHRlcjoge1xuICAgICAgaW5wdXRDbGFzczogJycsXG4gICAgfSxcbiAgICBlZGl0OiB7XG4gICAgICBpbnB1dENsYXNzOiAnJyxcbiAgICAgIGVkaXRCdXR0b25Db250ZW50OiAnRWRpdCcsXG4gICAgICBzYXZlQnV0dG9uQ29udGVudDogJ1VwZGF0ZScsXG4gICAgICBjYW5jZWxCdXR0b25Db250ZW50OiAnQ2FuY2VsJyxcbiAgICAgIGNvbmZpcm1TYXZlOiBmYWxzZSxcbiAgICB9LFxuICAgIGFkZDoge1xuICAgICAgaW5wdXRDbGFzczogJycsXG4gICAgICBhZGRCdXR0b25Db250ZW50OiAnQWRkIE5ldycsXG4gICAgICBjcmVhdGVCdXR0b25Db250ZW50OiAnQ3JlYXRlJyxcbiAgICAgIGNhbmNlbEJ1dHRvbkNvbnRlbnQ6ICdDYW5jZWwnLFxuICAgICAgY29uZmlybUNyZWF0ZTogZmFsc2UsXG4gICAgfSxcbiAgICBkZWxldGU6IHtcbiAgICAgIGRlbGV0ZUJ1dHRvbkNvbnRlbnQ6ICdEZWxldGUnLFxuICAgICAgY29uZmlybURlbGV0ZTogZmFsc2UsXG4gICAgfSxcbiAgICBhdHRyOiB7XG4gICAgICBpZDogJycsXG4gICAgICBjbGFzczogJycsXG4gICAgfSxcbiAgICBub0RhdGFNZXNzYWdlOiAnTm8gZGF0YSBmb3VuZCcsXG4gICAgY29sdW1uczoge30sXG4gICAgcGFnZXI6IHtcbiAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICBwYWdlOiAxLFxuICAgICAgcGVyUGFnZTogMTAsXG4gICAgfSxcbiAgICByb3dDbGFzc0Z1bmN0aW9uOiAoKSA9PiAnJyxcbiAgfTtcblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7IFtwcm9wZXJ0eU5hbWU6IHN0cmluZ106IFNpbXBsZUNoYW5nZSB9KSB7XG4gICAgaWYgKHRoaXMuZ3JpZCkge1xuICAgICAgaWYgKGNoYW5nZXNbJ3NldHRpbmdzJ10pIHtcbiAgICAgICAgdGhpcy5ncmlkLnNldFNldHRpbmdzKHRoaXMucHJlcGFyZVNldHRpbmdzKCkpO1xuICAgICAgfVxuICAgICAgaWYgKGNoYW5nZXNbJ3NvdXJjZSddKSB7XG4gICAgICAgIHRoaXMuc291cmNlID0gdGhpcy5wcmVwYXJlU291cmNlKCk7XG4gICAgICAgIHRoaXMuZ3JpZC5zZXRTb3VyY2UodGhpcy5zb3VyY2UpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmluaXRHcmlkKCk7XG4gICAgfVxuICAgIHRoaXMudGFibGVJZCA9IHRoaXMuZ3JpZC5nZXRTZXR0aW5nKCdhdHRyLmlkJyk7XG4gICAgdGhpcy50YWJsZUNsYXNzID0gdGhpcy5ncmlkLmdldFNldHRpbmcoJ2F0dHIuY2xhc3MnKTtcbiAgICB0aGlzLmlzSGlkZUhlYWRlciA9IHRoaXMuZ3JpZC5nZXRTZXR0aW5nKCdoaWRlSGVhZGVyJyk7XG4gICAgdGhpcy5pc0hpZGVTdWJIZWFkZXIgPSB0aGlzLmdyaWQuZ2V0U2V0dGluZygnaGlkZVN1YkhlYWRlcicpO1xuICAgIHRoaXMuaXNQYWdlckRpc3BsYXkgPSB0aGlzLmdyaWQuZ2V0U2V0dGluZygncGFnZXIuZGlzcGxheScpO1xuICAgIHRoaXMuaXNQYWdlckRpc3BsYXkgPSB0aGlzLmdyaWQuZ2V0U2V0dGluZygncGFnZXIuZGlzcGxheScpO1xuICAgIHRoaXMucGVyUGFnZVNlbGVjdCA9IHRoaXMuZ3JpZC5nZXRTZXR0aW5nKCdwYWdlci5wZXJQYWdlU2VsZWN0Jyk7XG4gICAgdGhpcy5yb3dDbGFzc0Z1bmN0aW9uID0gdGhpcy5ncmlkLmdldFNldHRpbmcoJ3Jvd0NsYXNzRnVuY3Rpb24nKTtcbiAgfVxuXG4gIG11bHRpcGxlU2VsZWN0Um93KHJvdzogUm93KTogdm9pZCB7XG4gICAgdGhpcy5ncmlkLm11bHRpcGxlU2VsZWN0Um93KHJvdyk7XG4gICAgdGhpcy5lbWl0VXNlclNlbGVjdFJvdyhyb3cpO1xuICB9XG5cbiAgb25TZWxlY3RBbGxSb3dzKCk6IHZvaWQge1xuICAgIHRoaXMuZ3JpZC5kYXRhU2V0LmlzQWxsU2VsZWN0ZWQ7XG4gICAgdGhpcy5ncmlkLnNlbGVjdEFsbFJvd3MoIXRoaXMuZ3JpZC5kYXRhU2V0LmlzQWxsU2VsZWN0ZWQpO1xuXG4gICAgdGhpcy5lbWl0VXNlclNlbGVjdFJvdyhudWxsKTtcbiAgfVxuXG4gIG9uU2VsZWN0Um93KHJvdzogUm93LCBzdGF0ZTogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZ3JpZC5zZWxlY3RSb3cocm93LCBzdGF0ZSk7XG4gIH1cblxuICBpbml0R3JpZCgpOiB2b2lkIHtcbiAgICB0aGlzLnNvdXJjZSA9IHRoaXMucHJlcGFyZVNvdXJjZSgpO1xuICAgIHRoaXMuZ3JpZCA9IG5ldyBHcmlkKHRoaXMuc291cmNlLCB0aGlzLnByZXBhcmVTZXR0aW5ncygpKTtcbiAgfVxuXG4gIHByZXBhcmVTb3VyY2UoKTogRGF0YVNvdXJjZSB7XG4gICAgaWYgKHRoaXMuc291cmNlIGluc3RhbmNlb2YgRGF0YVNvdXJjZSkge1xuICAgICAgcmV0dXJuIHRoaXMuc291cmNlO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IExvY2FsRGF0YVNvdXJjZSgpO1xuICB9XG5cbiAgcHJlcGFyZVNldHRpbmdzKCk6IFNtYXJ0VGFibGVTZXR0aW5ncyB7XG4gICAgcmV0dXJuIGRlZXBFeHRlbmQoe30sIHRoaXMuZGVmYXVsdFNldHRpbmdzLCB0aGlzLnNldHRpbmdzKTtcbiAgfVxuXG4gIHByaXZhdGUgZW1pdFVzZXJTZWxlY3RSb3cocm93OiBSb3cpOiB2b2lkIHtcbiAgICB0aGlzLm11bHRpUm93U2VsZWN0LmVtaXQoe1xuICAgICAgZGF0YTogcm93ID8gcm93LmdldERhdGEoKSA6IG51bGwsXG4gICAgICBpc1NlbGVjdGVkOiByb3cgPyByb3cuZ2V0SXNTZWxlY3RlZCgpIDogbnVsbCxcbiAgICAgIHNvdXJjZTogdGhpcy5zb3VyY2UsXG4gICAgICBzZWxlY3RlZDogdGhpcy5ncmlkLmRhdGFTZXQuZ2V0U2VsZWN0ZWRSb3dzRGF0YSgpLFxuICAgIH0pO1xuICB9ICBcbiAgXG4gIGVtaXRVc2VyUm93Q2xpY2tlZChyb3c6IFJvdyk6IHZvaWQge1xuICAgIHRoaXMucm93Q2xpY2tlZC5lbWl0KHtcbiAgICAgIGRhdGE6IHJvdyA/IHJvdy5nZXREYXRhKCkgOiBudWxsLFxuICAgICAgc291cmNlOiB0aGlzLnNvdXJjZSxcbiAgICB9KTtcbiAgfVxufVxuIiwiPHRhYmxlIFtpZF09XCJ0YWJsZUlkXCIgW25nQ2xhc3NdPVwidGFibGVDbGFzc1wiPlxuXG4gIDx0aGVhZCBuZzItc3QtdGhlYWQgKm5nSWY9XCIhaXNIaWRlSGVhZGVyIHx8ICFpc0hpZGVTdWJIZWFkZXJcIlxuICAgICAgICAgICAgICAgICAgICAgIFtncmlkXT1cImdyaWRcIlxuICAgICAgICAgICAgICAgICAgICAgIFtzb3VyY2VdPVwic291cmNlXCJcbiAgICAgICAgICAgICAgICAgICAgICBbY3JlYXRlQ29uZmlybV09XCJjcmVhdGVDb25maXJtXCJcbiAgICAgICAgICAgICAgICAgICAgICAoY3JlYXRlKT1cImNyZWF0ZS5lbWl0KCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICAgIChzZWxlY3RBbGxSb3dzKT1cIm9uU2VsZWN0QWxsUm93cygpXCI+XG4gIDwvdGhlYWQ+XG5cbiAgPHRib2R5IG5nMi1zdC10Ym9keSBbZ3JpZF09XCJncmlkXCJcbiAgICAgICAgICAgICAgICAgICAgICBbc291cmNlXT1cInNvdXJjZVwiXG4gICAgICAgICAgICAgICAgICAgICAgW2RlbGV0ZUNvbmZpcm1dPVwiZGVsZXRlQ29uZmlybVwiXG4gICAgICAgICAgICAgICAgICAgICAgW2VkaXRDb25maXJtXT1cImVkaXRDb25maXJtXCJcbiAgICAgICAgICAgICAgICAgICAgICBbcm93Q2xhc3NGdW5jdGlvbl09XCJyb3dDbGFzc0Z1bmN0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAoZWRpdCk9XCJlZGl0LmVtaXQoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgICAgKGVkaXRDYW5jZWwpPVwiZWRpdENhbmNlbC5lbWl0KCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICAgIChkZWxldGUpPVwiZGVsZXRlLmVtaXQoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgICAgKGN1c3RvbSk9XCJjdXN0b20uZW1pdCgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAodXNlckNsaWNrZWRSb3cpPVwiZW1pdFVzZXJSb3dDbGlja2VkKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICAgIChtdWx0aXBsZVNlbGVjdFJvdyk9XCJtdWx0aXBsZVNlbGVjdFJvdygkZXZlbnQpXCI+XG4gIDwvdGJvZHk+XG5cbjwvdGFibGU+XG5cbjxuZzItc21hcnQtdGFibGUtcGFnZXIgKm5nSWY9XCJpc1BhZ2VyRGlzcGxheVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbc291cmNlXT1cInNvdXJjZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbcGVyUGFnZVNlbGVjdF09XCJwZXJQYWdlU2VsZWN0XCI+XG48L25nMi1zbWFydC10YWJsZS1wYWdlcj5cbiJdfQ==