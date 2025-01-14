import { Component } from "@angular/core";
import { SmartTableColumnEditorDirective } from "ng2-smart-table";
import { Ng2SmartTableComponent } from "../../../ng2-smart-table/src/lib/ng2-smart-table.component";
import { LocalDataSource } from "./../../../ng2-smart-table/src/lib/lib/data-source/local/local.data-source";
import {
  SmartTableConfirmDeleteEvent,
  SmartTableConfirmEditEvent,
  SmartTableSettings,
} from "./../../../ng2-smart-table/src/lib/lib/interfaces/smart-table.models";
import { CustomEditorComponent } from "./custom-editor/custom-editor.component";
import { CustomFilterComponent } from "./custom-filter/custom-filter.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  standalone: true,
  imports: [Ng2SmartTableComponent, SmartTableColumnEditorDirective],
})
export class AppComponent {
  settings: SmartTableSettings = {
    columnSortStorageKey: 'test1',
    pager: false,
    columnSort: true,
    selectMode: "multi",
    actions: {
      add: true,
      delete: false,
      edit: true,
    },
    delete: {
      confirmDelete: true,
    },
    edit: {
      confirmSave: true,
    },
    columns: [
      {
        key: "email",
        title: "Email Secondary",
        type: "text",
        valuePrepareFunction: (cell: string) => {
          return cell + "-test"
        }
      },
      {
        key: "username",
        title: "User Name",
        type: "text",
        editor: {
          type: "custom",
          component: CustomEditorComponent,
        },
      },
      {
        key: "name",
        title: "Full Name",
        type: "text",
        filter: {
          type: "custom",
          component: CustomFilterComponent,
        },
      },
      {
        key: "name",
        title: "Test +",
        type: "text",
        hide: true,
        valuePrepareFunction: (cell: string) => {
          return cell + "-test"
        }
      },
      {
        key: "id",
        title: "ID",
        hide: true,
        moveDisabled: true,
        type: "text",
      },

      {
        key: "email",
        title: "Email",
        type: "text",
      },
    ],
  };

  data = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net",
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      username: "Karianne",
      email: "Julianne.OConner@kory.org",
    },
    {
      id: 5,
      name: "Chelsey Dietrich",
      username: "Kamren",
      email: "Lucio_Hettinger@annie.ca",
    },
    {
      id: 6,
      name: "Mrs. Dennis Schulist",
      username: "Leopoldo_Corkery",
      email: "Karley_Dach@jasper.info",
    },
    {
      id: 7,
      name: "Kurtis Weissnat",
      username: "Elwyn.Skiles",
      email: "Telly.Hoeger@billy.biz",
    },
    {
      id: 8,
      name: "Nicholas Runolfsdottir V",
      username: "Maxime_Nienow",
      email: "Sherwood@rosamond.me",
    },
    {
      id: 9,
      name: "Glenna Reichert",
      username: "Delphine",
      email: "Chaim_McDermott@dana.io",
    },
    {
      id: 10,
      name: "Clementina DuBuque",
      username: "Moriah.Stanton",
      email: "Rey.Padberg@karina.biz",
    },
    {
      id: 11,
      name: "Nicholas DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz",
    },
  ];

  source = new LocalDataSource(this.getGeneratedData(200));

  columnsSorted(event: any) {
    console.log('columnsSorted',event);
  }

  setNewState(table: Ng2SmartTableComponent) {
    let columns = table.grid.currentColumnsSortState;
    columns = columns.map((column) => {
      if (column.key === 'email') {
        column.hide = true;
      }
      return column
    })
    table.grid.applyColumnsSortState(columns)
  }

  getGeneratedData(count = 100, startId = 0): any {
    const generatedData: any[] = [];
    for (let i = 0; i <= count; i++) {
      const userIndex = this.randomInteger(0, 10);
      generatedData.push({ ...this.data[userIndex], id: i + startId });
    }
    return generatedData;
  }

  listScrollEnd(): void {
    const count = this.source.count();
    const data = this.getGeneratedData(100, count);

    this.source.appendMany(data);
  }

  deleteConfirm(event: SmartTableConfirmDeleteEvent): void {
    setTimeout(() => {
      event.confirm.resolve();
    }, 1000);
  }
  editConfirm(event: SmartTableConfirmEditEvent): void {
    setTimeout(() => {
      console.log(event);

      event.confirm.resolve(event.newData);
    }, 500);
  }

  disableMulti(table: Ng2SmartTableComponent): void {
    const settings = table.grid.settings();
    settings.selectMode = 'single'
    table.grid.setSettings(settings);
  }

  enableDelete(table: Ng2SmartTableComponent): void {

    this.settings.actions =  {...this.settings.actions, delete: true,}

    table.grid.setSettings(this.settings);
  }
  updateEditButtons(table: Ng2SmartTableComponent): void {

    this.settings.edit =  {saveButtonContent: 'NewSave',}
    this.settings = Object.assign({}, this.settings)
    // table.grid.setSettings(this.settings);
  }

  randomInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  clickEvent(event: any) {
    console.log(event);
  }

  multiRowSelect(event: any) {
    console.log("multiRowSelect", event);
  }
}
