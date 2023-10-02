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
        this.listScrollEnd = new EventEmitter();
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
        this.currentScrollTop = 0;
        this.defaultSettings = {
            mode: 'inline',
            selectMode: 'single',
            selectedRowIndex: -1,
            switchPageToSelectedRowPage: false,
            bodyHeight: '85vh',
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
    onScroll(event) {
        const { scrollHeight, scrollTop, clientHeight } = event.target;
        const isListEnd = (clientHeight + Math.round(scrollTop)) >= scrollHeight;
        if (isListEnd && this.currentScrollTop < scrollTop) {
            this.listScrollEnd.emit(true);
        }
        this.currentScrollTop = scrollTop;
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
}
Ng2SmartTableComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: Ng2SmartTableComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
Ng2SmartTableComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: Ng2SmartTableComponent, selector: "ng2-smart-table", inputs: { source: "source", settings: "settings" }, outputs: { multiRowSelect: "multiRowSelect", rowClicked: "rowClicked", listScrollEnd: "listScrollEnd", delete: "delete", edit: "edit", editCancel: "editCancel", create: "create", custom: "custom", deleteConfirm: "deleteConfirm", editConfirm: "editConfirm", createConfirm: "createConfirm", rowHover: "rowHover" }, usesOnChanges: true, ngImport: i0, template: "<table [id]=\"tableId\" [ngClass]=\"tableClass\">\n\n  <thead ng2-st-thead *ngIf=\"!isHideHeader || !isHideSubHeader\"\n                      [grid]=\"grid\"\n                      [source]=\"source\"\n                      [createConfirm]=\"createConfirm\"\n                      (create)=\"create.emit($event)\"\n                      (selectAllRows)=\"onSelectAllRows()\">\n  </thead>\n\n  <tbody ng2-st-tbody [ngStyle]=\"{'max-height': this.grid.getSetting('bodyHeight', '85vh')}\"\n                      [grid]=\"grid\"\n                      [source]=\"source\"\n                      [deleteConfirm]=\"deleteConfirm\"\n                      [editConfirm]=\"editConfirm\"\n                      [rowClassFunction]=\"rowClassFunction\"\n                      (edit)=\"edit.emit($event)\"\n                      (editCancel)=\"editCancel.emit($event)\"\n                      (delete)=\"delete.emit($event)\"\n                      (custom)=\"custom.emit($event)\"\n                      (scroll)=\"onScroll($any($event))\"\n                      (userClickedRow)=\"emitUserRowClicked($event)\"\n                      (multipleSelectRow)=\"multipleSelectRow($event)\">\n  </tbody>\n\n</table>\n\n<ng2-smart-table-pager *ngIf=\"isPagerDisplay\"\n                        [source]=\"source\"\n                        [perPageSelect]=\"perPageSelect\">\n</ng2-smart-table-pager>\n", styles: [":host{font-size:1rem}:host ::ng-deep *{box-sizing:border-box}:host ::ng-deep button,:host ::ng-deep input,:host ::ng-deep optgroup,:host ::ng-deep select,:host ::ng-deep textarea{color:inherit;font:inherit;margin:0}:host ::ng-deep table{line-height:1.5em;border-collapse:collapse;border-spacing:0;display:table;width:100%;max-width:100%;word-break:normal;word-break:keep-all}:host ::ng-deep table tbody{display:block;max-height:85vh;overflow-y:scroll}:host ::ng-deep table tr{display:table;width:100%;table-layout:fixed}:host ::ng-deep table tr th{font-weight:700}:host ::ng-deep table tr section{font-size:.75em;font-weight:700}:host ::ng-deep table tr td,:host ::ng-deep table tr th{font-size:.875em;margin:0;padding:.5em 1em}:host ::ng-deep a{color:#1e6bb8;text-decoration:none}:host ::ng-deep a:hover{text-decoration:underline}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "component", type: i2.PagerComponent, selector: "ng2-smart-table-pager", inputs: ["source", "perPageSelect"], outputs: ["changePage"] }, { kind: "component", type: i3.Ng2SmartTableTbodyComponent, selector: "[ng2-st-tbody]", inputs: ["grid", "source", "deleteConfirm", "editConfirm", "rowClassFunction"], outputs: ["save", "cancel", "edit", "editCancel", "delete", "custom", "edited", "userSelectRow", "userClickedRow", "editRowSelect", "multipleSelectRow"] }, { kind: "component", type: i4.Ng2SmartTableTheadComponent, selector: "[ng2-st-thead]", inputs: ["grid", "source", "createConfirm"], outputs: ["sort", "selectAllRows", "create", "filter"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: Ng2SmartTableComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ng2-smart-table', template: "<table [id]=\"tableId\" [ngClass]=\"tableClass\">\n\n  <thead ng2-st-thead *ngIf=\"!isHideHeader || !isHideSubHeader\"\n                      [grid]=\"grid\"\n                      [source]=\"source\"\n                      [createConfirm]=\"createConfirm\"\n                      (create)=\"create.emit($event)\"\n                      (selectAllRows)=\"onSelectAllRows()\">\n  </thead>\n\n  <tbody ng2-st-tbody [ngStyle]=\"{'max-height': this.grid.getSetting('bodyHeight', '85vh')}\"\n                      [grid]=\"grid\"\n                      [source]=\"source\"\n                      [deleteConfirm]=\"deleteConfirm\"\n                      [editConfirm]=\"editConfirm\"\n                      [rowClassFunction]=\"rowClassFunction\"\n                      (edit)=\"edit.emit($event)\"\n                      (editCancel)=\"editCancel.emit($event)\"\n                      (delete)=\"delete.emit($event)\"\n                      (custom)=\"custom.emit($event)\"\n                      (scroll)=\"onScroll($any($event))\"\n                      (userClickedRow)=\"emitUserRowClicked($event)\"\n                      (multipleSelectRow)=\"multipleSelectRow($event)\">\n  </tbody>\n\n</table>\n\n<ng2-smart-table-pager *ngIf=\"isPagerDisplay\"\n                        [source]=\"source\"\n                        [perPageSelect]=\"perPageSelect\">\n</ng2-smart-table-pager>\n", styles: [":host{font-size:1rem}:host ::ng-deep *{box-sizing:border-box}:host ::ng-deep button,:host ::ng-deep input,:host ::ng-deep optgroup,:host ::ng-deep select,:host ::ng-deep textarea{color:inherit;font:inherit;margin:0}:host ::ng-deep table{line-height:1.5em;border-collapse:collapse;border-spacing:0;display:table;width:100%;max-width:100%;word-break:normal;word-break:keep-all}:host ::ng-deep table tbody{display:block;max-height:85vh;overflow-y:scroll}:host ::ng-deep table tr{display:table;width:100%;table-layout:fixed}:host ::ng-deep table tr th{font-weight:700}:host ::ng-deep table tr section{font-size:.75em;font-weight:700}:host ::ng-deep table tr td,:host ::ng-deep table tr th{font-size:.875em;margin:0;padding:.5em 1em}:host ::ng-deep a{color:#1e6bb8;text-decoration:none}:host ::ng-deep a:hover{text-decoration:underline}\n"] }]
        }], propDecorators: { source: [{
                type: Input
            }], settings: [{
                type: Input
            }], multiRowSelect: [{
                type: Output
            }], rowClicked: [{
                type: Output
            }], listScrollEnd: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLXNtYXJ0LXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nMi1zbWFydC10YWJsZS9zcmMvbGliL25nMi1zbWFydC10YWJsZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZzItc21hcnQtdGFibGUvc3JjL2xpYi9uZzItc21hcnQtdGFibGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFnQixZQUFZLEVBQW9DLE1BQU0sZUFBZSxDQUFDO0FBRXZILE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFFbEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkNBQTJDLENBQUM7Ozs7OztBQVE1RSxNQUFNLE9BQU8sc0JBQXNCO0lBTG5DO1FBU1ksbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBNEIsQ0FBQztRQUM5RCxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQTZCLENBQUM7UUFDM0Qsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBQzVDLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ2pDLFNBQUksR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQy9CLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3JDLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ2pDLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBeUIsQ0FBQztRQUNuRCxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFnQyxDQUFDO1FBQ2pFLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQThCLENBQUM7UUFDN0Qsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBMkIsQ0FBQztRQUM1RCxhQUFRLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFFaEUsZUFBVSxHQUFXLEVBQUUsQ0FBQztRQUN4QixZQUFPLEdBQVcsRUFBRSxDQUFDO1FBQ3JCLGtCQUFhLEdBQWEsRUFBRSxDQUFDO1FBQzdCLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLG9CQUFlLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLHFCQUFnQixHQUFhLEdBQUUsRUFBRSxDQUFBLEVBQUUsQ0FBQztRQUM1QixxQkFBZ0IsR0FBRyxDQUFDLENBQUM7UUFHN0Isb0JBQWUsR0FBdUI7WUFDcEMsSUFBSSxFQUFFLFFBQVE7WUFDZCxVQUFVLEVBQUUsUUFBUTtZQUNwQixnQkFBZ0IsRUFBRSxDQUFDLENBQUM7WUFDcEIsMkJBQTJCLEVBQUUsS0FBSztZQUNsQyxVQUFVLEVBQUUsTUFBTTtZQUNsQixVQUFVLEVBQUUsS0FBSztZQUNqQixhQUFhLEVBQUUsS0FBSztZQUNwQixPQUFPLEVBQUU7Z0JBQ1AsV0FBVyxFQUFFLFNBQVM7Z0JBQ3RCLEdBQUcsRUFBRSxJQUFJO2dCQUNULElBQUksRUFBRSxJQUFJO2dCQUNWLE1BQU0sRUFBRSxJQUFJO2dCQUNaLE1BQU0sRUFBRSxFQUFFO2dCQUNWLFFBQVEsRUFBRSxNQUFNLEVBQUUsYUFBYTthQUNoQztZQUNELE1BQU0sRUFBRTtnQkFDTixVQUFVLEVBQUUsRUFBRTthQUNmO1lBQ0QsSUFBSSxFQUFFO2dCQUNKLFVBQVUsRUFBRSxFQUFFO2dCQUNkLGlCQUFpQixFQUFFLE1BQU07Z0JBQ3pCLGlCQUFpQixFQUFFLFFBQVE7Z0JBQzNCLG1CQUFtQixFQUFFLFFBQVE7Z0JBQzdCLFdBQVcsRUFBRSxLQUFLO2FBQ25CO1lBQ0QsR0FBRyxFQUFFO2dCQUNILFVBQVUsRUFBRSxFQUFFO2dCQUNkLGdCQUFnQixFQUFFLFNBQVM7Z0JBQzNCLG1CQUFtQixFQUFFLFFBQVE7Z0JBQzdCLG1CQUFtQixFQUFFLFFBQVE7Z0JBQzdCLGFBQWEsRUFBRSxLQUFLO2FBQ3JCO1lBQ0QsTUFBTSxFQUFFO2dCQUNOLG1CQUFtQixFQUFFLFFBQVE7Z0JBQzdCLGFBQWEsRUFBRSxLQUFLO2FBQ3JCO1lBQ0QsSUFBSSxFQUFFO2dCQUNKLEVBQUUsRUFBRSxFQUFFO2dCQUNOLEtBQUssRUFBRSxFQUFFO2FBQ1Y7WUFDRCxhQUFhLEVBQUUsZUFBZTtZQUM5QixPQUFPLEVBQUUsRUFBRTtZQUNYLEtBQUssRUFBRSxLQUFLO1lBQ1osZ0JBQWdCLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRTtTQUMzQixDQUFDO0tBOEVIO0lBNUVDLFdBQVcsQ0FBQyxPQUFpRDtRQUMzRCxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDYixJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRTtnQkFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUM7YUFDL0M7WUFDRCxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQ25DLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNsQztTQUNGO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDakI7UUFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDN0UsQ0FBQztJQUVTLGlCQUFpQixDQUFDLEdBQVE7UUFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVTLGVBQWU7UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFUyxXQUFXLENBQUMsR0FBUSxFQUFFLEtBQWM7UUFDNUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFUyxrQkFBa0IsQ0FBQyxHQUFRO1FBQ25DLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO1lBQ25CLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSTtZQUNoQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07U0FDcEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVTLFFBQVEsQ0FBQyxLQUFxQztRQUN0RCxNQUFNLEVBQUMsWUFBWSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQzdELE1BQU0sU0FBUyxHQUFHLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxZQUFZLENBQUM7UUFDekUsSUFBSSxTQUFTLElBQUksSUFBSSxDQUFDLGdCQUFnQixHQUFHLFNBQVMsRUFBRTtZQUNsRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMvQjtRQUNELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLENBQUM7SUFDcEMsQ0FBQztJQUVPLFFBQVE7UUFDZCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNuQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVPLGFBQWE7UUFDbkIsSUFBSSxJQUFJLENBQUMsTUFBTSxZQUFZLGVBQWUsRUFBRTtZQUMxQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7U0FDcEI7UUFDRCxPQUFPLElBQUksZUFBZSxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVPLGVBQWU7UUFDckIsT0FBTyxVQUFVLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFTyxpQkFBaUIsQ0FBQyxHQUFlO1FBQ3ZDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDO1lBQ3ZCLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSTtZQUNoQyxVQUFVLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUs7WUFDN0MsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsRUFBRTtTQUNsRCxDQUFDLENBQUM7SUFDTCxDQUFDOzttSEFySlUsc0JBQXNCO3VHQUF0QixzQkFBc0IseWJDYm5DLHMyQ0ErQkE7MkZEbEJhLHNCQUFzQjtrQkFMbEMsU0FBUzsrQkFDRSxpQkFBaUI7OEJBS2xCLE1BQU07c0JBQWQsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUVJLGNBQWM7c0JBQXZCLE1BQU07Z0JBQ0csVUFBVTtzQkFBbkIsTUFBTTtnQkFDRyxhQUFhO3NCQUF0QixNQUFNO2dCQUNHLE1BQU07c0JBQWYsTUFBTTtnQkFDRyxJQUFJO3NCQUFiLE1BQU07Z0JBQ0csVUFBVTtzQkFBbkIsTUFBTTtnQkFDRyxNQUFNO3NCQUFmLE1BQU07Z0JBQ0csTUFBTTtzQkFBZixNQUFNO2dCQUNHLGFBQWE7c0JBQXRCLE1BQU07Z0JBQ0csV0FBVztzQkFBcEIsTUFBTTtnQkFDRyxhQUFhO3NCQUF0QixNQUFNO2dCQUNHLFFBQVE7c0JBQWpCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIFNpbXBsZUNoYW5nZSwgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXMsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBHcmlkIH0gZnJvbSAnLi9saWIvZ3JpZCc7XG5pbXBvcnQgeyBSb3cgfSBmcm9tICcuL2xpYi9kYXRhLXNldC9yb3cnO1xuaW1wb3J0IHsgZGVlcEV4dGVuZCB9IGZyb20gJy4vbGliL2hlbHBlcnMnO1xuaW1wb3J0IHsgTG9jYWxEYXRhU291cmNlIH0gZnJvbSAnLi9saWIvZGF0YS1zb3VyY2UvbG9jYWwvbG9jYWwuZGF0YS1zb3VyY2UnO1xuaW1wb3J0IHsgU21hcnRUYWJsZUNvbmZpcm1EZWxldGVFdmVudCwgU21hcnRUYWJsZUNvbmZpcm1FZGl0RXZlbnQsIFNtYXJ0VGFibGVDcmVhdGVDb25maXJtLCBTbWFydFRhYmxlQ3VzdG9tRXZlbnQsIFNtYXJ0VGFibGVSb3dDbGlja2VkRXZlbnQsIFNtYXJ0VGFibGVSb3dTZWxlY3RFdmVudCwgU21hcnRUYWJsZVNldHRpbmdzIH0gZnJvbSAnLi9saWIvaW50ZXJmYWNlcy9zbWFydC10YWJsZS5tb2RlbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZzItc21hcnQtdGFibGUnLFxuICBzdHlsZVVybHM6IFsnLi9uZzItc21hcnQtdGFibGUuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL25nMi1zbWFydC10YWJsZS5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIE5nMlNtYXJ0VGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBzb3VyY2UhOiBMb2NhbERhdGFTb3VyY2U7XG4gIEBJbnB1dCgpIHNldHRpbmdzITogU21hcnRUYWJsZVNldHRpbmdzO1xuXG4gIEBPdXRwdXQoKSBtdWx0aVJvd1NlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8U21hcnRUYWJsZVJvd1NlbGVjdEV2ZW50PigpO1xuICBAT3V0cHV0KCkgcm93Q2xpY2tlZCA9IG5ldyBFdmVudEVtaXR0ZXI8U21hcnRUYWJsZVJvd0NsaWNrZWRFdmVudD4oKTtcbiAgQE91dHB1dCgpIGxpc3RTY3JvbGxFbmQgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIEBPdXRwdXQoKSBkZWxldGUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGVkaXQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGVkaXRDYW5jZWwgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGNyZWF0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgY3VzdG9tID0gbmV3IEV2ZW50RW1pdHRlcjxTbWFydFRhYmxlQ3VzdG9tRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSBkZWxldGVDb25maXJtID0gbmV3IEV2ZW50RW1pdHRlcjxTbWFydFRhYmxlQ29uZmlybURlbGV0ZUV2ZW50PigpO1xuICBAT3V0cHV0KCkgZWRpdENvbmZpcm0gPSBuZXcgRXZlbnRFbWl0dGVyPFNtYXJ0VGFibGVDb25maXJtRWRpdEV2ZW50PigpO1xuICBAT3V0cHV0KCkgY3JlYXRlQ29uZmlybSA9IG5ldyBFdmVudEVtaXR0ZXI8U21hcnRUYWJsZUNyZWF0ZUNvbmZpcm0+KCk7XG4gIEBPdXRwdXQoKSByb3dIb3ZlcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICB0YWJsZUNsYXNzOiBzdHJpbmcgPSAnJztcbiAgdGFibGVJZDogc3RyaW5nID0gJyc7XG4gIHBlclBhZ2VTZWxlY3Q6IG51bWJlcltdID0gW107XG4gIGlzSGlkZUhlYWRlciA9IGZhbHNlO1xuICBpc0hpZGVTdWJIZWFkZXIgPSBmYWxzZTtcbiAgaXNQYWdlckRpc3BsYXkgPSBmYWxzZTtcbiAgcm93Q2xhc3NGdW5jdGlvbjogRnVuY3Rpb24gPSAoKT0+Jyc7XG4gIHByaXZhdGUgY3VycmVudFNjcm9sbFRvcCA9IDA7XG5cbiAgZ3JpZCE6IEdyaWQ7XG4gIGRlZmF1bHRTZXR0aW5nczogU21hcnRUYWJsZVNldHRpbmdzID0ge1xuICAgIG1vZGU6ICdpbmxpbmUnLCAvLyBpbmxpbmV8ZXh0ZXJuYWx8Y2xpY2stdG8tZWRpdFxuICAgIHNlbGVjdE1vZGU6ICdzaW5nbGUnLCAvLyBzaW5nbGV8bXVsdGlcbiAgICBzZWxlY3RlZFJvd0luZGV4OiAtMSxcbiAgICBzd2l0Y2hQYWdlVG9TZWxlY3RlZFJvd1BhZ2U6IGZhbHNlLFxuICAgIGJvZHlIZWlnaHQ6ICc4NXZoJyxcbiAgICBoaWRlSGVhZGVyOiBmYWxzZSxcbiAgICBoaWRlU3ViSGVhZGVyOiBmYWxzZSxcbiAgICBhY3Rpb25zOiB7XG4gICAgICBjb2x1bW5UaXRsZTogJ0FjdGlvbnMnLFxuICAgICAgYWRkOiB0cnVlLFxuICAgICAgZWRpdDogdHJ1ZSxcbiAgICAgIGRlbGV0ZTogdHJ1ZSxcbiAgICAgIGN1c3RvbTogW10sXG4gICAgICBwb3NpdGlvbjogJ2xlZnQnLCAvLyBsZWZ0fHJpZ2h0XG4gICAgfSxcbiAgICBmaWx0ZXI6IHtcbiAgICAgIGlucHV0Q2xhc3M6ICcnLFxuICAgIH0sXG4gICAgZWRpdDoge1xuICAgICAgaW5wdXRDbGFzczogJycsXG4gICAgICBlZGl0QnV0dG9uQ29udGVudDogJ0VkaXQnLFxuICAgICAgc2F2ZUJ1dHRvbkNvbnRlbnQ6ICdVcGRhdGUnLFxuICAgICAgY2FuY2VsQnV0dG9uQ29udGVudDogJ0NhbmNlbCcsXG4gICAgICBjb25maXJtU2F2ZTogZmFsc2UsXG4gICAgfSxcbiAgICBhZGQ6IHtcbiAgICAgIGlucHV0Q2xhc3M6ICcnLFxuICAgICAgYWRkQnV0dG9uQ29udGVudDogJ0FkZCBOZXcnLFxuICAgICAgY3JlYXRlQnV0dG9uQ29udGVudDogJ0NyZWF0ZScsXG4gICAgICBjYW5jZWxCdXR0b25Db250ZW50OiAnQ2FuY2VsJyxcbiAgICAgIGNvbmZpcm1DcmVhdGU6IGZhbHNlLFxuICAgIH0sXG4gICAgZGVsZXRlOiB7XG4gICAgICBkZWxldGVCdXR0b25Db250ZW50OiAnRGVsZXRlJyxcbiAgICAgIGNvbmZpcm1EZWxldGU6IGZhbHNlLFxuICAgIH0sXG4gICAgYXR0cjoge1xuICAgICAgaWQ6ICcnLFxuICAgICAgY2xhc3M6ICcnLFxuICAgIH0sXG4gICAgbm9EYXRhTWVzc2FnZTogJ05vIGRhdGEgZm91bmQnLFxuICAgIGNvbHVtbnM6IHt9LFxuICAgIHBhZ2VyOiBmYWxzZSxcbiAgICByb3dDbGFzc0Z1bmN0aW9uOiAoKSA9PiAnJyxcbiAgfTtcblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7IFtwcm9wZXJ0eU5hbWU6IHN0cmluZ106IFNpbXBsZUNoYW5nZSB9KSB7XG4gICAgaWYgKHRoaXMuZ3JpZCkge1xuICAgICAgaWYgKGNoYW5nZXNbJ3NldHRpbmdzJ10pIHtcbiAgICAgICAgdGhpcy5ncmlkLnNldFNldHRpbmdzKHRoaXMucHJlcGFyZVNldHRpbmdzKCkpO1xuICAgICAgfVxuICAgICAgaWYgKGNoYW5nZXNbJ3NvdXJjZSddKSB7XG4gICAgICAgIHRoaXMuc291cmNlID0gdGhpcy5wcmVwYXJlU291cmNlKCk7XG4gICAgICAgIHRoaXMuZ3JpZC5zZXRTb3VyY2UodGhpcy5zb3VyY2UpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmluaXRHcmlkKCk7XG4gICAgfVxuICAgIHRoaXMudGFibGVJZCA9IHRoaXMuZ3JpZC5nZXRTZXR0aW5nKCdhdHRyLmlkJyk7XG4gICAgdGhpcy50YWJsZUNsYXNzID0gdGhpcy5ncmlkLmdldFNldHRpbmcoJ2F0dHIuY2xhc3MnKTtcbiAgICB0aGlzLmlzSGlkZUhlYWRlciA9IHRoaXMuZ3JpZC5nZXRTZXR0aW5nKCdoaWRlSGVhZGVyJyk7XG4gICAgdGhpcy5pc0hpZGVTdWJIZWFkZXIgPSB0aGlzLmdyaWQuZ2V0U2V0dGluZygnaGlkZVN1YkhlYWRlcicpO1xuICAgIHRoaXMuaXNQYWdlckRpc3BsYXkgPSB0aGlzLmdyaWQuZ2V0U2V0dGluZygncGFnZXIuZGlzcGxheScsIGZhbHNlKTtcbiAgICB0aGlzLnBlclBhZ2VTZWxlY3QgPSB0aGlzLmdyaWQuZ2V0U2V0dGluZygncGFnZXIucGVyUGFnZVNlbGVjdCcpO1xuICAgIHRoaXMucm93Q2xhc3NGdW5jdGlvbiA9IHRoaXMuZ3JpZC5nZXRTZXR0aW5nKCdyb3dDbGFzc0Z1bmN0aW9uJywgKCkgPT4gJycpO1xuICB9XG5cbiAgcHJvdGVjdGVkIG11bHRpcGxlU2VsZWN0Um93KHJvdzogUm93KTogdm9pZCB7XG4gICAgdGhpcy5ncmlkLm11bHRpcGxlU2VsZWN0Um93KHJvdyk7XG4gICAgdGhpcy5lbWl0VXNlclNlbGVjdFJvdyhyb3cpO1xuICB9XG5cbiAgcHJvdGVjdGVkIG9uU2VsZWN0QWxsUm93cygpOiB2b2lkIHtcbiAgICB0aGlzLmdyaWQuZGF0YVNldC5pc0FsbFNlbGVjdGVkO1xuICAgIHRoaXMuZ3JpZC5zZWxlY3RBbGxSb3dzKCF0aGlzLmdyaWQuZGF0YVNldC5pc0FsbFNlbGVjdGVkKTtcbiAgICB0aGlzLmVtaXRVc2VyU2VsZWN0Um93KG51bGwpO1xuICB9XG5cbiAgcHJvdGVjdGVkIG9uU2VsZWN0Um93KHJvdzogUm93LCBzdGF0ZTogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZ3JpZC5zZWxlY3RSb3cocm93LCBzdGF0ZSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZW1pdFVzZXJSb3dDbGlja2VkKHJvdzogUm93KTogdm9pZCB7XG4gICAgdGhpcy5yb3dDbGlja2VkLmVtaXQoe1xuICAgICAgZGF0YTogcm93ID8gcm93LmdldERhdGEoKSA6IG51bGwsXG4gICAgICBzb3VyY2U6IHRoaXMuc291cmNlLFxuICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIG9uU2Nyb2xsKGV2ZW50OiBFdmVudCAmIHsgdGFyZ2V0OiBIVE1MRWxlbWVudH0pOiB2b2lkIHtcbiAgICBjb25zdCB7c2Nyb2xsSGVpZ2h0LCBzY3JvbGxUb3AsIGNsaWVudEhlaWdodH0gPSBldmVudC50YXJnZXQ7XG4gICAgY29uc3QgaXNMaXN0RW5kID0gKGNsaWVudEhlaWdodCArIE1hdGgucm91bmQoc2Nyb2xsVG9wKSkgPj0gc2Nyb2xsSGVpZ2h0O1xuICAgIGlmIChpc0xpc3RFbmQgJiYgdGhpcy5jdXJyZW50U2Nyb2xsVG9wIDwgc2Nyb2xsVG9wKSB7XG4gICAgICB0aGlzLmxpc3RTY3JvbGxFbmQuZW1pdCh0cnVlKTtcbiAgICB9XG4gICAgdGhpcy5jdXJyZW50U2Nyb2xsVG9wID0gc2Nyb2xsVG9wO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0R3JpZCgpOiB2b2lkIHtcbiAgICB0aGlzLnNvdXJjZSA9IHRoaXMucHJlcGFyZVNvdXJjZSgpO1xuICAgIHRoaXMuZ3JpZCA9IG5ldyBHcmlkKHRoaXMuc291cmNlLCB0aGlzLnByZXBhcmVTZXR0aW5ncygpKTtcbiAgfVxuXG4gIHByaXZhdGUgcHJlcGFyZVNvdXJjZSgpOiBMb2NhbERhdGFTb3VyY2Uge1xuICAgIGlmICh0aGlzLnNvdXJjZSBpbnN0YW5jZW9mIExvY2FsRGF0YVNvdXJjZSkge1xuICAgICAgcmV0dXJuIHRoaXMuc291cmNlO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IExvY2FsRGF0YVNvdXJjZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBwcmVwYXJlU2V0dGluZ3MoKTogU21hcnRUYWJsZVNldHRpbmdzIHtcbiAgICByZXR1cm4gZGVlcEV4dGVuZCh7fSwgdGhpcy5kZWZhdWx0U2V0dGluZ3MsIHRoaXMuc2V0dGluZ3MpO1xuICB9XG5cbiAgcHJpdmF0ZSBlbWl0VXNlclNlbGVjdFJvdyhyb3c6IFJvdyB8IG51bGwpOiB2b2lkIHtcbiAgICB0aGlzLm11bHRpUm93U2VsZWN0LmVtaXQoe1xuICAgICAgZGF0YTogcm93ID8gcm93LmdldERhdGEoKSA6IG51bGwsXG4gICAgICBpc1NlbGVjdGVkOiByb3cgPyByb3cuZ2V0SXNTZWxlY3RlZCgpIDogZmFsc2UsXG4gICAgICBzb3VyY2U6IHRoaXMuc291cmNlLFxuICAgICAgc2VsZWN0ZWQ6IHRoaXMuZ3JpZC5kYXRhU2V0LmdldFNlbGVjdGVkUm93c0RhdGEoKSxcbiAgICB9KTtcbiAgfSAgXG59XG4iLCI8dGFibGUgW2lkXT1cInRhYmxlSWRcIiBbbmdDbGFzc109XCJ0YWJsZUNsYXNzXCI+XG5cbiAgPHRoZWFkIG5nMi1zdC10aGVhZCAqbmdJZj1cIiFpc0hpZGVIZWFkZXIgfHwgIWlzSGlkZVN1YkhlYWRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgW2dyaWRdPVwiZ3JpZFwiXG4gICAgICAgICAgICAgICAgICAgICAgW3NvdXJjZV09XCJzb3VyY2VcIlxuICAgICAgICAgICAgICAgICAgICAgIFtjcmVhdGVDb25maXJtXT1cImNyZWF0ZUNvbmZpcm1cIlxuICAgICAgICAgICAgICAgICAgICAgIChjcmVhdGUpPVwiY3JlYXRlLmVtaXQoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgICAgKHNlbGVjdEFsbFJvd3MpPVwib25TZWxlY3RBbGxSb3dzKClcIj5cbiAgPC90aGVhZD5cblxuICA8dGJvZHkgbmcyLXN0LXRib2R5IFtuZ1N0eWxlXT1cInsnbWF4LWhlaWdodCc6IHRoaXMuZ3JpZC5nZXRTZXR0aW5nKCdib2R5SGVpZ2h0JywgJzg1dmgnKX1cIlxuICAgICAgICAgICAgICAgICAgICAgIFtncmlkXT1cImdyaWRcIlxuICAgICAgICAgICAgICAgICAgICAgIFtzb3VyY2VdPVwic291cmNlXCJcbiAgICAgICAgICAgICAgICAgICAgICBbZGVsZXRlQ29uZmlybV09XCJkZWxldGVDb25maXJtXCJcbiAgICAgICAgICAgICAgICAgICAgICBbZWRpdENvbmZpcm1dPVwiZWRpdENvbmZpcm1cIlxuICAgICAgICAgICAgICAgICAgICAgIFtyb3dDbGFzc0Z1bmN0aW9uXT1cInJvd0NsYXNzRnVuY3Rpb25cIlxuICAgICAgICAgICAgICAgICAgICAgIChlZGl0KT1cImVkaXQuZW1pdCgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAoZWRpdENhbmNlbCk9XCJlZGl0Q2FuY2VsLmVtaXQoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgICAgKGRlbGV0ZSk9XCJkZWxldGUuZW1pdCgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAoY3VzdG9tKT1cImN1c3RvbS5lbWl0KCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICAgIChzY3JvbGwpPVwib25TY3JvbGwoJGFueSgkZXZlbnQpKVwiXG4gICAgICAgICAgICAgICAgICAgICAgKHVzZXJDbGlja2VkUm93KT1cImVtaXRVc2VyUm93Q2xpY2tlZCgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAobXVsdGlwbGVTZWxlY3RSb3cpPVwibXVsdGlwbGVTZWxlY3RSb3coJGV2ZW50KVwiPlxuICA8L3Rib2R5PlxuXG48L3RhYmxlPlxuXG48bmcyLXNtYXJ0LXRhYmxlLXBhZ2VyICpuZ0lmPVwiaXNQYWdlckRpc3BsYXlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW3NvdXJjZV09XCJzb3VyY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW3BlclBhZ2VTZWxlY3RdPVwicGVyUGFnZVNlbGVjdFwiPlxuPC9uZzItc21hcnQtdGFibGUtcGFnZXI+XG4iXX0=