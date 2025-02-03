import {
  ChangeDetectionStrategy,
  Component,
  OnChanges,
  OnDestroy,
  SimpleChange,
  computed,
  input,
  output,
} from '@angular/core';

import { PagerComponent } from './components/pager/pager.component';
import { Ng2SmartTableTbodyComponent } from './components/tbody/tbody.component';
import { Ng2SmartTableTheadComponent } from './components/thead/thead.component';
import { Row } from './lib/data-set/row';
import { DataSource } from './lib/data-source/data-source';
import { Grid } from './lib/grid';
import { getRandomId } from './lib/helpers';
import {
  ColumnPositionState,
  SmartTableConfirmDeleteEvent,
  SmartTableConfirmEditEvent,
  SmartTableCreateConfirm,
  SmartTableCustomEvent,
  SmartTableRowClickedEvent,
  SmartTableRowSelectEvent,
  SmartTableSettings,
} from './lib/interfaces/smart-table.models';

@Component({
  selector: 'ng2-smart-table',
  styleUrls: ['./ng2-smart-table.component.scss'],
  templateUrl: './ng2-smart-table.component.html',
  standalone: true,
  imports: [Ng2SmartTableTheadComponent, Ng2SmartTableTbodyComponent, PagerComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Ng2SmartTableComponent implements OnChanges, OnDestroy {
  readonly source = input.required<DataSource>();
  readonly settings = input.required<SmartTableSettings>();

  readonly multiRowSelect = output<SmartTableRowSelectEvent>();
  readonly rowClicked = output<SmartTableRowClickedEvent>();
  readonly columnsSorted = output<ColumnPositionState[]>();
  readonly delete = output<any>();
  readonly edit = output<any>();
  readonly editCancel = output<any>();
  readonly create = output<any>();
  readonly custom = output<SmartTableCustomEvent>();
  readonly deleteConfirm = output<SmartTableConfirmDeleteEvent>();
  readonly editConfirm = output<SmartTableConfirmEditEvent>();
  readonly createConfirm = output<SmartTableCreateConfirm>();

  protected readonly tableClass = computed<string>(() => {
    return this.settings().attr?.class || '';
  });
  protected readonly tableId = computed<string>(() => {
    return this.settings().attr?.id || getRandomId();
  });
  protected readonly isPagerDisplay = computed<boolean>(() => {
    const { pager } = this.settings();
    return pager ? pager.display : false;
  });
  protected readonly rowClassFunction = computed<(row: any) => string>(() => {
    return this.settings().rowClassFunction || (() => '');
  });

  grid!: Grid;

  ngOnChanges({ settings }: Record<string, SimpleChange>) {
    if (this.grid) {
      if (settings) {
        this.grid.setSettings(this.settings());
      }
    } else {
      this.initGrid();
    }
  }

  ngOnDestroy(): void {
    this.grid.detach();
  }

  protected multipleSelectRow(row: Row): void {
    this.grid.multipleSelectRow(row);
    this.emitUserSelectRow(row);
  }

  protected onSelectAllRows(): void {
    this.grid.selectAllRows(!this.grid.dataSet.isAllSelected());
    this.emitUserSelectRow(null);
  }

  protected onSelectRow(row: Row, state: boolean): void {
    this.grid.selectRow(row, state);
  }

  protected emitUserRowClicked(row: Row): void {
    this.rowClicked.emit({
      data: row ? row.getData() : null,
      source: this.source(),
    });
  }

  private initGrid(): void {
    this.grid = new Grid(this.source(), this.settings());
    this.grid.setColumnsSortedEmitter(this.columnsSorted);
  }

  private emitUserSelectRow(row: Row | null): void {
    this.multiRowSelect.emit({
      data: row ? row.getData() : null,
      isSelected: row ? row.isSelected() : false,
      source: this.source(),
      selected: this.grid.dataSet.getSelectedRowsData(),
    });
  }
}
