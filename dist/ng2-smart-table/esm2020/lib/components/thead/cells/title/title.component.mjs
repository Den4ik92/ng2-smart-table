import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DataSource } from '../../../../lib/data-source/data-source';
import { Column } from '../../../../lib/data-set/column';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function TitleComponent_a_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 2);
    i0.ɵɵlistener("click", function TitleComponent_a_0_Template_a_click_0_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2._sort($event)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r0.currentDirection);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.column.title, " ");
} }
function TitleComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 3);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r1.column.title);
} }
export class TitleComponent {
    constructor() {
        this.currentDirection = '';
        this.sort = new EventEmitter();
    }
    ngOnChanges(changes) {
        if (changes.source) {
            if (!changes.source.firstChange) {
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
                sortConf.forEach((fieldConf) => {
                });
            });
        }
    }
    _sort(event) {
        event.preventDefault();
        this.changeSortDirection();
        this.source.setSort([
            {
                field: this.column.id,
                direction: this.currentDirection,
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
}
TitleComponent.ɵfac = function TitleComponent_Factory(t) { return new (t || TitleComponent)(); };
TitleComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TitleComponent, selectors: [["ng2-smart-table-title"]], inputs: { column: "column", source: "source" }, outputs: { sort: "sort" }, features: [i0.ɵɵNgOnChangesFeature], decls: 2, vars: 2, consts: [["href", "#", "class", "ng2-smart-sort-link sort", 3, "ngClass", "click", 4, "ngIf"], ["class", "ng2-smart-sort", 4, "ngIf"], ["href", "#", 1, "ng2-smart-sort-link", "sort", 3, "ngClass", "click"], [1, "ng2-smart-sort"]], template: function TitleComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, TitleComponent_a_0_Template, 2, 2, "a", 0);
        i0.ɵɵtemplate(1, TitleComponent_span_1_Template, 2, 1, "span", 1);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.column.isSortable);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.column.isSortable);
    } }, dependencies: [i1.NgClass, i1.NgIf], styles: ["a.sort.asc[_ngcontent-%COMP%], a.sort.desc[_ngcontent-%COMP%]{font-weight:700}a.sort.asc[_ngcontent-%COMP%]:after, a.sort.desc[_ngcontent-%COMP%]:after{content:\"\";display:inline-block;width:0;height:0;border-bottom:4px solid rgba(0,0,0,.3);border-top:4px solid transparent;border-left:4px solid transparent;border-right:4px solid transparent;margin-bottom:2px}a.sort.desc[_ngcontent-%COMP%]:after{transform:rotate(-180deg);margin-bottom:-2px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TitleComponent, [{
        type: Component,
        args: [{ selector: 'ng2-smart-table-title', template: `
    <a href="#" *ngIf="column.isSortable"
                (click)="_sort($event)"
                class="ng2-smart-sort-link sort"
                [ngClass]="currentDirection">
      {{ column.title }}
    </a>
    <span class="ng2-smart-sort" *ngIf="!column.isSortable">{{ column.title }}</span>
  `, styles: ["a.sort.asc,a.sort.desc{font-weight:700}a.sort.asc:after,a.sort.desc:after{content:\"\";display:inline-block;width:0;height:0;border-bottom:4px solid rgba(0,0,0,.3);border-top:4px solid transparent;border-left:4px solid transparent;border-right:4px solid transparent;margin-bottom:2px}a.sort.desc:after{transform:rotate(-180deg);margin-bottom:-2px}\n"] }]
    }], null, { column: [{
            type: Input
        }], source: [{
            type: Input
        }], sort: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGl0bGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmcyLXNtYXJ0LXRhYmxlL3NyYy9saWIvY29tcG9uZW50cy90aGVhZC9jZWxscy90aXRsZS90aXRsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFHakcsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQzs7Ozs7SUFNckQsNEJBR3lDO0lBRjdCLDBKQUFTLGVBQUEsb0JBQWEsQ0FBQSxJQUFDO0lBR2pDLFlBQ0Y7SUFBQSxpQkFBSTs7O0lBRlEsaURBQTRCO0lBQ3RDLGVBQ0Y7SUFERSxvREFDRjs7O0lBQ0EsK0JBQXdEO0lBQUEsWUFBa0I7SUFBQSxpQkFBTzs7O0lBQXpCLGVBQWtCO0lBQWxCLHlDQUFrQjs7QUFHOUUsTUFBTSxPQUFPLGNBQWM7SUFiM0I7UUFlRSxxQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFHWixTQUFJLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztLQStDMUM7SUEzQ0MsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTtZQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUU7Z0JBQy9CLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDbkM7WUFDRCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQUU7Z0JBQ3RFLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBRXZDLElBQUksUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFO29CQUNsRSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2lCQUNsRDtxQkFBTTtvQkFDTCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO2lCQUM1QjtnQkFFRCxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBYyxFQUFFLEVBQUU7Z0JBRXBDLENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFFRCxLQUFLLENBQUMsS0FBVTtRQUNkLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztZQUNsQjtnQkFDRSxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUNyQixTQUFTLEVBQUUsSUFBSSxDQUFDLGdCQUFnQjtnQkFDaEMsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLEVBQUU7YUFDMUM7U0FDRixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRUQsbUJBQW1CO1FBQ2pCLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3pCLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQ3RFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxZQUFZLENBQUM7U0FDdEM7YUFBTTtZQUNMLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQztTQUNuRDtRQUNELE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQy9CLENBQUM7OzRFQW5EVSxjQUFjO2lFQUFkLGNBQWM7UUFUdkIsMkRBS0k7UUFDSixpRUFBaUY7O1FBTnBFLDRDQUF1QjtRQU1OLGVBQXdCO1FBQXhCLDZDQUF3Qjs7dUZBRzdDLGNBQWM7Y0FiMUIsU0FBUzsyQkFDRSx1QkFBdUIsWUFFdkI7Ozs7Ozs7O0dBUVQ7Z0JBS1EsTUFBTTtrQkFBZCxLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLO1lBQ0ksSUFBSTtrQkFBYixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvZGF0YS1zb3VyY2UvZGF0YS1zb3VyY2UnO1xuaW1wb3J0IHsgQ29sdW1uIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL2RhdGEtc2V0L2NvbHVtbic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nMi1zbWFydC10YWJsZS10aXRsZScsXG4gIHN0eWxlVXJsczogWycuL3RpdGxlLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlOiBgXG4gICAgPGEgaHJlZj1cIiNcIiAqbmdJZj1cImNvbHVtbi5pc1NvcnRhYmxlXCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwiX3NvcnQoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJuZzItc21hcnQtc29ydC1saW5rIHNvcnRcIlxuICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cImN1cnJlbnREaXJlY3Rpb25cIj5cbiAgICAgIHt7IGNvbHVtbi50aXRsZSB9fVxuICAgIDwvYT5cbiAgICA8c3BhbiBjbGFzcz1cIm5nMi1zbWFydC1zb3J0XCIgKm5nSWY9XCIhY29sdW1uLmlzU29ydGFibGVcIj57eyBjb2x1bW4udGl0bGUgfX08L3NwYW4+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIFRpdGxlQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuICBjdXJyZW50RGlyZWN0aW9uID0gJyc7XG4gIEBJbnB1dCgpIGNvbHVtbjogQ29sdW1uO1xuICBASW5wdXQoKSBzb3VyY2U6IERhdGFTb3VyY2U7XG4gIEBPdXRwdXQoKSBzb3J0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgcHJvdGVjdGVkIGRhdGFDaGFuZ2VkU3ViOiBTdWJzY3JpcHRpb247XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmIChjaGFuZ2VzLnNvdXJjZSkge1xuICAgICAgaWYgKCFjaGFuZ2VzLnNvdXJjZS5maXJzdENoYW5nZSkge1xuICAgICAgICB0aGlzLmRhdGFDaGFuZ2VkU3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmRhdGFDaGFuZ2VkU3ViID0gdGhpcy5zb3VyY2Uub25DaGFuZ2VkKCkuc3Vic2NyaWJlKChkYXRhQ2hhbmdlcykgPT4ge1xuICAgICAgICBjb25zdCBzb3J0Q29uZiA9IHRoaXMuc291cmNlLmdldFNvcnQoKTtcblxuICAgICAgICBpZiAoc29ydENvbmYubGVuZ3RoID4gMCAmJiBzb3J0Q29uZlswXVsnZmllbGQnXSA9PT0gdGhpcy5jb2x1bW4uaWQpIHtcbiAgICAgICAgICB0aGlzLmN1cnJlbnREaXJlY3Rpb24gPSBzb3J0Q29uZlswXVsnZGlyZWN0aW9uJ107XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5jdXJyZW50RGlyZWN0aW9uID0gJyc7XG4gICAgICAgIH1cblxuICAgICAgICBzb3J0Q29uZi5mb3JFYWNoKChmaWVsZENvbmY6IGFueSkgPT4ge1xuXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgX3NvcnQoZXZlbnQ6IGFueSkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5jaGFuZ2VTb3J0RGlyZWN0aW9uKCk7XG4gICAgdGhpcy5zb3VyY2Uuc2V0U29ydChbXG4gICAgICB7XG4gICAgICAgIGZpZWxkOiB0aGlzLmNvbHVtbi5pZCxcbiAgICAgICAgZGlyZWN0aW9uOiB0aGlzLmN1cnJlbnREaXJlY3Rpb24sXG4gICAgICAgIGNvbXBhcmU6IHRoaXMuY29sdW1uLmdldENvbXBhcmVGdW5jdGlvbigpLFxuICAgICAgfSxcbiAgICBdKTtcbiAgICB0aGlzLnNvcnQuZW1pdChudWxsKTtcbiAgfVxuXG4gIGNoYW5nZVNvcnREaXJlY3Rpb24oKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5jdXJyZW50RGlyZWN0aW9uKSB7XG4gICAgICBjb25zdCBuZXdEaXJlY3Rpb24gPSB0aGlzLmN1cnJlbnREaXJlY3Rpb24gPT09ICdhc2MnID8gJ2Rlc2MnIDogJ2FzYyc7XG4gICAgICB0aGlzLmN1cnJlbnREaXJlY3Rpb24gPSBuZXdEaXJlY3Rpb247XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY3VycmVudERpcmVjdGlvbiA9IHRoaXMuY29sdW1uLnNvcnREaXJlY3Rpb247XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmN1cnJlbnREaXJlY3Rpb247XG4gIH1cbn1cbiJdfQ==