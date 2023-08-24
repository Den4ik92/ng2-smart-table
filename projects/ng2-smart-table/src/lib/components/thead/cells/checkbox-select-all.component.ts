import { Component, Input } from '@angular/core';

import { Grid } from '../../../lib/grid';
import { DataSource } from '../../../lib/data-source/data-source';

@Component({
  selector: '[ng2-st-checkbox-select-all]',
  template: `
    <input type="checkbox" [ngModel]="this.grid.dataSet.isAllSelected">
  `,
})
export class CheckboxSelectAllComponent {

  @Input() grid: Grid;
  @Input() source: DataSource;
}
