export function prepareValue(value) { return value; }
export class Cell {
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
    getRow() {
        return this.row;
    }
    getValue() {
        const valid = this.column.getValuePrepareFunction() instanceof Function;
        const prepare = valid ? this.column.getValuePrepareFunction() : Cell.PREPARE;
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
Cell.PREPARE = prepareValue;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nMi1zbWFydC10YWJsZS9zcmMvbGliL2xpYi9kYXRhLXNldC9jZWxsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBLE1BQU0sVUFBVSxZQUFZLENBQUUsS0FBVSxJQUFJLE9BQU8sS0FBSyxDQUFBLENBQUMsQ0FBQztBQUUxRCxNQUFNLE9BQU8sSUFBSTtJQUtmLFlBQXNCLEtBQVUsRUFBWSxHQUFRLEVBQVksTUFBVyxFQUFZLE9BQWdCO1FBQWpGLFVBQUssR0FBTCxLQUFLLENBQUs7UUFBWSxRQUFHLEdBQUgsR0FBRyxDQUFLO1FBQVksV0FBTSxHQUFOLE1BQU0sQ0FBSztRQUFZLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFIdkcsYUFBUSxHQUFRLEVBQUUsQ0FBQztRQUlqQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDO0lBRUQsU0FBUztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBRUQsTUFBTTtRQUNKLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNsQixDQUFDO0lBRUQsUUFBUTtRQUNOLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsdUJBQXVCLEVBQUUsWUFBWSxRQUFRLENBQUM7UUFDeEUsTUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLHVCQUF1QixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDN0UsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVELFFBQVEsQ0FBQyxLQUFVO1FBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLENBQUM7SUFFRCxLQUFLO1FBQ0gsT0FBTyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRCxRQUFRO1FBQ04sT0FBTyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsS0FBSyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxVQUFVO1FBQ1IsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQzlCLE9BQU8sSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLFNBQVMsQ0FBQztTQUNuQzthQUNJO1lBQ0gsT0FBTyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsVUFBVSxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQzs7QUF2Q2dCLFlBQU8sR0FBRyxZQUFZLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb2x1bW4gfSBmcm9tICcuL2NvbHVtbic7XG5pbXBvcnQgeyBEYXRhU2V0IH0gZnJvbSAnLi9kYXRhLXNldCc7XG5pbXBvcnQgeyBSb3cgfSBmcm9tICcuL3Jvdyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVwYXJlVmFsdWUgKHZhbHVlOiBhbnkpIHsgcmV0dXJuIHZhbHVlIH1cblxuZXhwb3J0IGNsYXNzIENlbGwge1xuXG4gIG5ld1ZhbHVlOiBhbnkgPSAnJztcbiAgcHJvdGVjdGVkIHN0YXRpYyBQUkVQQVJFID0gcHJlcGFyZVZhbHVlO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCB2YWx1ZTogYW55LCBwcm90ZWN0ZWQgcm93OiBSb3csIHByb3RlY3RlZCBjb2x1bW46IGFueSwgcHJvdGVjdGVkIGRhdGFTZXQ6IERhdGFTZXQpIHtcbiAgICB0aGlzLm5ld1ZhbHVlID0gdmFsdWU7XG4gIH1cblxuICBnZXRDb2x1bW4oKTogQ29sdW1uIHtcbiAgICByZXR1cm4gdGhpcy5jb2x1bW47XG4gIH1cblxuICBnZXRSb3coKTogUm93IHtcbiAgICByZXR1cm4gdGhpcy5yb3c7XG4gIH1cblxuICBnZXRWYWx1ZSgpOiBhbnkge1xuICAgIGNvbnN0IHZhbGlkID0gdGhpcy5jb2x1bW4uZ2V0VmFsdWVQcmVwYXJlRnVuY3Rpb24oKSBpbnN0YW5jZW9mIEZ1bmN0aW9uO1xuICAgIGNvbnN0IHByZXBhcmUgPSB2YWxpZCA/IHRoaXMuY29sdW1uLmdldFZhbHVlUHJlcGFyZUZ1bmN0aW9uKCkgOiBDZWxsLlBSRVBBUkU7XG4gICAgcmV0dXJuIHByZXBhcmUuY2FsbChudWxsLCB0aGlzLnZhbHVlLCB0aGlzLnJvdy5nZXREYXRhKCksIHRoaXMpO1xuICB9XG5cbiAgc2V0VmFsdWUodmFsdWU6IGFueSk6IGFueSB7XG4gICAgdGhpcy5uZXdWYWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0SWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5nZXRDb2x1bW4oKS5pZDtcbiAgfVxuXG4gIGdldFRpdGxlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q29sdW1uKCkudGl0bGU7XG4gIH1cblxuICBpc0VkaXRhYmxlKCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLmdldFJvdygpLmluZGV4ID09PSAtMSkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0Q29sdW1uKCkuaXNBZGRhYmxlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmdldENvbHVtbigpLmlzRWRpdGFibGU7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==