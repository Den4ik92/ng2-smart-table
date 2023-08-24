import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CellModule } from './components/cell/cell.module';
import { FilterModule } from './components/filter/filter.module';
import { PagerModule } from './components/pager/pager.module';
import { TBodyModule } from './components/tbody/tbody.module';
import { THeadModule } from './components/thead/thead.module';
import { Ng2SmartTableComponent } from './ng2-smart-table.component';
import * as i0 from "@angular/core";
export class Ng2SmartTableModule {
}
Ng2SmartTableModule.ɵfac = function Ng2SmartTableModule_Factory(t) { return new (t || Ng2SmartTableModule)(); };
Ng2SmartTableModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: Ng2SmartTableModule });
Ng2SmartTableModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CellModule,
        FilterModule,
        PagerModule,
        TBodyModule,
        THeadModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Ng2SmartTableModule, [{
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
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(Ng2SmartTableModule, { declarations: [Ng2SmartTableComponent], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CellModule,
        FilterModule,
        PagerModule,
        TBodyModule,
        THeadModule], exports: [Ng2SmartTableComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLXNtYXJ0LXRhYmxlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nMi1zbWFydC10YWJsZS9zcmMvbGliL25nMi1zbWFydC10YWJsZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWxFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDakUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzlELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM5RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFOUQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7O0FBb0JyRSxNQUFNLE9BQU8sbUJBQW1COztzRkFBbkIsbUJBQW1CO3FFQUFuQixtQkFBbUI7eUVBaEI1QixZQUFZO1FBQ1osV0FBVztRQUNYLG1CQUFtQjtRQUNuQixVQUFVO1FBQ1YsWUFBWTtRQUNaLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVzt1RkFTRixtQkFBbUI7Y0FsQi9CLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixXQUFXO29CQUNYLG1CQUFtQjtvQkFDbkIsVUFBVTtvQkFDVixZQUFZO29CQUNaLFdBQVc7b0JBQ1gsV0FBVztvQkFDWCxXQUFXO2lCQUNaO2dCQUNELFlBQVksRUFBRTtvQkFDWixzQkFBc0I7aUJBQ3ZCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxzQkFBc0I7aUJBQ3ZCO2FBQ0Y7O3dGQUNZLG1CQUFtQixtQkFONUIsc0JBQXNCLGFBVnRCLFlBQVk7UUFDWixXQUFXO1FBQ1gsbUJBQW1CO1FBQ25CLFVBQVU7UUFDVixZQUFZO1FBQ1osV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXLGFBTVgsc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgQ2VsbE1vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy9jZWxsL2NlbGwubW9kdWxlJztcbmltcG9ydCB7IEZpbHRlck1vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy9maWx0ZXIvZmlsdGVyLm1vZHVsZSc7XG5pbXBvcnQgeyBQYWdlck1vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy9wYWdlci9wYWdlci5tb2R1bGUnO1xuaW1wb3J0IHsgVEJvZHlNb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvdGJvZHkvdGJvZHkubW9kdWxlJztcbmltcG9ydCB7IFRIZWFkTW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL3RoZWFkL3RoZWFkLm1vZHVsZSc7XG5cbmltcG9ydCB7IE5nMlNtYXJ0VGFibGVDb21wb25lbnQgfSBmcm9tICcuL25nMi1zbWFydC10YWJsZS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgQ2VsbE1vZHVsZSxcbiAgICBGaWx0ZXJNb2R1bGUsXG4gICAgUGFnZXJNb2R1bGUsXG4gICAgVEJvZHlNb2R1bGUsXG4gICAgVEhlYWRNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE5nMlNtYXJ0VGFibGVDb21wb25lbnQsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBOZzJTbWFydFRhYmxlQ29tcG9uZW50LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBOZzJTbWFydFRhYmxlTW9kdWxlIHtcbn1cbiJdfQ==