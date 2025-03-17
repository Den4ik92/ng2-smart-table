import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  computed,
  EventEmitter,
  inject,
  input,
  output,
  OutputEmitterRef
} from '@angular/core';

import { Row } from '../../../lib/data-set/row';
import { DataSource } from '../../../lib/data-source/data-source';
import { Grid } from '../../../lib/grid';

@Component({
  selector: 'ng2-st-tbody-edit-delete',
  templateUrl: './edit-delete.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TbodyEditDeleteComponent {
  private readonly cdr = inject(ChangeDetectorRef);
  readonly grid = input.required<Grid>();
  readonly row = input.required<Row>();
  readonly source = input.required<DataSource>();
  readonly deleteConfirm = input.required<EventEmitter<any> | OutputEmitterRef<any>>();

  readonly edit = output<any>();
  readonly delete = output<any>();

  readonly isActionEdit = computed<boolean>(() => {
    const actions = this.grid().settings().actions
    return actions ? !!actions.edit : false
  });
  readonly isActionDelete = computed<boolean>(() => {
    const actions = this.grid().settings().actions
    return actions ? !!actions.delete : false
  });
  readonly isExternalMode = computed<boolean>(() => {
    return this.grid().settings().mode === 'external'
  });

  readonly canDeleteFunction = computed<(data: any) => boolean>(() => {
    const deleteConfig = this.grid().settings().delete
    return deleteConfig ? deleteConfig.hasPermissionFunction || ((data) => true) : (data) => true
  });

  readonly canEditFunction = computed<(data: any) => boolean>(() => {
    const edit = this.grid().settings().edit
    return edit ? edit.hasPermissionFunction || ((data) => true) : (data) => true
  });

  readonly editRowButtonContent = computed<string>(() => {
    const edit = this.grid().settings().edit
    return edit ? edit.editButtonContent || 'Edit' : 'Edit'
  });
  readonly deleteRowButtonContent = computed<string>(() => {
    const deleteConfig = this.grid().settings().delete
    return deleteConfig ? deleteConfig.deleteButtonContent || 'Delete' : 'Delete'
  });

  onEdit(event: any) {
    event.preventDefault();
    event.stopPropagation();
    this.edit.emit({
      data: this.row().getData(),
      source: this.source,
    });
    if (!this.isExternalMode()) {
      this.grid().edit(this.row());
    }
  }

  onDelete(event: any) {
    event.preventDefault();
    event.stopPropagation();
    if (this.isExternalMode()) {
      this.delete.emit({
        data: this.row().getData(),
        source: this.source(),
      });
    } else {
      this.grid().delete(this.row(), this.deleteConfirm());
    }
  }
}
