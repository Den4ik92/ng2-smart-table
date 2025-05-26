import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import { Row } from '../../../lib/data-set/row';
import { Grid } from '../../../lib/grid';
import { BaseDataType, SmartTableCustomAction } from '../../../lib/interfaces/smart-table.models';

@Component({
  selector: 'ng2-row-actions',
  imports: [NgTemplateOutlet],
  templateUrl: './row-actions.component.html',
  styleUrl: './row-actions.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RowActionsComponent<T extends BaseDataType = any> {
  readonly grid = input.required<Grid>();
  readonly row = input.required<Row>();

  readonly editEmitter = output<void>();
  readonly deleteEmitter = output<void>();
  readonly customActionEmitter = output<string>();

  readonly customActions = computed<SmartTableCustomAction[]>(() => {
    const { actions } = this.grid().settings();
    if (!actions || !actions.custom) {
      return [];
    }
    const list = actions.custom.filter((action) =>
      !action.hasPermissionFunction ? true : action.hasPermissionFunction(this.row().rowData()),
    );
    return list;
  });

  readonly isActionEditActive = computed<boolean>(() => {
    const actions = this.grid().settings().actions;
    const editConfig = this.grid().settings().edit;
    if (!actions || !actions.edit) {
      return false;
    }
    if (!editConfig || !editConfig.hasPermissionFunction) {
      return true;
    }
    return editConfig.hasPermissionFunction(this.row().rowData());
  });

  readonly isActionDeleteActive = computed<boolean>(() => {
    const actions = this.grid().settings().actions;
    const deleteConfig = this.grid().settings().delete;
    if (!actions || !actions.delete) {
      return false;
    }
    if (!deleteConfig || !deleteConfig.hasPermissionFunction) {
      return true;
    }
    return deleteConfig.hasPermissionFunction(this.row().rowData());
  });
  readonly isExternalMode = computed<boolean>(() => {
    return this.grid().settings().mode === 'external';
  });

  readonly editRowButtonContent = computed<string>(() => {
    const edit = this.grid().settings().edit;
    return edit ? edit.editButtonContent || 'Edit' : 'Edit';
  });
  readonly deleteRowButtonContent = computed<string>(() => {
    const deleteConfig = this.grid().settings().delete;
    return deleteConfig ? deleteConfig.deleteButtonContent || 'Delete' : 'Delete';
  });
  readonly allActionsCountArray = computed<string[]>(() => {
    let length = this.customActions().length;
    length += this.isActionDeleteActive() ? 1 : 0;
    length += this.isActionEditActive() ? 1 : 0;
    return new Array(length).fill('');
  });

  onCustom(action: SmartTableCustomAction<T>) {
    this.customActionEmitter.emit(action.name);
  }

  onEdit(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.editEmitter.emit();
  }

  onDelete(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.deleteEmitter.emit();
  }
}
