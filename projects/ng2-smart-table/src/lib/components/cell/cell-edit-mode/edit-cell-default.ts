import { Component, input } from '@angular/core';

import { Cell } from '../../../lib/data-set/cell';

@Component({ template: '', selector: 'ng2-edit-cell-default-base-component' })
export class EditCellDefaultComponent {
  readonly cell = input.required< Cell>()
  readonly inputClass = input('');
}
