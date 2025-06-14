import { HttpClient, HttpParams } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { NbCardModule, NbLayoutModule } from '@nebular/theme';
import { LocalDataSource, SmartTableColumnEditorDirective } from 'ng2-smart-table';
import {
  ParamsPrepareFunction,
  RequestFunction,
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
import { CustomFilterComponent } from './custom-filter/custom-filter.component';
import { CustomViewerComponent } from './custom-viewer/custom-viewer.component';

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
  styleUrls: ['./app.component.scss'],
  imports: [Ng2SmartTableComponent, SmartTableColumnEditorDirective, NbLayoutModule, NbCardModule],
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

  deleteGender = 'male';

  canDeleteFunction() {
    return (user: User) => user.gender === this.deleteGender;
  }
  canEditFunction() {
    return (user: User) => user.gender === this.deleteGender;
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
    this.requestFunction()(new HttpParams({ fromObject: { page: 1, limit: 2500 } })).subscribe((res) => {
      this.source.load(res.data);
    });
    // this.source.emitOnChanged({action: 'refresh'})
  }

  readonly tableHide = signal(false);
  // readonly source = new ServerDataSource<User>(this.paramPrepareFunction, this.requestFunction());
  readonly source = new LocalDataSource<User>();

  settings: SmartTableSettings<User> = {
    columnSortStorageKey: 'test1',
    pager: {
      display: true,
      perPage: 100,
      perPageSelect: [10, 20, 50, 100],
    },
    tableWidthMobileBreakpoint: 768,
    columnSort: true,
    selectMode: 'multi',
    actions: {
      add: false,
      delete: true,
      edit: true,
      custom: [
        {
          name: 'custom',
          title: 'Custom',
          // hasPermissionFunction: (user: User) => user.gender !== this.deleteGender,
        },
      ],
    },
    delete: {
      confirmDelete: true,
      hasPermissionFunction: this.canDeleteFunction(),
    },
    edit: {
      confirmSave: true,
    },
    columns: [
      {
        key: 'name',
        title: 'User Name',
        type: 'text',
        sort: true,
        filter: {
          type: 'text',
        },
        editor: {
          type: 'custom',
          component: CustomEditorComponent,
        },
      },
      {
        key: 'email',
        title: 'Email',
        sort: true,
        type: 'text',
      },
      {
        key: 'gender',
        title: 'Is man',
        type: 'text',
        sort: true,
        filter: {
          type: 'checkbox',
        },
        valuePrepareFunction: (cell: 'male' | 'female') => cell === 'male',
      },
      {
        key: 'gender',
        title: 'gender',
        type: 'text',
        sort: true,
        filter: {
          type: 'list',
          config: {
            list: [
              { value: 'male', title: 'male' },
              { value: 'female', title: 'female' },
            ],
          },
        },
        editor: {
          type: 'custom',
          component: CustomEditorComponent,
        },
      },
      {
        key: 'age',
        title: 'Age',
        type: 'text',
        sort: true,
        filter: {
          type: 'custom',
          component: CustomFilterComponent,
        },
        // sort: true,
      },
      {
        key: 'occupation',
        title: 'occupation',
        type: 'custom',
        filter: {
          type: 'text',
        },
        renderComponent: CustomViewerComponent,
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
      event.confirm.resolve(event.newData);
      console.log(event.newData);
    }, 500);
  }
  customEvent(event: any): void {
    this.source.remove(event.data);
    console.log(event);
  }

  disableMulti(table: Ng2SmartTableComponent<User>): void {
    const settings = table.grid.settings();
    settings.selectMode = 'single';
    table.grid.setSettings(settings);
  }

  enableDelete(table: Ng2SmartTableComponent<User>): void {
    this.settings.actions = { ...this.settings.actions, delete: true };
    this.settings = Object.assign({}, this.settings);
  }
  changeSort(): void {
    this.source.setSort({ field: 'name', title: 'name', direction: 'asc' });
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
    console.log(event, 'clickEvent');
  }

  multiRowSelect(event: any) {
    console.log('multiRowSelect', event);
  }
}
