import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CellComponent } from './cell.component';
import { CustomEditComponent } from './cell-edit-mode/custom-edit.component';
import { DefaultEditComponent } from './cell-edit-mode/default-edit.component';
import { EditCellComponent } from './cell-edit-mode/edit-cell.component';
import { CheckboxEditorComponent } from './cell-editors/checkbox-editor.component';
import { CompleterEditorComponent } from './cell-editors/completer-editor.component';
import { InputEditorComponent } from './cell-editors/input-editor.component';
import { SelectEditorComponent } from './cell-editors/select-editor.component';
import { TextareaEditorComponent } from './cell-editors/textarea-editor.component';
import { CustomViewComponent } from './cell-view-mode/custom-view.component';
import { ViewCellComponent } from './cell-view-mode/view-cell.component';
import { EditCellDefault } from './cell-edit-mode/edit-cell-default';
import { DefaultEditor } from './cell-editors/default-editor';
import * as i0 from "@angular/core";
const CELL_COMPONENTS = [
    CellComponent,
    EditCellDefault,
    DefaultEditor,
    CustomEditComponent,
    DefaultEditComponent,
    EditCellComponent,
    CheckboxEditorComponent,
    CompleterEditorComponent,
    InputEditorComponent,
    SelectEditorComponent,
    TextareaEditorComponent,
    CustomViewComponent,
    ViewCellComponent,
];
export class CellModule {
}
CellModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: CellModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CellModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: CellModule, declarations: [CellComponent,
        EditCellDefault,
        DefaultEditor,
        CustomEditComponent,
        DefaultEditComponent,
        EditCellComponent,
        CheckboxEditorComponent,
        CompleterEditorComponent,
        InputEditorComponent,
        SelectEditorComponent,
        TextareaEditorComponent,
        CustomViewComponent,
        ViewCellComponent], imports: [CommonModule,
        FormsModule], exports: [CellComponent,
        EditCellDefault,
        DefaultEditor,
        CustomEditComponent,
        DefaultEditComponent,
        EditCellComponent,
        CheckboxEditorComponent,
        CompleterEditorComponent,
        InputEditorComponent,
        SelectEditorComponent,
        TextareaEditorComponent,
        CustomViewComponent,
        ViewCellComponent] });
CellModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: CellModule, imports: [CommonModule,
        FormsModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: CellModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                    ],
                    declarations: [
                        ...CELL_COMPONENTS,
                    ],
                    exports: [
                        ...CELL_COMPONENTS,
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZzItc21hcnQtdGFibGUvc3JjL2xpYi9jb21wb25lbnRzL2NlbGwvY2VsbC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUM3RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNuRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNyRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNuRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUM3RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDckUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtCQUErQixDQUFDOztBQUU5RCxNQUFNLGVBQWUsR0FBRztJQUN0QixhQUFhO0lBQ2IsZUFBZTtJQUNmLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsd0JBQXdCO0lBQ3hCLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixpQkFBaUI7Q0FDbEIsQ0FBQztBQWNGLE1BQU0sT0FBTyxVQUFVOzt1R0FBVixVQUFVO3dHQUFWLFVBQVUsaUJBM0JyQixhQUFhO1FBQ2IsZUFBZTtRQUNmLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsb0JBQW9CO1FBQ3BCLGlCQUFpQjtRQUNqQix1QkFBdUI7UUFDdkIsd0JBQXdCO1FBQ3hCLG9CQUFvQjtRQUNwQixxQkFBcUI7UUFDckIsdUJBQXVCO1FBQ3ZCLG1CQUFtQjtRQUNuQixpQkFBaUIsYUFLZixZQUFZO1FBQ1osV0FBVyxhQWxCYixhQUFhO1FBQ2IsZUFBZTtRQUNmLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsb0JBQW9CO1FBQ3BCLGlCQUFpQjtRQUNqQix1QkFBdUI7UUFDdkIsd0JBQXdCO1FBQ3hCLG9CQUFvQjtRQUNwQixxQkFBcUI7UUFDckIsdUJBQXVCO1FBQ3ZCLG1CQUFtQjtRQUNuQixpQkFBaUI7d0dBZU4sVUFBVSxZQVZuQixZQUFZO1FBQ1osV0FBVzsyRkFTRixVQUFVO2tCQVp0QixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLFdBQVc7cUJBQ1o7b0JBQ0QsWUFBWSxFQUFFO3dCQUNaLEdBQUcsZUFBZTtxQkFDbkI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLEdBQUcsZUFBZTtxQkFDbkI7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBDZWxsQ29tcG9uZW50IH0gZnJvbSAnLi9jZWxsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDdXN0b21FZGl0Q29tcG9uZW50IH0gZnJvbSAnLi9jZWxsLWVkaXQtbW9kZS9jdXN0b20tZWRpdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGVmYXVsdEVkaXRDb21wb25lbnQgfSBmcm9tICcuL2NlbGwtZWRpdC1tb2RlL2RlZmF1bHQtZWRpdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRWRpdENlbGxDb21wb25lbnQgfSBmcm9tICcuL2NlbGwtZWRpdC1tb2RlL2VkaXQtY2VsbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2hlY2tib3hFZGl0b3JDb21wb25lbnQgfSBmcm9tICcuL2NlbGwtZWRpdG9ycy9jaGVja2JveC1lZGl0b3IuY29tcG9uZW50JztcbmltcG9ydCB7IENvbXBsZXRlckVkaXRvckNvbXBvbmVudCB9IGZyb20gJy4vY2VsbC1lZGl0b3JzL2NvbXBsZXRlci1lZGl0b3IuY29tcG9uZW50JztcbmltcG9ydCB7IElucHV0RWRpdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9jZWxsLWVkaXRvcnMvaW5wdXQtZWRpdG9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZWxlY3RFZGl0b3JDb21wb25lbnQgfSBmcm9tICcuL2NlbGwtZWRpdG9ycy9zZWxlY3QtZWRpdG9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZXh0YXJlYUVkaXRvckNvbXBvbmVudCB9IGZyb20gJy4vY2VsbC1lZGl0b3JzL3RleHRhcmVhLWVkaXRvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ3VzdG9tVmlld0NvbXBvbmVudCB9IGZyb20gJy4vY2VsbC12aWV3LW1vZGUvY3VzdG9tLXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IFZpZXdDZWxsQ29tcG9uZW50IH0gZnJvbSAnLi9jZWxsLXZpZXctbW9kZS92aWV3LWNlbGwuY29tcG9uZW50JztcbmltcG9ydCB7IEVkaXRDZWxsRGVmYXVsdCB9IGZyb20gJy4vY2VsbC1lZGl0LW1vZGUvZWRpdC1jZWxsLWRlZmF1bHQnO1xuaW1wb3J0IHsgRGVmYXVsdEVkaXRvciB9IGZyb20gJy4vY2VsbC1lZGl0b3JzL2RlZmF1bHQtZWRpdG9yJztcblxuY29uc3QgQ0VMTF9DT01QT05FTlRTID0gW1xuICBDZWxsQ29tcG9uZW50LFxuICBFZGl0Q2VsbERlZmF1bHQsXG4gIERlZmF1bHRFZGl0b3IsXG4gIEN1c3RvbUVkaXRDb21wb25lbnQsXG4gIERlZmF1bHRFZGl0Q29tcG9uZW50LFxuICBFZGl0Q2VsbENvbXBvbmVudCxcbiAgQ2hlY2tib3hFZGl0b3JDb21wb25lbnQsXG4gIENvbXBsZXRlckVkaXRvckNvbXBvbmVudCxcbiAgSW5wdXRFZGl0b3JDb21wb25lbnQsXG4gIFNlbGVjdEVkaXRvckNvbXBvbmVudCxcbiAgVGV4dGFyZWFFZGl0b3JDb21wb25lbnQsXG4gIEN1c3RvbVZpZXdDb21wb25lbnQsXG4gIFZpZXdDZWxsQ29tcG9uZW50LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgLi4uQ0VMTF9DT01QT05FTlRTLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgLi4uQ0VMTF9DT01QT05FTlRTLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBDZWxsTW9kdWxlIHsgfVxuIl19