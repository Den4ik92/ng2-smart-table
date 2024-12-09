import { Component, EventEmitter, Input, OnChanges, output, OutputEmitterRef } from '@angular/core';
import { LocalDataSource } from './../../lib/data-source/local/local.data-source';

import { Grid } from '../../lib/grid';
import { TheadFitlersRowComponent } from './rows/thead-filters-row.component';
import { TheadFormRowComponent } from './rows/thead-form-row.component';
import { TheadTitlesRowComponent } from './rows/thead-titles-row.component';

@Component({
    selector: '[ng2-st-thead]',
    templateUrl: './thead.component.html',
    standalone: true,
    imports: [TheadTitlesRowComponent, TheadFitlersRowComponent, TheadFormRowComponent]
})
export class Ng2SmartTableTheadComponent implements OnChanges {

    @Input() grid!: Grid;
    @Input() source!: LocalDataSource;
    @Input() createConfirm!: EventEmitter<any> | OutputEmitterRef<any>;

    readonly sort = output<any>();
    readonly selectAllRows = output<any>();
    readonly create = output<any>();
    readonly filter = output<any>();

    isHideHeader: boolean = false;
    isHideSubHeader: boolean = false;

  ngOnChanges() {
      this.isHideHeader = this.grid.getSetting('hideHeader', false);
      this.isHideSubHeader = this.grid.getSetting('hideSubHeader', false);
    }
}
