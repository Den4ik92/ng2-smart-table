import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

import { NgComponentOutlet } from '@angular/common';
import { Cell } from '../../../lib/data-set/cell';

@Component({
  selector: 'ng2-custom-view-component',
  template: `<ng-template *ngComponentOutlet="cell().column.renderComponent!; inputs: inputs()"></ng-template>`,
  imports: [NgComponentOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomViewComponent {
  readonly cell = input.required<Cell>();
  readonly inputs = computed(() => ({
    rowData: this.cell().row.rowData(),
    value: this.cell().getValue(),
    ...this.cell().column.renderComponentInputs,
  }));
}
