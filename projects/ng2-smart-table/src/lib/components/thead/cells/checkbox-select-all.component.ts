import { Component, Input } from '@angular/core';

import { Grid } from '../../../lib/grid';
import { LocalDataSource } from '../../../lib/data-source/local/local.data-source';
@Component({
    selector: '[ng2-st-checkbox-select-all]',
    template: `
    <input type="checkbox" [ngModel]="this.grid.dataSet.isAllSelected">
  `,
    standalone: false
})
export class CheckboxSelectAllComponent {

  @Input() grid!: Grid;
  @Input() source!: LocalDataSource;
}
