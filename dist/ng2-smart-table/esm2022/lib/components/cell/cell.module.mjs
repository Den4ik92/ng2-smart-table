import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CellComponent } from './cell.component';
import { CustomEditComponent } from './cell-edit-mode/custom-edit.component';
import { DefaultEditComponent } from './cell-edit-mode/default-edit.component';
import { EditCellComponent } from './cell-edit-mode/edit-cell.component';
import { CheckboxEditorComponent } from './cell-editors/checkbox-editor.component';
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
    InputEditorComponent,
    SelectEditorComponent,
    TextareaEditorComponent,
    CustomViewComponent,
    ViewCellComponent,
];
export class CellModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CellModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: CellModule, declarations: [CellComponent,
            EditCellDefault,
            DefaultEditor,
            CustomEditComponent,
            DefaultEditComponent,
            EditCellComponent,
            CheckboxEditorComponent,
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
            InputEditorComponent,
            SelectEditorComponent,
            TextareaEditorComponent,
            CustomViewComponent,
            ViewCellComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CellModule, imports: [CommonModule,
            FormsModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CellModule, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZzItc21hcnQtdGFibGUvc3JjL2xpYi9jb21wb25lbnRzL2NlbGwvY2VsbC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUM3RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNuRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNuRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUM3RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDckUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtCQUErQixDQUFDOztBQUU5RCxNQUFNLGVBQWUsR0FBRztJQUN0QixhQUFhO0lBQ2IsZUFBZTtJQUNmLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsb0JBQW9CO0lBQ3BCLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGlCQUFpQjtDQUNsQixDQUFDO0FBY0YsTUFBTSxPQUFPLFVBQVU7K0dBQVYsVUFBVTtnSEFBVixVQUFVLGlCQTFCckIsYUFBYTtZQUNiLGVBQWU7WUFDZixhQUFhO1lBQ2IsbUJBQW1CO1lBQ25CLG9CQUFvQjtZQUNwQixpQkFBaUI7WUFDakIsdUJBQXVCO1lBQ3ZCLG9CQUFvQjtZQUNwQixxQkFBcUI7WUFDckIsdUJBQXVCO1lBQ3ZCLG1CQUFtQjtZQUNuQixpQkFBaUIsYUFLZixZQUFZO1lBQ1osV0FBVyxhQWpCYixhQUFhO1lBQ2IsZUFBZTtZQUNmLGFBQWE7WUFDYixtQkFBbUI7WUFDbkIsb0JBQW9CO1lBQ3BCLGlCQUFpQjtZQUNqQix1QkFBdUI7WUFDdkIsb0JBQW9CO1lBQ3BCLHFCQUFxQjtZQUNyQix1QkFBdUI7WUFDdkIsbUJBQW1CO1lBQ25CLGlCQUFpQjtnSEFlTixVQUFVLFlBVm5CLFlBQVk7WUFDWixXQUFXOzs0RkFTRixVQUFVO2tCQVp0QixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLFdBQVc7cUJBQ1o7b0JBQ0QsWUFBWSxFQUFFO3dCQUNaLEdBQUcsZUFBZTtxQkFDbkI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLEdBQUcsZUFBZTtxQkFDbkI7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBDZWxsQ29tcG9uZW50IH0gZnJvbSAnLi9jZWxsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDdXN0b21FZGl0Q29tcG9uZW50IH0gZnJvbSAnLi9jZWxsLWVkaXQtbW9kZS9jdXN0b20tZWRpdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGVmYXVsdEVkaXRDb21wb25lbnQgfSBmcm9tICcuL2NlbGwtZWRpdC1tb2RlL2RlZmF1bHQtZWRpdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRWRpdENlbGxDb21wb25lbnQgfSBmcm9tICcuL2NlbGwtZWRpdC1tb2RlL2VkaXQtY2VsbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2hlY2tib3hFZGl0b3JDb21wb25lbnQgfSBmcm9tICcuL2NlbGwtZWRpdG9ycy9jaGVja2JveC1lZGl0b3IuY29tcG9uZW50JztcbmltcG9ydCB7IElucHV0RWRpdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9jZWxsLWVkaXRvcnMvaW5wdXQtZWRpdG9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZWxlY3RFZGl0b3JDb21wb25lbnQgfSBmcm9tICcuL2NlbGwtZWRpdG9ycy9zZWxlY3QtZWRpdG9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZXh0YXJlYUVkaXRvckNvbXBvbmVudCB9IGZyb20gJy4vY2VsbC1lZGl0b3JzL3RleHRhcmVhLWVkaXRvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ3VzdG9tVmlld0NvbXBvbmVudCB9IGZyb20gJy4vY2VsbC12aWV3LW1vZGUvY3VzdG9tLXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IFZpZXdDZWxsQ29tcG9uZW50IH0gZnJvbSAnLi9jZWxsLXZpZXctbW9kZS92aWV3LWNlbGwuY29tcG9uZW50JztcbmltcG9ydCB7IEVkaXRDZWxsRGVmYXVsdCB9IGZyb20gJy4vY2VsbC1lZGl0LW1vZGUvZWRpdC1jZWxsLWRlZmF1bHQnO1xuaW1wb3J0IHsgRGVmYXVsdEVkaXRvciB9IGZyb20gJy4vY2VsbC1lZGl0b3JzL2RlZmF1bHQtZWRpdG9yJztcblxuY29uc3QgQ0VMTF9DT01QT05FTlRTID0gW1xuICBDZWxsQ29tcG9uZW50LFxuICBFZGl0Q2VsbERlZmF1bHQsXG4gIERlZmF1bHRFZGl0b3IsXG4gIEN1c3RvbUVkaXRDb21wb25lbnQsXG4gIERlZmF1bHRFZGl0Q29tcG9uZW50LFxuICBFZGl0Q2VsbENvbXBvbmVudCxcbiAgQ2hlY2tib3hFZGl0b3JDb21wb25lbnQsXG4gIElucHV0RWRpdG9yQ29tcG9uZW50LFxuICBTZWxlY3RFZGl0b3JDb21wb25lbnQsXG4gIFRleHRhcmVhRWRpdG9yQ29tcG9uZW50LFxuICBDdXN0b21WaWV3Q29tcG9uZW50LFxuICBWaWV3Q2VsbENvbXBvbmVudCxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIC4uLkNFTExfQ09NUE9ORU5UUyxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIC4uLkNFTExfQ09NUE9ORU5UUyxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2VsbE1vZHVsZSB7IH1cbiJdfQ==