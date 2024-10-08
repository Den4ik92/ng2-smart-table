import * as i0 from '@angular/core';
import { EventEmitter, Component, Input, Output, ViewContainerRef, ViewChild, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { Subject } from 'rxjs';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i2 from '@angular/forms';
import { UntypedFormControl, NgControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, skip } from 'rxjs/operators';

function prepareValue(value) { return value; }
class Cell {
    static { this.PREPARE = prepareValue; }
    constructor(value, row, column, dataSet) {
        this.value = value;
        this.row = row;
        this.column = column;
        this.dataSet = dataSet;
        this.newValue = '';
        this.newValue = value;
    }
    getColumn() {
        return this.column;
    }
    getColumnClass() {
        return this.column.class;
    }
    getRow() {
        return this.row;
    }
    getValue() {
        const prepare = this.column.getValuePrepareFunction() || Cell.PREPARE;
        return prepare.call(null, this.value, this.row.getData(), this);
    }
    setValue(value) {
        this.newValue = value;
    }
    getId() {
        return this.getColumn().id;
    }
    getTitle() {
        return this.getColumn().title;
    }
    isEditable() {
        if (this.getRow().index === -1) {
            return this.getColumn().isAddable;
        }
        else {
            return this.getColumn().isEditable;
        }
    }
}

class DefaultEditor {
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

class Column {
    constructor(id, settings, dataSet) {
        this.id = id;
        this.settings = settings;
        this.dataSet = dataSet;
        this.title = '';
        this.type = 'text';
        this.class = '';
        this.width = '';
        this.hide = false;
        this.isSortable = false;
        this.isEditable = true;
        this.isAddable = true;
        this.isFilterable = false;
        this.sortDirection = 'asc';
        this.defaultSortDirection = false;
        this.editor = false;
        this.filter = false;
        this.process(this.settings);
    }
    getCompareFunction() {
        return this.compareFunction;
    }
    getValuePrepareFunction() {
        return this.valuePrepareFunction;
    }
    getFilterFunction() {
        return this.filterFunction;
    }
    getConfig() {
        if (this.editor && (this.editor.type === 'checkbox' || this.editor.type === 'custom' || this.editor.type === 'list')) {
            return this.editor?.config;
        }
        return false;
    }
    getFilterType() {
        return this.filter && this.filter.type;
    }
    getFilterConfig() {
        if (this.filter && (this.filter.type === 'checkbox' || this.filter.type === 'custom' || this.filter.type === 'list')) {
            return this.filter?.config;
        }
        return false;
    }
    process(settings) {
        this.title = settings.title;
        this.class = settings.class || '';
        this.width = settings.width || '';
        this.hide = !!settings.hide;
        this.type = settings.type;
        if (settings?.editor) {
            this.editor = settings.editor;
        }
        if (settings?.filter) {
            this.filter = settings.filter;
        }
        if (settings.type === 'custom' && settings.renderComponent) {
            this.renderComponent = settings.renderComponent;
        }
        this.isFilterable = typeof settings.filter === 'undefined' ? true : !!settings['filter'];
        this.defaultSortDirection = settings?.sortDirection || false;
        this.isSortable = typeof settings.sort === 'undefined' ? true : settings.sort;
        this.isEditable = typeof settings.editable === 'undefined' ? true : settings.editable;
        this.isAddable = typeof settings.addable === 'undefined' ? true : settings.addable;
        this.sortDirection = this.prepareSortDirection();
        this.compareFunction = settings.compareFunction;
        this.valuePrepareFunction = settings.valuePrepareFunction;
        this.filterFunction = settings.filterFunction;
    }
    prepareSortDirection() {
        return this.defaultSortDirection === 'desc' ? 'desc' : 'asc';
    }
}

class DefaultFilter {
    constructor() {
        this.delay = 300;
        this.query = '';
        this.inputClass = '';
        this.filter = new EventEmitter();
    }
    ngOnDestroy() {
        if (this.changesSubscription) {
            this.changesSubscription.unsubscribe();
        }
    }
    setFilter() {
        this.filter.emit(this.query);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: DefaultFilter, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: DefaultFilter, selector: "ng-component", inputs: { query: "query", inputClass: "inputClass", column: "column" }, outputs: { filter: "filter" }, ngImport: i0, template: '', isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: DefaultFilter, decorators: [{
            type: Component,
            args: [{
                    template: '',
                }]
        }], propDecorators: { query: [{
                type: Input
            }], inputClass: [{
                type: Input
            }], column: [{
                type: Input
            }], filter: [{
                type: Output
            }] } });

function compareValues(direction, a, b) {
    if (a < b) {
        return -1 * direction;
    }
    if (a > b) {
        return direction;
    }
    return 0;
}
class LocalSorter {
    static sort(data, field, direction, customCompare) {
        const dir = (direction === 'asc') ? 1 : -1;
        const compare = customCompare ? customCompare : compareValues;
        return data.sort((a, b) => {
            return compare.call(null, dir, a[field], b[field]);
        });
    }
}

function filterValues(value, search) {
    return value.toString().toLowerCase().includes(search.toString().toLowerCase());
}
class LocalFilter {
    static filter(data, field, search, customFilter) {
        const filter = customFilter ? customFilter : filterValues;
        return data.filter((el) => {
            const value = typeof el[field] === 'undefined' || el[field] === null ? '' : el[field];
            return filter.call(null, value, search);
        });
    }
}

class LocalPager {
    static paginate(data, page, perPage) {
        return data.slice(perPage * (page - 1), perPage * page);
    }
}

var SmartTableOnChangedEventName;
(function (SmartTableOnChangedEventName) {
    SmartTableOnChangedEventName["load"] = "load";
    SmartTableOnChangedEventName["paging"] = "paging";
    SmartTableOnChangedEventName["update"] = "update";
    SmartTableOnChangedEventName["page"] = "page";
    SmartTableOnChangedEventName["filter"] = "filter";
    SmartTableOnChangedEventName["empty"] = "empty";
    SmartTableOnChangedEventName["sort"] = "sort";
    SmartTableOnChangedEventName["add"] = "add";
    SmartTableOnChangedEventName["remove"] = "remove";
    SmartTableOnChangedEventName["append"] = "append";
    SmartTableOnChangedEventName["prepend"] = "prepend";
    SmartTableOnChangedEventName["refresh"] = "refresh";
})(SmartTableOnChangedEventName || (SmartTableOnChangedEventName = {}));

class DataSource {
    constructor() {
        this.onChangedSource = new Subject();
        this.onAddedSource = new Subject();
        this.onUpdatedSource = new Subject();
        this.onRemovedSource = new Subject();
    }
    refresh() {
        this.emitOnChanged(SmartTableOnChangedEventName.refresh);
    }
    loadEmit() {
        this.emitOnChanged(SmartTableOnChangedEventName.load);
        return Promise.resolve(true);
    }
    onChanged() {
        return this.onChangedSource.asObservable();
    }
    onAdded() {
        return this.onAddedSource.asObservable();
    }
    onUpdated() {
        return this.onUpdatedSource.asObservable();
    }
    onRemoved() {
        return this.onRemovedSource.asObservable();
    }
    prependEmit(element) {
        this.emitOnAdded(element);
        this.emitOnChanged(SmartTableOnChangedEventName.prepend);
        return Promise.resolve(true);
    }
    appendEmit(element) {
        this.emitOnAdded(element);
        this.emitOnChanged(SmartTableOnChangedEventName.append);
        return Promise.resolve(true);
    }
    addEmit(element) {
        this.emitOnAdded(element);
        this.emitOnChanged(SmartTableOnChangedEventName.add);
        return Promise.resolve(true);
    }
    removeEmit(element) {
        this.emitOnRemoved(element);
        this.emitOnChanged(SmartTableOnChangedEventName.remove);
        return Promise.resolve(true);
    }
    updateEmit(element) {
        this.emitOnUpdated(element);
        this.emitOnChanged(SmartTableOnChangedEventName.update);
        return Promise.resolve(true);
    }
    emptyEmit() {
        this.emitOnChanged(SmartTableOnChangedEventName.empty);
        return Promise.resolve(true);
    }
    setSortEmit() {
        this.emitOnChanged(SmartTableOnChangedEventName.sort);
    }
    setFilterEmit() {
        this.emitOnChanged(SmartTableOnChangedEventName.filter);
    }
    addFilterEmit() {
        this.emitOnChanged(SmartTableOnChangedEventName.filter);
    }
    setPagingEmit() {
        this.emitOnChanged(SmartTableOnChangedEventName.paging);
    }
    setPageEmit() {
        this.emitOnChanged(SmartTableOnChangedEventName.page);
    }
    emitOnRemoved(element) {
        this.onRemovedSource.next(element);
    }
    emitOnUpdated(element) {
        this.onUpdatedSource.next(element);
    }
    emitOnAdded(element) {
        this.onAddedSource.next(element);
    }
    emitOnChanged(action) {
        this.getElements().then((elements) => this.onChangedSource.next({
            action: action,
            elements: elements,
            paging: this.getPaging(),
            filter: this.getFilter(),
            sort: this.getSort(),
        }));
    }
}

/**
 * Extending object that entered in first argument.
 *
 * Returns extended object or false if have no target object or incorrect type.
 *
 * If you wish to clone source object (without modify it), just use empty new
 * object as first argument, like this:
 *   deepExtend({}, yourObj_1, [yourObj_N]);
 */
const deepExtend = function (...objects) {
    if (arguments.length < 1 || typeof arguments[0] !== 'object') {
        return false;
    }
    if (arguments.length < 2) {
        return arguments[0];
    }
    const target = arguments[0];
    // convert arguments to array and cut off target object
    const args = Array.prototype.slice.call(arguments, 1);
    let val, src;
    args.forEach((obj) => {
        // skip argument if it is array or isn't object
        if (typeof obj !== 'object' || Array.isArray(obj)) {
            return;
        }
        Object.keys(obj).forEach(function (key) {
            src = target[key]; // source value
            val = obj[key]; // new value
            // recursion prevention
            if (val === target) {
                return;
                /**
                 * if new value isn't object then just overwrite by new value
                 * instead of extending.
                 */
            }
            else if (typeof val !== 'object' || val === null) {
                target[key] = val;
                return;
                // just clone arrays (and recursive clone objects inside)
            }
            else if (Array.isArray(val)) {
                target[key] = [...val];
                return;
                // overwrite by new value if source isn't object or array
            }
            else if (typeof src !== 'object' || src === null || Array.isArray(src)) {
                target[key] = deepExtend({}, val);
                return;
                // source value and new value is objects both, extending...
            }
            else {
                target[key] = deepExtend(src, val);
                return;
            }
        });
    });
    return target;
};
class Deferred {
    constructor() {
        this.promise = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
        });
    }
}
// getDeepFromObject({result: {data: 1}}, 'result.data', 2); // returns 1
function getDeepFromObject(object = {}, name, defaultValue = null) {
    const keys = name.split('.');
    // clone the object
    let level = deepExtend({}, object);
    keys.forEach((k) => {
        if (level && typeof level[k] !== 'undefined') {
            level = level[k];
        }
    });
    return typeof level === 'undefined' ? defaultValue : level;
}
function getPageForRowIndex(index, perPage) {
    // we need to add 1 to convert 0-based index to 1-based page number.
    return Math.floor(index / perPage) + 1;
}

class LocalDataSource extends DataSource {
    constructor(data = []) {
        super();
        this.data = [];
        this.filteredAndSorted = [];
        this.sortConf = [];
        this.filterConf = {
            filters: [],
            andOperator: true,
        };
        this.pagingConf = false;
        this.data = data;
    }
    load(data) {
        this.data = data;
        return super.loadEmit();
    }
    prepend(element) {
        this.reset(true);
        this.data.unshift(element);
        return super.prependEmit(element);
    }
    appendMany(elements) {
        this.reset(true);
        this.data = [...this.data, ...elements];
        return super.loadEmit();
    }
    append(element) {
        this.reset(true);
        this.data.push(element);
        return super.appendEmit(element);
    }
    add(element) {
        this.data.push(element);
        return super.addEmit(element);
    }
    remove(element) {
        this.data = this.data.filter(el => el !== element);
        return super.removeEmit(element);
    }
    update(element, values) {
        return new Promise((resolve, reject) => {
            this.find(element).then((found) => {
                found = deepExtend(found, values);
                super.updateEmit(found).then(resolve).catch(reject);
            }).catch(reject);
        });
    }
    find(element) {
        const found = this.data.find(el => el === element);
        if (found) {
            return Promise.resolve(found);
        }
        return Promise.reject(new Error('Element was not found in the dataset'));
    }
    getElements() {
        const data = this.data.slice(0);
        return Promise.resolve(this.prepareData(data));
    }
    getFilteredAndSorted() {
        let data = this.data.slice(0);
        this.prepareData(data);
        return Promise.resolve(this.filteredAndSorted);
    }
    getAll() {
        const data = this.data.slice(0);
        return Promise.resolve(data);
    }
    reset(silent = false) {
        if (silent) {
            this.filterConf = {
                filters: [],
                andOperator: true,
            };
            this.sortConf = [];
            if (this.pagingConf) {
                this.pagingConf.page = 1;
            }
        }
        else {
            this.setFilter([], true, false);
            this.setSort([], false);
            if (this.pagingConf) {
                this.setPage(1);
            }
        }
    }
    empty() {
        this.data = [];
        return super.emptyEmit();
    }
    count() {
        return this.filteredAndSorted.length;
    }
    /**
     *
     * Array of conf objects
     * [
     *  {field: string, direction: asc|desc|null, compare: Function|null},
     * ]
     * @param conf
     * @param doEmit
     * @returns {LocalDataSource}
     */
    setSort(conf, doEmit = true) {
        if (conf !== null) {
            conf.forEach((fieldConf) => {
                if (!fieldConf.field || typeof fieldConf.direction === 'undefined') {
                    throw new Error('Sort configuration object is not valid');
                }
            });
            this.sortConf = conf;
        }
        if (doEmit) {
            super.setSortEmit();
        }
        return this;
    }
    /**
     *
     * Array of conf objects
     * [
     *  {field: string, search: string, filter: Function|null},
     * ]
     * @param conf
     * @param andOperator
     * @param doEmit
     * @returns {LocalDataSource}
     */
    setFilter(conf, andOperator = true, doEmit = true) {
        if (conf && conf.length > 0) {
            conf.forEach((fieldConf) => {
                this.addFilter(fieldConf, andOperator, false);
            });
        }
        else {
            this.filterConf = {
                filters: [],
                andOperator: true,
            };
        }
        this.filterConf.andOperator = andOperator;
        if (this.pagingConf) {
            this.pagingConf.page = 1;
        }
        if (doEmit) {
            super.setFilterEmit();
        }
        return this;
    }
    addFilter(fieldConf, andOperator = true, doEmit = true) {
        if (!fieldConf.field || typeof fieldConf.search === 'undefined') {
            throw new Error('Filter configuration object is not valid');
        }
        let found = false;
        this.filterConf.filters.forEach((currentFieldConf, index) => {
            if (currentFieldConf.field === fieldConf.field) {
                this.filterConf.filters[index] = fieldConf;
                found = true;
            }
        });
        if (!found) {
            this.filterConf.filters.push(fieldConf);
        }
        this.filterConf.andOperator = andOperator;
        if (doEmit) {
            super.addFilterEmit();
        }
        return this;
    }
    setPaging(page = 1, perPage, doEmit = true) {
        if (this.pagingConf) {
            this.pagingConf.page = page;
            this.pagingConf.perPage = perPage;
        }
        else {
            this.pagingConf = {
                page, perPage
            };
        }
        if (doEmit) {
            super.setPagingEmit();
        }
        return;
    }
    setPage(page, doEmit = true) {
        if (!this.pagingConf) {
            return;
        }
        this.pagingConf.page = page;
        if (doEmit) {
            super.setPageEmit();
        }
        return;
    }
    getSort() {
        return this.sortConf;
    }
    getFilter() {
        return this.filterConf;
    }
    getPaging() {
        return this.pagingConf;
    }
    prepareData(data) {
        data = this.filter(data);
        data = this.sort(data);
        this.filteredAndSorted = data.slice(0);
        if (this.pagingConf) {
            return this.paginate(data);
        }
        else
            return data;
    }
    sort(data) {
        if (this.sortConf) {
            this.sortConf.forEach((fieldConf) => {
                data = LocalSorter
                    .sort(data, fieldConf.field, fieldConf.direction, fieldConf.compare);
            });
        }
        return data;
    }
    // TODO: refactor?
    filter(data) {
        if (this.filterConf.filters) {
            if (this.filterConf.andOperator) {
                this.filterConf.filters.forEach((fieldConf) => {
                    if (fieldConf.search?.length > 0) {
                        data = LocalFilter
                            .filter(data, fieldConf.field, fieldConf.search, fieldConf.filter);
                    }
                });
            }
            else {
                let mergedData = [];
                this.filterConf.filters.forEach((fieldConf) => {
                    if (fieldConf.search?.length > 0) {
                        mergedData = mergedData.concat(LocalFilter
                            .filter(data, fieldConf.field, fieldConf.search, fieldConf.filter));
                    }
                });
                // remove non unique items
                data = mergedData.filter((elem, pos, arr) => {
                    return arr.indexOf(elem) === pos;
                });
            }
        }
        return data;
    }
    paginate(data) {
        if (this.pagingConf && this.pagingConf.page && this.pagingConf.perPage) {
            data = LocalPager.paginate(data, this.pagingConf.page, this.pagingConf.perPage);
        }
        return data;
    }
}

class Row {
    constructor(index, data, _dataSet) {
        this.index = index;
        this.data = data;
        this._dataSet = _dataSet;
        this.pending = false;
        this.isSelected = false;
        this.isInEditing = false;
        this.cells = [];
        this.process();
    }
    getCell(column) {
        return this.cells.find(el => el.getColumn() === column);
    }
    getCells() {
        return this.cells;
    }
    getData() {
        return this.data;
    }
    getIsSelected() {
        return this.isSelected;
    }
    getNewData() {
        const values = Object.assign({}, this.data);
        this.getCells().forEach((cell) => values[cell.getColumn().id] = cell.newValue);
        return values;
    }
    setData(data) {
        this.data = data;
        this.process();
    }
    process() {
        this.cells = [];
        this._dataSet.getColumns().forEach((column) => {
            const cell = this.createCell(column);
            this.cells.push(cell);
        });
    }
    createCell(column) {
        const defValue = column.settings.defaultValue ? column.settings.defaultValue : '';
        const value = typeof this.data[column.id] === 'undefined' ? defValue : this.data[column.id];
        return new Cell(value, this, column, this._dataSet);
    }
}

class DataSet {
    constructor(data = [], columnSettings) {
        this.columnSettings = columnSettings;
        this.data = [];
        this.columns = [];
        this.rows = [];
        this.selectedRows = new Set();
        this.createColumns(columnSettings);
        this.setData(data);
        this.createNewRow();
    }
    setData(data) {
        this.data = data;
        this.createRows();
    }
    getColumns() {
        return this.columns;
    }
    getRows() {
        return this.rows;
    }
    getFirstRow() {
        return this.rows[0];
    }
    getLastRow() {
        return this.rows[this.rows.length - 1];
    }
    findRowByData(data) {
        return this.rows.find((row) => row.getData() === data);
    }
    setSelectAll(state) {
        this.rows.forEach((row) => {
            row.isSelected = state;
            this.storeSelectedRow(row);
        });
    }
    deselectAll() {
        this.rows.forEach((row) => {
            row.isSelected = false;
        });
        // we need to clear selectedRow field because no one row selected
        this.selectedRows.clear();
    }
    selectRow(row, state) {
        row.isSelected = state;
        this.storeSelectedRow(row);
    }
    multipleSelectRow(row) {
        row.isSelected = !row.isSelected;
        this.storeSelectedRow(row);
        return row;
    }
    getSelectedRowsData() {
        return [...this.selectedRows];
    }
    createNewRow() {
        this.newRow = new Row(-1, {}, this);
        this.newRow.isInEditing = true;
    }
    /**
     * Create columns by mapping from the settings
     * @param settings
     * @private
     */
    createColumns(settings) {
        settings.forEach((columnSettings) => {
            this.columns.push(new Column(columnSettings.key, columnSettings, this));
        });
    }
    /**
     * Create rows based on current data prepared in data source
     * @private
     */
    createRows() {
        this.rows = [];
        this.data.forEach((el, index) => {
            const row = new Row(index, el, this);
            row.isSelected = this.selectedRows.has(row.getData());
            this.rows.push(row);
        });
    }
    get isAllSelected() {
        return this.rows.every((row) => row.isSelected);
    }
    storeSelectedRow(row) {
        if (row.isSelected) {
            this.selectedRows.add(row.getData());
        }
        else {
            this.selectedRows.delete(row.getData());
        }
    }
}

class Grid {
    constructor(source, settings) {
        this.createFormShown = false;
        this.onSelectRowSource = new Subject();
        this.onDeselectRowSource = new Subject();
        this.setSettings(settings);
        this.setSource(source);
    }
    detach() {
        if (this.sourceOnChangedSubscription) {
            this.sourceOnChangedSubscription.unsubscribe();
        }
        if (this.sourceOnUpdatedSubscription) {
            this.sourceOnUpdatedSubscription.unsubscribe();
        }
    }
    showActionColumn(position) {
        return this.isCurrentActionsPosition(position) && this.isActionsVisible();
    }
    isCurrentActionsPosition(position) {
        return position == this.getSetting("actions.position");
    }
    isActionsVisible() {
        return (this.getSetting("actions.add", false) ||
            this.getSetting("actions.edit", false) ||
            this.getSetting("actions.delete", false) ||
            !!this.getSetting("actions.custom", [])?.length);
    }
    isMultiSelectVisible() {
        return this.getSetting("selectMode") === "multi";
    }
    getNewRow() {
        return this.dataSet.newRow;
    }
    setSettings(settings) {
        this.settings = settings;
        this.dataSet = new DataSet([], this.getSetting("columns"));
        if (this.source) {
            this.source.refresh();
        }
    }
    getDataSet() {
        return this.dataSet;
    }
    setSource(source) {
        this.source = this.prepareSource(source);
        this.detach();
        this.sourceOnChangedSubscription = this.source
            .onChanged()
            .subscribe((changes) => this.processDataChange(changes));
        this.sourceOnUpdatedSubscription = this.source
            .onUpdated()
            .subscribe((data) => {
            const changedRow = this.dataSet.findRowByData(data);
            if (changedRow) {
                changedRow.setData(data);
            }
        });
    }
    getSetting(name, defaultValue) {
        return getDeepFromObject(this.settings, name, defaultValue);
    }
    getColumns() {
        return this.dataSet.getColumns();
    }
    getRows() {
        return this.dataSet.getRows();
    }
    selectRow(row, state) {
        this.dataSet.selectRow(row, state);
    }
    multipleSelectRow(row) {
        this.dataSet.multipleSelectRow(row);
    }
    onSelectRow() {
        return this.onSelectRowSource.asObservable();
    }
    onDeselectRow() {
        return this.onDeselectRowSource.asObservable();
    }
    edit(row) {
        row.isInEditing = true;
    }
    create(row, confirmEmitter) {
        row.pending = true;
        const deferred = new Deferred();
        deferred.promise
            .then((newData) => {
            row.pending = false;
            newData = newData ? newData : row.getNewData();
            this.source.prepend(newData).then(() => {
                this.createFormShown = false;
                this.dataSet.createNewRow();
            });
        })
            .catch((err) => {
            row.pending = false;
        });
        if (this.getSetting("add.confirmCreate")) {
            confirmEmitter.emit({
                newData: row.getNewData(),
                source: this.source,
                confirm: deferred,
            });
        }
        else {
            deferred.resolve(false);
        }
    }
    save(row, confirmEmitter) {
        row.pending = true;
        const deferred = new Deferred();
        deferred.promise
            .then((newData) => {
            row.pending = false;
            newData = newData ? newData : row.getNewData();
            this.source.update(row.getData(), newData).then(() => {
                row.isInEditing = false;
            });
        })
            .catch((err) => {
            row.pending = false;
        });
        if (this.getSetting("edit.confirmSave")) {
            confirmEmitter.emit({
                data: row.getData(),
                newData: row.getNewData(),
                source: this.source,
                confirm: deferred,
            });
        }
        else {
            deferred.resolve(false);
        }
    }
    delete(row, confirmEmitter) {
        row.pending = true;
        const deferred = new Deferred();
        deferred.promise
            .then(() => {
            row.pending = false;
            this.source.remove(row.getData());
        })
            .catch((err) => {
            row.pending = false;
            // doing nothing
        });
        if (this.getSetting("delete.confirmDelete")) {
            confirmEmitter.emit({
                data: row.getData(),
                source: this.source,
                confirm: deferred,
            });
        }
        else {
            deferred.resolve(false);
        }
        if (row.isSelected) {
            this.dataSet.selectRow(row, false);
        }
    }
    processDataChange(changes) {
        if (this.shouldProcessChange(changes)) {
            if (changes["action"] === "load") {
                this.dataSet.deselectAll();
            }
            this.dataSet.setData(changes["elements"]);
        }
    }
    shouldProcessChange(changes) {
        if (["filter", "sort", "page", "remove", "refresh", "load", "paging"].indexOf(changes["action"]) !== -1) {
            return true;
        }
        else if (["prepend", "append"].indexOf(changes["action"]) !== -1 &&
            !this.getSetting("pager.display")) {
            return true;
        }
        return false;
    }
    prepareSource(source) {
        const initialSort = this.getInitialSort();
        if (initialSort) {
            source.setSort([initialSort], false);
        }
        if (this.getSetting("pager.display") === true) {
            source.setPaging(1, this.getSetting("pager.perPage"), false);
        }
        source.refresh();
        return source;
    }
    getInitialSort() {
        const defaultSortColumn = this.getColumns().find((column) => column.isSortable && column.defaultSortDirection);
        if (!defaultSortColumn) {
            return false;
        }
        return {
            field: defaultSortColumn.id,
            direction: defaultSortColumn.defaultSortDirection || "asc",
            compare: defaultSortColumn.getCompareFunction(),
        };
    }
    getSelectedRowsData() {
        return this.dataSet.getRows();
    }
    selectAllRows(status) {
        this.dataSet.setSelectAll(status);
    }
    getFirstRow() {
        return this.dataSet.getFirstRow();
    }
    getLastRow() {
        return this.dataSet.getLastRow();
    }
}

class PagerComponent {
    constructor() {
        this.perPageSelect = [];
        this.changePage = new EventEmitter();
        this.currentPerPage = 0;
        this.pages = [];
        this.page = 1;
        this.count = 0;
        this.perPage = 0;
    }
    ngOnChanges(changes) {
        if (changes['source']) {
            if (!changes['source'].firstChange && this.dataChangedSub) {
                this.dataChangedSub.unsubscribe();
            }
            this.dataChangedSub = this.source.onChanged().subscribe((dataChanges) => {
                const paging = this.source.getPaging();
                if (paging) {
                    this.page = paging.page;
                    this.perPage = paging.perPage;
                }
                this.currentPerPage = this.perPage;
                this.count = this.source.count();
                if (this.isPageOutOfBounce()) {
                    this.source.setPage(--this.page);
                }
                this.processPageChange(dataChanges);
                this.initPages();
            });
        }
    }
    /**
     * We change the page here depending on the action performed against data source
     * if a new element was added to the end of the table - then change the page to the last
     * if a new element was added to the beginning of the table - then to the first page
     * @param changes
     */
    processPageChange(changes) {
        if (changes['action'] === 'prepend') {
            this.source.setPage(1);
        }
        if (changes['action'] === 'append') {
            this.source.setPage(this.getLast());
        }
    }
    shouldShow() {
        return this.source.count() > this.perPage;
    }
    paginate(page) {
        this.source.setPage(page);
        this.page = page;
        this.changePage.emit({ page });
        return false;
    }
    next() {
        return this.paginate(this.getPage() + 1);
    }
    prev() {
        return this.paginate(this.getPage() - 1);
    }
    getPage() {
        return this.page;
    }
    getPages() {
        return this.pages;
    }
    getLast() {
        return Math.ceil(this.count / this.perPage);
    }
    isPageOutOfBounce() {
        return (this.page * this.perPage) >= (this.count + this.perPage) && this.page > 1;
    }
    initPages() {
        const pagesCount = this.getLast();
        let showPagesCount = 4;
        showPagesCount = pagesCount < showPagesCount ? pagesCount : showPagesCount;
        this.pages = [];
        if (this.shouldShow()) {
            let middleOne = Math.ceil(showPagesCount / 2);
            middleOne = this.page >= middleOne ? this.page : middleOne;
            let lastOne = middleOne + Math.floor(showPagesCount / 2);
            lastOne = lastOne >= pagesCount ? pagesCount : lastOne;
            const firstOne = lastOne - showPagesCount + 1;
            for (let i = firstOne; i <= lastOne; i++) {
                this.pages.push(i);
            }
        }
    }
    onChangePerPage() {
        const paging = this.source.getPaging();
        if (paging) {
            paging.perPage = this.currentPerPage * 1;
        }
        this.source.refresh();
        this.initPages();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: PagerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.3.12", type: PagerComponent, selector: "ng2-smart-table-pager", inputs: { source: "source", perPageSelect: "perPageSelect" }, outputs: { changePage: "changePage" }, usesOnChanges: true, ngImport: i0, template: `
    @if (shouldShow()) {
      <nav class="ng2-smart-pagination-nav">
        <ul class="ng2-smart-pagination pagination">
          <li class="ng2-smart-page-item page-item" [ngClass]="{disabled: getPage() == 1}">
            <a class="ng2-smart-page-link page-link" href="#"
              (click)="getPage() == 1 ? false : paginate(1)" aria-label="First">
              <span aria-hidden="true">&laquo;</span>
              <span class="sr-only">First</span>
            </a>
          </li>
          <li class="ng2-smart-page-item page-item" [ngClass]="{disabled: getPage() == 1}">
            <a class="ng2-smart-page-link page-link page-link-prev" href="#"
              (click)="getPage() == 1 ? false : prev()" aria-label="Prev">
              <span aria-hidden="true">&lt;</span>
              <span class="sr-only">Prev</span>
            </a>
          </li>
          @for (page of getPages(); track page) {
            <li class="ng2-smart-page-item page-item"
              [ngClass]="{active: getPage() == page}">
              @if (getPage() == page) {
                <span class="ng2-smart-page-link page-link"
                  >{{ page }} <span class="sr-only">(current)</span></span>
                }
                @if (getPage() != page) {
                  <a class="ng2-smart-page-link page-link" href="#"
                  (click)="paginate(page)">{{ page }}</a>
                }
              </li>
            }
            <li class="ng2-smart-page-item page-item"
              [ngClass]="{disabled: getPage() == getLast()}">
              <a class="ng2-smart-page-link page-link page-link-next" href="#"
                (click)="getPage() == getLast() ? false : next()" aria-label="Next">
                <span aria-hidden="true">&gt;</span>
                <span class="sr-only">Next</span>
              </a>
            </li>
            <li class="ng2-smart-page-item page-item"
              [ngClass]="{disabled: getPage() == getLast()}">
              <a class="ng2-smart-page-link page-link" href="#"
                (click)="getPage() == getLast() ? false : paginate(getLast())" aria-label="Last">
                <span aria-hidden="true">&raquo;</span>
                <span class="sr-only">Last</span>
              </a>
            </li>
          </ul>
        </nav>
      }
    
      @if (perPageSelect && perPageSelect.length > 0) {
        <nav class="ng2-smart-pagination-per-page">
          <label for="per-page">
            Per Page:
          </label>
          <select (change)="onChangePerPage()" [(ngModel)]="currentPerPage" id="per-page">
            @for (item of perPageSelect; track item) {
              <option [value]="item">{{ item }}</option>
            }
          </select>
        </nav>
      }
    `, isInline: true, styles: [".ng2-smart-pagination{display:inline-flex;font-size:.875em;padding:0}.ng2-smart-pagination .sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.ng2-smart-pagination .ng2-smart-page-item{display:inline}.ng2-smart-pagination .page-link-next,.ng2-smart-pagination .page-link-prev{font-size:10px}:host{display:flex;justify-content:space-between}:host select{margin:1rem 0 1rem 1rem}:host label{margin:1rem 0 1rem 1rem;line-height:2.5rem}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.NgSelectOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i2.ɵNgSelectMultipleOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i2.SelectControlValueAccessor, selector: "select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]", inputs: ["compareWith"] }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: PagerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ng2-smart-table-pager', template: `
    @if (shouldShow()) {
      <nav class="ng2-smart-pagination-nav">
        <ul class="ng2-smart-pagination pagination">
          <li class="ng2-smart-page-item page-item" [ngClass]="{disabled: getPage() == 1}">
            <a class="ng2-smart-page-link page-link" href="#"
              (click)="getPage() == 1 ? false : paginate(1)" aria-label="First">
              <span aria-hidden="true">&laquo;</span>
              <span class="sr-only">First</span>
            </a>
          </li>
          <li class="ng2-smart-page-item page-item" [ngClass]="{disabled: getPage() == 1}">
            <a class="ng2-smart-page-link page-link page-link-prev" href="#"
              (click)="getPage() == 1 ? false : prev()" aria-label="Prev">
              <span aria-hidden="true">&lt;</span>
              <span class="sr-only">Prev</span>
            </a>
          </li>
          @for (page of getPages(); track page) {
            <li class="ng2-smart-page-item page-item"
              [ngClass]="{active: getPage() == page}">
              @if (getPage() == page) {
                <span class="ng2-smart-page-link page-link"
                  >{{ page }} <span class="sr-only">(current)</span></span>
                }
                @if (getPage() != page) {
                  <a class="ng2-smart-page-link page-link" href="#"
                  (click)="paginate(page)">{{ page }}</a>
                }
              </li>
            }
            <li class="ng2-smart-page-item page-item"
              [ngClass]="{disabled: getPage() == getLast()}">
              <a class="ng2-smart-page-link page-link page-link-next" href="#"
                (click)="getPage() == getLast() ? false : next()" aria-label="Next">
                <span aria-hidden="true">&gt;</span>
                <span class="sr-only">Next</span>
              </a>
            </li>
            <li class="ng2-smart-page-item page-item"
              [ngClass]="{disabled: getPage() == getLast()}">
              <a class="ng2-smart-page-link page-link" href="#"
                (click)="getPage() == getLast() ? false : paginate(getLast())" aria-label="Last">
                <span aria-hidden="true">&raquo;</span>
                <span class="sr-only">Last</span>
              </a>
            </li>
          </ul>
        </nav>
      }
    
      @if (perPageSelect && perPageSelect.length > 0) {
        <nav class="ng2-smart-pagination-per-page">
          <label for="per-page">
            Per Page:
          </label>
          <select (change)="onChangePerPage()" [(ngModel)]="currentPerPage" id="per-page">
            @for (item of perPageSelect; track item) {
              <option [value]="item">{{ item }}</option>
            }
          </select>
        </nav>
      }
    `, styles: [".ng2-smart-pagination{display:inline-flex;font-size:.875em;padding:0}.ng2-smart-pagination .sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.ng2-smart-pagination .ng2-smart-page-item{display:inline}.ng2-smart-pagination .page-link-next,.ng2-smart-pagination .page-link-prev{font-size:10px}:host{display:flex;justify-content:space-between}:host select{margin:1rem 0 1rem 1rem}:host label{margin:1rem 0 1rem 1rem;line-height:2.5rem}\n"] }]
        }], propDecorators: { source: [{
                type: Input
            }], perPageSelect: [{
                type: Input
            }], changePage: [{
                type: Output
            }] } });

class EditCellDefault {
    constructor() {
        this.inputClass = '';
        this.edited = new EventEmitter();
    }
    onEdited(event) {
        this.edited.next(event);
        return false;
    }
    onStopEditing() {
        this.cell.getRow().isInEditing = false;
        return false;
    }
    onClick(event) {
        event.stopPropagation();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: EditCellDefault, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: EditCellDefault, selector: "ng-component", inputs: { cell: "cell", inputClass: "inputClass" }, outputs: { edited: "edited" }, ngImport: i0, template: '', isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: EditCellDefault, decorators: [{
            type: Component,
            args: [{
                    template: ''
                }]
        }], propDecorators: { cell: [{
                type: Input
            }], inputClass: [{
                type: Input
            }], edited: [{
                type: Output
            }] } });

class CustomEditComponent extends EditCellDefault {
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

class CheckboxEditorComponent extends DefaultEditor {
    constructor() {
        super();
    }
    onChange(event) {
        const config = this.cell.getColumn().getConfig();
        const trueVal = (config && config?.true) || true;
        const falseVal = (config && config?.false) || false;
        this.cell.newValue = event.target.checked ? trueVal : falseVal;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: CheckboxEditorComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: CheckboxEditorComponent, selector: "checkbox-editor", usesInheritance: true, ngImport: i0, template: `
    <input [ngClass]="inputClass"
           type="checkbox"
           class="form-control"
           [name]="cell.getId()"
           [disabled]="!cell.isEditable()"
           [checked]="cell.getValue() === (cell.getColumn().getConfig()?.true || true)"
           (click)="onClick.emit($event)"
           (change)="onChange($event)">
    `, isInline: true, styles: [":host input,:host textarea{width:100%;line-height:normal;padding:.375em .75em}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: CheckboxEditorComponent, decorators: [{
            type: Component,
            args: [{ selector: 'checkbox-editor', template: `
    <input [ngClass]="inputClass"
           type="checkbox"
           class="form-control"
           [name]="cell.getId()"
           [disabled]="!cell.isEditable()"
           [checked]="cell.getValue() === (cell.getColumn().getConfig()?.true || true)"
           (click)="onClick.emit($event)"
           (change)="onChange($event)">
    `, styles: [":host input,:host textarea{width:100%;line-height:normal;padding:.375em .75em}\n"] }]
        }], ctorParameters: () => [] });

class InputEditorComponent extends DefaultEditor {
    constructor() {
        super();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: InputEditorComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: InputEditorComponent, selector: "input-editor", usesInheritance: true, ngImport: i0, template: `
    <input [ngClass]="inputClass"
           class="form-control"
           [(ngModel)]="cell.newValue"
           [name]="cell.getId()"
           [placeholder]="cell.getTitle()"
           [disabled]="!cell.isEditable()"
           (click)="onClick.emit($event)"
           (keydown.enter)="onEdited.emit($event)"
           (keydown.esc)="onStopEditing.emit()">
    `, isInline: true, styles: [":host input,:host textarea{width:100%;line-height:normal;padding:.375em .75em}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: InputEditorComponent, decorators: [{
            type: Component,
            args: [{ selector: 'input-editor', template: `
    <input [ngClass]="inputClass"
           class="form-control"
           [(ngModel)]="cell.newValue"
           [name]="cell.getId()"
           [placeholder]="cell.getTitle()"
           [disabled]="!cell.isEditable()"
           (click)="onClick.emit($event)"
           (keydown.enter)="onEdited.emit($event)"
           (keydown.esc)="onStopEditing.emit()">
    `, styles: [":host input,:host textarea{width:100%;line-height:normal;padding:.375em .75em}\n"] }]
        }], ctorParameters: () => [] });

class SelectEditorComponent extends DefaultEditor {
    constructor() {
        super();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SelectEditorComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.3.12", type: SelectEditorComponent, selector: "select-editor", usesInheritance: true, ngImport: i0, template: `
    <select [ngClass]="inputClass"
      class="form-control"
      [(ngModel)]="cell.newValue"
      [name]="cell.getId()"
      [disabled]="!cell.isEditable()"
      (click)="onClick.emit($event)"
      (keydown.enter)="onEdited.emit($event)"
      (keydown.esc)="onStopEditing.emit()">
    
      @for (option of cell.getColumn().getConfig()?.list; track option) {
        <option [value]="option.value"
          [selected]="option.value === cell.getValue()">{{ option.title }}
        </option>
      }
    </select>
    `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.NgSelectOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i2.ɵNgSelectMultipleOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i2.SelectControlValueAccessor, selector: "select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]", inputs: ["compareWith"] }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SelectEditorComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'select-editor',
                    template: `
    <select [ngClass]="inputClass"
      class="form-control"
      [(ngModel)]="cell.newValue"
      [name]="cell.getId()"
      [disabled]="!cell.isEditable()"
      (click)="onClick.emit($event)"
      (keydown.enter)="onEdited.emit($event)"
      (keydown.esc)="onStopEditing.emit()">
    
      @for (option of cell.getColumn().getConfig()?.list; track option) {
        <option [value]="option.value"
          [selected]="option.value === cell.getValue()">{{ option.title }}
        </option>
      }
    </select>
    `,
                }]
        }], ctorParameters: () => [] });

class TextareaEditorComponent extends DefaultEditor {
    constructor() {
        super();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: TextareaEditorComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: TextareaEditorComponent, selector: "textarea-editor", usesInheritance: true, ngImport: i0, template: `
    <textarea [ngClass]="inputClass"
              class="form-control"
              [(ngModel)]="cell.newValue"
              [name]="cell.getId()"
              [disabled]="!cell.isEditable()"
              [placeholder]="cell.getTitle()"
              (click)="onClick.emit($event)"
              (keydown.enter)="onEdited.emit($event)"
              (keydown.esc)="onStopEditing.emit()">
    </textarea>
    `, isInline: true, styles: [":host input,:host textarea{width:100%;line-height:normal;padding:.375em .75em}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: TextareaEditorComponent, decorators: [{
            type: Component,
            args: [{ selector: 'textarea-editor', template: `
    <textarea [ngClass]="inputClass"
              class="form-control"
              [(ngModel)]="cell.newValue"
              [name]="cell.getId()"
              [disabled]="!cell.isEditable()"
              [placeholder]="cell.getTitle()"
              (click)="onClick.emit($event)"
              (keydown.enter)="onEdited.emit($event)"
              (keydown.esc)="onStopEditing.emit()">
    </textarea>
    `, styles: [":host input,:host textarea{width:100%;line-height:normal;padding:.375em .75em}\n"] }]
        }], ctorParameters: () => [] });

class DefaultEditComponent extends EditCellDefault {
    constructor() {
        super();
    }
    getEditorType() {
        const editor = this.cell.getColumn().editor;
        if (editor) {
            return editor.type;
        }
        return 'text';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: DefaultEditComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.3.12", type: DefaultEditComponent, selector: "table-cell-default-editor", usesInheritance: true, ngImport: i0, template: "<div>\n  @switch (getEditorType()) {\n    @case ('list') {\n      <select-editor\n        [cell]=\"cell\"\n        [inputClass]=\"inputClass\"\n        (onClick)=\"onClick($event)\"\n        (onEdited)=\"onEdited($event)\"\n        (onStopEditing)=\"onStopEditing()\">\n      </select-editor>\n    }\n    @case ('textarea') {\n      <textarea-editor\n        [cell]=\"cell\"\n        [inputClass]=\"inputClass\"\n        (onClick)=\"onClick($event)\"\n        (onEdited)=\"onEdited($event)\"\n        (onStopEditing)=\"onStopEditing()\">\n      </textarea-editor>\n    }\n    @case ('checkbox') {\n      <checkbox-editor\n        [cell]=\"cell\"\n        [inputClass]=\"inputClass\"\n        (onClick)=\"onClick($event)\">\n      </checkbox-editor>\n    }\n    @default {\n      <input-editor\n        [cell]=\"cell\"\n        [inputClass]=\"inputClass\"\n        (onClick)=\"onClick($event)\"\n        (onEdited)=\"onEdited($event)\"\n        (onStopEditing)=\"onStopEditing()\">\n    </input-editor>\n  }\n}\n</div>", dependencies: [{ kind: "component", type: CheckboxEditorComponent, selector: "checkbox-editor" }, { kind: "component", type: InputEditorComponent, selector: "input-editor" }, { kind: "component", type: SelectEditorComponent, selector: "select-editor" }, { kind: "component", type: TextareaEditorComponent, selector: "textarea-editor" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: DefaultEditComponent, decorators: [{
            type: Component,
            args: [{ selector: 'table-cell-default-editor', template: "<div>\n  @switch (getEditorType()) {\n    @case ('list') {\n      <select-editor\n        [cell]=\"cell\"\n        [inputClass]=\"inputClass\"\n        (onClick)=\"onClick($event)\"\n        (onEdited)=\"onEdited($event)\"\n        (onStopEditing)=\"onStopEditing()\">\n      </select-editor>\n    }\n    @case ('textarea') {\n      <textarea-editor\n        [cell]=\"cell\"\n        [inputClass]=\"inputClass\"\n        (onClick)=\"onClick($event)\"\n        (onEdited)=\"onEdited($event)\"\n        (onStopEditing)=\"onStopEditing()\">\n      </textarea-editor>\n    }\n    @case ('checkbox') {\n      <checkbox-editor\n        [cell]=\"cell\"\n        [inputClass]=\"inputClass\"\n        (onClick)=\"onClick($event)\">\n      </checkbox-editor>\n    }\n    @default {\n      <input-editor\n        [cell]=\"cell\"\n        [inputClass]=\"inputClass\"\n        (onClick)=\"onClick($event)\"\n        (onEdited)=\"onEdited($event)\"\n        (onStopEditing)=\"onStopEditing()\">\n    </input-editor>\n  }\n}\n</div>" }]
        }], ctorParameters: () => [] });

class EditCellComponent {
    constructor() {
        this.inputClass = '';
        this.edited = new EventEmitter();
    }
    onEdited(event) {
        this.edited.next(event);
        return false;
    }
    getEditorType() {
        const editor = this.cell.getColumn().editor;
        if (editor) {
            return editor.type;
        }
        return 'text';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: EditCellComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.3.12", type: EditCellComponent, selector: "table-cell-edit-mode", inputs: { cell: "cell", inputClass: "inputClass" }, outputs: { edited: "edited" }, ngImport: i0, template: `
      <div>
        @switch (getEditorType()) {
          @case ('custom') {
            <table-cell-custom-editor
              [cell]="cell"
              [inputClass]="inputClass"
              (edited)="onEdited($event)">
            </table-cell-custom-editor>
          }
          @default {
            <table-cell-default-editor
              [cell]="cell"
              [inputClass]="inputClass"
              (edited)="onEdited($event)">
            </table-cell-default-editor>
          }
        }
      </div>
      `, isInline: true, dependencies: [{ kind: "component", type: CustomEditComponent, selector: "table-cell-custom-editor" }, { kind: "component", type: DefaultEditComponent, selector: "table-cell-default-editor" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: EditCellComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'table-cell-edit-mode',
                    template: `
      <div>
        @switch (getEditorType()) {
          @case ('custom') {
            <table-cell-custom-editor
              [cell]="cell"
              [inputClass]="inputClass"
              (edited)="onEdited($event)">
            </table-cell-custom-editor>
          }
          @default {
            <table-cell-default-editor
              [cell]="cell"
              [inputClass]="inputClass"
              (edited)="onEdited($event)">
            </table-cell-default-editor>
          }
        }
      </div>
      `,
                }]
        }], propDecorators: { cell: [{
                type: Input
            }], inputClass: [{
                type: Input
            }], edited: [{
                type: Output
            }] } });

class CustomViewComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: CustomViewComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: CustomViewComponent, selector: "custom-view-component", inputs: { cell: "cell" }, ngImport: i0, template: "<ng-template\n  *ngComponentOutlet=\"\n    cell.getColumn().renderComponent;\n    inputs: { rowData: cell.getRow().getData(), value: cell.getValue() }\n  \"\n></ng-template>\n", dependencies: [{ kind: "directive", type: i1.NgComponentOutlet, selector: "[ngComponentOutlet]", inputs: ["ngComponentOutlet", "ngComponentOutletInputs", "ngComponentOutletInjector", "ngComponentOutletContent", "ngComponentOutletNgModule", "ngComponentOutletNgModuleFactory"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: CustomViewComponent, decorators: [{
            type: Component,
            args: [{ selector: "custom-view-component", template: "<ng-template\n  *ngComponentOutlet=\"\n    cell.getColumn().renderComponent;\n    inputs: { rowData: cell.getRow().getData(), value: cell.getValue() }\n  \"\n></ng-template>\n" }]
        }], propDecorators: { cell: [{
                type: Input
            }] } });

class ViewCellComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: ViewCellComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.3.12", type: ViewCellComponent, selector: "table-cell-view-mode", inputs: { cell: "cell" }, ngImport: i0, template: `
    <div>
      @switch (cell.getColumn().type) {
        @case ('custom') {
          <custom-view-component [cell]="cell"></custom-view-component>
        }
        @case ('html') {
          <div [innerHTML]="cell.getValue()"></div>
        }
        @default {
          <div>{{ cell.getValue() }}</div>
        }
      }
    </div>
    `, isInline: true, dependencies: [{ kind: "component", type: CustomViewComponent, selector: "custom-view-component", inputs: ["cell"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: ViewCellComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'table-cell-view-mode',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: `
    <div>
      @switch (cell.getColumn().type) {
        @case ('custom') {
          <custom-view-component [cell]="cell"></custom-view-component>
        }
        @case ('html') {
          <div [innerHTML]="cell.getValue()"></div>
        }
        @default {
          <div>{{ cell.getValue() }}</div>
        }
      }
    </div>
    `,
                }]
        }], propDecorators: { cell: [{
                type: Input
            }] } });

class CellComponent {
    constructor() {
        this.inputClass = '';
        this.mode = 'inline';
        this.isInEditing = false;
        this.edited = new EventEmitter();
    }
    onEdited(event) {
        if (this.isNew) {
            this.grid.create(this.grid.getNewRow(), this.createConfirm);
        }
        else {
            this.grid.save(this.row, this.editConfirm);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: CellComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.3.12", type: CellComponent, selector: "ng2-smart-table-cell", inputs: { grid: "grid", row: "row", editConfirm: "editConfirm", createConfirm: "createConfirm", isNew: "isNew", cell: "cell", inputClass: "inputClass", mode: "mode", isInEditing: "isInEditing" }, outputs: { edited: "edited" }, ngImport: i0, template: `
    @if (!isInEditing) {
      <table-cell-view-mode [cell]="cell"></table-cell-view-mode>
    }
    @if (isInEditing) {
      <table-cell-edit-mode [cell]="cell"
        [inputClass]="inputClass"
        (edited)="onEdited($event)">
      </table-cell-edit-mode>
    }
    `, isInline: true, dependencies: [{ kind: "component", type: EditCellComponent, selector: "table-cell-edit-mode", inputs: ["cell", "inputClass"], outputs: ["edited"] }, { kind: "component", type: ViewCellComponent, selector: "table-cell-view-mode", inputs: ["cell"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: CellComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ng2-smart-table-cell',
                    template: `
    @if (!isInEditing) {
      <table-cell-view-mode [cell]="cell"></table-cell-view-mode>
    }
    @if (isInEditing) {
      <table-cell-edit-mode [cell]="cell"
        [inputClass]="inputClass"
        (edited)="onEdited($event)">
      </table-cell-edit-mode>
    }
    `,
                }]
        }], propDecorators: { grid: [{
                type: Input
            }], row: [{
                type: Input
            }], editConfirm: [{
                type: Input
            }], createConfirm: [{
                type: Input
            }], isNew: [{
                type: Input
            }], cell: [{
                type: Input
            }], inputClass: [{
                type: Input
            }], mode: [{
                type: Input
            }], isInEditing: [{
                type: Input
            }], edited: [{
                type: Output
            }] } });

class TbodyCreateCancelComponent {
    constructor() {
        this.cancelButtonContent = "";
        this.saveButtonContent = "";
    }
    onSave(event) {
        event.preventDefault();
        event.stopPropagation();
        this.grid.save(this.row, this.editConfirm);
    }
    onCancelEdit(event) {
        event.preventDefault();
        event.stopPropagation();
        this.editCancel.emit(true);
        this.row.isInEditing = false;
    }
    ngOnChanges() {
        this.saveButtonContent = this.grid.getSetting("edit.saveButtonContent", "save");
        this.cancelButtonContent = this.grid.getSetting("edit.cancelButtonContent", "cancel");
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: TbodyCreateCancelComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.3.12", type: TbodyCreateCancelComponent, selector: "ng2-st-tbody-create-cancel", inputs: { grid: "grid", row: "row", editConfirm: "editConfirm", editCancel: "editCancel" }, usesOnChanges: true, ngImport: i0, template: `
    @if (!row.pending) {
      <a
        href="#"
        [id]="'row-' + row.index + '_editing-confirm-button'"
        class="ng2-smart-action ng2-smart-action-edit-save"
        [innerHTML]="saveButtonContent"
        (click)="onSave($event)"
      ></a>
      <a
        href="#"
        [id]="'row-' + row.index + '_editing-cancel-button'"
        class="ng2-smart-action ng2-smart-action-edit-cancel"
        [innerHTML]="cancelButtonContent"
        (click)="onCancelEdit($event)"
      ></a>
    } @else {
      <div style="display: flex;">
        <svg
          (click)="$event.stopPropagation()"
          style="height: 2rem; width: 2rem;"
          version="1.1"
          id="L9"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 100 100"
          enable-background="new 0 0 0 0"
          xml:space="preserve"
          >
          <path
            fill="#e9e9e9"
            d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
            >
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              dur="1s"
              from="0 50 50"
              to="360 50 50"
              repeatCount="indefinite"
              />
          </path>
        </svg>
        <svg
          (click)="$event.stopPropagation()"
          style="height: 2rem; width: 2rem; "
          version="1.1"
          id="L9"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 100 100"
          enable-background="new 0 0 0 0"
          xml:space="preserve"
          >
          <path
            fill="#e9e9e9"
            d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
            >
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              dur="1s"
              from="0 50 50"
              to="360 50 50"
              repeatCount="indefinite"
              />
          </path>
        </svg>
      </div>
    }
    `, isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: TbodyCreateCancelComponent, decorators: [{
            type: Component,
            args: [{
                    selector: "ng2-st-tbody-create-cancel",
                    template: `
    @if (!row.pending) {
      <a
        href="#"
        [id]="'row-' + row.index + '_editing-confirm-button'"
        class="ng2-smart-action ng2-smart-action-edit-save"
        [innerHTML]="saveButtonContent"
        (click)="onSave($event)"
      ></a>
      <a
        href="#"
        [id]="'row-' + row.index + '_editing-cancel-button'"
        class="ng2-smart-action ng2-smart-action-edit-cancel"
        [innerHTML]="cancelButtonContent"
        (click)="onCancelEdit($event)"
      ></a>
    } @else {
      <div style="display: flex;">
        <svg
          (click)="$event.stopPropagation()"
          style="height: 2rem; width: 2rem;"
          version="1.1"
          id="L9"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 100 100"
          enable-background="new 0 0 0 0"
          xml:space="preserve"
          >
          <path
            fill="#e9e9e9"
            d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
            >
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              dur="1s"
              from="0 50 50"
              to="360 50 50"
              repeatCount="indefinite"
              />
          </path>
        </svg>
        <svg
          (click)="$event.stopPropagation()"
          style="height: 2rem; width: 2rem; "
          version="1.1"
          id="L9"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 100 100"
          enable-background="new 0 0 0 0"
          xml:space="preserve"
          >
          <path
            fill="#e9e9e9"
            d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
            >
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              dur="1s"
              from="0 50 50"
              to="360 50 50"
              repeatCount="indefinite"
              />
          </path>
        </svg>
      </div>
    }
    `,
                }]
        }], propDecorators: { grid: [{
                type: Input
            }], row: [{
                type: Input
            }], editConfirm: [{
                type: Input
            }], editCancel: [{
                type: Input
            }] } });

class TbodyEditDeleteComponent {
    constructor() {
        this.edit = new EventEmitter();
        this.delete = new EventEmitter();
        this.editRowSelect = new EventEmitter();
        this.isActionEdit = false;
        this.isActionDelete = false;
        this.editRowButtonContent = "";
        this.deleteRowButtonContent = "";
    }
    onEdit(event) {
        event.preventDefault();
        event.stopPropagation();
        this.editRowSelect.emit(this.row);
        this.edit.emit({
            data: this.row.getData(),
            source: this.source,
        });
        if (this.grid.getSetting("mode") !== "external") {
            this.grid.edit(this.row);
        }
    }
    onDelete(event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.grid.getSetting("mode") === "external") {
            this.delete.emit({
                data: this.row.getData(),
                source: this.source,
            });
        }
        else {
            this.grid.delete(this.row, this.deleteConfirm);
        }
    }
    ngOnChanges() {
        this.isActionEdit = this.grid.getSetting("actions.edit");
        this.isActionDelete = this.grid.getSetting("actions.delete");
        this.editRowButtonContent = this.grid.getSetting("edit.editButtonContent");
        this.deleteRowButtonContent = this.grid.getSetting("delete.deleteButtonContent");
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: TbodyEditDeleteComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.3.12", type: TbodyEditDeleteComponent, selector: "ng2-st-tbody-edit-delete", inputs: { grid: "grid", row: "row", source: "source", deleteConfirm: "deleteConfirm", editConfirm: "editConfirm" }, outputs: { edit: "edit", delete: "delete", editRowSelect: "editRowSelect" }, usesOnChanges: true, ngImport: i0, template: `
    @if (!row.pending) {
      @if (isActionEdit) {
        <a
          href="#"
          [id]="'row-' + row.index + '_action-edit-button'"
          class="ng2-smart-action ng2-smart-action-edit-edit"
          [innerHTML]="editRowButtonContent"
          (click)="onEdit($event)"
        ></a>
      }
      @if (isActionDelete) {
        <a
          href="#"
          [id]="'row-' + row.index + '_action-delete-button'"
          class="ng2-smart-action ng2-smart-action-delete-delete"
          [innerHTML]="deleteRowButtonContent"
          (click)="onDelete($event)"
        ></a>
      }
    } @else {
      <div style="display: flex;">
        @if (isActionEdit) {
          <svg
            (click)="$event.stopPropagation()"
            style="height: 2rem; width: 2rem;"
            version="1.1"
            id="L9"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 100 100"
            enable-background="new 0 0 0 0"
            xml:space="preserve"
            >
            <path
              fill="#e9e9e9"
              d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
              >
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                dur="1s"
                from="0 50 50"
                to="360 50 50"
                repeatCount="indefinite"
                />
            </path>
          </svg>
        }
        @if (isActionDelete) {
          <svg
            (click)="$event.stopPropagation()"
            style="height: 2rem; width: 2rem;"
            version="1.1"
            id="L9"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 100 100"
            enable-background="new 0 0 0 0"
            xml:space="preserve"
            >
            <path
              fill="#e9e9e9"
              d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
              >
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                dur="1s"
                from="0 50 50"
                to="360 50 50"
                repeatCount="indefinite"
                />
            </path>
          </svg>
        }
      </div>
    }
    `, isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: TbodyEditDeleteComponent, decorators: [{
            type: Component,
            args: [{
                    selector: "ng2-st-tbody-edit-delete",
                    template: `
    @if (!row.pending) {
      @if (isActionEdit) {
        <a
          href="#"
          [id]="'row-' + row.index + '_action-edit-button'"
          class="ng2-smart-action ng2-smart-action-edit-edit"
          [innerHTML]="editRowButtonContent"
          (click)="onEdit($event)"
        ></a>
      }
      @if (isActionDelete) {
        <a
          href="#"
          [id]="'row-' + row.index + '_action-delete-button'"
          class="ng2-smart-action ng2-smart-action-delete-delete"
          [innerHTML]="deleteRowButtonContent"
          (click)="onDelete($event)"
        ></a>
      }
    } @else {
      <div style="display: flex;">
        @if (isActionEdit) {
          <svg
            (click)="$event.stopPropagation()"
            style="height: 2rem; width: 2rem;"
            version="1.1"
            id="L9"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 100 100"
            enable-background="new 0 0 0 0"
            xml:space="preserve"
            >
            <path
              fill="#e9e9e9"
              d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
              >
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                dur="1s"
                from="0 50 50"
                to="360 50 50"
                repeatCount="indefinite"
                />
            </path>
          </svg>
        }
        @if (isActionDelete) {
          <svg
            (click)="$event.stopPropagation()"
            style="height: 2rem; width: 2rem;"
            version="1.1"
            id="L9"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 100 100"
            enable-background="new 0 0 0 0"
            xml:space="preserve"
            >
            <path
              fill="#e9e9e9"
              d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
              >
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                dur="1s"
                from="0 50 50"
                to="360 50 50"
                repeatCount="indefinite"
                />
            </path>
          </svg>
        }
      </div>
    }
    `,
                }]
        }], propDecorators: { grid: [{
                type: Input
            }], row: [{
                type: Input
            }], source: [{
                type: Input
            }], deleteConfirm: [{
                type: Input
            }], editConfirm: [{
                type: Input
            }], edit: [{
                type: Output
            }], delete: [{
                type: Output
            }], editRowSelect: [{
                type: Output
            }] } });

class TbodyCustomComponent {
    constructor() {
        this.custom = new EventEmitter();
    }
    onCustom(action) {
        this.custom.emit({
            action: action.name,
            data: this.row.getData(),
            source: this.source,
        });
    }
    customActions() {
        return this.grid.getSetting("actions.custom");
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: TbodyCustomComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.3.12", type: TbodyCustomComponent, selector: "ng2-st-tbody-custom", inputs: { grid: "grid", row: "row", source: "source" }, outputs: { custom: "custom" }, ngImport: i0, template: `
    @for (action of customActions(); track action) {
      <a
        [id]="'row-' + row.index + '_action-' + action.name + '-button'"
        href="#"
        class="ng2-smart-action ng2-smart-action-custom-custom"
        [innerHTML]="action.title"
        (click)="$event.stopPropagation(); $event.preventDefault(); onCustom(action)"
      ></a>
    }
    `, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: TbodyCustomComponent, decorators: [{
            type: Component,
            args: [{
                    selector: "ng2-st-tbody-custom",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: `
    @for (action of customActions(); track action) {
      <a
        [id]="'row-' + row.index + '_action-' + action.name + '-button'"
        href="#"
        class="ng2-smart-action ng2-smart-action-custom-custom"
        [innerHTML]="action.title"
        (click)="$event.stopPropagation(); $event.preventDefault(); onCustom(action)"
      ></a>
    }
    `,
                }]
        }], propDecorators: { grid: [{
                type: Input
            }], row: [{
                type: Input
            }], source: [{
                type: Input
            }], custom: [{
                type: Output
            }] } });

class Ng2SmartTableTbodyComponent {
    constructor() {
        this.rowClassFunction = () => '';
        this.save = new EventEmitter();
        this.cancel = new EventEmitter();
        this.edit = new EventEmitter();
        this.editCancel = new EventEmitter();
        this.delete = new EventEmitter();
        this.custom = new EventEmitter();
        this.edited = new EventEmitter();
        this.userSelectRow = new EventEmitter();
        this.userClickedRow = new EventEmitter();
        this.editRowSelect = new EventEmitter();
        this.multipleSelectRow = new EventEmitter();
        this.isMultiSelectVisible = false;
        this.showActionColumnLeft = false;
        this.showActionColumnRight = false;
        this.mode = 'inline';
        this.editInputClass = '';
        this.isActionAdd = false;
        this.isActionEdit = false;
        this.isActionDelete = false;
        this.noDataMessage = false;
    }
    get tableColumnsCount() {
        const actionColumns = this.isActionAdd || this.isActionEdit || this.isActionDelete ? 1 : 0;
        return this.grid.getColumns().length + actionColumns;
    }
    ngOnChanges() {
        this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
        this.showActionColumnLeft = this.grid.showActionColumn('left');
        this.mode = this.grid.getSetting('mode', 'inline');
        this.editInputClass = this.grid.getSetting('edit.inputClass', '');
        this.showActionColumnRight = this.grid.showActionColumn('right');
        this.isActionAdd = this.grid.getSetting('actions.add', false);
        this.isActionEdit = this.grid.getSetting('actions.edit', false);
        this.isActionDelete = this.grid.getSetting('actions.delete', false);
        this.noDataMessage = this.grid.getSetting('noDataMessage');
    }
    getVisibleCells(cells) {
        return (cells || []).filter((cell) => !cell.getColumn().hide);
    }
    trackByIdOrIndex(index, item) {
        return item?.id || index;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: Ng2SmartTableTbodyComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.3.12", type: Ng2SmartTableTbodyComponent, selector: "[ng2-st-tbody]", inputs: { grid: "grid", source: "source", deleteConfirm: "deleteConfirm", editConfirm: "editConfirm", rowClassFunction: "rowClassFunction" }, outputs: { save: "save", cancel: "cancel", edit: "edit", editCancel: "editCancel", delete: "delete", custom: "custom", edited: "edited", userSelectRow: "userSelectRow", userClickedRow: "userClickedRow", editRowSelect: "editRowSelect", multipleSelectRow: "multipleSelectRow" }, usesOnChanges: true, ngImport: i0, template: "@if (grid.getRows().length) { @for (row of grid.getRows(); track\ntrackByIdOrIndex($index, row)) {\n<tr\n  (click)=\"userClickedRow.emit(row)\"\n  class=\"ng2-smart-row\"\n  [className]=\"rowClassFunction(row)\"\n  [ngClass]=\"{ selected: row.isSelected }\"\n>\n  @if (isMultiSelectVisible) {\n  <td\n    class=\"ng2-smart-actions ng2-smart-action-multiple-select\"\n    (click)=\"$event.stopPropagation(); multipleSelectRow.emit(row)\"\n  >\n    <input\n      type=\"checkbox\"\n      [id]=\"'row-' + row.index + '_select-checkbox'\"\n      class=\"form-control\"\n      [ngModel]=\"row.isSelected\"\n    />\n  </td>\n  } @if (!row.isInEditing && showActionColumnLeft) {\n  <td class=\"ng2-smart-actions\" (click)=\"$event.stopPropagation()\">\n    <ng2-st-tbody-custom\n      [grid]=\"grid\"\n      (custom)=\"custom.emit($event)\"\n      [row]=\"row\"\n      [source]=\"source\"\n    ></ng2-st-tbody-custom>\n    <ng2-st-tbody-edit-delete\n      [grid]=\"grid\"\n      [deleteConfirm]=\"deleteConfirm\"\n      [editConfirm]=\"editConfirm\"\n      (edit)=\"edit.emit(row)\"\n      (delete)=\"delete.emit(row)\"\n      (editRowSelect)=\"editRowSelect.emit($event)\"\n      [row]=\"row\"\n      [source]=\"source\"\n    >\n    </ng2-st-tbody-edit-delete>\n  </td>\n  } @if (row.isInEditing && showActionColumnLeft) {\n  <td class=\"ng2-smart-actions\">\n    <ng2-st-tbody-create-cancel\n      [grid]=\"grid\"\n      [row]=\"row\"\n      [editConfirm]=\"editConfirm\"\n      [editCancel]=\"editCancel\"\n    ></ng2-st-tbody-create-cancel>\n  </td>\n  } @for (cell of getVisibleCells(row.cells); track cell) {\n  <td [ngClass]=\"cell.getColumnClass()\">\n    <ng2-smart-table-cell\n      [cell]=\"cell\"\n      [grid]=\"grid\"\n      [row]=\"row\"\n      [isNew]=\"false\"\n      [mode]=\"mode\"\n      [editConfirm]=\"editConfirm\"\n      [inputClass]=\"editInputClass\"\n      [isInEditing]=\"row.isInEditing\"\n    >\n    </ng2-smart-table-cell>\n  </td>\n  } @if (row.isInEditing && showActionColumnRight) {\n  <td class=\"ng2-smart-actions\">\n    <ng2-st-tbody-create-cancel\n      [grid]=\"grid\"\n      [row]=\"row\"\n      [editConfirm]=\"editConfirm\"\n    ></ng2-st-tbody-create-cancel>\n  </td>\n  } @if (!row.isInEditing && showActionColumnRight) {\n  <td class=\"ng2-smart-actions\">\n    <ng2-st-tbody-custom\n      [grid]=\"grid\"\n      (custom)=\"custom.emit($event)\"\n      [row]=\"row\"\n      [source]=\"source\"\n    ></ng2-st-tbody-custom>\n    <ng2-st-tbody-edit-delete\n      [grid]=\"grid\"\n      [deleteConfirm]=\"deleteConfirm\"\n      [editConfirm]=\"editConfirm\"\n      [row]=\"row\"\n      [source]=\"source\"\n      (edit)=\"edit.emit(row)\"\n      (delete)=\"delete.emit(row)\"\n      (editRowSelect)=\"editRowSelect.emit($event)\"\n    >\n    </ng2-st-tbody-edit-delete>\n  </td>\n  }\n</tr>\n} } @else {\n<tr>\n  <td [attr.colspan]=\"tableColumnsCount\">\n    {{ noDataMessage }}\n  </td>\n</tr>\n}\n", styles: [":host .ng2-smart-row.selected{background:#0000000d}:host .ng2-smart-row .ng2-smart-actions.ng2-smart-action-multiple-select{text-align:center}:host ::ng-deep ng2-st-tbody-edit-delete a:first-child,:host ::ng-deep ng2-st-tbody-create-cancel a:first-child{margin-right:.25rem}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.CheckboxControlValueAccessor, selector: "input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "component", type: CellComponent, selector: "ng2-smart-table-cell", inputs: ["grid", "row", "editConfirm", "createConfirm", "isNew", "cell", "inputClass", "mode", "isInEditing"], outputs: ["edited"] }, { kind: "component", type: TbodyCreateCancelComponent, selector: "ng2-st-tbody-create-cancel", inputs: ["grid", "row", "editConfirm", "editCancel"] }, { kind: "component", type: TbodyEditDeleteComponent, selector: "ng2-st-tbody-edit-delete", inputs: ["grid", "row", "source", "deleteConfirm", "editConfirm"], outputs: ["edit", "delete", "editRowSelect"] }, { kind: "component", type: TbodyCustomComponent, selector: "ng2-st-tbody-custom", inputs: ["grid", "row", "source"], outputs: ["custom"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: Ng2SmartTableTbodyComponent, decorators: [{
            type: Component,
            args: [{ selector: '[ng2-st-tbody]', template: "@if (grid.getRows().length) { @for (row of grid.getRows(); track\ntrackByIdOrIndex($index, row)) {\n<tr\n  (click)=\"userClickedRow.emit(row)\"\n  class=\"ng2-smart-row\"\n  [className]=\"rowClassFunction(row)\"\n  [ngClass]=\"{ selected: row.isSelected }\"\n>\n  @if (isMultiSelectVisible) {\n  <td\n    class=\"ng2-smart-actions ng2-smart-action-multiple-select\"\n    (click)=\"$event.stopPropagation(); multipleSelectRow.emit(row)\"\n  >\n    <input\n      type=\"checkbox\"\n      [id]=\"'row-' + row.index + '_select-checkbox'\"\n      class=\"form-control\"\n      [ngModel]=\"row.isSelected\"\n    />\n  </td>\n  } @if (!row.isInEditing && showActionColumnLeft) {\n  <td class=\"ng2-smart-actions\" (click)=\"$event.stopPropagation()\">\n    <ng2-st-tbody-custom\n      [grid]=\"grid\"\n      (custom)=\"custom.emit($event)\"\n      [row]=\"row\"\n      [source]=\"source\"\n    ></ng2-st-tbody-custom>\n    <ng2-st-tbody-edit-delete\n      [grid]=\"grid\"\n      [deleteConfirm]=\"deleteConfirm\"\n      [editConfirm]=\"editConfirm\"\n      (edit)=\"edit.emit(row)\"\n      (delete)=\"delete.emit(row)\"\n      (editRowSelect)=\"editRowSelect.emit($event)\"\n      [row]=\"row\"\n      [source]=\"source\"\n    >\n    </ng2-st-tbody-edit-delete>\n  </td>\n  } @if (row.isInEditing && showActionColumnLeft) {\n  <td class=\"ng2-smart-actions\">\n    <ng2-st-tbody-create-cancel\n      [grid]=\"grid\"\n      [row]=\"row\"\n      [editConfirm]=\"editConfirm\"\n      [editCancel]=\"editCancel\"\n    ></ng2-st-tbody-create-cancel>\n  </td>\n  } @for (cell of getVisibleCells(row.cells); track cell) {\n  <td [ngClass]=\"cell.getColumnClass()\">\n    <ng2-smart-table-cell\n      [cell]=\"cell\"\n      [grid]=\"grid\"\n      [row]=\"row\"\n      [isNew]=\"false\"\n      [mode]=\"mode\"\n      [editConfirm]=\"editConfirm\"\n      [inputClass]=\"editInputClass\"\n      [isInEditing]=\"row.isInEditing\"\n    >\n    </ng2-smart-table-cell>\n  </td>\n  } @if (row.isInEditing && showActionColumnRight) {\n  <td class=\"ng2-smart-actions\">\n    <ng2-st-tbody-create-cancel\n      [grid]=\"grid\"\n      [row]=\"row\"\n      [editConfirm]=\"editConfirm\"\n    ></ng2-st-tbody-create-cancel>\n  </td>\n  } @if (!row.isInEditing && showActionColumnRight) {\n  <td class=\"ng2-smart-actions\">\n    <ng2-st-tbody-custom\n      [grid]=\"grid\"\n      (custom)=\"custom.emit($event)\"\n      [row]=\"row\"\n      [source]=\"source\"\n    ></ng2-st-tbody-custom>\n    <ng2-st-tbody-edit-delete\n      [grid]=\"grid\"\n      [deleteConfirm]=\"deleteConfirm\"\n      [editConfirm]=\"editConfirm\"\n      [row]=\"row\"\n      [source]=\"source\"\n      (edit)=\"edit.emit(row)\"\n      (delete)=\"delete.emit(row)\"\n      (editRowSelect)=\"editRowSelect.emit($event)\"\n    >\n    </ng2-st-tbody-edit-delete>\n  </td>\n  }\n</tr>\n} } @else {\n<tr>\n  <td [attr.colspan]=\"tableColumnsCount\">\n    {{ noDataMessage }}\n  </td>\n</tr>\n}\n", styles: [":host .ng2-smart-row.selected{background:#0000000d}:host .ng2-smart-row .ng2-smart-actions.ng2-smart-action-multiple-select{text-align:center}:host ::ng-deep ng2-st-tbody-edit-delete a:first-child,:host ::ng-deep ng2-st-tbody-create-cancel a:first-child{margin-right:.25rem}\n"] }]
        }], propDecorators: { grid: [{
                type: Input
            }], source: [{
                type: Input
            }], deleteConfirm: [{
                type: Input
            }], editConfirm: [{
                type: Input
            }], rowClassFunction: [{
                type: Input
            }], save: [{
                type: Output
            }], cancel: [{
                type: Output
            }], edit: [{
                type: Output
            }], editCancel: [{
                type: Output
            }], delete: [{
                type: Output
            }], custom: [{
                type: Output
            }], edited: [{
                type: Output
            }], userSelectRow: [{
                type: Output
            }], userClickedRow: [{
                type: Output
            }], editRowSelect: [{
                type: Output
            }], multipleSelectRow: [{
                type: Output
            }] } });

class FilterDefault {
    constructor() {
        this.inputClass = '';
        this.query = '';
        this.filter = new EventEmitter();
    }
    onFilter(query) {
        this.source.addFilter({
            field: this.column.id,
            search: query,
            filter: this.column.getFilterFunction(),
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: FilterDefault, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: FilterDefault, selector: "ng-component", inputs: { column: "column", source: "source", inputClass: "inputClass", query: "query" }, outputs: { filter: "filter" }, ngImport: i0, template: '', isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: FilterDefault, decorators: [{
            type: Component,
            args: [{
                    template: '',
                }]
        }], propDecorators: { column: [{
                type: Input
            }], source: [{
                type: Input
            }], inputClass: [{
                type: Input
            }], query: [{
                type: Input
            }], filter: [{
                type: Output
            }] } });

class CheckboxFilterComponent extends DefaultFilter {
    constructor() {
        super();
        this.filterActive = false;
        this.inputControl = new UntypedFormControl();
    }
    ngOnInit() {
        this.changesSubscription = this.inputControl.valueChanges
            .pipe(debounceTime(this.delay))
            .subscribe((checked) => {
            this.filterActive = true;
            const trueVal = (this.column.getFilterConfig() && this.column.getFilterConfig().true) || true;
            const falseVal = (this.column.getFilterConfig() && this.column.getFilterConfig().false) || false;
            this.query = checked ? trueVal : falseVal;
            this.setFilter();
        });
    }
    resetFilter(event) {
        event.preventDefault();
        this.query = '';
        this.inputControl.setValue(false, { emitEvent: false });
        this.filterActive = false;
        this.setFilter();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: CheckboxFilterComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.3.12", type: CheckboxFilterComponent, selector: "checkbox-filter", usesInheritance: true, ngImport: i0, template: `
    <input type="checkbox" [formControl]="inputControl" [ngClass]="inputClass" class="form-control">
    @if (filterActive) {
      <a href="#"
      (click)="resetFilter($event)">{{column.getFilterConfig()?.resetText || 'reset'}}</a>
    }
    `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.CheckboxControlValueAccessor, selector: "input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: CheckboxFilterComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'checkbox-filter',
                    template: `
    <input type="checkbox" [formControl]="inputControl" [ngClass]="inputClass" class="form-control">
    @if (filterActive) {
      <a href="#"
      (click)="resetFilter($event)">{{column.getFilterConfig()?.resetText || 'reset'}}</a>
    }
    `,
                }]
        }], ctorParameters: () => [] });

class InputFilterComponent extends DefaultFilter {
    constructor() {
        super();
        this.inputControl = new UntypedFormControl();
    }
    ngOnInit() {
        if (this.query) {
            this.inputControl.setValue(this.query);
        }
        this.inputControl.valueChanges
            .pipe(distinctUntilChanged(), debounceTime(this.delay))
            .subscribe((value) => {
            this.query = this.inputControl.value;
            this.setFilter();
        });
    }
    ngOnChanges(changes) {
        if (changes?.['query']) {
            this.inputControl.setValue(this.query);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: InputFilterComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: InputFilterComponent, selector: "input-filter", usesInheritance: true, usesOnChanges: true, ngImport: i0, template: `
    <input
      [ngClass]="inputClass"
      [formControl]="inputControl"
      class="form-control"
      type="text"
      placeholder="{{ column.title }}"/>
  `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: InputFilterComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'input-filter',
                    template: `
    <input
      [ngClass]="inputClass"
      [formControl]="inputControl"
      class="form-control"
      type="text"
      placeholder="{{ column.title }}"/>
  `,
                }]
        }], ctorParameters: () => [] });

class SelectFilterComponent extends DefaultFilter {
    constructor() {
        super();
    }
    ngOnInit() {
        if (this.inputControl.valueChanges) {
            this.inputControl.valueChanges
                .pipe(skip(1), distinctUntilChanged(), debounceTime(this.delay))
                .subscribe((value) => this.setFilter());
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SelectFilterComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.3.12", type: SelectFilterComponent, selector: "select-filter", viewQueries: [{ propertyName: "inputControl", first: true, predicate: ["inputControl"], descendants: true, read: NgControl, static: true }], usesInheritance: true, ngImport: i0, template: `
    <select [ngClass]="inputClass"
      class="form-control"
      #inputControl
      [(ngModel)]="query">
    
      <option value="">{{ column.getFilterConfig().selectText }}</option>
      @for (option of column.getFilterConfig().list; track option) {
        <option [value]="option.value">
          {{ option.title }}
        </option>
      }
    </select>
    `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.NgSelectOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i2.ɵNgSelectMultipleOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i2.SelectControlValueAccessor, selector: "select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]", inputs: ["compareWith"] }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SelectFilterComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'select-filter',
                    template: `
    <select [ngClass]="inputClass"
      class="form-control"
      #inputControl
      [(ngModel)]="query">
    
      <option value="">{{ column.getFilterConfig().selectText }}</option>
      @for (option of column.getFilterConfig().list; track option) {
        <option [value]="option.value">
          {{ option.title }}
        </option>
      }
    </select>
    `,
                }]
        }], ctorParameters: () => [], propDecorators: { inputControl: [{
                type: ViewChild,
                args: ['inputControl', { read: NgControl, static: true }]
            }] } });

class DefaultFilterComponent extends FilterDefault {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: DefaultFilterComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.3.12", type: DefaultFilterComponent, selector: "default-table-filter", usesInheritance: true, ngImport: i0, template: `
@switch (column.getFilterType()) {
  @case ('list') {
    <select-filter
      [query]="query"
      [ngClass]="inputClass"
      [column]="column"
      (filter)="onFilter($event)">
    </select-filter>
  }
  @case ('checkbox') {
    <checkbox-filter
      [query]="query"
      [ngClass]="inputClass"
      [column]="column"
      (filter)="onFilter($event)">
    </checkbox-filter>
  }
  @default {
    <input-filter
      [query]="query"
      [ngClass]="inputClass"
      [column]="column"
      (filter)="onFilter($event)">
  </input-filter>
}
}
`, isInline: true, dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "component", type: CheckboxFilterComponent, selector: "checkbox-filter" }, { kind: "component", type: InputFilterComponent, selector: "input-filter" }, { kind: "component", type: SelectFilterComponent, selector: "select-filter" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: DefaultFilterComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'default-table-filter',
                    template: `
@switch (column.getFilterType()) {
  @case ('list') {
    <select-filter
      [query]="query"
      [ngClass]="inputClass"
      [column]="column"
      (filter)="onFilter($event)">
    </select-filter>
  }
  @case ('checkbox') {
    <checkbox-filter
      [query]="query"
      [ngClass]="inputClass"
      [column]="column"
      (filter)="onFilter($event)">
    </checkbox-filter>
  }
  @default {
    <input-filter
      [query]="query"
      [ngClass]="inputClass"
      [column]="column"
      (filter)="onFilter($event)">
  </input-filter>
}
}
`,
                }]
        }] });

class CustomFilterComponent extends FilterDefault {
    constructor(resolver) {
        super();
        this.resolver = resolver;
    }
    ngOnChanges(changes) {
        if (this.customComponent) {
            this.customComponent.instance.ngOnChanges(changes);
            return;
        }
        if (this.column.filter && this.column.filter.type === 'custom') {
            const componentFactory = this.resolver.resolveComponentFactory(this.column.filter?.component);
            this.customComponent = this.dynamicTarget.createComponent(componentFactory);
        }
        // set @Inputs and @Outputs of custom component
        this.customComponent.instance.query = this.query;
        this.customComponent.instance.column = this.column;
        this.customComponent.instance.source = this.source;
        this.customComponent.instance.inputClass = this.inputClass;
        this.customComponent.instance.filter.subscribe((event) => this.onFilter(event));
    }
    ngOnDestroy() {
        if (this.customComponent) {
            this.customComponent.destroy();
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: CustomFilterComponent, deps: [{ token: i0.ComponentFactoryResolver }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: CustomFilterComponent, selector: "custom-table-filter", viewQueries: [{ propertyName: "dynamicTarget", first: true, predicate: ["dynamicTarget"], descendants: true, read: ViewContainerRef, static: true }], usesInheritance: true, usesOnChanges: true, ngImport: i0, template: `<ng-template #dynamicTarget></ng-template>`, isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: CustomFilterComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'custom-table-filter',
                    template: `<ng-template #dynamicTarget></ng-template>`,
                }]
        }], ctorParameters: () => [{ type: i0.ComponentFactoryResolver }], propDecorators: { dynamicTarget: [{
                type: ViewChild,
                args: ['dynamicTarget', { read: ViewContainerRef, static: true }]
            }] } });

class FilterComponent extends FilterDefault {
    ngOnChanges(changes) {
        if (changes['source']) {
            if (!changes['source'].firstChange && this.dataChangedSub) {
                this.dataChangedSub.unsubscribe();
            }
            this.dataChangedSub = this.source.onChanged().subscribe((dataChanges) => {
                const filterConf = this.source.getFilter();
                if (filterConf && filterConf.filters && filterConf.filters.length === 0) {
                    this.query = '';
                    // add a check for existing filters an set the query if one exists for this column
                    // this covers instances where the filter is set by user code while maintaining existing functionality
                }
                else if (filterConf && filterConf.filters && filterConf.filters.length > 0) {
                    filterConf.filters.forEach((k, v) => {
                        if (k.field == this.column.id) {
                            this.query = k.search;
                        }
                    });
                }
            });
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: FilterComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.3.12", type: FilterComponent, selector: "ng2-smart-table-filter", usesInheritance: true, usesOnChanges: true, ngImport: i0, template: `
      @if (column.isFilterable) {
        <div class="ng2-smart-filter">
          @switch (column.getFilterType()) {
            @case ('custom') {
              <custom-table-filter
                [query]="query"
                [column]="column"
                [source]="source"
                [inputClass]="inputClass"
                (filter)="onFilter($event)">
              </custom-table-filter>
            }
            @default {
              <default-table-filter
                [query]="query"
                [column]="column"
                [source]="source"
                [inputClass]="inputClass"
                (filter)="onFilter($event)">
              </default-table-filter>
            }
          }
        </div>
      }
      `, isInline: true, styles: [":host .ng2-smart-filter ::ng-deep input,:host .ng2-smart-filter ::ng-deep select{width:100%;line-height:normal;padding:.375em .75em;font-weight:400}:host .ng2-smart-filter ::ng-deep input[type=search]{box-sizing:inherit}:host .ng2-smart-filter ::ng-deep .completer-dropdown-holder{font-weight:400}:host .ng2-smart-filter ::ng-deep a{font-weight:400}\n"], dependencies: [{ kind: "component", type: DefaultFilterComponent, selector: "default-table-filter" }, { kind: "component", type: CustomFilterComponent, selector: "custom-table-filter" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: FilterComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ng2-smart-table-filter', template: `
      @if (column.isFilterable) {
        <div class="ng2-smart-filter">
          @switch (column.getFilterType()) {
            @case ('custom') {
              <custom-table-filter
                [query]="query"
                [column]="column"
                [source]="source"
                [inputClass]="inputClass"
                (filter)="onFilter($event)">
              </custom-table-filter>
            }
            @default {
              <default-table-filter
                [query]="query"
                [column]="column"
                [source]="source"
                [inputClass]="inputClass"
                (filter)="onFilter($event)">
              </default-table-filter>
            }
          }
        </div>
      }
      `, styles: [":host .ng2-smart-filter ::ng-deep input,:host .ng2-smart-filter ::ng-deep select{width:100%;line-height:normal;padding:.375em .75em;font-weight:400}:host .ng2-smart-filter ::ng-deep input[type=search]{box-sizing:inherit}:host .ng2-smart-filter ::ng-deep .completer-dropdown-holder{font-weight:400}:host .ng2-smart-filter ::ng-deep a{font-weight:400}\n"] }]
        }] });

class AddButtonComponent {
    constructor(ref) {
        this.ref = ref;
        this.create = new EventEmitter();
        this.isActionAdd = false;
        this.addNewButtonContent = '';
    }
    ngAfterViewInit() {
        this.ref.nativeElement.classList.add('ng2-smart-actions-title', 'ng2-smart-actions-title-add');
    }
    ngOnChanges() {
        this.isActionAdd = this.grid.getSetting('actions.add');
        this.addNewButtonContent = this.grid.getSetting('add.addButtonContent');
    }
    onAdd(event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.grid.getSetting('mode') === 'external') {
            this.create.emit({
                source: this.source,
            });
        }
        else {
            this.grid.createFormShown = true;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: AddButtonComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.3.12", type: AddButtonComponent, selector: "[ng2-st-add-button]", inputs: { grid: "grid", source: "source" }, outputs: { create: "create" }, usesOnChanges: true, ngImport: i0, template: `
    @if (isActionAdd) {
      <a href="#" class="ng2-smart-action ng2-smart-action-add-add"
      [innerHTML]="addNewButtonContent" (click)="onAdd($event)"></a>
    }
    `, isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: AddButtonComponent, decorators: [{
            type: Component,
            args: [{
                    selector: '[ng2-st-add-button]',
                    template: `
    @if (isActionAdd) {
      <a href="#" class="ng2-smart-action ng2-smart-action-add-add"
      [innerHTML]="addNewButtonContent" (click)="onAdd($event)"></a>
    }
    `,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }], propDecorators: { grid: [{
                type: Input
            }], source: [{
                type: Input
            }], create: [{
                type: Output
            }] } });

class TheadFitlersRowComponent {
    constructor() {
        this.create = new EventEmitter();
        this.filter = new EventEmitter();
        this.isMultiSelectVisible = false;
        this.showActionColumnLeft = false;
        this.showActionColumnRight = false;
        this.filterInputClass = '';
    }
    ngOnChanges() {
        this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
        this.showActionColumnLeft = this.grid.showActionColumn('left');
        this.showActionColumnRight = this.grid.showActionColumn('right');
        this.filterInputClass = this.grid.getSetting('filter.inputClass', '');
    }
    getVisibleColumns(columns) {
        return (columns || []).filter((column) => !column.hide);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: TheadFitlersRowComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.3.12", type: TheadFitlersRowComponent, selector: "[ng2-st-thead-filters-row]", inputs: { grid: "grid", source: "source" }, outputs: { create: "create", filter: "filter" }, usesOnChanges: true, ngImport: i0, template: `
    @if (isMultiSelectVisible) {
      <th></th>
    }
    @if (showActionColumnLeft) {
      <th ng2-st-add-button
        [grid]="grid"
        (create)="create.emit($event)">
      </th>
    }
    @for (column of getVisibleColumns(grid.getColumns()); track column) {
      <th class="ng2-smart-th {{ column.id }}">
        <ng2-smart-table-filter [source]="source"
          [column]="column"
          [inputClass]="filterInputClass"
          (filter)="filter.emit($event)">
        </ng2-smart-table-filter>
      </th>
    }
    @if (showActionColumnRight) {
      <th ng2-st-add-button
        [grid]="grid"
        [source]="source"
        (create)="create.emit($event)">
      </th>
    }
    `, isInline: true, dependencies: [{ kind: "component", type: FilterComponent, selector: "ng2-smart-table-filter" }, { kind: "component", type: AddButtonComponent, selector: "[ng2-st-add-button]", inputs: ["grid", "source"], outputs: ["create"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: TheadFitlersRowComponent, decorators: [{
            type: Component,
            args: [{
                    selector: '[ng2-st-thead-filters-row]',
                    template: `
    @if (isMultiSelectVisible) {
      <th></th>
    }
    @if (showActionColumnLeft) {
      <th ng2-st-add-button
        [grid]="grid"
        (create)="create.emit($event)">
      </th>
    }
    @for (column of getVisibleColumns(grid.getColumns()); track column) {
      <th class="ng2-smart-th {{ column.id }}">
        <ng2-smart-table-filter [source]="source"
          [column]="column"
          [inputClass]="filterInputClass"
          (filter)="filter.emit($event)">
        </ng2-smart-table-filter>
      </th>
    }
    @if (showActionColumnRight) {
      <th ng2-st-add-button
        [grid]="grid"
        [source]="source"
        (create)="create.emit($event)">
      </th>
    }
    `,
                }]
        }], propDecorators: { grid: [{
                type: Input
            }], source: [{
                type: Input
            }], create: [{
                type: Output
            }], filter: [{
                type: Output
            }] } });

class ActionsComponent {
    constructor() {
        this.create = new EventEmitter();
        this.createButtonContent = '';
        this.cancelButtonContent = '';
    }
    ngOnChanges() {
        this.createButtonContent = this.grid.getSetting('add.createButtonContent');
        this.cancelButtonContent = this.grid.getSetting('add.cancelButtonContent');
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: ActionsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: ActionsComponent, selector: "ng2-st-actions", inputs: { grid: "grid" }, outputs: { create: "create" }, usesOnChanges: true, ngImport: i0, template: `
    <a href="#" class="ng2-smart-action ng2-smart-action-add-create"
        [innerHTML]="createButtonContent"
        (click)="$event.preventDefault();create.emit($event)"></a>
    <a href="#" class="ng2-smart-action ng2-smart-action-add-cancel"
        [innerHTML]="cancelButtonContent"
        (click)="$event.preventDefault();grid.createFormShown = false;"></a>
  `, isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: ActionsComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ng2-st-actions',
                    template: `
    <a href="#" class="ng2-smart-action ng2-smart-action-add-create"
        [innerHTML]="createButtonContent"
        (click)="$event.preventDefault();create.emit($event)"></a>
    <a href="#" class="ng2-smart-action ng2-smart-action-add-cancel"
        [innerHTML]="cancelButtonContent"
        (click)="$event.preventDefault();grid.createFormShown = false;"></a>
  `,
                }]
        }], propDecorators: { grid: [{
                type: Input
            }], create: [{
                type: Output
            }] } });

class TheadFormRowComponent {
    constructor() {
        this.create = new EventEmitter();
        this.isMultiSelectVisible = false;
        this.showActionColumnLeft = false;
        this.showActionColumnRight = false;
        this.addInputClass = "";
    }
    onCreate(event) {
        event.stopPropagation();
        this.grid.create(this.grid.getNewRow(), this.createConfirm);
    }
    ngOnChanges() {
        this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
        this.showActionColumnLeft = this.grid.showActionColumn("left");
        this.showActionColumnRight = this.grid.showActionColumn("right");
        this.addInputClass = this.grid.getSetting("add.inputClass", "");
    }
    getVisibleCells(cells) {
        return (cells || []).filter((cell) => !cell.getColumn().hide);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: TheadFormRowComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.3.12", type: TheadFormRowComponent, selector: "[ng2-st-thead-form-row]", inputs: { grid: "grid", row: "row", createConfirm: "createConfirm" }, outputs: { create: "create" }, usesOnChanges: true, ngImport: i0, template: `
    @if (grid.isMultiSelectVisible()) {
    <td></td>
    } @if (showActionColumnLeft) {
    <td class="ng2-smart-actions">
      <ng2-st-actions
        [grid]="grid"
        (create)="onCreate($event)"
      ></ng2-st-actions>
    </td>
    } @for (cell of getVisibleCells(grid.getNewRow().getCells()); track cell) {
    <td>
      <ng2-smart-table-cell
        [cell]="cell"
        [grid]="grid"
        [isNew]="true"
        [createConfirm]="createConfirm"
        [inputClass]="addInputClass"
        [isInEditing]="grid.getNewRow().isInEditing"
        (edited)="onCreate($event)"
      >
      </ng2-smart-table-cell>
    </td>
    } @if (showActionColumnRight) {
    <td class="ng2-smart-actions">
      <ng2-st-actions
        [grid]="grid"
        (create)="onCreate($event)"
      ></ng2-st-actions>
    </td>
    }
  `, isInline: true, dependencies: [{ kind: "component", type: CellComponent, selector: "ng2-smart-table-cell", inputs: ["grid", "row", "editConfirm", "createConfirm", "isNew", "cell", "inputClass", "mode", "isInEditing"], outputs: ["edited"] }, { kind: "component", type: ActionsComponent, selector: "ng2-st-actions", inputs: ["grid"], outputs: ["create"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: TheadFormRowComponent, decorators: [{
            type: Component,
            args: [{
                    selector: "[ng2-st-thead-form-row]",
                    template: `
    @if (grid.isMultiSelectVisible()) {
    <td></td>
    } @if (showActionColumnLeft) {
    <td class="ng2-smart-actions">
      <ng2-st-actions
        [grid]="grid"
        (create)="onCreate($event)"
      ></ng2-st-actions>
    </td>
    } @for (cell of getVisibleCells(grid.getNewRow().getCells()); track cell) {
    <td>
      <ng2-smart-table-cell
        [cell]="cell"
        [grid]="grid"
        [isNew]="true"
        [createConfirm]="createConfirm"
        [inputClass]="addInputClass"
        [isInEditing]="grid.getNewRow().isInEditing"
        (edited)="onCreate($event)"
      >
      </ng2-smart-table-cell>
    </td>
    } @if (showActionColumnRight) {
    <td class="ng2-smart-actions">
      <ng2-st-actions
        [grid]="grid"
        (create)="onCreate($event)"
      ></ng2-st-actions>
    </td>
    }
  `,
                }]
        }], propDecorators: { grid: [{
                type: Input
            }], row: [{
                type: Input
            }], createConfirm: [{
                type: Input
            }], create: [{
                type: Output
            }] } });

class ActionsTitleComponent {
    constructor(ref) {
        this.ref = ref;
        this.actionsColumnTitle = '';
    }
    ngAfterViewInit() {
        this.ref.nativeElement.classList.add('ng2-smart-actions');
    }
    ngOnChanges() {
        this.actionsColumnTitle = this.grid.getSetting('actions.columnTitle');
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: ActionsTitleComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: ActionsTitleComponent, selector: "[ng2-st-actions-title]", inputs: { grid: "grid" }, usesOnChanges: true, ngImport: i0, template: `
    <div class="ng2-smart-title">{{ actionsColumnTitle }}</div>
  `, isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: ActionsTitleComponent, decorators: [{
            type: Component,
            args: [{
                    selector: '[ng2-st-actions-title]',
                    template: `
    <div class="ng2-smart-title">{{ actionsColumnTitle }}</div>
  `,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }], propDecorators: { grid: [{
                type: Input
            }] } });

class CheckboxSelectAllComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: CheckboxSelectAllComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: CheckboxSelectAllComponent, selector: "[ng2-st-checkbox-select-all]", inputs: { grid: "grid", source: "source" }, ngImport: i0, template: `
    <input type="checkbox" [ngModel]="this.grid.dataSet.isAllSelected">
  `, isInline: true, dependencies: [{ kind: "directive", type: i2.CheckboxControlValueAccessor, selector: "input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: CheckboxSelectAllComponent, decorators: [{
            type: Component,
            args: [{
                    selector: '[ng2-st-checkbox-select-all]',
                    template: `
    <input type="checkbox" [ngModel]="this.grid.dataSet.isAllSelected">
  `,
                }]
        }], propDecorators: { grid: [{
                type: Input
            }], source: [{
                type: Input
            }] } });

class TitleComponent {
    constructor() {
        this.currentDirection = '';
        this.sort = new EventEmitter();
        this.dataChangedSub = false;
    }
    ngOnChanges(changes) {
        if (changes['source']) {
            if (!changes['source'].firstChange && this.dataChangedSub) {
                this.dataChangedSub.unsubscribe();
            }
            this.dataChangedSub = this.source.onChanged().subscribe((dataChanges) => {
                const sortConf = this.source.getSort();
                if (sortConf.length > 0 && sortConf[0]['field'] === this.column.id) {
                    this.currentDirection = sortConf[0]['direction'];
                }
                else {
                    this.currentDirection = '';
                }
            });
        }
    }
    _sort(event) {
        event.preventDefault();
        this.changeSortDirection();
        this.source.setSort([
            {
                field: this.column.id,
                direction: this.currentDirection === 'desc' ? 'desc' : 'asc',
                compare: this.column.getCompareFunction(),
            },
        ]);
        this.sort.emit(null);
    }
    changeSortDirection() {
        if (this.currentDirection) {
            const newDirection = this.currentDirection === 'asc' ? 'desc' : 'asc';
            this.currentDirection = newDirection;
        }
        else {
            this.currentDirection = this.column.sortDirection;
        }
        return this.currentDirection;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: TitleComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.3.12", type: TitleComponent, selector: "ng2-smart-table-title", inputs: { column: "column", source: "source" }, outputs: { sort: "sort" }, usesOnChanges: true, ngImport: i0, template: `
    @if (column.isSortable) {
      <a href="#"
        (click)="_sort($event)"
        class="ng2-smart-sort-link sort"
        [ngClass]="currentDirection">
        {{ column.title }}
      </a>
    }
    @if (!column.isSortable) {
      <span class="ng2-smart-sort">{{ column.title }}</span>
    }
    `, isInline: true, styles: ["a.sort.asc,a.sort.desc{font-weight:700}a.sort.asc:after,a.sort.desc:after{content:\"\";display:inline-block;width:0;height:0;border-bottom:4px solid rgba(0,0,0,.3);border-top:4px solid transparent;border-left:4px solid transparent;border-right:4px solid transparent;margin-bottom:2px}a.sort.desc:after{-webkit-transform:rotate(-180deg);transform:rotate(-180deg);margin-bottom:-2px}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: TitleComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ng2-smart-table-title', template: `
    @if (column.isSortable) {
      <a href="#"
        (click)="_sort($event)"
        class="ng2-smart-sort-link sort"
        [ngClass]="currentDirection">
        {{ column.title }}
      </a>
    }
    @if (!column.isSortable) {
      <span class="ng2-smart-sort">{{ column.title }}</span>
    }
    `, styles: ["a.sort.asc,a.sort.desc{font-weight:700}a.sort.asc:after,a.sort.desc:after{content:\"\";display:inline-block;width:0;height:0;border-bottom:4px solid rgba(0,0,0,.3);border-top:4px solid transparent;border-left:4px solid transparent;border-right:4px solid transparent;margin-bottom:2px}a.sort.desc:after{-webkit-transform:rotate(-180deg);transform:rotate(-180deg);margin-bottom:-2px}\n"] }]
        }], propDecorators: { column: [{
                type: Input
            }], source: [{
                type: Input
            }], sort: [{
                type: Output
            }] } });

class ColumnTitleComponent {
    constructor() {
        this.sort = new EventEmitter();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: ColumnTitleComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: ColumnTitleComponent, selector: "ng2-st-column-title", inputs: { column: "column", source: "source" }, outputs: { sort: "sort" }, ngImport: i0, template: `
    <div class="ng2-smart-title">
      <ng2-smart-table-title [source]="source" [column]="column" (sort)="sort.emit($event)"></ng2-smart-table-title>
    </div>
  `, isInline: true, dependencies: [{ kind: "component", type: TitleComponent, selector: "ng2-smart-table-title", inputs: ["column", "source"], outputs: ["sort"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: ColumnTitleComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ng2-st-column-title',
                    template: `
    <div class="ng2-smart-title">
      <ng2-smart-table-title [source]="source" [column]="column" (sort)="sort.emit($event)"></ng2-smart-table-title>
    </div>
  `,
                }]
        }], propDecorators: { column: [{
                type: Input
            }], source: [{
                type: Input
            }], sort: [{
                type: Output
            }] } });

class TheadTitlesRowComponent {
    constructor() {
        this.sort = new EventEmitter();
        this.selectAllRows = new EventEmitter();
        this.isMultiSelectVisible = false;
        this.showActionColumnLeft = false;
        this.showActionColumnRight = false;
    }
    ngOnChanges() {
        this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
        this.showActionColumnLeft = this.grid.showActionColumn('left');
        this.showActionColumnRight = this.grid.showActionColumn('right');
    }
    getVisibleColumns(columns) {
        return (columns || []).filter((column) => !column.hide);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: TheadTitlesRowComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.3.12", type: TheadTitlesRowComponent, selector: "[ng2-st-thead-titles-row]", inputs: { grid: "grid", source: "source" }, outputs: { sort: "sort", selectAllRows: "selectAllRows" }, usesOnChanges: true, ngImport: i0, template: `
    @if (isMultiSelectVisible) {
      <th ng2-st-checkbox-select-all
        [grid]="grid"
        [source]="source"
        (click)="selectAllRows.emit($event)">
      </th>
    }
    @if (showActionColumnLeft) {
      <th ng2-st-actions-title [grid]="grid"></th>
    }
    @for (column of getVisibleColumns(grid.getColumns()); track column) {
      <th
        class="ng2-smart-th {{ column.id }}"
        [ngClass]="column.class"
        [style.width]="column.width">
        <ng2-st-column-title [source]="source" [column]="column" (sort)="sort.emit($event)"></ng2-st-column-title>
      </th>
    }
    @if (showActionColumnRight) {
      <th ng2-st-actions-title [grid]="grid"></th>
    }
    `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "component", type: ActionsTitleComponent, selector: "[ng2-st-actions-title]", inputs: ["grid"] }, { kind: "component", type: CheckboxSelectAllComponent, selector: "[ng2-st-checkbox-select-all]", inputs: ["grid", "source"] }, { kind: "component", type: ColumnTitleComponent, selector: "ng2-st-column-title", inputs: ["column", "source"], outputs: ["sort"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: TheadTitlesRowComponent, decorators: [{
            type: Component,
            args: [{
                    selector: '[ng2-st-thead-titles-row]',
                    template: `
    @if (isMultiSelectVisible) {
      <th ng2-st-checkbox-select-all
        [grid]="grid"
        [source]="source"
        (click)="selectAllRows.emit($event)">
      </th>
    }
    @if (showActionColumnLeft) {
      <th ng2-st-actions-title [grid]="grid"></th>
    }
    @for (column of getVisibleColumns(grid.getColumns()); track column) {
      <th
        class="ng2-smart-th {{ column.id }}"
        [ngClass]="column.class"
        [style.width]="column.width">
        <ng2-st-column-title [source]="source" [column]="column" (sort)="sort.emit($event)"></ng2-st-column-title>
      </th>
    }
    @if (showActionColumnRight) {
      <th ng2-st-actions-title [grid]="grid"></th>
    }
    `,
                }]
        }], propDecorators: { grid: [{
                type: Input
            }], source: [{
                type: Input
            }], sort: [{
                type: Output
            }], selectAllRows: [{
                type: Output
            }] } });

class Ng2SmartTableTheadComponent {
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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.3.12", type: Ng2SmartTableTheadComponent, selector: "[ng2-st-thead]", inputs: { grid: "grid", source: "source", createConfirm: "createConfirm" }, outputs: { sort: "sort", selectAllRows: "selectAllRows", create: "create", filter: "filter" }, usesOnChanges: true, ngImport: i0, template: "@if (!isHideHeader) {\n  <tr ng2-st-thead-titles-row\n    class=\"ng2-smart-titles\"\n    [grid]=\"grid\"\n    [source]=\"source\"\n    (sort)=\"sort.emit($event)\"\n    (selectAllRows)=\"selectAllRows.emit($event)\">\n  </tr>\n}\n\n@if (!isHideSubHeader) {\n  <tr ng2-st-thead-filters-row\n    class=\"ng2-smart-filters\"\n    [grid]=\"grid\"\n    [source]=\"source\"\n    (create)=\"create.emit($event)\"\n    (filter)=\"filter.emit($event)\">\n  </tr>\n}\n\n@if (grid.createFormShown) {\n  <tr ng2-st-thead-form-row\n    [grid]=\"grid\"\n    [createConfirm]=\"createConfirm\">\n  </tr>\n}\n", dependencies: [{ kind: "component", type: TheadFitlersRowComponent, selector: "[ng2-st-thead-filters-row]", inputs: ["grid", "source"], outputs: ["create", "filter"] }, { kind: "component", type: TheadFormRowComponent, selector: "[ng2-st-thead-form-row]", inputs: ["grid", "row", "createConfirm"], outputs: ["create"] }, { kind: "component", type: TheadTitlesRowComponent, selector: "[ng2-st-thead-titles-row]", inputs: ["grid", "source"], outputs: ["sort", "selectAllRows"] }] }); }
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

class Ng2SmartTableComponent {
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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.3.12", type: Ng2SmartTableComponent, selector: "ng2-smart-table", inputs: { source: "source", settings: "settings" }, outputs: { multiRowSelect: "multiRowSelect", rowClicked: "rowClicked", delete: "delete", edit: "edit", editCancel: "editCancel", create: "create", custom: "custom", deleteConfirm: "deleteConfirm", editConfirm: "editConfirm", createConfirm: "createConfirm", rowHover: "rowHover" }, usesOnChanges: true, ngImport: i0, template: "<table [id]=\"tableId\" [ngClass]=\"tableClass\">\n\n  @if (!isHideHeader || !isHideSubHeader) {\n    <thead ng2-st-thead\n      [grid]=\"grid\"\n      [source]=\"source\"\n      [createConfirm]=\"createConfirm\"\n      (create)=\"create.emit($event)\"\n      (selectAllRows)=\"onSelectAllRows()\">\n    </thead>\n  }\n\n  <tbody ng2-st-tbody [grid]=\"grid\"\n    [source]=\"source\"\n    [deleteConfirm]=\"deleteConfirm\"\n    [editConfirm]=\"editConfirm\"\n    [rowClassFunction]=\"rowClassFunction\"\n    (edit)=\"edit.emit($event)\"\n    (editCancel)=\"editCancel.emit($event)\"\n    (delete)=\"delete.emit($event)\"\n    (custom)=\"custom.emit($event)\"\n    (userClickedRow)=\"emitUserRowClicked($event)\"\n    (multipleSelectRow)=\"multipleSelectRow($event)\">\n  </tbody>\n\n</table>\n\n@if (isPagerDisplay) {\n  <ng2-smart-table-pager\n    [source]=\"source\"\n    [perPageSelect]=\"perPageSelect\">\n  </ng2-smart-table-pager>\n}\n", styles: [":host{font-size:1rem}:host ::ng-deep *{box-sizing:border-box}:host ::ng-deep button,:host ::ng-deep input,:host ::ng-deep optgroup,:host ::ng-deep select,:host ::ng-deep textarea{color:inherit;font:inherit;margin:0}:host ::ng-deep table{line-height:1.5em;border-collapse:collapse;border-spacing:0;display:table;width:100%;max-width:100%;word-break:normal;word-break:keep-all;overflow:auto}:host ::ng-deep table tr th{font-weight:700}:host ::ng-deep table tr section{font-size:.75em;font-weight:700}:host ::ng-deep table tr td,:host ::ng-deep table tr th{font-size:.875em;margin:0;padding:.5em 1em}:host ::ng-deep a{color:#1e6bb8;text-decoration:none}:host ::ng-deep a:hover{text-decoration:underline}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "component", type: PagerComponent, selector: "ng2-smart-table-pager", inputs: ["source", "perPageSelect"], outputs: ["changePage"] }, { kind: "component", type: Ng2SmartTableTbodyComponent, selector: "[ng2-st-tbody]", inputs: ["grid", "source", "deleteConfirm", "editConfirm", "rowClassFunction"], outputs: ["save", "cancel", "edit", "editCancel", "delete", "custom", "edited", "userSelectRow", "userClickedRow", "editRowSelect", "multipleSelectRow"] }, { kind: "component", type: Ng2SmartTableTheadComponent, selector: "[ng2-st-thead]", inputs: ["grid", "source", "createConfirm"], outputs: ["sort", "selectAllRows", "create", "filter"] }] }); }
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

const CELL_COMPONENTS = [
    CellComponent,
    EditCellDefault,
    DefaultEditor,
    CustomEditComponent,
    DefaultEditComponent,
    EditCellComponent,
    CheckboxEditorComponent,
    InputEditorComponent,
    SelectEditorComponent,
    TextareaEditorComponent,
    CustomViewComponent,
    ViewCellComponent,
];
class CellModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: CellModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.3.12", ngImport: i0, type: CellModule, declarations: [CellComponent,
            EditCellDefault,
            DefaultEditor,
            CustomEditComponent,
            DefaultEditComponent,
            EditCellComponent,
            CheckboxEditorComponent,
            InputEditorComponent,
            SelectEditorComponent,
            TextareaEditorComponent,
            CustomViewComponent,
            ViewCellComponent], imports: [CommonModule,
            FormsModule], exports: [CellComponent,
            EditCellDefault,
            DefaultEditor,
            CustomEditComponent,
            DefaultEditComponent,
            EditCellComponent,
            CheckboxEditorComponent,
            InputEditorComponent,
            SelectEditorComponent,
            TextareaEditorComponent,
            CustomViewComponent,
            ViewCellComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: CellModule, imports: [CommonModule,
            FormsModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: CellModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                    ],
                    declarations: [
                        ...CELL_COMPONENTS,
                    ],
                    exports: [
                        ...CELL_COMPONENTS,
                    ],
                }]
        }] });

const FILTER_COMPONENTS = [
    FilterDefault,
    DefaultFilter,
    FilterComponent,
    DefaultFilterComponent,
    CustomFilterComponent,
    CheckboxFilterComponent,
    InputFilterComponent,
    SelectFilterComponent,
];
class FilterModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: FilterModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.3.12", ngImport: i0, type: FilterModule, declarations: [FilterDefault,
            DefaultFilter,
            FilterComponent,
            DefaultFilterComponent,
            CustomFilterComponent,
            CheckboxFilterComponent,
            InputFilterComponent,
            SelectFilterComponent], imports: [CommonModule,
            FormsModule,
            ReactiveFormsModule], exports: [FilterDefault,
            DefaultFilter,
            FilterComponent,
            DefaultFilterComponent,
            CustomFilterComponent,
            CheckboxFilterComponent,
            InputFilterComponent,
            SelectFilterComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: FilterModule, imports: [CommonModule,
            FormsModule,
            ReactiveFormsModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: FilterModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                    ],
                    declarations: [
                        ...FILTER_COMPONENTS,
                    ],
                    exports: [
                        ...FILTER_COMPONENTS,
                    ],
                }]
        }] });

class PagerModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: PagerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.3.12", ngImport: i0, type: PagerModule, declarations: [PagerComponent], imports: [CommonModule,
            FormsModule], exports: [PagerComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: PagerModule, imports: [CommonModule,
            FormsModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: PagerModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                    ],
                    declarations: [
                        PagerComponent,
                    ],
                    exports: [
                        PagerComponent,
                    ],
                }]
        }] });

const TBODY_COMPONENTS = [
    TbodyCreateCancelComponent,
    TbodyEditDeleteComponent,
    TbodyCustomComponent,
    Ng2SmartTableTbodyComponent
];
class TBodyModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: TBodyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.3.12", ngImport: i0, type: TBodyModule, declarations: [TbodyCreateCancelComponent,
            TbodyEditDeleteComponent,
            TbodyCustomComponent,
            Ng2SmartTableTbodyComponent], imports: [CommonModule,
            FormsModule,
            CellModule], exports: [TbodyCreateCancelComponent,
            TbodyEditDeleteComponent,
            TbodyCustomComponent,
            Ng2SmartTableTbodyComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: TBodyModule, imports: [CommonModule,
            FormsModule,
            CellModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: TBodyModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        CellModule,
                    ],
                    declarations: [
                        ...TBODY_COMPONENTS,
                    ],
                    exports: [
                        ...TBODY_COMPONENTS,
                    ],
                }]
        }] });

const THEAD_COMPONENTS = [
    ActionsComponent,
    ActionsTitleComponent,
    AddButtonComponent,
    CheckboxSelectAllComponent,
    ColumnTitleComponent,
    TitleComponent,
    TheadFitlersRowComponent,
    TheadFormRowComponent,
    TheadTitlesRowComponent,
    Ng2SmartTableTheadComponent,
];
class THeadModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: THeadModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.3.12", ngImport: i0, type: THeadModule, declarations: [ActionsComponent,
            ActionsTitleComponent,
            AddButtonComponent,
            CheckboxSelectAllComponent,
            ColumnTitleComponent,
            TitleComponent,
            TheadFitlersRowComponent,
            TheadFormRowComponent,
            TheadTitlesRowComponent,
            Ng2SmartTableTheadComponent], imports: [CommonModule,
            FormsModule,
            FilterModule,
            CellModule], exports: [ActionsComponent,
            ActionsTitleComponent,
            AddButtonComponent,
            CheckboxSelectAllComponent,
            ColumnTitleComponent,
            TitleComponent,
            TheadFitlersRowComponent,
            TheadFormRowComponent,
            TheadTitlesRowComponent,
            Ng2SmartTableTheadComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: THeadModule, imports: [CommonModule,
            FormsModule,
            FilterModule,
            CellModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: THeadModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        FilterModule,
                        CellModule,
                    ],
                    declarations: [
                        ...THEAD_COMPONENTS,
                    ],
                    exports: [
                        ...THEAD_COMPONENTS,
                    ],
                }]
        }] });

class Ng2SmartTableModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: Ng2SmartTableModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.3.12", ngImport: i0, type: Ng2SmartTableModule, declarations: [Ng2SmartTableComponent], imports: [CommonModule,
            FormsModule,
            ReactiveFormsModule,
            CellModule,
            FilterModule,
            PagerModule,
            TBodyModule,
            THeadModule], exports: [Ng2SmartTableComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: Ng2SmartTableModule, imports: [CommonModule,
            FormsModule,
            ReactiveFormsModule,
            CellModule,
            FilterModule,
            PagerModule,
            TBodyModule,
            THeadModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: Ng2SmartTableModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        CellModule,
                        FilterModule,
                        PagerModule,
                        TBodyModule,
                        THeadModule,
                    ],
                    declarations: [
                        Ng2SmartTableComponent,
                    ],
                    exports: [
                        Ng2SmartTableComponent,
                    ],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { Cell, DefaultEditor, DefaultFilter, LocalDataSource, Ng2SmartTableComponent, Ng2SmartTableModule, SmartTableOnChangedEventName };
//# sourceMappingURL=den4ik92-ng2-smart-table.mjs.map
