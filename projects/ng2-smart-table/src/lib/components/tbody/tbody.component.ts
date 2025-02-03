import { Component, computed, EventEmitter, input, output, OutputEmitterRef } from '@angular/core';

import { NgTemplateOutlet } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataSource } from '../../lib/data-source/data-source';
import { Grid } from '../../lib/grid';
import { CellComponent } from '../cell/cell.component';
import { TbodyCreateCancelComponent } from './cells/create-cancel.component';
import { TbodyCustomComponent } from './cells/custom.component';
import { TbodyEditDeleteComponent } from './cells/edit-delete.component';

@Component({
  selector: '[ng2-st-tbody]',
  styleUrls: ['./tbody.component.scss'],
  templateUrl: './tbody.component.html',
  standalone: true,
  imports: [
    FormsModule,
    TbodyCustomComponent,
    TbodyEditDeleteComponent,
    TbodyCreateCancelComponent,
    NgTemplateOutlet,
    CellComponent,
  ],
})
export class Ng2SmartTableTbodyComponent {
  readonly grid = input.required<Grid>();
  readonly source = input.required<DataSource>();
  readonly deleteConfirm = input.required<EventEmitter<any> | OutputEmitterRef<any>>();
  readonly createConfirm = input.required<EventEmitter<any> | OutputEmitterRef<any>>();
  readonly editConfirm = input.required<EventEmitter<any> | OutputEmitterRef<any>>();
  readonly rowClassFunction = input<(row: any) => string>(() => '');

  readonly save = output<any>();
  readonly edit = output<any>();
  readonly editCancel = output<any>();
  readonly delete = output<any>();
  readonly custom = output<any>();
  readonly edited = output<any>();
  readonly userSelectRow = output<any>();
  readonly userClickedRow = output<any>();
  readonly multipleSelectRow = output<any>();

  readonly editInputClass = computed<string>(() => {
    const editOptions = this.grid().settings().edit;
    if (!editOptions) {
      return '';
    }
    return editOptions.inputClass || '';
  });
  readonly noDataMessage = computed<string>(() => {
    return this.grid().settings().noDataMessage || 'No data found';
  });

  protected trackByIdOrIndex(index: number, item: any): string | number {
    return item?.id || index;
  }
}
