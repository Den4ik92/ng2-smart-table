export class Column {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmcyLXNtYXJ0LXRhYmxlL3NyYy9saWIvbGliL2RhdGEtc2V0L2NvbHVtbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQSxNQUFNLE9BQU8sTUFBTTtJQW1CakIsWUFBbUIsRUFBVSxFQUFVLFFBQWtDLEVBQVksT0FBZ0I7UUFBbEYsT0FBRSxHQUFGLEVBQUUsQ0FBUTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQTBCO1FBQVksWUFBTyxHQUFQLE9BQU8sQ0FBUztRQWxCckcsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUNuQixTQUFJLEdBQWtDLE1BQU0sQ0FBQztRQUM3QyxVQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ25CLFVBQUssR0FBVyxFQUFFLENBQUM7UUFDbkIsU0FBSSxHQUFZLEtBQUssQ0FBQztRQUN0QixlQUFVLEdBQVksS0FBSyxDQUFDO1FBQzVCLGVBQVUsR0FBWSxJQUFJLENBQUM7UUFDM0IsY0FBUyxHQUFZLElBQUksQ0FBQztRQUMxQixpQkFBWSxHQUFZLEtBQUssQ0FBQztRQUM5QixrQkFBYSxHQUE0QixLQUFLLENBQUM7UUFDL0MseUJBQW9CLEdBQW9DLEtBQUssQ0FBQztRQUM5RCxXQUFNLEdBQXNDLEtBQUssQ0FBQztRQUNsRCxXQUFNLEdBQXNDLEtBQUssQ0FBQztRQU9oRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsa0JBQWtCO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUM5QixDQUFDO0lBRUQsdUJBQXVCO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDO0lBQ25DLENBQUM7SUFFRCxpQkFBaUI7UUFDZixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDN0IsQ0FBQztJQUVELFNBQVM7UUFDUCxJQUFJLElBQUksQ0FBQyxN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QUMsY0FBYyxDQUFDO0lBQ2hELENBQUM7SUFFRCxvQkFBb0I7UUFDbEIsT0FBTyxJQUFJLENBQUMsb0JBQW9CLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUMvRCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTbWFydFRhYmxlRWRpdG9yQW5kRmlsdGVyIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9zbWFydC10YWJsZS5tb2RlbHMnO1xuaW1wb3J0IHsgU21hcnRUYWJsZUNvbHVtblNldHRpbmdzLCBTbWFydFRhYmxlQ29sdW1uU2V0dGluZ3NUeXBlcywgU21hcnRUYWJsZVNvcnREaXJlY3Rpb24gfSBmcm9tICcuLy4uL2ludGVyZmFjZXMvc21hcnQtdGFibGUubW9kZWxzJztcbmltcG9ydCB7IERhdGFTZXQgfSBmcm9tICcuL2RhdGEtc2V0JztcblxuZXhwb3J0IGNsYXNzIENvbHVtbiB7XG4gIHRpdGxlOiBzdHJpbmcgPSAnJztcbiAgdHlwZTogU21hcnRUYWJsZUNvbHVtblNldHRpbmdzVHlwZXMgPSAndGV4dCc7XG4gIGNsYXNzOiBzdHJpbmcgPSAnJztcbiAgd2lkdGg6IHN0cmluZyA9ICcnO1xuICBoaWRlOiBib29sZWFuID0gZmFsc2U7XG4gIGlzU29ydGFibGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgaXNFZGl0YWJsZTogYm9vbGVhbiA9IHRydWU7XG4gIGlzQWRkYWJsZTogYm9vbGVhbiA9IHRydWU7XG4gIGlzRmlsdGVyYWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuICBzb3J0RGlyZWN0aW9uOiBTbWFydFRhYmxlU29ydERpcmVjdGlvbiA9ICdhc2MnO1xuICBkZWZhdWx0U29ydERpcmVjdGlvbjogU21hcnRUYWJsZVNvcnREaXJlY3Rpb24gfCBmYWxzZSA9IGZhbHNlO1xuICBlZGl0b3I6IFNtYXJ0VGFibGVFZGl0b3JBbmRGaWx0ZXIgfCBmYWxzZSA9IGZhbHNlO1xuICBmaWx0ZXI6IFNtYXJ0VGFibGVFZGl0b3JBbmRGaWx0ZXIgfCBmYWxzZSA9IGZhbHNlO1xuICByZW5kZXJDb21wb25lbnQ6IGFueTtcbiAgY29tcGFyZUZ1bmN0aW9uOiBGdW5jdGlvbiB8IHVuZGVmaW5lZDtcbiAgdmFsdWVQcmVwYXJlRnVuY3Rpb246IEZ1bmN0aW9uIHwgdW5kZWZpbmVkO1xuICBmaWx0ZXJGdW5jdGlvbjogRnVuY3Rpb24gfCB1bmRlZmluZWQ7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGlkOiBzdHJpbmcsIHByaXZhdGUgc2V0dGluZ3M6IFNtYXJ0VGFibGVDb2x1bW5TZXR0aW5ncywgcHJvdGVjdGVkIGRhdGFTZXQ6IERhdGFTZXQpIHtcbiAgICB0aGlzLnByb2Nlc3ModGhpcy5zZXR0aW5ncyk7XG4gIH1cblxuICBnZXRDb21wYXJlRnVuY3Rpb24oKTogRnVuY3Rpb24gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLmNvbXBhcmVGdW5jdGlvbjtcbiAgfVxuXG4gIGdldFZhbHVlUHJlcGFyZUZ1bmN0aW9uKCk6IEZ1bmN0aW9uIHwgdW5kZWZpbmVkICB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWVQcmVwYXJlRnVuY3Rpb247XG4gIH1cblxuICBnZXRGaWx0ZXJGdW5jdGlvbigpOiBGdW5jdGlvbiB8IHVuZGVmaW5lZCAge1xuICAgIHJldHVybiB0aGlzLmZpbHRlckZ1bmN0aW9uO1xuICB9XG5cbiAgZ2V0Q29uZmlnKCk6IGFueSB7XG4gICAgaWYgKHRoaXMuZWRpdG9yICYmICh0aGlzLmVkaXRvci50eXBlID09PSAnY2hlY2tib3gnIHx8IHRoaXMuZWRpdG9yLnR5cGUgPT09ICdjdXN0b20nIHx8IHRoaXMuZWRpdG9yLnR5cGUgPT09ICdsaXN0JykpIHtcbiAgICAgIHJldHVybiB0aGlzLmVkaXRvcj8uY29uZmlnXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgZ2V0RmlsdGVyVHlwZSgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLmZpbHRlciAmJiB0aGlzLmZpbHRlci50eXBlO1xuICB9XG5cbiAgZ2V0RmlsdGVyQ29uZmlnKCk6IGFueSB7XG4gICAgaWYgKHRoaXMuZmlsdGVyICYmICh0aGlzLmZpbHRlci50eXBlID09PSAnY2hlY2tib3gnIHx8IHRoaXMuZmlsdGVyLnR5cGUgPT09ICdjdXN0b20nIHx8IHRoaXMuZmlsdGVyLnR5cGUgPT09ICdsaXN0JykpIHtcbiAgICAgIHJldHVybiB0aGlzLmZpbHRlcj8uY29uZmlnXG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHByb3RlY3RlZCBwcm9jZXNzKHNldHRpbmdzOiBTbWFydFRhYmxlQ29sdW1uU2V0dGluZ3MpIHtcbiAgICB0aGlzLnRpdGxlID0gc2V0dGluZ3MudGl0bGU7XG4gICAgdGhpcy5jbGFzcyA9IHNldHRpbmdzLmNsYXNzIHx8ICcnO1xuICAgIHRoaXMud2lkdGggPSBzZXR0aW5ncy53aWR0aCB8fCAnJztcbiAgICB0aGlzLmhpZGUgPSAhIXNldHRpbmdzLmhpZGU7XG4gICAgdGhpcy50eXBlID0gc2V0dGluZ3MudHlwZTtcbiAgICBpZiAoc2V0dGluZ3M/LmVkaXRvcikge1xuICAgICAgdGhpcy5lZGl0b3IgPSBzZXR0aW5ncy5lZGl0b3I7XG4gICAgfVxuICAgIGlmIChzZXR0aW5ncz8uZmlsdGVyKSB7XG4gICAgICB0aGlzLmZpbHRlciA9IHNldHRpbmdzLmZpbHRlcjtcbiAgICB9XG4gICAgaWYgKHNldHRpbmdzLnR5cGUgPT09ICdjdXN0b20nICYmIHNldHRpbmdzLnJlbmRlckNvbXBvbmVudCkge1xuICAgICAgdGhpcy5yZW5kZXJDb21wb25lbnQgPSBzZXR0aW5ncy5yZW5kZXJDb21wb25lbnQ7XG4gICAgfVxuICAgIHRoaXMuaXNGaWx0ZXJhYmxlID0gdHlwZW9mIHNldHRpbmdzLmZpbHRlciA9PT0gJ3VuZGVmaW5lZCcgPyB0cnVlIDogISFzZXR0aW5nc1snZmlsdGVyJ107XG4gICAgdGhpcy5kZWZhdWx0U29ydERpcmVjdGlvbiA9IHNldHRpbmdzPy5zb3J0RGlyZWN0aW9uIHx8IGZhbHNlO1xuICAgIHRoaXMuaXNTb3J0YWJsZSA9IHR5cGVvZiBzZXR0aW5ncy5zb3J0ID09PSAndW5kZWZpbmVkJyA/IHRydWUgOiBzZXR0aW5ncy5zb3J0O1xuICAgIHRoaXMuaXNFZGl0YWJsZSA9IHR5cGVvZiBzZXR0aW5ncy5lZGl0YWJsZSA9PT0gJ3VuZGVmaW5lZCcgPyB0cnVlIDogc2V0dGluZ3MuZWRpdGFibGU7XG4gICAgdGhpcy5pc0FkZGFibGU9dHlwZW9mIHNldHRpbmdzLmFkZGFibGUgPT09ICd1bmRlZmluZWQnID8gdHJ1ZSA6IHNldHRpbmdzLmFkZGFibGU7XG4gICAgdGhpcy5zb3J0RGlyZWN0aW9uID0gdGhpcy5wcmVwYXJlU29ydERpcmVjdGlvbigpO1xuXG4gICAgdGhpcy5jb21wYXJlRnVuY3Rpb24gPSBzZXR0aW5ncy5jb21wYXJlRnVuY3Rpb247XG4gICAgdGhpcy52YWx1ZVByZXBhcmVGdW5jdGlvbiA9IHNldHRpbmdzLnZhbHVlUHJlcGFyZUZ1bmN0aW9uO1xuICAgIHRoaXMuZmlsdGVyRnVuY3Rpb24gPSBzZXR0aW5ncy5maWx0ZXJGdW5jdGlvbjtcbiAgfVxuXG4gIHByZXBhcmVTb3J0RGlyZWN0aW9uKCk6IFNtYXJ0VGFibGVTb3J0RGlyZWN0aW9uIHtcbiAgICByZXR1cm4gdGhpcy5kZWZhdWx0U29ydERpcmVjdGlvbiA9PT0gJ2Rlc2MnID8gJ2Rlc2MnIDogJ2FzYyc7XG4gIH1cbn1cbiJdfQ==