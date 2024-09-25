import { LocalDataSource } from './../../../../lib/data-source/local/local.data-source';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Column } from '../../../../lib/data-set/column';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class TitleComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGl0bGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmcyLXNtYXJ0LXRhYmxlL3NyYy9saWIvY29tcG9uZW50cy90aGVhZC9jZWxscy90aXRsZS90aXRsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBRWpHLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQzs7O0FBbUJ6RCxNQUFNLE9BQU8sY0FBYztJQWpCM0I7UUFtQkUscUJBQWdCLEdBQWlDLEVBQUUsQ0FBQztRQUcxQyxTQUFJLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUUvQixtQkFBYyxHQUF5QixLQUFLLENBQUM7S0F5Q3hEO0lBdkNDLFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDMUQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNwQyxDQUFDO1lBQ0QsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxFQUFFO2dCQUN0RSxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUV2QyxJQUFJLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxDQUFDO29CQUNuRSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUNuRCxDQUFDO3FCQUFNLENBQUM7b0JBQ04sSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztnQkFDN0IsQ0FBQztZQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztJQUNILENBQUM7SUFFRCxLQUFLLENBQUMsS0FBVTtRQUNkLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztZQUNsQjtnQkFDRSxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUNyQixTQUFTLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFBLENBQUMsQ0FBQyxLQUFLO2dCQUMzRCxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRTthQUMxQztTQUNGLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxtQkFBbUI7UUFDakIsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUMxQixNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUN0RSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsWUFBWSxDQUFDO1FBQ3ZDLENBQUM7YUFBTSxDQUFDO1lBQ04sSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDO1FBQ3BELENBQUM7UUFDRCxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUMvQixDQUFDOytHQS9DVSxjQUFjO21HQUFkLGNBQWMsNkpBZGY7Ozs7Ozs7Ozs7OztLQVlQOzs0RkFFUSxjQUFjO2tCQWpCMUIsU0FBUzsrQkFDRSx1QkFBdUIsWUFFdkI7Ozs7Ozs7Ozs7OztLQVlQOzhCQUtNLE1BQU07c0JBQWQsS0FBSztnQkFDRyxNQUFNO3NCQUFkLEtBQUs7Z0JBQ0ksSUFBSTtzQkFBYixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU21hcnRUYWJsZVNvcnREaXJlY3Rpb24gfSBmcm9tICcuLy4uLy4uLy4uLy4uL2xpYi9pbnRlcmZhY2VzL3NtYXJ0LXRhYmxlLm1vZGVscyc7XG5pbXBvcnQgeyBMb2NhbERhdGFTb3VyY2UgfSBmcm9tICcuLy4uLy4uLy4uLy4uL2xpYi9kYXRhLXNvdXJjZS9sb2NhbC9sb2NhbC5kYXRhLXNvdXJjZSc7XG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENvbHVtbiB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9kYXRhLXNldC9jb2x1bW4nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZzItc21hcnQtdGFibGUtdGl0bGUnLFxuICBzdHlsZVVybHM6IFsnLi90aXRsZS5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZTogYFxuICAgIEBpZiAoY29sdW1uLmlzU29ydGFibGUpIHtcbiAgICAgIDxhIGhyZWY9XCIjXCJcbiAgICAgICAgKGNsaWNrKT1cIl9zb3J0KCRldmVudClcIlxuICAgICAgICBjbGFzcz1cIm5nMi1zbWFydC1zb3J0LWxpbmsgc29ydFwiXG4gICAgICAgIFtuZ0NsYXNzXT1cImN1cnJlbnREaXJlY3Rpb25cIj5cbiAgICAgICAge3sgY29sdW1uLnRpdGxlIH19XG4gICAgICA8L2E+XG4gICAgfVxuICAgIEBpZiAoIWNvbHVtbi5pc1NvcnRhYmxlKSB7XG4gICAgICA8c3BhbiBjbGFzcz1cIm5nMi1zbWFydC1zb3J0XCI+e3sgY29sdW1uLnRpdGxlIH19PC9zcGFuPlxuICAgIH1cbiAgICBgLFxufSlcbmV4cG9ydCBjbGFzcyBUaXRsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cbiAgY3VycmVudERpcmVjdGlvbjogU21hcnRUYWJsZVNvcnREaXJlY3Rpb24gfCAnJyA9ICcnO1xuICBASW5wdXQoKSBjb2x1bW4hOiBDb2x1bW47XG4gIEBJbnB1dCgpIHNvdXJjZSE6IExvY2FsRGF0YVNvdXJjZTtcbiAgQE91dHB1dCgpIHNvcnQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBwcm90ZWN0ZWQgZGF0YUNoYW5nZWRTdWI6IFN1YnNjcmlwdGlvbiB8IGZhbHNlID0gZmFsc2U7XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmIChjaGFuZ2VzWydzb3VyY2UnXSkge1xuICAgICAgaWYgKCFjaGFuZ2VzWydzb3VyY2UnXS5maXJzdENoYW5nZSAmJiB0aGlzLmRhdGFDaGFuZ2VkU3ViKSB7XG4gICAgICAgIHRoaXMuZGF0YUNoYW5nZWRTdWIudW5zdWJzY3JpYmUoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZGF0YUNoYW5nZWRTdWIgPSB0aGlzLnNvdXJjZS5vbkNoYW5nZWQoKS5zdWJzY3JpYmUoKGRhdGFDaGFuZ2VzKSA9PiB7XG4gICAgICAgIGNvbnN0IHNvcnRDb25mID0gdGhpcy5zb3VyY2UuZ2V0U29ydCgpO1xuXG4gICAgICAgIGlmIChzb3J0Q29uZi5sZW5ndGggPiAwICYmIHNvcnRDb25mWzBdWydmaWVsZCddID09PSB0aGlzLmNvbHVtbi5pZCkge1xuICAgICAgICAgIHRoaXMuY3VycmVudERpcmVjdGlvbiA9IHNvcnRDb25mWzBdWydkaXJlY3Rpb24nXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmN1cnJlbnREaXJlY3Rpb24gPSAnJztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgX3NvcnQoZXZlbnQ6IGFueSkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5jaGFuZ2VTb3J0RGlyZWN0aW9uKCk7XG4gICAgdGhpcy5zb3VyY2Uuc2V0U29ydChbXG4gICAgICB7XG4gICAgICAgIGZpZWxkOiB0aGlzLmNvbHVtbi5pZCxcbiAgICAgICAgZGlyZWN0aW9uOiB0aGlzLmN1cnJlbnREaXJlY3Rpb24gPT09ICdkZXNjJyA/ICdkZXNjJzogJ2FzYycsXG4gICAgICAgIGNvbXBhcmU6IHRoaXMuY29sdW1uLmdldENvbXBhcmVGdW5jdGlvbigpLFxuICAgICAgfSxcbiAgICBdKTtcbiAgICB0aGlzLnNvcnQuZW1pdChudWxsKTtcbiAgfVxuXG4gIGNoYW5nZVNvcnREaXJlY3Rpb24oKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5jdXJyZW50RGlyZWN0aW9uKSB7XG4gICAgICBjb25zdCBuZXdEaXJlY3Rpb24gPSB0aGlzLmN1cnJlbnREaXJlY3Rpb24gPT09ICdhc2MnID8gJ2Rlc2MnIDogJ2FzYyc7XG4gICAgICB0aGlzLmN1cnJlbnREaXJlY3Rpb24gPSBuZXdEaXJlY3Rpb247XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY3VycmVudERpcmVjdGlvbiA9IHRoaXMuY29sdW1uLnNvcnREaXJlY3Rpb247XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmN1cnJlbnREaXJlY3Rpb247XG4gIH1cbn1cbiJdfQ==