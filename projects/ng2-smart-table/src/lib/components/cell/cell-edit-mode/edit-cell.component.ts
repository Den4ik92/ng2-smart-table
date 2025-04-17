import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { Cell } from '../../../lib/data-set/cell';
import { SmartTableEditorAndFilterTypes } from '../../../lib/interfaces/smart-table.models';
import { BuildInEditorComponent } from './build-in-editor.component';
import { CustomEditComponent } from './custom-edit.component';

@Component({
  selector: 'ng2-table-cell-edit-mode',
  template: `
    <div>
      @switch (getEditorType()) {
        @case ('custom') {
          <ng2-table-cell-custom-editor [cell]="cell()"> </ng2-table-cell-custom-editor>
        }
        @default {
          <ng2-table-cell-build-in-editor [cell]="cell()"> </ng2-table-cell-build-in-editor>
        }
      }
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CustomEditComponent, BuildInEditorComponent],
})
export class EditCellComponent {
  readonly cell = input.required<Cell>();
  // readonly inputClass = input('');

  getEditorType(): SmartTableEditorAndFilterTypes {
    const editor = this.cell().column.editor;
    if (editor) {
      return editor.type;
    }
    return 'text';
  }
}
