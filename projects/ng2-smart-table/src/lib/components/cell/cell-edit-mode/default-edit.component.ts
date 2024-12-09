import { Component } from '@angular/core';

import { EditCellDefault } from './edit-cell-default';
import { SmartTableEditorAndFilterTypes } from '../../../lib/interfaces/smart-table.models';

@Component({
    selector: 'table-cell-default-editor',
    templateUrl: './default-edit.component.html',
    standalone: false
})
export class DefaultEditComponent extends EditCellDefault {

  constructor() {
    super();
  }

  getEditorType(): SmartTableEditorAndFilterTypes {
    const editor = this.cell.getColumn().editor
    if (editor) {
      return editor.type
    }
    return 'text';
  }
}
