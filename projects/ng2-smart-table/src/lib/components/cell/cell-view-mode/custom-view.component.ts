import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { NgComponentOutlet } from '@angular/common';
import { Cell } from '../../../lib/data-set/cell';

@Component({
  selector: 'ng2-custom-view-component',
  template: `<ng-template
    *ngComponentOutlet="
      cell().column.renderComponent;
      inputs: { rowData: cell().row.rowData(), value: cell().getValue() }
    "></ng-template>`,
  imports: [NgComponentOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomViewComponent {
  readonly cell = input.required<Cell>();
}
