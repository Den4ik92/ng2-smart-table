import { Row } from './row';
import { Column } from './column';
export class DataSet {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1zZXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZzItc21hcnQtdGFibGUvc3JjL2xpYi9saWIvZGF0YS1zZXQvZGF0YS1zZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUM1QixPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBR2xDLE1BQU0sT0FBTyxPQUFPO0lBUWxCLFlBQVksT0FBYyxFQUFFLEVBQVksY0FBMEM7UUFBMUMsbUJBQWMsR0FBZCxjQUFjLENBQTRCO1FBTHhFLFNBQUksR0FBZSxFQUFFLENBQUM7UUFDdEIsWUFBTyxHQUFrQixFQUFFLENBQUM7UUFDNUIsU0FBSSxHQUFlLEVBQUUsQ0FBQztRQUN0QixpQkFBWSxHQUFHLElBQUksR0FBRyxFQUFPLENBQUM7UUFHdEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRW5CLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsT0FBTyxDQUFDLElBQWdCO1FBQ3RCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDO0lBRUQsT0FBTztRQUNMLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNuQixDQUFDO0lBRUQsV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBRUQsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FB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QUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7YUFBTSxDQUFDO1lBQ04sSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDMUMsQ0FBQztJQUNILENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdyB9IGZyb20gJy4vcm93JztcbmltcG9ydCB7IENvbHVtbiB9IGZyb20gJy4vY29sdW1uJztcbmltcG9ydCB7IFNtYXJ0VGFibGVDb2x1bW5TZXR0aW5ncyB9IGZyb20gJy4uL2ludGVyZmFjZXMvc21hcnQtdGFibGUubW9kZWxzJztcblxuZXhwb3J0IGNsYXNzIERhdGFTZXQge1xuICBuZXdSb3chOiBSb3c7XG5cbiAgcHJvdGVjdGVkIGRhdGE6IEFycmF5PGFueT4gPSBbXTtcbiAgcHJvdGVjdGVkIGNvbHVtbnM6IEFycmF5PENvbHVtbj4gPSBbXTtcbiAgcHJvdGVjdGVkIHJvd3M6IEFycmF5PFJvdz4gPSBbXTtcbiAgcHJvdGVjdGVkIHNlbGVjdGVkUm93cyA9IG5ldyBTZXQ8Um93PigpO1xuXG4gIGNvbnN0cnVjdG9yKGRhdGE6IGFueVtdID0gW10sIHByb3RlY3RlZCBjb2x1bW5TZXR0aW5nczogU21hcnRUYWJsZUNvbHVtblNldHRpbmdzW10pIHtcbiAgICB0aGlzLmNyZWF0ZUNvbHVtbnMoY29sdW1uU2V0dGluZ3MpO1xuICAgIHRoaXMuc2V0RGF0YShkYXRhKTtcblxuICAgIHRoaXMuY3JlYXRlTmV3Um93KCk7XG4gIH1cblxuICBzZXREYXRhKGRhdGE6IEFycmF5PGFueT4pIHtcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIHRoaXMuY3JlYXRlUm93cygpO1xuICB9XG5cbiAgZ2V0Q29sdW1ucygpOiBBcnJheTxDb2x1bW4+IHtcbiAgICByZXR1cm4gdGhpcy5jb2x1bW5zO1xuICB9XG5cbiAgZ2V0Um93cygpOiBBcnJheTxSb3c+IHtcbiAgICByZXR1cm4gdGhpcy5yb3dzO1xuICB9XG5cbiAgZ2V0Rmlyc3RSb3coKTogUm93IHtcbiAgICByZXR1cm4gdGhpcy5yb3dzWzBdO1xuICB9XG5cbiAgZ2V0TGFzdFJvdygpOiBSb3cge1xuICAgIHJldHVybiB0aGlzLnJvd3NbdGhpcy5yb3dzLmxlbmd0aCAtIDFdO1xuICB9XG5cbiAgZmluZFJvd0J5RGF0YShkYXRhOiBhbnkpOiBSb3cgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLnJvd3MuZmluZCgocm93OiBSb3cpID0+IHJvdy5nZXREYXRhKCkgPT09IGRhdGEpO1xuICB9XG5cbiAgc2V0U2VsZWN0QWxsKHN0YXRlOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5yb3dzLmZvckVhY2goKHJvdykgPT4ge1xuICAgICAgcm93LmlzU2VsZWN0ZWQgPSBzdGF0ZTtcbiAgICAgIHRoaXMuc3RvcmVTZWxlY3RlZFJvdyhyb3cpO1xuICAgIH0pO1xuICB9XG5cbiAgZGVzZWxlY3RBbGwoKSB7XG4gICAgdGhpcy5yb3dzLmZvckVhY2goKHJvdykgPT4ge1xuICAgICAgcm93LmlzU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICB9KTtcbiAgICAvLyB3ZSBuZWVkIHRvIGNsZWFyIHNlbGVjdGVkUm93IGZpZWxkIGJlY2F1c2Ugbm8gb25lIHJvdyBzZWxlY3RlZFxuICAgIHRoaXMuc2VsZWN0ZWRSb3dzLmNsZWFyKCk7XG4gIH1cblxuICBzZWxlY3RSb3cocm93OiBSb3csIHN0YXRlOiBib29sZWFuKTogdm9pZCB7XG4gICAgcm93LmlzU2VsZWN0ZWQgPSBzdGF0ZTtcbiAgICB0aGlzLnN0b3JlU2VsZWN0ZWRSb3cocm93KTtcbiAgfVxuXG4gIG11bHRpcGxlU2VsZWN0Um93KHJvdzogUm93KTogUm93IHtcbiAgICByb3cuaXNTZWxlY3RlZCA9ICFyb3cuaXNTZWxlY3RlZDtcbiAgICB0aGlzLnN0b3JlU2VsZWN0ZWRSb3cocm93KTtcblxuICAgIHJldHVybiByb3c7XG4gIH1cblxuICBnZXRTZWxlY3RlZFJvd3NEYXRhKCk6IEFycmF5PGFueT4ge1xuICAgIHJldHVybiBbLi4udGhpcy5zZWxlY3RlZFJvd3NdXG4gIH1cblxuICBjcmVhdGVOZXdSb3coKSB7XG4gICAgdGhpcy5uZXdSb3cgPSBuZXcgUm93KC0xLCB7fSwgdGhpcyk7XG4gICAgdGhpcy5uZXdSb3cuaXNJbkVkaXRpbmcgPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBjb2x1bW5zIGJ5IG1hcHBpbmcgZnJvbSB0aGUgc2V0dGluZ3NcbiAgICogQHBhcmFtIHNldHRpbmdzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBjcmVhdGVDb2x1bW5zKHNldHRpbmdzOiBTbWFydFRhYmxlQ29sdW1uU2V0dGluZ3NbXSkge1xuICAgIHNldHRpbmdzLmZvckVhY2goKGNvbHVtblNldHRpbmdzKSA9PiB7XG4gICAgICB0aGlzLmNvbHVtbnMucHVzaChuZXcgQ29sdW1uKGNvbHVtblNldHRpbmdzLmtleSBhcyBzdHJpbmcsIGNvbHVtblNldHRpbmdzLCB0aGlzKSk7XG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgcm93cyBiYXNlZCBvbiBjdXJyZW50IGRhdGEgcHJlcGFyZWQgaW4gZGF0YSBzb3VyY2VcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGNyZWF0ZVJvd3MoKSB7XG4gICAgdGhpcy5yb3dzID0gW107XG4gICAgdGhpcy5kYXRhLmZvckVhY2goKGVsLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3Qgcm93ID0gbmV3IFJvdyhpbmRleCwgZWwsIHRoaXMpO1xuICAgICAgcm93LmlzU2VsZWN0ZWQgPSB0aGlzLnNlbGVjdGVkUm93cy5oYXMocm93LmdldERhdGEoKSk7XG4gICAgICB0aGlzLnJvd3MucHVzaChyb3cpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpc0FsbFNlbGVjdGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnJvd3MuZXZlcnkoKHJvdykgPT4gcm93LmlzU2VsZWN0ZWQpXG4gIH1cblxuICBwcml2YXRlIHN0b3JlU2VsZWN0ZWRSb3cocm93OiBSb3cpOiB2b2lkIHtcbiAgICBpZihyb3cuaXNTZWxlY3RlZCkge1xuICAgICAgdGhpcy5zZWxlY3RlZFJvd3MuYWRkKHJvdy5nZXREYXRhKCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlbGVjdGVkUm93cy5kZWxldGUocm93LmdldERhdGEoKSk7XG4gICAgfVxuICB9XG59XG4iXX0=