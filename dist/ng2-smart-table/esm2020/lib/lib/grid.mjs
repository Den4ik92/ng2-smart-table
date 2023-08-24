import { Subject } from 'rxjs';
import { Deferred, getDeepFromObject, getPageForRowIndex } from './helpers';
import { DataSet } from './data-set/data-set';
export class Grid {
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
        return position == this.getSetting('actions.position');
    }
    isActionsVisible() {
        return this.getSetting('actions.add') || this.getSetting('actions.edit') || this.getSetting('actions.delete') || this.getSetting('actions.custom').length;
    }
    isMultiSelectVisible() {
        return this.getSetting('selectMode') === 'multi';
    }
    getNewRow() {
        return this.dataSet.newRow;
    }
    setSettings(settings) {
        this.settings = settings;
        this.dataSet = new DataSet([], this.getSetting('columns'));
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
        this.sourceOnChangedSubscription = this.source.onChanged().subscribe((changes) => this.processDataChange(changes));
        this.sourceOnUpdatedSubscription = this.source.onUpdated().subscribe((data) => {
            const changedRow = this.dataSet.findRowByData(data);
            changedRow.setData(data);
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
        const deferred = new Deferred();
        deferred.promise.then((newData) => {
            newData = newData ? newData : row.getNewData();
            if (deferred.resolve.skipAdd) {
                this.createFormShown = false;
            }
            else {
                this.source.prepend(newData).then(() => {
                    this.createFormShown = false;
                    this.dataSet.createNewRow();
                });
            }
        }).catch((err) => {
            // doing nothing
        });
        if (this.getSetting('add.confirmCreate')) {
            confirmEmitter.emit({
                newData: row.getNewData(),
                source: this.source,
                confirm: deferred,
            });
        }
        else {
            deferred.resolve();
        }
    }
    save(row, confirmEmitter) {
        const deferred = new Deferred();
        deferred.promise.then((newData) => {
            newData = newData ? newData : row.getNewData();
            if (deferred.resolve.skipEdit) {
                row.isInEditing = false;
            }
            else {
                this.source.update(row.getData(), newData).then(() => {
                    row.isInEditing = false;
                });
            }
        }).catch((err) => {
            // doing nothing
        });
        if (this.getSetting('edit.confirmSave')) {
            confirmEmitter.emit({
                data: row.getData(),
                newData: row.getNewData(),
                source: this.source,
                confirm: deferred,
            });
        }
        else {
            deferred.resolve();
        }
    }
    delete(row, confirmEmitter) {
        const deferred = new Deferred();
        deferred.promise.then(() => {
            this.source.remove(row.getData());
        }).catch((err) => {
            // doing nothing
        });
        if (this.getSetting('delete.confirmDelete')) {
            confirmEmitter.emit({
                data: row.getData(),
                source: this.source,
                confirm: deferred,
            });
        }
        else {
            deferred.resolve();
        }
        if (row.isSelected) {
            this.dataSet.selectRow(row, false);
        }
    }
    processDataChange(changes) {
        if (this.shouldProcessChange(changes)) {
            if (changes['action'] === 'load') {
                this.dataSet.deselectAll();
            }
            this.dataSet.setData(changes['elements']);
        }
    }
    shouldProcessChange(changes) {
        if (['filter', 'sort', 'page', 'remove', 'refresh', 'load', 'paging'].indexOf(changes['action']) !== -1) {
            return true;
        }
        else if (['prepend', 'append'].indexOf(changes['action']) !== -1 && !this.getSetting('pager.display')) {
            return true;
        }
        return false;
    }
    prepareSource(source) {
        const initialSource = this.getInitialSort();
        if (initialSource && initialSource['field'] && initialSource['direction']) {
            source.setSort([initialSource], false);
        }
        if (this.getSetting('pager.display') === true) {
            source.setPaging(this.getPageToSelect(source), this.getSetting('pager.perPage'), false);
        }
        source.refresh();
        return source;
    }
    getInitialSort() {
        const sortConf = {};
        this.getColumns().forEach((column) => {
            if (column.isSortable && column.defaultSortDirection) {
                sortConf['field'] = column.id;
                sortConf['direction'] = column.defaultSortDirection;
                sortConf['compare'] = column.getCompareFunction();
            }
        });
        return sortConf;
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
    getSelectionInfo() {
        const switchPageToSelectedRowPage = this.getSetting('switchPageToSelectedRowPage');
        const selectedRowIndex = Number(this.getSetting('selectedRowIndex', 0)) || 0;
        const { perPage, page } = this.getSetting('pager');
        return { perPage, page, selectedRowIndex, switchPageToSelectedRowPage };
    }
    getPageToSelect(source) {
        const { switchPageToSelectedRowPage, selectedRowIndex, perPage, page } = this.getSelectionInfo();
        let pageToSelect = Math.max(1, page);
        if (switchPageToSelectedRowPage && selectedRowIndex >= 0) {
            pageToSelect = getPageForRowIndex(selectedRowIndex, perPage);
        }
        const maxPageAmount = Math.ceil(source.count() / perPage);
        return maxPageAmount ? Math.min(pageToSelect, maxPageAmount) : pageToSelect;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nMi1zbWFydC10YWJsZS9zcmMvbGliL2xpYi9ncmlkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBSTdDLE9BQU8sRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFHNUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBSTlDLE1BQU0sT0FBTyxJQUFJO0lBY2YsWUFBWSxNQUFrQixFQUFFLFFBQTRCO1FBWjVELG9CQUFlLEdBQVksS0FBSyxDQUFDO1FBTWpDLHNCQUFpQixHQUFHLElBQUksT0FBTyxFQUFPLENBQUM7UUFDdkMsd0JBQW1CLEdBQUcsSUFBSSxPQUFPLEVBQU8sQ0FBQztRQU12QyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVELE1BQU07UUFDSixJQUFJLElBQUksQ0FBQywyQkFBMkIsRUFBRTtZQUNwQyxJQUFJLENBQUMsMkJBQTJCLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDaEQ7UUFDRCxJQUFJLElBQUksQ0FBQywyQkFBMkIsRUFBRTtZQUNwQyxJQUFJLENBQUMsMkJBQTJCLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDaEQ7SUFDSCxDQUFDO0lBRUQsZ0JBQWdCLENBQUMsUUFBZ0I7UUFDL0IsT0FBTyxJQUFJLENBQUMsd0JBQXdCLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDNUUsQ0FBQztJQUVELHdCQUF3QixDQUFDLFFBQWdCO1FBQ3ZDLE9BQU8sUUFBUSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRUQsZ0JBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDNUosQ0FBQztJQUVELG9CQUFvQjtRQUNsQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLEtBQUssT0FBTyxDQUFDO0lBQ25ELENBQUM7SUFFRCxTQUFTO1FBQ1AsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztJQUM3QixDQUFDO0lBRUQsV0FBVyxDQUFDLFFBQTRCO1FBQ3RDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxPQUFPLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUUzRCxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQztJQUVELFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQztJQUVELFNBQVMsQ0FBQyxNQUFrQjtRQUMxQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRWQsSUFBSSxDQUFDLDJCQUEyQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBWSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUV4SCxJQUFJLENBQUMsMkJBQTJCLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFTLEVBQUUsRUFBRTtZQUNqRixNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNwRCxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFVBQVUsQ0FBQyxJQUFZLEVBQUUsWUFBa0I7UUFDekMsT0FBTyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxZQUFZLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRUQsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBRUQsT0FBTztRQUNMLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBRUQsU0FBUyxDQUFDLEdBQVEsRUFBRSxLQUFjO1FBQ2hDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsaUJBQWlCLENBQUMsR0FBUTtRQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxXQUFXO1FBQ1QsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDL0MsQ0FBQztJQUVELGFBQWE7UUFDWCxPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNqRCxDQUFDO0lBRUQsSUFBSSxDQUFDLEdBQVE7UUFDWCxHQUFHLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztJQUN6QixDQUFDO0lBRUQsTUFBTSxDQUFDLEdBQVEsRUFBRSxjQUFpQztRQUVoRCxNQUFNLFFBQVEsR0FBRyxJQUFJLFFBQVEsRUFBRSxDQUFDO1FBQ2hDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDaEMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDL0MsSUFBSSxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRTtnQkFDNUIsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7YUFDOUI7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtvQkFDckMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7b0JBQzdCLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUM7Z0JBQzlCLENBQUMsQ0FBQyxDQUFDO2FBQ0o7UUFDSCxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUNmLGdCQUFnQjtRQUNsQixDQUFDLENBQUMsQ0FBQztRQUVILElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFO1lBQ3hDLGNBQWMsQ0FBQyxJQUFJLENBQUM7Z0JBQ2xCLE9BQU8sRUFBRSxHQUFHLENBQUMsVUFBVSxFQUFFO2dCQUN6QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07Z0JBQ25CLE9BQU8sRUFBRSxRQUFRO2FBQ2xCLENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDcEI7SUFDSCxDQUFDO0lBRUQsSUFBSSxDQUFDLEdBQVEsRUFBRSxjQUFpQztRQUU5QyxNQUFNLFFBQVEsR0FBRyxJQUFJLFFBQVEsRUFBRSxDQUFDO1FBQ2hDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDaEMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDL0MsSUFBSSxRQUFRLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRTtnQkFDN0IsR0FBRyxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7YUFDekI7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7b0JBQ25ELEdBQUcsQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO2dCQUMxQixDQUFDLENBQUMsQ0FBQzthQUNKO1FBQ0gsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDZixnQkFBZ0I7UUFDbEIsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsRUFBRTtZQUN2QyxjQUFjLENBQUMsSUFBSSxDQUFDO2dCQUNsQixJQUFJLEVBQUUsR0FBRyxDQUFDLE9BQU8sRUFBRTtnQkFDbkIsT0FBTyxFQUFFLEdBQUcsQ0FBQyxVQUFVLEVBQUU7Z0JBQ3pCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtnQkFDbkIsT0FBTyxFQUFFLFFBQVE7YUFDbEIsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNwQjtJQUNILENBQUM7SUFFRCxNQUFNLENBQUMsR0FBUSxFQUFFLGNBQWlDO1FBQ2hELE1BQU0sUUFBUSxHQUFHLElBQUksUUFBUSxFQUFFLENBQUM7UUFDaEMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQ3BDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ2YsZ0JBQWdCO1FBQ2xCLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLHNCQUFzQixDQUFDLEVBQUU7WUFDM0MsY0FBYyxDQUFDLElBQUksQ0FBQztnQkFDbEIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxPQUFPLEVBQUU7Z0JBQ25CLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtnQkFDbkIsT0FBTyxFQUFFLFFBQVE7YUFDbEIsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNwQjtRQUNELElBQUcsR0FBRyxDQUFDLFVBQVUsRUFBRTtZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDcEM7SUFDSCxDQUFDO0lBRUQsaUJBQWlCLENBQUMsT0FBWTtRQUM1QixJQUFJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNyQyxJQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxNQUFNLEVBQUU7Z0JBQy9CLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUE7YUFDM0I7WUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztTQUMzQztJQUNILENBQUM7SUFFRCxtQkFBbUIsQ0FBQyxPQUFZO1FBQzlCLElBQUksQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDdkcsT0FBTyxJQUFJLENBQUM7U0FDYjthQUFNLElBQUksQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsRUFBRTtZQUN2RyxPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQsYUFBYSxDQUFDLE1BQVc7UUFDdkIsTUFBTSxhQUFhLEdBQVEsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ2pELElBQUksYUFBYSxJQUFJLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxhQUFhLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDekUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLGFBQWEsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3hDO1FBQ0QsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxLQUFLLElBQUksRUFBRTtZQUM3QyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUN6RjtRQUVELE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNqQixPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRUQsY0FBYztRQUNaLE1BQU0sUUFBUSxHQUFRLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBYyxFQUFFLEVBQUU7WUFDM0MsSUFBSSxNQUFNLENBQUMsVUFBVSxJQUFJLE1BQU0sQ0FBQyxvQkFBb0IsRUFBRTtnQkFDcEQsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUM7Z0JBQzlCLFFBQVEsQ0FBQyxXQUFXLENBQUMsR0FBRyxNQUFNLENBQUMsb0JBQW9CLENBQUM7Z0JBQ3BELFFBQVEsQ0FBQyxTQUFTLENBQUMsR0FBRyxNQUFNLENBQUMsa0JBQWtCLEVBQUUsQ0FBQzthQUNuRDtRQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVELG1CQUFtQjtRQUNqQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUE7SUFDL0IsQ0FBQztJQUVELGFBQWEsQ0FBQyxNQUFlO1FBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCxXQUFXO1FBQ1QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3BDLENBQUM7SUFFRCxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ25DLENBQUM7SUFFTyxnQkFBZ0I7UUFDdEIsTUFBTSwyQkFBMkIsR0FBWSxJQUFJLENBQUMsVUFBVSxDQUFDLDZCQUE2QixDQUFDLENBQUM7UUFDNUYsTUFBTSxnQkFBZ0IsR0FBVyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyRixNQUFNLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxHQUFzQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3RGLE9BQU8sRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLDJCQUEyQixFQUFFLENBQUM7SUFDMUUsQ0FBQztJQUVPLGVBQWUsQ0FBQyxNQUFrQjtRQUN4QyxNQUFNLEVBQUUsMkJBQTJCLEVBQUUsZ0JBQWdCLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ2pHLElBQUksWUFBWSxHQUFXLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzdDLElBQUksMkJBQTJCLElBQUksZ0JBQWdCLElBQUksQ0FBQyxFQUFFO1lBQ3hELFlBQVksR0FBRyxrQkFBa0IsQ0FBQyxnQkFBZ0IsRUFBRSxPQUFPLENBQUMsQ0FBQztTQUM5RDtRQUNELE1BQU0sYUFBYSxHQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxHQUFHLE9BQU8sQ0FBQyxDQUFDO1FBQ2xFLE9BQU8sYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDO0lBQzlFLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERlZmVycmVkLCBnZXREZWVwRnJvbU9iamVjdCwgZ2V0UGFnZUZvclJvd0luZGV4IH0gZnJvbSAnLi9oZWxwZXJzJztcbmltcG9ydCB7IENvbHVtbiB9IGZyb20gJy4vZGF0YS1zZXQvY29sdW1uJztcbmltcG9ydCB7IFJvdyB9IGZyb20gJy4vZGF0YS1zZXQvcm93JztcbmltcG9ydCB7IERhdGFTZXQgfSBmcm9tICcuL2RhdGEtc2V0L2RhdGEtc2V0JztcbmltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICcuL2RhdGEtc291cmNlL2RhdGEtc291cmNlJztcbmltcG9ydCB7IFNtYXJ0VGFibGVTZXR0aW5ncyB9IGZyb20gJy4vaW50ZXJmYWNlcy9zbWFydC10YWJsZS5tb2RlbHMnO1xuXG5leHBvcnQgY2xhc3MgR3JpZCB7XG5cbiAgY3JlYXRlRm9ybVNob3duOiBib29sZWFuID0gZmFsc2U7XG5cbiAgc291cmNlOiBEYXRhU291cmNlO1xuICBzZXR0aW5nczogU21hcnRUYWJsZVNldHRpbmdzO1xuICBkYXRhU2V0OiBEYXRhU2V0O1xuXG4gIG9uU2VsZWN0Um93U291cmNlID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICBvbkRlc2VsZWN0Um93U291cmNlID0gbmV3IFN1YmplY3Q8YW55PigpO1xuXG4gIHByaXZhdGUgc291cmNlT25DaGFuZ2VkU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgc291cmNlT25VcGRhdGVkU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3Ioc291cmNlOiBEYXRhU291cmNlLCBzZXR0aW5nczogU21hcnRUYWJsZVNldHRpbmdzKSB7XG4gICAgdGhpcy5zZXRTZXR0aW5ncyhzZXR0aW5ncyk7XG4gICAgdGhpcy5zZXRTb3VyY2Uoc291cmNlKTtcbiAgfVxuXG4gIGRldGFjaCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zb3VyY2VPbkNoYW5nZWRTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuc291cmNlT25DaGFuZ2VkU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnNvdXJjZU9uVXBkYXRlZFN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5zb3VyY2VPblVwZGF0ZWRTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICBzaG93QWN0aW9uQ29sdW1uKHBvc2l0aW9uOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pc0N1cnJlbnRBY3Rpb25zUG9zaXRpb24ocG9zaXRpb24pICYmIHRoaXMuaXNBY3Rpb25zVmlzaWJsZSgpO1xuICB9XG5cbiAgaXNDdXJyZW50QWN0aW9uc1Bvc2l0aW9uKHBvc2l0aW9uOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gcG9zaXRpb24gPT0gdGhpcy5nZXRTZXR0aW5nKCdhY3Rpb25zLnBvc2l0aW9uJyk7XG4gIH1cblxuICBpc0FjdGlvbnNWaXNpYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmdldFNldHRpbmcoJ2FjdGlvbnMuYWRkJykgfHwgdGhpcy5nZXRTZXR0aW5nKCdhY3Rpb25zLmVkaXQnKSB8fCB0aGlzLmdldFNldHRpbmcoJ2FjdGlvbnMuZGVsZXRlJykgfHwgdGhpcy5nZXRTZXR0aW5nKCdhY3Rpb25zLmN1c3RvbScpLmxlbmd0aDtcbiAgfVxuXG4gIGlzTXVsdGlTZWxlY3RWaXNpYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmdldFNldHRpbmcoJ3NlbGVjdE1vZGUnKSA9PT0gJ211bHRpJztcbiAgfVxuXG4gIGdldE5ld1JvdygpOiBSb3cge1xuICAgIHJldHVybiB0aGlzLmRhdGFTZXQubmV3Um93O1xuICB9XG5cbiAgc2V0U2V0dGluZ3Moc2V0dGluZ3M6IFNtYXJ0VGFibGVTZXR0aW5ncykge1xuICAgIHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncztcbiAgICB0aGlzLmRhdGFTZXQgPSBuZXcgRGF0YVNldChbXSwgdGhpcy5nZXRTZXR0aW5nKCdjb2x1bW5zJykpO1xuXG4gICAgaWYgKHRoaXMuc291cmNlKSB7XG4gICAgICB0aGlzLnNvdXJjZS5yZWZyZXNoKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0RGF0YVNldCgpOiBEYXRhU2V0IHtcbiAgICByZXR1cm4gdGhpcy5kYXRhU2V0O1xuICB9XG5cbiAgc2V0U291cmNlKHNvdXJjZTogRGF0YVNvdXJjZSkge1xuICAgIHRoaXMuc291cmNlID0gdGhpcy5wcmVwYXJlU291cmNlKHNvdXJjZSk7XG4gICAgdGhpcy5kZXRhY2goKTtcblxuICAgIHRoaXMuc291cmNlT25DaGFuZ2VkU3Vic2NyaXB0aW9uID0gdGhpcy5zb3VyY2Uub25DaGFuZ2VkKCkuc3Vic2NyaWJlKChjaGFuZ2VzOiBhbnkpID0+IHRoaXMucHJvY2Vzc0RhdGFDaGFuZ2UoY2hhbmdlcykpO1xuXG4gICAgdGhpcy5zb3VyY2VPblVwZGF0ZWRTdWJzY3JpcHRpb24gPSB0aGlzLnNvdXJjZS5vblVwZGF0ZWQoKS5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xuICAgICAgY29uc3QgY2hhbmdlZFJvdyA9IHRoaXMuZGF0YVNldC5maW5kUm93QnlEYXRhKGRhdGEpO1xuICAgICAgY2hhbmdlZFJvdy5zZXREYXRhKGRhdGEpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0U2V0dGluZyhuYW1lOiBzdHJpbmcsIGRlZmF1bHRWYWx1ZT86IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIGdldERlZXBGcm9tT2JqZWN0KHRoaXMuc2V0dGluZ3MsIG5hbWUsIGRlZmF1bHRWYWx1ZSk7XG4gIH1cblxuICBnZXRDb2x1bW5zKCk6IEFycmF5PENvbHVtbj4ge1xuICAgIHJldHVybiB0aGlzLmRhdGFTZXQuZ2V0Q29sdW1ucygpO1xuICB9XG5cbiAgZ2V0Um93cygpOiBBcnJheTxSb3c+IHtcbiAgICByZXR1cm4gdGhpcy5kYXRhU2V0LmdldFJvd3MoKTtcbiAgfVxuXG4gIHNlbGVjdFJvdyhyb3c6IFJvdywgc3RhdGU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmRhdGFTZXQuc2VsZWN0Um93KHJvdywgc3RhdGUpO1xuICB9XG5cbiAgbXVsdGlwbGVTZWxlY3RSb3cocm93OiBSb3cpIHtcbiAgICB0aGlzLmRhdGFTZXQubXVsdGlwbGVTZWxlY3RSb3cocm93KTtcbiAgfVxuXG4gIG9uU2VsZWN0Um93KCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMub25TZWxlY3RSb3dTb3VyY2UuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBvbkRlc2VsZWN0Um93KCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMub25EZXNlbGVjdFJvd1NvdXJjZS5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIGVkaXQocm93OiBSb3cpIHtcbiAgICByb3cuaXNJbkVkaXRpbmcgPSB0cnVlO1xuICB9XG5cbiAgY3JlYXRlKHJvdzogUm93LCBjb25maXJtRW1pdHRlcjogRXZlbnRFbWl0dGVyPGFueT4pIHtcblxuICAgIGNvbnN0IGRlZmVycmVkID0gbmV3IERlZmVycmVkKCk7XG4gICAgZGVmZXJyZWQucHJvbWlzZS50aGVuKChuZXdEYXRhKSA9PiB7XG4gICAgICBuZXdEYXRhID0gbmV3RGF0YSA/IG5ld0RhdGEgOiByb3cuZ2V0TmV3RGF0YSgpO1xuICAgICAgaWYgKGRlZmVycmVkLnJlc29sdmUuc2tpcEFkZCkge1xuICAgICAgICB0aGlzLmNyZWF0ZUZvcm1TaG93biA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zb3VyY2UucHJlcGVuZChuZXdEYXRhKS50aGVuKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmNyZWF0ZUZvcm1TaG93biA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuZGF0YVNldC5jcmVhdGVOZXdSb3coKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgLy8gZG9pbmcgbm90aGluZ1xuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMuZ2V0U2V0dGluZygnYWRkLmNvbmZpcm1DcmVhdGUnKSkge1xuICAgICAgY29uZmlybUVtaXR0ZXIuZW1pdCh7XG4gICAgICAgIG5ld0RhdGE6IHJvdy5nZXROZXdEYXRhKCksXG4gICAgICAgIHNvdXJjZTogdGhpcy5zb3VyY2UsXG4gICAgICAgIGNvbmZpcm06IGRlZmVycmVkLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlZmVycmVkLnJlc29sdmUoKTtcbiAgICB9XG4gIH1cblxuICBzYXZlKHJvdzogUm93LCBjb25maXJtRW1pdHRlcjogRXZlbnRFbWl0dGVyPGFueT4pIHtcblxuICAgIGNvbnN0IGRlZmVycmVkID0gbmV3IERlZmVycmVkKCk7XG4gICAgZGVmZXJyZWQucHJvbWlzZS50aGVuKChuZXdEYXRhKSA9PiB7XG4gICAgICBuZXdEYXRhID0gbmV3RGF0YSA/IG5ld0RhdGEgOiByb3cuZ2V0TmV3RGF0YSgpO1xuICAgICAgaWYgKGRlZmVycmVkLnJlc29sdmUuc2tpcEVkaXQpIHtcbiAgICAgICAgcm93LmlzSW5FZGl0aW5nID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNvdXJjZS51cGRhdGUocm93LmdldERhdGEoKSwgbmV3RGF0YSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgcm93LmlzSW5FZGl0aW5nID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIC8vIGRvaW5nIG5vdGhpbmdcbiAgICB9KTtcblxuICAgIGlmICh0aGlzLmdldFNldHRpbmcoJ2VkaXQuY29uZmlybVNhdmUnKSkge1xuICAgICAgY29uZmlybUVtaXR0ZXIuZW1pdCh7XG4gICAgICAgIGRhdGE6IHJvdy5nZXREYXRhKCksXG4gICAgICAgIG5ld0RhdGE6IHJvdy5nZXROZXdEYXRhKCksXG4gICAgICAgIHNvdXJjZTogdGhpcy5zb3VyY2UsXG4gICAgICAgIGNvbmZpcm06IGRlZmVycmVkLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlZmVycmVkLnJlc29sdmUoKTtcbiAgICB9XG4gIH1cblxuICBkZWxldGUocm93OiBSb3csIGNvbmZpcm1FbWl0dGVyOiBFdmVudEVtaXR0ZXI8YW55Pikge1xuICAgIGNvbnN0IGRlZmVycmVkID0gbmV3IERlZmVycmVkKCk7XG4gICAgZGVmZXJyZWQucHJvbWlzZS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMuc291cmNlLnJlbW92ZShyb3cuZ2V0RGF0YSgpKTtcbiAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAvLyBkb2luZyBub3RoaW5nXG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy5nZXRTZXR0aW5nKCdkZWxldGUuY29uZmlybURlbGV0ZScpKSB7XG4gICAgICBjb25maXJtRW1pdHRlci5lbWl0KHtcbiAgICAgICAgZGF0YTogcm93LmdldERhdGEoKSxcbiAgICAgICAgc291cmNlOiB0aGlzLnNvdXJjZSxcbiAgICAgICAgY29uZmlybTogZGVmZXJyZWQsXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVmZXJyZWQucmVzb2x2ZSgpO1xuICAgIH1cbiAgICBpZihyb3cuaXNTZWxlY3RlZCkge1xuICAgICAgdGhpcy5kYXRhU2V0LnNlbGVjdFJvdyhyb3csIGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICBwcm9jZXNzRGF0YUNoYW5nZShjaGFuZ2VzOiBhbnkpIHtcbiAgICBpZiAodGhpcy5zaG91bGRQcm9jZXNzQ2hhbmdlKGNoYW5nZXMpKSB7XG4gICAgICBpZihjaGFuZ2VzWydhY3Rpb24nXSA9PT0gJ2xvYWQnKSB7XG4gICAgICAgIHRoaXMuZGF0YVNldC5kZXNlbGVjdEFsbCgpXG4gICAgICB9XG4gICAgICB0aGlzLmRhdGFTZXQuc2V0RGF0YShjaGFuZ2VzWydlbGVtZW50cyddKTtcbiAgICB9XG4gIH1cblxuICBzaG91bGRQcm9jZXNzQ2hhbmdlKGNoYW5nZXM6IGFueSk6IGJvb2xlYW4ge1xuICAgIGlmIChbJ2ZpbHRlcicsICdzb3J0JywgJ3BhZ2UnLCAncmVtb3ZlJywgJ3JlZnJlc2gnLCAnbG9hZCcsICdwYWdpbmcnXS5pbmRleE9mKGNoYW5nZXNbJ2FjdGlvbiddKSAhPT0gLTEpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAoWydwcmVwZW5kJywgJ2FwcGVuZCddLmluZGV4T2YoY2hhbmdlc1snYWN0aW9uJ10pICE9PSAtMSAmJiAhdGhpcy5nZXRTZXR0aW5nKCdwYWdlci5kaXNwbGF5JykpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwcmVwYXJlU291cmNlKHNvdXJjZTogYW55KTogRGF0YVNvdXJjZSB7XG4gICAgY29uc3QgaW5pdGlhbFNvdXJjZTogYW55ID0gdGhpcy5nZXRJbml0aWFsU29ydCgpO1xuICAgIGlmIChpbml0aWFsU291cmNlICYmIGluaXRpYWxTb3VyY2VbJ2ZpZWxkJ10gJiYgaW5pdGlhbFNvdXJjZVsnZGlyZWN0aW9uJ10pIHtcbiAgICAgIHNvdXJjZS5zZXRTb3J0KFtpbml0aWFsU291cmNlXSwgZmFsc2UpO1xuICAgIH1cbiAgICBpZiAodGhpcy5nZXRTZXR0aW5nKCdwYWdlci5kaXNwbGF5JykgPT09IHRydWUpIHtcbiAgICAgIHNvdXJjZS5zZXRQYWdpbmcodGhpcy5nZXRQYWdlVG9TZWxlY3Qoc291cmNlKSwgdGhpcy5nZXRTZXR0aW5nKCdwYWdlci5wZXJQYWdlJyksIGZhbHNlKTtcbiAgICB9XG5cbiAgICBzb3VyY2UucmVmcmVzaCgpO1xuICAgIHJldHVybiBzb3VyY2U7XG4gIH1cblxuICBnZXRJbml0aWFsU29ydCgpIHtcbiAgICBjb25zdCBzb3J0Q29uZjogYW55ID0ge307XG4gICAgdGhpcy5nZXRDb2x1bW5zKCkuZm9yRWFjaCgoY29sdW1uOiBDb2x1bW4pID0+IHtcbiAgICAgIGlmIChjb2x1bW4uaXNTb3J0YWJsZSAmJiBjb2x1bW4uZGVmYXVsdFNvcnREaXJlY3Rpb24pIHtcbiAgICAgICAgc29ydENvbmZbJ2ZpZWxkJ10gPSBjb2x1bW4uaWQ7XG4gICAgICAgIHNvcnRDb25mWydkaXJlY3Rpb24nXSA9IGNvbHVtbi5kZWZhdWx0U29ydERpcmVjdGlvbjtcbiAgICAgICAgc29ydENvbmZbJ2NvbXBhcmUnXSA9IGNvbHVtbi5nZXRDb21wYXJlRnVuY3Rpb24oKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gc29ydENvbmY7XG4gIH1cblxuICBnZXRTZWxlY3RlZFJvd3NEYXRhKCk6IEFycmF5PGFueT4ge1xuICAgIHJldHVybiB0aGlzLmRhdGFTZXQuZ2V0Um93cygpXG4gIH1cblxuICBzZWxlY3RBbGxSb3dzKHN0YXR1czogYm9vbGVhbikge1xuICAgIHRoaXMuZGF0YVNldC5zZXRTZWxlY3RBbGwoc3RhdHVzKTtcbiAgfVxuXG4gIGdldEZpcnN0Um93KCk6IFJvdyB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YVNldC5nZXRGaXJzdFJvdygpO1xuICB9XG5cbiAgZ2V0TGFzdFJvdygpOiBSb3cge1xuICAgIHJldHVybiB0aGlzLmRhdGFTZXQuZ2V0TGFzdFJvdygpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTZWxlY3Rpb25JbmZvKCk6IHsgcGVyUGFnZTogbnVtYmVyLCBwYWdlOiBudW1iZXIsIHNlbGVjdGVkUm93SW5kZXg6IG51bWJlciwgc3dpdGNoUGFnZVRvU2VsZWN0ZWRSb3dQYWdlOiBib29sZWFuIH0ge1xuICAgIGNvbnN0IHN3aXRjaFBhZ2VUb1NlbGVjdGVkUm93UGFnZTogYm9vbGVhbiA9IHRoaXMuZ2V0U2V0dGluZygnc3dpdGNoUGFnZVRvU2VsZWN0ZWRSb3dQYWdlJyk7XG4gICAgY29uc3Qgc2VsZWN0ZWRSb3dJbmRleDogbnVtYmVyID0gTnVtYmVyKHRoaXMuZ2V0U2V0dGluZygnc2VsZWN0ZWRSb3dJbmRleCcsIDApKSB8fCAwO1xuICAgIGNvbnN0IHsgcGVyUGFnZSwgcGFnZSB9OiB7IHBlclBhZ2U6IG51bWJlciwgcGFnZTogbnVtYmVyIH0gPSB0aGlzLmdldFNldHRpbmcoJ3BhZ2VyJyk7XG4gICAgcmV0dXJuIHsgcGVyUGFnZSwgcGFnZSwgc2VsZWN0ZWRSb3dJbmRleCwgc3dpdGNoUGFnZVRvU2VsZWN0ZWRSb3dQYWdlIH07XG4gIH1cblxuICBwcml2YXRlIGdldFBhZ2VUb1NlbGVjdChzb3VyY2U6IERhdGFTb3VyY2UpOiBudW1iZXIge1xuICAgIGNvbnN0IHsgc3dpdGNoUGFnZVRvU2VsZWN0ZWRSb3dQYWdlLCBzZWxlY3RlZFJvd0luZGV4LCBwZXJQYWdlLCBwYWdlIH0gPSB0aGlzLmdldFNlbGVjdGlvbkluZm8oKTtcbiAgICBsZXQgcGFnZVRvU2VsZWN0OiBudW1iZXIgPSBNYXRoLm1heCgxLCBwYWdlKTtcbiAgICBpZiAoc3dpdGNoUGFnZVRvU2VsZWN0ZWRSb3dQYWdlICYmIHNlbGVjdGVkUm93SW5kZXggPj0gMCkge1xuICAgICAgcGFnZVRvU2VsZWN0ID0gZ2V0UGFnZUZvclJvd0luZGV4KHNlbGVjdGVkUm93SW5kZXgsIHBlclBhZ2UpO1xuICAgIH1cbiAgICBjb25zdCBtYXhQYWdlQW1vdW50OiBudW1iZXIgPSBNYXRoLmNlaWwoc291cmNlLmNvdW50KCkgLyBwZXJQYWdlKTtcbiAgICByZXR1cm4gbWF4UGFnZUFtb3VudCA/IE1hdGgubWluKHBhZ2VUb1NlbGVjdCwgbWF4UGFnZUFtb3VudCkgOiBwYWdlVG9TZWxlY3Q7XG4gIH1cbn1cbiJdfQ==