import { HttpClient, HttpParams } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { SmartTableColumnEditorDirective } from 'ng2-smart-table';
import {
  ParamsPrepareFunction,
  RequestFunction,
  ServerDataSource
} from 'projects/ng2-smart-table/src/lib/lib/data-source/server/server.data-source';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Ng2SmartTableComponent } from '../../../ng2-smart-table/src/lib/ng2-smart-table.component';
import {
  SmartTableConfirmDeleteEvent,
  SmartTableConfirmEditEvent,
  SmartTableSettings,
} from './../../../ng2-smart-table/src/lib/lib/interfaces/smart-table.models';
import { CustomEditorComponent } from './custom-editor/custom-editor.component';

export interface User {
  id: number;
  gender: string;
  name: string;
  email: string;
  age: number;
  phone: string;
  occupation: string;
  address: Address;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zip: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [Ng2SmartTableComponent, SmartTableColumnEditorDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  private readonly http = inject(HttpClient);

  private requestFunction(): RequestFunction<User> {
    return (params) =>
      this.http
        .get<{ users: User[]; totalCount: number }>('http://localhost:3000/api/users', {
          params,
        })
        .pipe(map((data) => ({ data: data.users, total: data.totalCount })));
  }

  deleteGender = "male"

  canDeleteFunction() {
    return (user: User) => user.gender === this.deleteGender
  }
  canEditFunction() {
    return (user: User) => user.gender === this.deleteGender
  }

  private paramPrepareFunction: ParamsPrepareFunction = (options) => {
    return new Observable<HttpParams>((observer) => {
      let paramsObject: Record<string, any> = {
        page: options.page,
        limit: options.limit,
        sortBy: options.sort.field,
        sortDirection: options.sort.direction,
      };
      options.filters?.forEach((filter) => {
        paramsObject = { ...paramsObject, [filter.field]: filter.search };
      });
      observer.next(new HttpParams({ fromObject: paramsObject }));
      observer.complete();
    });
  };

  ngOnInit(): void {
    // this.requestFunction()(new HttpParams({ fromObject: { page: 1, limit: 500 } })).subscribe((res) => {
    //   this.source.load(res.data);
    // });
  }

  readonly tableHide = signal(false);
  readonly source = new ServerDataSource<User>(this.paramPrepareFunction, this.requestFunction());
  // readonly source = new LocalDataSource<User>();

  settings: SmartTableSettings<User> = {
    columnSortStorageKey: 'test1',
    pager: {
      display: true,
      perPage: 500,
      perPageSelect: [10, 20, 50, 100],
    },
    columnSort: true,
    selectMode: 'multi',
    actions: {
      add: true,
      delete: false,
      edit: true,
      custom: [
        {
          name: 'custom',
          title: 'Custom',
          hasPermissionFunction: (user: User) => user.gender !== this.deleteGender
        },
      ]
    },
    delete: {
      confirmDelete: true,
      hasPermissionFunction: this.canDeleteFunction()
    },
    edit: {
      confirmSave: true,
    },
    columns: [
      {
        key: 'name',
        title: 'User Name',
        type: 'text',
        editor: {
          type: 'custom',
          component: CustomEditorComponent,
        },
        filterFunction: () => true,
        compareFunction: () => 0,
      },
      {
        key: 'email',
        title: 'Email',
        type: 'text',
      },
      {
        key: 'gender',
        title: 'Is man',
        type: 'text',
        filter: {
          type: 'checkbox',
          config: {
            true: 'male',
            false: 'female',
          },
        },
        valuePrepareFunction: (cell: 'male' | 'female') => {
          return cell === 'male';
        },
      },
      {
        key: 'gender',
        title: 'gender',
        type: 'text',
        editor: {
          type: 'custom',
          component: CustomEditorComponent,
        },
      },
      {
        key: 'age',
        title: 'Age',
        type: 'text',
        sortDirection: 'asc',
      },
      {
        key: 'occupation',
        title: 'occupation',
        type: 'text',
        valuePrepareFunction: (cell: string) => {
          return cell + '-O';
        },
      },
      {
        key: 'phone',
        title: 'phone',
        type: 'text',
      },

      {
        key: 'address',
        title: 'address',
        type: 'text',
        valuePrepareFunction: (cell: Address) => {
          return cell.city + '-' + cell.zip;
        },
      },
    ],
  };

  columnsSorted(event: any) {
    console.log('columnsSorted', event);
  }

  setNewState(table: Ng2SmartTableComponent) {
    let columns = table.grid.currentColumnsSortState;
    columns = columns.map((column) => {
      if (column.key === 'email') {
        column.hide = true;
      }
      return column;
    });
    table.grid.applyColumnsSortState(columns);
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
    }, 1500);
  }

  disableMulti(table: Ng2SmartTableComponent): void {
    const settings = table.grid.settings();
    settings.selectMode = 'single';
    table.grid.setSettings(settings);
  }

  enableDelete(table: Ng2SmartTableComponent): void {
    this.settings.actions = { ...this.settings.actions, delete: true };
    this.settings = Object.assign({}, this.settings);
  }
  changeSort(): void {
    this.source.setSort({ field: 'name', direction: 'asc' });
  }
  loadNew(): void {
    // this.requestFunction()(new HttpParams({ fromObject: { page: 3, limit: 5 } })).subscribe((res) => {
    //   this.source.load(res.data);
    // });
  }
  updateEditButtons(table: Ng2SmartTableComponent): void {
    this.settings.edit = { saveButtonContent: 'NewSave' };
    this.settings = Object.assign({}, this.settings);
    // table.grid.setSettings(this.settings);
  }
  addNewRow(): void {
    this.source.add({
      id: 100,
      name: 'new',
      gender: 'new',
      email: 'new',
      age: 100,
      phone: 'new',
      occupation: 'new',
      address: {
        street: 'new',
        city: 'new',
        state: 'new',
        zip: 'new',
      },
    });
  }

  prepend(): void {
    this.source.prepend({
      id: 100,
      name: 'new',
      gender: 'new',
      email: 'new',
      age: 100,
      phone: 'new',
      occupation: 'new',
      address: {
        street: 'new',
        city: 'new',
        state: 'new',
        zip: 'new',
      },
    });
  }

  tableHideToggle(): void {
    this.tableHide.set(!this.tableHide());
    // this.source.prepend({id: 100, name: 'new', username: 'new', email: 'new'})
  }

  randomInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  clickEvent(event: any) {
    console.log(event);
  }

  multiRowSelect(event: any) {
    console.log('multiRowSelect', event);
  }
}
