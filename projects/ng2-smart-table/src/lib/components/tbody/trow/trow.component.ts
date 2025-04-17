import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Row } from '../../../lib/data-set/row';
import { DataSource } from '../../../lib/data-source/data-source';
import { Grid } from '../../../lib/grid';
import { CellComponent } from '../../cell/cell.component';
import { TbodyCreateCancelComponent } from '../create-cancel/create-cancel.component';
import { RowActionsComponent } from '../row-actions/row-actions.component';

@Component({
  selector: '[ng2-st-trow]',
  imports: [NgTemplateOutlet, FormsModule, CellComponent, RowActionsComponent, TbodyCreateCancelComponent],
  templateUrl: './trow.component.html',
  styleUrl: './trow.component.scss',
  host: {
    '[class.ng2-smart-card]': 'isMobileView()',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrowComponent {
  readonly grid = input.required<Grid>();
  readonly source = input.required<DataSource>();
  readonly row = input.required<Row>();

  readonly isMobileView = input<boolean>(false);
  readonly isCreateRow = input<boolean>(false);

  readonly edit = output<void>();
  readonly editCancel = output<void>();
  readonly editConfirmed = output<void>();
  readonly deleteEmitter = output<void>();
  readonly createConfirmed = output<void>();
  readonly customActionEmitter = output<string>();
  readonly userClickedRow = output<Row>();
  readonly multipleSelectRow = output<Row>();

  onSave() {
    if (this.isCreateRow()) {
      this.createConfirmed.emit();
    } else {
      this.editConfirmed.emit();
    }
  }

  onCancelEdit() {
    if (this.isCreateRow()) {
      this.grid().createFormShown.set(false);
      return;
    }
    this.editCancel.emit();
    this.row()?.isInEditing.set(false);
  }
}
