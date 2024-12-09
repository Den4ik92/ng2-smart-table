import {Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { Cell } from '../../../lib/data-set/cell';

@Component({
    selector: 'table-cell-view-mode',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
    <div>
      @switch (cell.getColumn().type) {
        @case ('custom') {
          <custom-view-component [cell]="cell"></custom-view-component>
        }
        @case ('html') {
          <div [innerHTML]="cell.getValue()"></div>
        }
        @default {
          <div>{{ cell.getValue() }}</div>
        }
      }
    </div>
    `,
    standalone: false
})
export class ViewCellComponent {
  @Input() cell!: Cell;
}
