import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { DefaultFilter } from './default-filter';
import * as i0 from "@angular/core";
export class CompleterFilterComponent extends DefaultFilter {
    constructor() {
        super();
        this.completerContent = new Subject();
    }
    ngOnInit() {
        // const config = this.column.getFilterConfig().completer;
        // config.dataService = this.completerService.local(config.data, config.searchFields, config.titleField);
        // config.dataService.descriptionField(config.descriptionField);
        // this.changesSubscription = this.completerContent
        //   .pipe(
        //     map((ev: any) => (ev && ev.title) || ev || ''),
        //     distinctUntilChanged(),
        //     debounceTime(this.delay)
        //   )
        //   .subscribe((search: string) => {
        //     this.query = search;
        //     this.setFilter();
        //   });
    }
    inputTextChanged(event) {
        // workaround to trigger the search event when the home/end buttons are clicked
        // when this happens the [(ngModel)]="query" is set to "" but the (selected) method is not called
        // so here it gets called manually
        if (event === '') {
            this.completerContent.next(event);
        }
    }
}
CompleterFilterComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: CompleterFilterComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
CompleterFilterComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: CompleterFilterComponent, selector: "completer-filter", usesInheritance: true, ngImport: i0, template: `
    <!-- <ng2-completer [(ngModel)]="query"
                   (ngModelChange)="inputTextChanged($event)"
                   [dataService]="column.getFilterConfig().completer.dataService"
                   [minSearchLength]="column.getFilterConfig().completer.minSearchLength || 0"
                   [pause]="column.getFilterConfig().completer.pause || 0"
                   [placeholder]="column.getFilterConfig().completer.placeholder || 'Start typing...'"
                   (selected)="completerContent.next($event)">
    </ng2-completer> -->
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: CompleterFilterComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'completer-filter',
                    template: `
    <!-- <ng2-completer [(ngModel)]="query"
                   (ngModelChange)="inputTextChanged($event)"
                   [dataService]="column.getFilterConfig().completer.dataService"
                   [minSearchLength]="column.getFilterConfig().completer.minSearchLength || 0"
                   [pause]="column.getFilterConfig().completer.pause || 0"
                   [placeholder]="column.getFilterConfig().completer.placeholder || 'Start typing...'"
                   (selected)="completerContent.next($event)">
    </ng2-completer> -->
  `,
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGxldGVyLWZpbHRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZzItc21hcnQtdGFibGUvc3JjL2xpYi9jb21wb25lbnRzL2ZpbHRlci9maWx0ZXItdHlwZXMvY29tcGxldGVyLWZpbHRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRS9CLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7QUFnQmpELE1BQU0sT0FBTyx3QkFBeUIsU0FBUSxhQUFhO0lBSXpEO1FBQ0UsS0FBSyxFQUFFLENBQUM7UUFIVixxQkFBZ0IsR0FBRyxJQUFJLE9BQU8sRUFBTyxDQUFDO0lBSXRDLENBQUM7SUFFRCxRQUFRO1FBQ04sMERBQTBEO1FBQzFELHlHQUF5RztRQUN6RyxnRUFBZ0U7UUFFaEUsbURBQW1EO1FBQ25ELFdBQVc7UUFDWCxzREFBc0Q7UUFDdEQsOEJBQThCO1FBQzlCLCtCQUErQjtRQUMvQixNQUFNO1FBQ04scUNBQXFDO1FBQ3JDLDJCQUEyQjtRQUMzQix3QkFBd0I7UUFDeEIsUUFBUTtJQUNWLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxLQUFhO1FBQzVCLCtFQUErRTtRQUMvRSxpR0FBaUc7UUFDakcsa0NBQWtDO1FBQ2xDLElBQUksS0FBSyxLQUFLLEVBQUUsRUFBRTtZQUNoQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ25DO0lBQ0gsQ0FBQzs7cUhBaENVLHdCQUF3Qjt5R0FBeEIsd0JBQXdCLCtFQVh6Qjs7Ozs7Ozs7O0dBU1Q7MkZBRVUsd0JBQXdCO2tCQWJwQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLFFBQVEsRUFBRTs7Ozs7Ozs7O0dBU1Q7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBEZWZhdWx0RmlsdGVyIH0gZnJvbSAnLi9kZWZhdWx0LWZpbHRlcic7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgZGVib3VuY2VUaW1lLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NvbXBsZXRlci1maWx0ZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDwhLS0gPG5nMi1jb21wbGV0ZXIgWyhuZ01vZGVsKV09XCJxdWVyeVwiXG4gICAgICAgICAgICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwiaW5wdXRUZXh0Q2hhbmdlZCgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICBbZGF0YVNlcnZpY2VdPVwiY29sdW1uLmdldEZpbHRlckNvbmZpZygpLmNvbXBsZXRlci5kYXRhU2VydmljZVwiXG4gICAgICAgICAgICAgICAgICAgW21pblNlYXJjaExlbmd0aF09XCJjb2x1bW4uZ2V0RmlsdGVyQ29uZmlnKCkuY29tcGxldGVyLm1pblNlYXJjaExlbmd0aCB8fCAwXCJcbiAgICAgICAgICAgICAgICAgICBbcGF1c2VdPVwiY29sdW1uLmdldEZpbHRlckNvbmZpZygpLmNvbXBsZXRlci5wYXVzZSB8fCAwXCJcbiAgICAgICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiY29sdW1uLmdldEZpbHRlckNvbmZpZygpLmNvbXBsZXRlci5wbGFjZWhvbGRlciB8fCAnU3RhcnQgdHlwaW5nLi4uJ1wiXG4gICAgICAgICAgICAgICAgICAgKHNlbGVjdGVkKT1cImNvbXBsZXRlckNvbnRlbnQubmV4dCgkZXZlbnQpXCI+XG4gICAgPC9uZzItY29tcGxldGVyPiAtLT5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgQ29tcGxldGVyRmlsdGVyQ29tcG9uZW50IGV4dGVuZHMgRGVmYXVsdEZpbHRlciBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29tcGxldGVyQ29udGVudCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLy8gY29uc3QgY29uZmlnID0gdGhpcy5jb2x1bW4uZ2V0RmlsdGVyQ29uZmlnKCkuY29tcGxldGVyO1xuICAgIC8vIGNvbmZpZy5kYXRhU2VydmljZSA9IHRoaXMuY29tcGxldGVyU2VydmljZS5sb2NhbChjb25maWcuZGF0YSwgY29uZmlnLnNlYXJjaEZpZWxkcywgY29uZmlnLnRpdGxlRmllbGQpO1xuICAgIC8vIGNvbmZpZy5kYXRhU2VydmljZS5kZXNjcmlwdGlvbkZpZWxkKGNvbmZpZy5kZXNjcmlwdGlvbkZpZWxkKTtcblxuICAgIC8vIHRoaXMuY2hhbmdlc1N1YnNjcmlwdGlvbiA9IHRoaXMuY29tcGxldGVyQ29udGVudFxuICAgIC8vICAgLnBpcGUoXG4gICAgLy8gICAgIG1hcCgoZXY6IGFueSkgPT4gKGV2ICYmIGV2LnRpdGxlKSB8fCBldiB8fCAnJyksXG4gICAgLy8gICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgLy8gICAgIGRlYm91bmNlVGltZSh0aGlzLmRlbGF5KVxuICAgIC8vICAgKVxuICAgIC8vICAgLnN1YnNjcmliZSgoc2VhcmNoOiBzdHJpbmcpID0+IHtcbiAgICAvLyAgICAgdGhpcy5xdWVyeSA9IHNlYXJjaDtcbiAgICAvLyAgICAgdGhpcy5zZXRGaWx0ZXIoKTtcbiAgICAvLyAgIH0pO1xuICB9XG5cbiAgaW5wdXRUZXh0Q2hhbmdlZChldmVudDogc3RyaW5nKSB7XG4gICAgLy8gd29ya2Fyb3VuZCB0byB0cmlnZ2VyIHRoZSBzZWFyY2ggZXZlbnQgd2hlbiB0aGUgaG9tZS9lbmQgYnV0dG9ucyBhcmUgY2xpY2tlZFxuICAgIC8vIHdoZW4gdGhpcyBoYXBwZW5zIHRoZSBbKG5nTW9kZWwpXT1cInF1ZXJ5XCIgaXMgc2V0IHRvIFwiXCIgYnV0IHRoZSAoc2VsZWN0ZWQpIG1ldGhvZCBpcyBub3QgY2FsbGVkXG4gICAgLy8gc28gaGVyZSBpdCBnZXRzIGNhbGxlZCBtYW51YWxseVxuICAgIGlmIChldmVudCA9PT0gJycpIHtcbiAgICAgIHRoaXMuY29tcGxldGVyQ29udGVudC5uZXh0KGV2ZW50KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==