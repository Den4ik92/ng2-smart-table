import {
  Component,
  Input,
  OnChanges,
  SimpleChange,
  effect,
  output
} from "@angular/core";

import { PagerComponent } from "./components/pager/pager.component";
import { Ng2SmartTableTbodyComponent } from "./components/tbody/tbody.component";
import { Ng2SmartTableTheadComponent } from "./components/thead/thead.component";
import { Row } from "./lib/data-set/row";
import { LocalDataSource } from "./lib/data-source/local/local.data-source";
import { Grid } from "./lib/grid";
import { getRandomId } from "./lib/helpers";
import {
  ColumnPositionState,
  SmartTableConfirmDeleteEvent,
  SmartTableConfirmEditEvent,
  SmartTableCreateConfirm,
  SmartTableCustomEvent,
  SmartTableRowClickedEvent,
  SmartTableRowSelectEvent,
  SmartTableSettings,
} from "./lib/interfaces/smart-table.models";

@Component({
  selector: "ng2-smart-table",
  styleUrls: ["./ng2-smart-table.component.scss"],
  templateUrl: "./ng2-smart-table.component.html",
  standalone: true,
  imports: [
    Ng2SmartTableTheadComponent,
    Ng2SmartTableTbodyComponent,
    PagerComponent,
  ],
})
export class Ng2SmartTableComponent implements OnChanges {
  @Input({required: true}) source!: LocalDataSource;
  @Input({required: true}) settings!: SmartTableSettings;

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

  tableClass = "";
  tableId = "";
  perPageSelect: number[] = [];
  isPagerDisplay = false;
  rowClassFunction: (row: any) => string = () => '';

  grid!: Grid;

  constructor() {
    effect(() => {
      const settings = this.grid.settings();
      this.tableId = settings.attr?.id || getRandomId();
      this.tableClass = settings.attr?.class || '';
      this.isPagerDisplay = this.grid.getSetting("pager.display", false);
      this.perPageSelect = this.grid.getSetting("pager.perPageSelect");
      this.rowClassFunction = settings.rowClassFunction || (() => "");
    })
  }

  ngOnChanges({settings, source}: Record<string, SimpleChange>) {
    if (this.grid) {
      if (settings) {
        this.grid.setSettings(this.settings);
      }
      if (source) {
        this.source = this.prepareSource();
        this.grid.setSource(this.source);
      }
    } else {
      this.initGrid();
    }
  }

  protected multipleSelectRow(row: Row): void {
    this.grid.multipleSelectRow(row);
    this.emitUserSelectRow(row);
  }

  protected onSelectAllRows(): void {
    this.grid.selectAllRows(!this.grid.dataSet.isAllSelected);
    this.emitUserSelectRow(null);
  }

  protected onSelectRow(row: Row, state: boolean): void {
    this.grid.selectRow(row, state);
  }

  protected emitUserRowClicked(row: Row): void {
    this.rowClicked.emit({
      data: row ? row.getData() : null,
      source: this.source,
    });
  }

  private initGrid(): void {
    this.source = this.prepareSource();
    this.grid = new Grid(this.source, this.settings);
    this.grid.setColumnsSortedEmitter(this.columnsSorted)
  }

  private prepareSource(): LocalDataSource {
    if (this.source instanceof LocalDataSource) {
      return this.source;
    }
    return new LocalDataSource();
  }

  private emitUserSelectRow(row: Row | null): void {
    this.multiRowSelect.emit({
      data: row ? row.getData() : null,
      isSelected: row ? row.getIsSelected() : false,
      source: this.source,
      selected: this.grid.dataSet.getSelectedRowsData(),
    });
  }
}
