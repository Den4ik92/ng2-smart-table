import { Component } from '@angular/core';
import { FilterDefault } from './filter-default';
import * as i0 from "@angular/core";
import * as i1 from "./default-filter.component";
import * as i2 from "./custom-filter.component";
export class FilterComponent extends FilterDefault {
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
      `, isInline: true, styles: [":host .ng2-smart-filter ::ng-deep input,:host .ng2-smart-filter ::ng-deep select{width:100%;line-height:normal;padding:.375em .75em;font-weight:400}:host .ng2-smart-filter ::ng-deep input[type=search]{box-sizing:inherit}:host .ng2-smart-filter ::ng-deep .completer-dropdown-holder{font-weight:400}:host .ng2-smart-filter ::ng-deep a{font-weight:400}\n"], dependencies: [{ kind: "component", type: i1.DefaultFilterComponent, selector: "default-table-filter" }, { kind: "component", type: i2.CustomFilterComponent, selector: "custom-table-filter" }] }); }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nMi1zbWFydC10YWJsZS9zcmMvbGliL2NvbXBvbmVudHMvZmlsdGVyL2ZpbHRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFDcEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7O0FBaUNqRCxNQUFNLE9BQU8sZUFBZ0IsU0FBUSxhQUFhO0lBR2hELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDMUQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNwQyxDQUFDO1lBQ0QsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxFQUFFO2dCQUN0RSxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUMzQyxJQUFJLFVBQVUsSUFBSSxVQUFVLENBQUMsT0FBTyxJQUFJLFVBQVUsQ0FBQyxPQUFPLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRSxDQUFDO29CQUN4RSxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztvQkFFaEIsa0ZBQWtGO29CQUNsRixzR0FBc0c7Z0JBQ3hHLENBQUM7cUJBQU0sSUFBSSxVQUFVLElBQUksVUFBVSxDQUFDLE9BQU8sSUFBSSxVQUFVLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQztvQkFDN0UsVUFBVSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFNLEVBQUUsQ0FBTSxFQUFFLEVBQUU7d0JBQzVDLElBQUksQ0FBQyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxDQUFDOzRCQUM5QixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUM7d0JBQ3hCLENBQUM7b0JBQ0gsQ0FBQyxDQUFDLENBQUM7Z0JBQ0wsQ0FBQztZQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztJQUNILENBQUM7K0dBeEJVLGVBQWU7bUdBQWYsZUFBZSwwR0EzQmhCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BeUJMOzs0RkFFTSxlQUFlO2tCQTlCM0IsU0FBUzsrQkFDRSx3QkFBd0IsWUFFeEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0F5QkwiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmlsdGVyRGVmYXVsdCB9IGZyb20gJy4vZmlsdGVyLWRlZmF1bHQnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nMi1zbWFydC10YWJsZS1maWx0ZXInLFxuICBzdHlsZVVybHM6IFsnLi9maWx0ZXIuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGU6IGBcbiAgICAgIEBpZiAoY29sdW1uLmlzRmlsdGVyYWJsZSkge1xuICAgICAgICA8ZGl2IGNsYXNzPVwibmcyLXNtYXJ0LWZpbHRlclwiPlxuICAgICAgICAgIEBzd2l0Y2ggKGNvbHVtbi5nZXRGaWx0ZXJUeXBlKCkpIHtcbiAgICAgICAgICAgIEBjYXNlICgnY3VzdG9tJykge1xuICAgICAgICAgICAgICA8Y3VzdG9tLXRhYmxlLWZpbHRlclxuICAgICAgICAgICAgICAgIFtxdWVyeV09XCJxdWVyeVwiXG4gICAgICAgICAgICAgICAgW2NvbHVtbl09XCJjb2x1bW5cIlxuICAgICAgICAgICAgICAgIFtzb3VyY2VdPVwic291cmNlXCJcbiAgICAgICAgICAgICAgICBbaW5wdXRDbGFzc109XCJpbnB1dENsYXNzXCJcbiAgICAgICAgICAgICAgICAoZmlsdGVyKT1cIm9uRmlsdGVyKCRldmVudClcIj5cbiAgICAgICAgICAgICAgPC9jdXN0b20tdGFibGUtZmlsdGVyPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQGRlZmF1bHQge1xuICAgICAgICAgICAgICA8ZGVmYXVsdC10YWJsZS1maWx0ZXJcbiAgICAgICAgICAgICAgICBbcXVlcnldPVwicXVlcnlcIlxuICAgICAgICAgICAgICAgIFtjb2x1bW5dPVwiY29sdW1uXCJcbiAgICAgICAgICAgICAgICBbc291cmNlXT1cInNvdXJjZVwiXG4gICAgICAgICAgICAgICAgW2lucHV0Q2xhc3NdPVwiaW5wdXRDbGFzc1wiXG4gICAgICAgICAgICAgICAgKGZpbHRlcik9XCJvbkZpbHRlcigkZXZlbnQpXCI+XG4gICAgICAgICAgICAgIDwvZGVmYXVsdC10YWJsZS1maWx0ZXI+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIH1cbiAgICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIEZpbHRlckNvbXBvbmVudCBleHRlbmRzIEZpbHRlckRlZmF1bHQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBwcm90ZWN0ZWQgZGF0YUNoYW5nZWRTdWI/OiBTdWJzY3JpcHRpb247XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmIChjaGFuZ2VzWydzb3VyY2UnXSkge1xuICAgICAgaWYgKCFjaGFuZ2VzWydzb3VyY2UnXS5maXJzdENoYW5nZSAmJiB0aGlzLmRhdGFDaGFuZ2VkU3ViKSB7XG4gICAgICAgIHRoaXMuZGF0YUNoYW5nZWRTdWIudW5zdWJzY3JpYmUoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZGF0YUNoYW5nZWRTdWIgPSB0aGlzLnNvdXJjZS5vbkNoYW5nZWQoKS5zdWJzY3JpYmUoKGRhdGFDaGFuZ2VzKSA9PiB7XG4gICAgICAgIGNvbnN0IGZpbHRlckNvbmYgPSB0aGlzLnNvdXJjZS5nZXRGaWx0ZXIoKTtcbiAgICAgICAgaWYgKGZpbHRlckNvbmYgJiYgZmlsdGVyQ29uZi5maWx0ZXJzICYmIGZpbHRlckNvbmYuZmlsdGVycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLnF1ZXJ5ID0gJyc7XG5cbiAgICAgICAgICAvLyBhZGQgYSBjaGVjayBmb3IgZXhpc3RpbmcgZmlsdGVycyBhbiBzZXQgdGhlIHF1ZXJ5IGlmIG9uZSBleGlzdHMgZm9yIHRoaXMgY29sdW1uXG4gICAgICAgICAgLy8gdGhpcyBjb3ZlcnMgaW5zdGFuY2VzIHdoZXJlIHRoZSBmaWx0ZXIgaXMgc2V0IGJ5IHVzZXIgY29kZSB3aGlsZSBtYWludGFpbmluZyBleGlzdGluZyBmdW5jdGlvbmFsaXR5XG4gICAgICAgIH0gZWxzZSBpZiAoZmlsdGVyQ29uZiAmJiBmaWx0ZXJDb25mLmZpbHRlcnMgJiYgZmlsdGVyQ29uZi5maWx0ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBmaWx0ZXJDb25mLmZpbHRlcnMuZm9yRWFjaCgoazogYW55LCB2OiBhbnkpID0+IHtcbiAgICAgICAgICAgIGlmIChrLmZpZWxkID09IHRoaXMuY29sdW1uLmlkKSB7XG4gICAgICAgICAgICAgIHRoaXMucXVlcnkgPSBrLnNlYXJjaDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iXX0=