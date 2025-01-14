import {
    Component,
    computed,
    EventEmitter,
    input,
    Input,
    output,
    OutputEmitterRef
} from "@angular/core";
import { LocalDataSource } from "./../../lib/data-source/local/local.data-source";

import { Grid } from "../../lib/grid";
import { TheadFiltersRowComponent } from "./rows/thead-filters-row.component";
import { TheadFormRowComponent } from "./rows/thead-form-row.component";
import { TheadTitlesRowComponent } from "./rows/thead-titles-row.component";

@Component({
  selector: "[ng2-st-thead]",
  templateUrl: "./thead.component.html",
  standalone: true,
  imports: [
    TheadTitlesRowComponent,
    TheadFiltersRowComponent,
    TheadFormRowComponent,
  ],
})
export class Ng2SmartTableTheadComponent {
  readonly grid = input.required<Grid>();
  readonly source = input.required<LocalDataSource>();
  @Input() createConfirm!: EventEmitter<any> | OutputEmitterRef<any>;

  readonly sort = output<any>();
  readonly selectAllRows = output<any>();
  readonly create = output<any>();
  readonly filter = output<any>();

  readonly isHideHeader = computed<boolean>(() => {
    return this.grid().settings()?.hideHeader || false;
  });

  readonly isHideSubHeader = computed<boolean>(() => {
    return this.grid().settings()?.hideSubHeader || false;
  });
}
