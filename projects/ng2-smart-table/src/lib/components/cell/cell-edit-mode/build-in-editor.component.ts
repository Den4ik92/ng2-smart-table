import { Component, computed } from '@angular/core';

import { SmartTableEditorAndFilterTypes } from '../../../lib/interfaces/smart-table.models';
import { BaseEditorComponent } from '../cell-editors/base-editor.component';
import { CheckboxEditorComponent } from '../cell-editors/checkbox-editor.component';
import { InputEditorComponent } from '../cell-editors/input-editor.component';
import { SelectEditorComponent } from '../cell-editors/select-editor.component';
import { TextareaEditorComponent } from '../cell-editors/textarea-editor.component';

@Component({
  selector: 'ng2-table-cell-build-in-editor',
  templateUrl: './build-in-editor.component.html',
  imports: [SelectEditorComponent, TextareaEditorComponent, CheckboxEditorComponent, InputEditorComponent],
  standalone: true,
})
export class BuildInEditorComponent extends BaseEditorComponent {
  protected readonly editorType = computed<SmartTableEditorAndFilterTypes>(() => {
    const editor = this.cell().getColumn().editor;
    if (editor) {
      return editor.type || 'text';
    }
    return 'text';
  });
}
