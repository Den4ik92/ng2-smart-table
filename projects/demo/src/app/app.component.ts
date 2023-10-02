import { LocalDataSource } from './../../../ng2-smart-table/src/lib/lib/data-source/local/local.data-source';
import { SmartTableSettings } from './../../../ng2-smart-table/src/lib/lib/interfaces/smart-table.models';
import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  settings: SmartTableSettings = {
    pager: false,
    selectMode: 'multi',
    bodyHeight: 'calc(100vh - 200px)',
    columns: {
      id: {
        title: 'ID',
        type: 'text'
      },
      name: {
        title: 'Full Name',
        type: 'text'
      },
      username: {
        title: 'User Name',
        type: 'text'
      },
      email: {
        title: 'Email',
        type: 'text'
      },
    },
  };
  
  data = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
    },
    {
      id: 11,
      name: 'Nicholas DuBuque',
      username: 'Nicholas.Stanton',
      email: 'Rey.Padberg@rosamond.biz',
    },
  ];

  source = new LocalDataSource(this.getGeneratedData(200))

  getGeneratedData(count = 100, startId: number = 0): any {
    const generatedData: any[] = []
    for (let i= 0; i<=count; i++) {
      const userIndex = this.randomInteger(0,10)
      generatedData.push({...this.data[userIndex], id: i + startId})
    }
    return generatedData
  }

  listScrollEnd(): void {
    const count = this.source.count();
    const data = this.getGeneratedData(100, count)

    this.source.appendMany(data)
  }

  randomInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  clickEvent(event:any){
     console.log(event);
  }  
  
  multiRowSelect(event:any){
     console.log('multiRowSelect', event);
  }
}
