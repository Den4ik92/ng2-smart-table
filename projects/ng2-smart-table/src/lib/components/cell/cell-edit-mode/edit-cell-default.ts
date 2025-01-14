import { Component, input } from '@angular/core';

import { Cell } from '../../../lib/data-set/cell';

@Component({ template: '' })
export class EditCellDefaultComponent {
  readonly cell = input.required< Cell>()
  readonly inputClass = input('');
}
