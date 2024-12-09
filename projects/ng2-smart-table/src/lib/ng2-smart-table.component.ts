import {
  Component,
  Input,
  OnChanges,
  SimpleChange,
  output
} from "@angular/core";

import { PagerComponent } from "./components/pager/pager.component";
import { Ng2SmartTableTbodyComponent } from "./components/tbody/tbody.component";
import { Ng2SmartTableTheadComponent } from "./components/thead/thead.component";
import { Row } from "./lib/data-set/row";
import { LocalDataSource } from "./lib/data-source/local/local.data-source";
import { Grid } from "./lib/grid";
import { deepExtend } from "./lib/helpers";
import {
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
  @Input() source!: LocalDataSource;
  @Input() settings!: SmartTableSettings;

  readonly multiRowSelect = output<SmartTableRowSelectEvent>();
  readonly rowClicked = output<SmartTableRowClickedEvent>();
  readonly delete = output<any>();
  readonly edit = output<any>();
  readonly editCancel = output<any>();
  readonly create = output<any>();
  readonly custom = output<SmartTableCustomEvent>();
  readonly deleteConfirm = output<SmartTableConfirmDeleteEvent>();
  readonly editConfirm = output<SmartTableConfirmEditEvent>();
  readonly createConfirm = output<SmartTableCreateConfirm>();
  readonly rowHover = output<any>();

  tableClass: string = "";
  tableId: string = "";
  perPageSelect: number[] = [];
  isHideHeader = false;
  isHideSubHeader = false;
  isPagerDisplay = false;
  rowClassFunction: Function = () => "";

  grid!: Grid;
  defaultSettings: SmartTableSettings = {
    mode: "inline", // inline|external|click-to-edit
    selectMode: "single", // single|multi
    selectedRowIndex: -1,
    switchPageToSelectedRowPage: false,
    hideHeader: false,
    hideSubHeader: false,
    actions: {
      columnTitle: "Actions",
      add: true,
      edit: true,
      delete: true,
      custom: [],
      position: "left", // left|right
    },
    filter: {
      inputClass: "",
    },
    edit: {
      inputClass: "",
      editButtonContent: "Edit",
      saveButtonContent: "Update",
      cancelButtonContent: "Cancel",
      confirmSave: false,
    },
    add: {
      inputClass: "",
      addButtonContent: "Add New",
      createButtonContent: "Create",
      cancelButtonContent: "Cancel",
      confirmCreate: false,
    },
    delete: {
      deleteButtonContent: "Delete",
      confirmDelete: false,
    },
    attr: {
      id: "",
      class: "",
    },
    noDataMessage: "No data found",
    columns: [],
    pager: false,
    rowClassFunction: () => "",
  };

  ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {
    if (this.grid) {
      if (changes["settings"]) {
        this.grid.setSettings(this.prepareSettings());
      }
      if (changes["source"]) {
        this.source = this.prepareSource();
        this.grid.setSource(this.source);
      }
    } else {
      this.initGrid();
    }
    this.tableId = this.grid.getSetting("attr.id");
    this.tableClass = this.grid.getSetting("attr.class");
    this.isHideHeader = this.grid.getSetting("hideHeader");
    this.isHideSubHeader = this.grid.getSetting("hideSubHeader");
    this.isPagerDisplay = this.grid.getSetting("pager.display", false);
    this.perPageSelect = this.grid.getSetting("pager.perPageSelect");
    this.rowClassFunction = this.grid.getSetting("rowClassFunction", () => "");
  }

  protected multipleSelectRow(row: Row): void {
    this.grid.multipleSelectRow(row);
    this.emitUserSelectRow(row);
  }

  protected onSelectAllRows(): void {
    this.grid.dataSet.isAllSelected;
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
    this.grid = new Grid(this.source, this.prepareSettings());
  }

  private prepareSource(): LocalDataSource {
    if (this.source instanceof LocalDataSource) {
      return this.source;
    }
    return new LocalDataSource();
  }

  private prepareSettings(): SmartTableSettings {
    return deepExtend({}, this.defaultSettings, this.settings);
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
