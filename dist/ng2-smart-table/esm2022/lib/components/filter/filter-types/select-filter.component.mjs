import { Component, ViewChild } from '@angular/core';
import { NgControl } from '@angular/forms';
import { distinctUntilChanged, debounceTime, skip } from 'rxjs/operators';
import { DefaultFilter } from './default-filter';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
export class SelectFilterComponent extends DefaultFilter {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWZpbHRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZzItc21hcnQtdGFibGUvc3JjL2xpYi9jb21wb25lbnRzL2ZpbHRlci9maWx0ZXItdHlwZXMvc2VsZWN0LWZpbHRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFMUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7O0FBbUJqRCxNQUFNLE9BQU8scUJBQXNCLFNBQVEsYUFBYTtJQUd0RDtRQUNFLEtBQUssRUFBRSxDQUFDO0lBQ1YsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDbkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZO2lCQUM3QixJQUFJLENBQ0gsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUNQLG9CQUFvQixFQUFFLEVBQ3RCLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQ3pCO2lCQUNBLFNBQVMsQ0FBQyxDQUFDLEtBQWEsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7UUFDbEQsQ0FBQztJQUVILENBQUM7K0dBbEJVLHFCQUFxQjttR0FBckIscUJBQXFCLDhJQUNHLFNBQVMsa0VBaEJsQzs7Ozs7Ozs7Ozs7OztLQWFQOzs0RkFFUSxxQkFBcUI7a0JBakJqQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7S0FhUDtpQkFDSjt3REFFK0QsWUFBWTtzQkFBekUsU0FBUzt1QkFBQyxjQUFjLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgZGVib3VuY2VUaW1lLCBza2lwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBEZWZhdWx0RmlsdGVyIH0gZnJvbSAnLi9kZWZhdWx0LWZpbHRlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NlbGVjdC1maWx0ZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxzZWxlY3QgW25nQ2xhc3NdPVwiaW5wdXRDbGFzc1wiXG4gICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAjaW5wdXRDb250cm9sXG4gICAgICBbKG5nTW9kZWwpXT1cInF1ZXJ5XCI+XG4gICAgXG4gICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+e3sgY29sdW1uLmdldEZpbHRlckNvbmZpZygpLnNlbGVjdFRleHQgfX08L29wdGlvbj5cbiAgICAgIEBmb3IgKG9wdGlvbiBvZiBjb2x1bW4uZ2V0RmlsdGVyQ29uZmlnKCkubGlzdDsgdHJhY2sgb3B0aW9uKSB7XG4gICAgICAgIDxvcHRpb24gW3ZhbHVlXT1cIm9wdGlvbi52YWx1ZVwiPlxuICAgICAgICAgIHt7IG9wdGlvbi50aXRsZSB9fVxuICAgICAgICA8L29wdGlvbj5cbiAgICAgIH1cbiAgICA8L3NlbGVjdD5cbiAgICBgLFxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RGaWx0ZXJDb21wb25lbnQgZXh0ZW5kcyBEZWZhdWx0RmlsdGVyIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQFZpZXdDaGlsZCgnaW5wdXRDb250cm9sJywgeyByZWFkOiBOZ0NvbnRyb2wsIHN0YXRpYzogdHJ1ZSB9KSBpbnB1dENvbnRyb2whOiBOZ0NvbnRyb2w7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLmlucHV0Q29udHJvbC52YWx1ZUNoYW5nZXMpIHtcbiAgICAgIHRoaXMuaW5wdXRDb250cm9sLnZhbHVlQ2hhbmdlc1xuICAgICAgLnBpcGUoXG4gICAgICAgIHNraXAoMSksXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICAgIGRlYm91bmNlVGltZSh0aGlzLmRlbGF5KVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgodmFsdWU6IHN0cmluZykgPT4gdGhpcy5zZXRGaWx0ZXIoKSk7XG4gICAgfVxuICAgIFxuICB9XG59XG4iXX0=