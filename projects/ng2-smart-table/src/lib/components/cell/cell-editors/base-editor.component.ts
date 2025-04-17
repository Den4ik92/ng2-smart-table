import { ChangeDetectionStrategy, Component, computed, input, InputSignal } from '@angular/core';

import { Cell } from '../../../lib/data-set/cell';

@Component({ template: '', selector: 'ng2-editor-base-component', changeDetection: ChangeDetectionStrategy.OnPush })
export class BaseEditorComponent implements Editor {
  readonly cell = input.required<Cell>();
  readonly inputClass = computed<string>(() => this.cell().column.editorInputClass);
}

export interface Editor {
  cell: InputSignal<Cell>;
}
