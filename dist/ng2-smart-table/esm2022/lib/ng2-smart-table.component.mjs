import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Grid } from './lib/grid';
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
        this.tableClass = '';
        this.tableId = '';
        this.perPageSelect = [];
        this.isHideHeader = false;
        this.isHideSubHeader = false;
        this.isPagerDisplay = false;
        this.rowClassFunction = () => '';
        this.defaultSettings = {
            mode: 'inline', // inline|external|click-to-edit
            selectMode: 'single', // single|multi
            selectedRowIndex: -1,
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
            columns: [],
            pager: false,
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
        this.isPagerDisplay = this.grid.getSetting('pager.display', false);
        this.perPageSelect = this.grid.getSetting('pager.perPageSelect');
        this.rowClassFunction = this.grid.getSetting('rowClassFunction', () => '');
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
    emitUserRowClicked(row) {
        this.rowClicked.emit({
            data: row ? row.getData() : null,
            source: this.source,
        });
    }
    initGrid() {
        this.source = this.prepareSource();
        this.grid = new Grid(this.source, this.prepareSettings());
    }
    prepareSource() {
        if (this.source instanceof LocalDataSource) {
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
            isSelected: row ? row.getIsSelected() : false,
            source: this.source,
            selected: this.grid.dataSet.getSelectedRowsData(),
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: Ng2SmartTableComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.3.12", type: Ng2SmartTableComponent, selector: "ng2-smart-table", inputs: { source: "source", settings: "settings" }, outputs: { multiRowSelect: "multiRowSelect", rowClicked: "rowClicked", delete: "delete", edit: "edit", editCancel: "editCancel", create: "create", custom: "custom", deleteConfirm: "deleteConfirm", editConfirm: "editConfirm", createConfirm: "createConfirm", rowHover: "rowHover" }, usesOnChanges: true, ngImport: i0, template: "<table [id]=\"tableId\" [ngClass]=\"tableClass\">\n\n  @if (!isHideHeader || !isHideSubHeader) {\n    <thead ng2-st-thead\n      [grid]=\"grid\"\n      [source]=\"source\"\n      [createConfirm]=\"createConfirm\"\n      (create)=\"create.emit($event)\"\n      (selectAllRows)=\"onSelectAllRows()\">\n    </thead>\n  }\n\n  <tbody ng2-st-tbody [grid]=\"grid\"\n    [source]=\"source\"\n    [deleteConfirm]=\"deleteConfirm\"\n    [editConfirm]=\"editConfirm\"\n    [rowClassFunction]=\"rowClassFunction\"\n    (edit)=\"edit.emit($event)\"\n    (editCancel)=\"editCancel.emit($event)\"\n    (delete)=\"delete.emit($event)\"\n    (custom)=\"custom.emit($event)\"\n    (userClickedRow)=\"emitUserRowClicked($event)\"\n    (multipleSelectRow)=\"multipleSelectRow($event)\">\n  </tbody>\n\n</table>\n\n@if (isPagerDisplay) {\n  <ng2-smart-table-pager\n    [source]=\"source\"\n    [perPageSelect]=\"perPageSelect\">\n  </ng2-smart-table-pager>\n}\n", styles: [":host{font-size:1rem}:host ::ng-deep *{box-sizing:border-box}:host ::ng-deep button,:host ::ng-deep input,:host ::ng-deep optgroup,:host ::ng-deep select,:host ::ng-deep textarea{color:inherit;font:inherit;margin:0}:host ::ng-deep table{line-height:1.5em;border-collapse:collapse;border-spacing:0;display:table;width:100%;max-width:100%;word-break:normal;word-break:keep-all;overflow:auto}:host ::ng-deep table tr th{font-weight:700}:host ::ng-deep table tr section{font-size:.75em;font-weight:700}:host ::ng-deep table tr td,:host ::ng-deep table tr th{font-size:.875em;margin:0;padding:.5em 1em}:host ::ng-deep a{color:#1e6bb8;text-decoration:none}:host ::ng-deep a:hover{text-decoration:underline}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "component", type: i2.PagerComponent, selector: "ng2-smart-table-pager", inputs: ["source", "perPageSelect"], outputs: ["changePage"] }, { kind: "component", type: i3.Ng2SmartTableTbodyComponent, selector: "[ng2-st-tbody]", inputs: ["grid", "source", "deleteConfirm", "editConfirm", "rowClassFunction"], outputs: ["save", "cancel", "edit", "editCancel", "delete", "custom", "edited", "userSelectRow", "userClickedRow", "editRowSelect", "multipleSelectRow"] }, { kind: "component", type: i4.Ng2SmartTableTheadComponent, selector: "[ng2-st-thead]", inputs: ["grid", "source", "createConfirm"], outputs: ["sort", "selectAllRows", "create", "filter"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: Ng2SmartTableComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ng2-smart-table', template: "<table [id]=\"tableId\" [ngClass]=\"tableClass\">\n\n  @if (!isHideHeader || !isHideSubHeader) {\n    <thead ng2-st-thead\n      [grid]=\"grid\"\n      [source]=\"source\"\n      [createConfirm]=\"createConfirm\"\n      (create)=\"create.emit($event)\"\n      (selectAllRows)=\"onSelectAllRows()\">\n    </thead>\n  }\n\n  <tbody ng2-st-tbody [grid]=\"grid\"\n    [source]=\"source\"\n    [deleteConfirm]=\"deleteConfirm\"\n    [editConfirm]=\"editConfirm\"\n    [rowClassFunction]=\"rowClassFunction\"\n    (edit)=\"edit.emit($event)\"\n    (editCancel)=\"editCancel.emit($event)\"\n    (delete)=\"delete.emit($event)\"\n    (custom)=\"custom.emit($event)\"\n    (userClickedRow)=\"emitUserRowClicked($event)\"\n    (multipleSelectRow)=\"multipleSelectRow($event)\">\n  </tbody>\n\n</table>\n\n@if (isPagerDisplay) {\n  <ng2-smart-table-pager\n    [source]=\"source\"\n    [perPageSelect]=\"perPageSelect\">\n  </ng2-smart-table-pager>\n}\n", styles: [":host{font-size:1rem}:host ::ng-deep *{box-sizing:border-box}:host ::ng-deep button,:host ::ng-deep input,:host ::ng-deep optgroup,:host ::ng-deep select,:host ::ng-deep textarea{color:inherit;font:inherit;margin:0}:host ::ng-deep table{line-height:1.5em;border-collapse:collapse;border-spacing:0;display:table;width:100%;max-width:100%;word-break:normal;word-break:keep-all;overflow:auto}:host ::ng-deep table tr th{font-weight:700}:host ::ng-deep table tr section{font-size:.75em;font-weight:700}:host ::ng-deep table tr td,:host ::ng-deep table tr th{font-size:.875em;margin:0;padding:.5em 1em}:host ::ng-deep a{color:#1e6bb8;text-decoration:none}:host ::ng-deep a:hover{text-decoration:underline}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLXNtYXJ0LXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nMi1zbWFydC10YWJsZS9zcmMvbGliL25nMi1zbWFydC10YWJsZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZzItc21hcnQtdGFibGUvc3JjL2xpYi9uZzItc21hcnQtdGFibGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFnQixZQUFZLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFFaEcsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLFlBQVksQ0FBQztBQUVsQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQzs7Ozs7O0FBUTVFLE1BQU0sT0FBTyxzQkFBc0I7SUFMbkM7UUFTWSxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUE0QixDQUFDO1FBQzlELGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBNkIsQ0FBQztRQUMzRCxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNqQyxTQUFJLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUMvQixlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNyQyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNqQyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQXlCLENBQUM7UUFDbkQsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBZ0MsQ0FBQztRQUNqRSxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUE4QixDQUFDO1FBQzdELGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQTJCLENBQUM7UUFDNUQsYUFBUSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBRWhFLGVB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QUFVO3NCQUFuQixNQUFNO2dCQUNHLE1BQU07c0JBQWYsTUFBTTtnQkFDRyxNQUFNO3NCQUFmLE1BQU07Z0JBQ0csYUFBYTtzQkFBdEIsTUFBTTtnQkFDRyxXQUFXO3NCQUFwQixNQUFNO2dCQUNHLGFBQWE7c0JBQXRCLE1BQU07Z0JBQ0csUUFBUTtzQkFBakIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgU2ltcGxlQ2hhbmdlLCBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBHcmlkIH0gZnJvbSAnLi9saWIvZ3JpZCc7XG5pbXBvcnQgeyBSb3cgfSBmcm9tICcuL2xpYi9kYXRhLXNldC9yb3cnO1xuaW1wb3J0IHsgZGVlcEV4dGVuZCB9IGZyb20gJy4vbGliL2hlbHBlcnMnO1xuaW1wb3J0IHsgTG9jYWxEYXRhU291cmNlIH0gZnJvbSAnLi9saWIvZGF0YS1zb3VyY2UvbG9jYWwvbG9jYWwuZGF0YS1zb3VyY2UnO1xuaW1wb3J0IHsgU21hcnRUYWJsZUNvbmZpcm1EZWxldGVFdmVudCwgU21hcnRUYWJsZUNvbmZpcm1FZGl0RXZlbnQsIFNtYXJ0VGFibGVDcmVhdGVDb25maXJtLCBTbWFydFRhYmxlQ3VzdG9tRXZlbnQsIFNtYXJ0VGFibGVSb3dDbGlja2VkRXZlbnQsIFNtYXJ0VGFibGVSb3dTZWxlY3RFdmVudCwgU21hcnRUYWJsZVNldHRpbmdzIH0gZnJvbSAnLi9saWIvaW50ZXJmYWNlcy9zbWFydC10YWJsZS5tb2RlbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZzItc21hcnQtdGFibGUnLFxuICBzdHlsZVVybHM6IFsnLi9uZzItc21hcnQtdGFibGUuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL25nMi1zbWFydC10YWJsZS5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIE5nMlNtYXJ0VGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBzb3VyY2UhOiBMb2NhbERhdGFTb3VyY2U7XG4gIEBJbnB1dCgpIHNldHRpbmdzITogU21hcnRUYWJsZVNldHRpbmdzO1xuXG4gIEBPdXRwdXQoKSBtdWx0aVJvd1NlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8U21hcnRUYWJsZVJvd1NlbGVjdEV2ZW50PigpO1xuICBAT3V0cHV0KCkgcm93Q2xpY2tlZCA9IG5ldyBFdmVudEVtaXR0ZXI8U21hcnRUYWJsZVJvd0NsaWNrZWRFdmVudD4oKTtcbiAgQE91dHB1dCgpIGRlbGV0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgZWRpdCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgZWRpdENhbmNlbCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgY3JlYXRlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBjdXN0b20gPSBuZXcgRXZlbnRFbWl0dGVyPFNtYXJ0VGFibGVDdXN0b21FdmVudD4oKTtcbiAgQE91dHB1dCgpIGRlbGV0ZUNvbmZpcm0gPSBuZXcgRXZlbnRFbWl0dGVyPFNtYXJ0VGFibGVDb25maXJtRGVsZXRlRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSBlZGl0Q29uZmlybSA9IG5ldyBFdmVudEVtaXR0ZXI8U21hcnRUYWJsZUNvbmZpcm1FZGl0RXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSBjcmVhdGVDb25maXJtID0gbmV3IEV2ZW50RW1pdHRlcjxTbWFydFRhYmxlQ3JlYXRlQ29uZmlybT4oKTtcbiAgQE91dHB1dCgpIHJvd0hvdmVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIHRhYmxlQ2xhc3M6IHN0cmluZyA9ICcnO1xuICB0YWJsZUlkOiBzdHJpbmcgPSAnJztcbiAgcGVyUGFnZVNlbGVjdDogbnVtYmVyW10gPSBbXTtcbiAgaXNIaWRlSGVhZGVyID0gZmFsc2U7XG4gIGlzSGlkZVN1YkhlYWRlciA9IGZhbHNlO1xuICBpc1BhZ2VyRGlzcGxheSA9IGZhbHNlO1xuICByb3dDbGFzc0Z1bmN0aW9uOiBGdW5jdGlvbiA9ICgpPT4nJztcblxuICBncmlkITogR3JpZDtcbiAgZGVmYXVsdFNldHRpbmdzOiBTbWFydFRhYmxlU2V0dGluZ3MgPSB7XG4gICAgbW9kZTogJ2lubGluZScsIC8vIGlubGluZXxleHRlcm5hbHxjbGljay10by1lZGl0XG4gICAgc2VsZWN0TW9kZTogJ3NpbmdsZScsIC8vIHNpbmdsZXxtdWx0aVxuICAgIHNlbGVjdGVkUm93SW5kZXg6IC0xLFxuICAgIHN3aXRjaFBhZ2VUb1NlbGVjdGVkUm93UGFnZTogZmFsc2UsXG4gICAgaGlkZUhlYWRlcjogZmFsc2UsXG4gICAgaGlkZVN1YkhlYWRlcjogZmFsc2UsXG4gICAgYWN0aW9uczoge1xuICAgICAgY29sdW1uVGl0bGU6ICdBY3Rpb25zJyxcbiAgICAgIGFkZDogdHJ1ZSxcbiAgICAgIGVkaXQ6IHRydWUsXG4gICAgICBkZWxldGU6IHRydWUsXG4gICAgICBjdXN0b206IFtdLFxuICAgICAgcG9zaXRpb246ICdsZWZ0JywgLy8gbGVmdHxyaWdodFxuICAgIH0sXG4gICAgZmlsdGVyOiB7XG4gICAgICBpbnB1dENsYXNzOiAnJyxcbiAgICB9LFxuICAgIGVkaXQ6IHtcbiAgICAgIGlucHV0Q2xhc3M6ICcnLFxuICAgICAgZWRpdEJ1dHRvbkNvbnRlbnQ6ICdFZGl0JyxcbiAgICAgIHNhdmVCdXR0b25Db250ZW50OiAnVXBkYXRlJyxcbiAgICAgIGNhbmNlbEJ1dHRvbkNvbnRlbnQ6ICdDYW5jZWwnLFxuICAgICAgY29uZmlybVNhdmU6IGZhbHNlLFxuICAgIH0sXG4gICAgYWRkOiB7XG4gICAgICBpbnB1dENsYXNzOiAnJyxcbiAgICAgIGFkZEJ1dHRvbkNvbnRlbnQ6ICdBZGQgTmV3JyxcbiAgICAgIGNyZWF0ZUJ1dHRvbkNvbnRlbnQ6ICdDcmVhdGUnLFxuICAgICAgY2FuY2VsQnV0dG9uQ29udGVudDogJ0NhbmNlbCcsXG4gICAgICBjb25maXJtQ3JlYXRlOiBmYWxzZSxcbiAgICB9LFxuICAgIGRlbGV0ZToge1xuICAgICAgZGVsZXRlQnV0dG9uQ29udGVudDogJ0RlbGV0ZScsXG4gICAgICBjb25maXJtRGVsZXRlOiBmYWxzZSxcbiAgICB9LFxuICAgIGF0dHI6IHtcbiAgICAgIGlkOiAnJyxcbiAgICAgIGNsYXNzOiAnJyxcbiAgICB9LFxuICAgIG5vRGF0YU1lc3NhZ2U6ICdObyBkYXRhIGZvdW5kJyxcbiAgICBjb2x1bW5zOiBbXSxcbiAgICBwYWdlcjogZmFsc2UsXG4gICAgcm93Q2xhc3NGdW5jdGlvbjogKCkgPT4gJycsXG4gIH07XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogeyBbcHJvcGVydHlOYW1lOiBzdHJpbmddOiBTaW1wbGVDaGFuZ2UgfSkge1xuICAgIGlmICh0aGlzLmdyaWQpIHtcbiAgICAgIGlmIChjaGFuZ2VzWydzZXR0aW5ncyddKSB7XG4gICAgICAgIHRoaXMuZ3JpZC5zZXRTZXR0aW5ncyh0aGlzLnByZXBhcmVTZXR0aW5ncygpKTtcbiAgICAgIH1cbiAgICAgIGlmIChjaGFuZ2VzWydzb3VyY2UnXSkge1xuICAgICAgICB0aGlzLnNvdXJjZSA9IHRoaXMucHJlcGFyZVNvdXJjZSgpO1xuICAgICAgICB0aGlzLmdyaWQuc2V0U291cmNlKHRoaXMuc291cmNlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbml0R3JpZCgpO1xuICAgIH1cbiAgICB0aGlzLnRhYmxlSWQgPSB0aGlzLmdyaWQuZ2V0U2V0dGluZygnYXR0ci5pZCcpO1xuICAgIHRoaXMudGFibGVDbGFzcyA9IHRoaXMuZ3JpZC5nZXRTZXR0aW5nKCdhdHRyLmNsYXNzJyk7XG4gICAgdGhpcy5pc0hpZGVIZWFkZXIgPSB0aGlzLmdyaWQuZ2V0U2V0dGluZygnaGlkZUhlYWRlcicpO1xuICAgIHRoaXMuaXNIaWRlU3ViSGVhZGVyID0gdGhpcy5ncmlkLmdldFNldHRpbmcoJ2hpZGVTdWJIZWFkZXInKTtcbiAgICB0aGlzLmlzUGFnZXJEaXNwbGF5ID0gdGhpcy5ncmlkLmdldFNldHRpbmcoJ3BhZ2VyLmRpc3BsYXknLCBmYWxzZSk7XG4gICAgdGhpcy5wZXJQYWdlU2VsZWN0ID0gdGhpcy5ncmlkLmdldFNldHRpbmcoJ3BhZ2VyLnBlclBhZ2VTZWxlY3QnKTtcbiAgICB0aGlzLnJvd0NsYXNzRnVuY3Rpb24gPSB0aGlzLmdyaWQuZ2V0U2V0dGluZygncm93Q2xhc3NGdW5jdGlvbicsICgpID0+ICcnKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBtdWx0aXBsZVNlbGVjdFJvdyhyb3c6IFJvdyk6IHZvaWQge1xuICAgIHRoaXMuZ3JpZC5tdWx0aXBsZVNlbGVjdFJvdyhyb3cpO1xuICAgIHRoaXMuZW1pdFVzZXJTZWxlY3RSb3cocm93KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvblNlbGVjdEFsbFJvd3MoKTogdm9pZCB7XG4gICAgdGhpcy5ncmlkLmRhdGFTZXQuaXNBbGxTZWxlY3RlZDtcbiAgICB0aGlzLmdyaWQuc2VsZWN0QWxsUm93cyghdGhpcy5ncmlkLmRhdGFTZXQuaXNBbGxTZWxlY3RlZCk7XG4gICAgdGhpcy5lbWl0VXNlclNlbGVjdFJvdyhudWxsKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvblNlbGVjdFJvdyhyb3c6IFJvdywgc3RhdGU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmdyaWQuc2VsZWN0Um93KHJvdywgc3RhdGUpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGVtaXRVc2VyUm93Q2xpY2tlZChyb3c6IFJvdyk6IHZvaWQge1xuICAgIHRoaXMucm93Q2xpY2tlZC5lbWl0KHtcbiAgICAgIGRhdGE6IHJvdyA/IHJvdy5nZXREYXRhKCkgOiBudWxsLFxuICAgICAgc291cmNlOiB0aGlzLnNvdXJjZSxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdEdyaWQoKTogdm9pZCB7XG4gICAgdGhpcy5zb3VyY2UgPSB0aGlzLnByZXBhcmVTb3VyY2UoKTtcbiAgICB0aGlzLmdyaWQgPSBuZXcgR3JpZCh0aGlzLnNvdXJjZSwgdGhpcy5wcmVwYXJlU2V0dGluZ3MoKSk7XG4gIH1cblxuICBwcml2YXRlIHByZXBhcmVTb3VyY2UoKTogTG9jYWxEYXRhU291cmNlIHtcbiAgICBpZiAodGhpcy5zb3VyY2UgaW5zdGFuY2VvZiBMb2NhbERhdGFTb3VyY2UpIHtcbiAgICAgIHJldHVybiB0aGlzLnNvdXJjZTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBMb2NhbERhdGFTb3VyY2UoKTtcbiAgfVxuXG4gIHByaXZhdGUgcHJlcGFyZVNldHRpbmdzKCk6IFNtYXJ0VGFibGVTZXR0aW5ncyB7XG4gICAgcmV0dXJuIGRlZXBFeHRlbmQoe30sIHRoaXMuZGVmYXVsdFNldHRpbmdzLCB0aGlzLnNldHRpbmdzKTtcbiAgfVxuXG4gIHByaXZhdGUgZW1pdFVzZXJTZWxlY3RSb3cocm93OiBSb3cgfCBudWxsKTogdm9pZCB7XG4gICAgdGhpcy5tdWx0aVJvd1NlbGVjdC5lbWl0KHtcbiAgICAgIGRhdGE6IHJvdyA/IHJvdy5nZXREYXRhKCkgOiBudWxsLFxuICAgICAgaXNTZWxlY3RlZDogcm93ID8gcm93LmdldElzU2VsZWN0ZWQoKSA6IGZhbHNlLFxuICAgICAgc291cmNlOiB0aGlzLnNvdXJjZSxcbiAgICAgIHNlbGVjdGVkOiB0aGlzLmdyaWQuZGF0YVNldC5nZXRTZWxlY3RlZFJvd3NEYXRhKCksXG4gICAgfSk7XG4gIH0gIFxufVxuIiwiPHRhYmxlIFtpZF09XCJ0YWJsZUlkXCIgW25nQ2xhc3NdPVwidGFibGVDbGFzc1wiPlxuXG4gIEBpZiAoIWlzSGlkZUhlYWRlciB8fCAhaXNIaWRlU3ViSGVhZGVyKSB7XG4gICAgPHRoZWFkIG5nMi1zdC10aGVhZFxuICAgICAgW2dyaWRdPVwiZ3JpZFwiXG4gICAgICBbc291cmNlXT1cInNvdXJjZVwiXG4gICAgICBbY3JlYXRlQ29uZmlybV09XCJjcmVhdGVDb25maXJtXCJcbiAgICAgIChjcmVhdGUpPVwiY3JlYXRlLmVtaXQoJGV2ZW50KVwiXG4gICAgICAoc2VsZWN0QWxsUm93cyk9XCJvblNlbGVjdEFsbFJvd3MoKVwiPlxuICAgIDwvdGhlYWQ+XG4gIH1cblxuICA8dGJvZHkgbmcyLXN0LXRib2R5IFtncmlkXT1cImdyaWRcIlxuICAgIFtzb3VyY2VdPVwic291cmNlXCJcbiAgICBbZGVsZXRlQ29uZmlybV09XCJkZWxldGVDb25maXJtXCJcbiAgICBbZWRpdENvbmZpcm1dPVwiZWRpdENvbmZpcm1cIlxuICAgIFtyb3dDbGFzc0Z1bmN0aW9uXT1cInJvd0NsYXNzRnVuY3Rpb25cIlxuICAgIChlZGl0KT1cImVkaXQuZW1pdCgkZXZlbnQpXCJcbiAgICAoZWRpdENhbmNlbCk9XCJlZGl0Q2FuY2VsLmVtaXQoJGV2ZW50KVwiXG4gICAgKGRlbGV0ZSk9XCJkZWxldGUuZW1pdCgkZXZlbnQpXCJcbiAgICAoY3VzdG9tKT1cImN1c3RvbS5lbWl0KCRldmVudClcIlxuICAgICh1c2VyQ2xpY2tlZFJvdyk9XCJlbWl0VXNlclJvd0NsaWNrZWQoJGV2ZW50KVwiXG4gICAgKG11bHRpcGxlU2VsZWN0Um93KT1cIm11bHRpcGxlU2VsZWN0Um93KCRldmVudClcIj5cbiAgPC90Ym9keT5cblxuPC90YWJsZT5cblxuQGlmIChpc1BhZ2VyRGlzcGxheSkge1xuICA8bmcyLXNtYXJ0LXRhYmxlLXBhZ2VyXG4gICAgW3NvdXJjZV09XCJzb3VyY2VcIlxuICAgIFtwZXJQYWdlU2VsZWN0XT1cInBlclBhZ2VTZWxlY3RcIj5cbiAgPC9uZzItc21hcnQtdGFibGUtcGFnZXI+XG59XG4iXX0=