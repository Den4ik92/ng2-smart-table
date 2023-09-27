import { LocalDataSource } from './../../lib/data-source/local/local.data-source';
import {Component, Input, Output, EventEmitter, OnChanges} from '@angular/core';

import { Grid } from '../../lib/grid';

@Component({
    selector: '[ng2-st-thead]',
    templateUrl: './thead.component.html',
})
export class Ng2SmartTableTheadComponent implements OnChanges {

    @Input() grid!: Grid;
    @Input() source!: LocalDataSource;
    @Input() createConfirm!: EventEmitter<any>;

    @Output() sort = new EventEmitter<any>();
    @Output() selectAllRows = new EventEmitter<any>();
    @Output() create = new EventEmitter<any>();
    @Output() filter = new EventEmitter<any>();

    isHideHeader: boolean = false;
    isHideSubHeader: boolean = false;

  ngOnChanges() {
      this.isHideHeader = this.grid.getSetting('hideHeader', false);
      this.isHideSubHeader = this.grid.getSetting('hideSubHeader', false);
    }
}
