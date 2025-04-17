import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { Row } from '../../lib/data-set/row';
import { DataSource } from '../../lib/data-source/data-source';
import { Grid } from '../../lib/grid';
import { BaseDataType, SmartTableCustomEvent } from '../../lib/interfaces/smart-table.models';
import { TrowComponent } from './trow/trow.component';

@Component({
  selector: '[ng2-st-tbody]',
  styleUrls: ['./tbody.component.scss'],
  templateUrl: './tbody.component.html',
  imports: [FormsModule, TrowComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Ng2SmartTableTbodyComponent<T extends BaseDataType = any> {
  readonly grid = input.required<Grid>();
  readonly source = input.required<DataSource>();

  readonly rowClassFunction = input<(rowData: T) => string>(() => '');
  readonly isMobileView = input<boolean>(false);

  readonly edit = output<Row>();
  readonly editConfirmed = output<Row>();
  readonly editCancel = output<Row>();
  readonly createConfirmed = output<void>();
  readonly deleteEmitter = output<Row>();
  readonly customActionEmitter = output<SmartTableCustomEvent<T>>();
  readonly userClickedRow = output<Row>();
  readonly multipleSelectRow = output<Row>();

  // readonly editInputClass = computed<string>(() => {
  //   const editOptions = this.grid().settings().edit;
  //   if (!editOptions) {
  //     return '';
  //   }
  //   return editOptions.inputClass || '';
  // });
  readonly noDataMessage = computed<string>(() => {
    return this.grid().settings().noDataMessage || 'No data found';
  });

  protected customActionEmitted(actionName: string, row: Row) {
    this.customActionEmitter.emit({
      source: this.source(),
      data: row.rowData,
      action: actionName,
    });
  }

  protected trackByIdOrIndex(index: number, item: any): string | number {
    return item?.id || index;
  }
}
