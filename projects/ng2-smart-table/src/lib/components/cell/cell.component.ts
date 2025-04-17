import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { Cell } from '../../lib/data-set/cell';
import { EditCellComponent } from './cell-edit-mode/edit-cell.component';
import { ViewCellComponent } from './cell-view-mode/view-cell.component';

@Component({
  selector: 'ng2-smart-table-cell',
  template: `
    @if (!isInEditing()) {
      <ng2-table-cell-view-mode [cell]="cell()"></ng2-table-cell-view-mode>
    } @else {
      <ng2-table-cell-edit-mode [cell]="cell()"> </ng2-table-cell-edit-mode>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ViewCellComponent, EditCellComponent],
})
export class CellComponent {
  readonly cell = input.required<Cell>();

  readonly isInEditing = input<boolean>(false);
}
