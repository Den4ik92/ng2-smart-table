import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  output
} from "@angular/core";
import { Subscription } from "rxjs";
import { Column } from "../../../../lib/data-set/column";
import { LocalDataSource } from "./../../../../lib/data-source/local/local.data-source";
import { SmartTableSortDirection } from "./../../../../lib/interfaces/smart-table.models";

@Component({
  selector: "ng2-smart-table-title",
  styleUrls: ["./title.component.scss"],
  template: `
    @if (column.isSortable) {
    <a
      href="#"
      (click)="_sort($event)"
      class="ng2-smart-sort-link sort"
      [class]="currentDirection"
    >
      {{ column.title }}
    </a>
    } @else {
    <span class="ng2-smart-sort">{{ column.title }}</span>
    }
  `,
  standalone: true,
})
export class TitleComponent implements OnChanges {
  currentDirection: SmartTableSortDirection | "" = "";
  @Input() column!: Column;
  @Input() source!: LocalDataSource;
  readonly sort = output<any>();

  protected dataChangedSub: Subscription | false = false;

  ngOnChanges(changes: SimpleChanges) {
    if (changes["source"]) {
      if (!changes["source"].firstChange && this.dataChangedSub) {
        this.dataChangedSub.unsubscribe();
      }
      this.dataChangedSub = this.source.onChanged().subscribe((dataChanges) => {
        const sortConf = this.source.getSort();

        if (sortConf.length > 0 && sortConf[0]["field"] === this.column.id) {
          this.currentDirection = sortConf[0]["direction"];
        } else {
          this.currentDirection = "";
        }
      });
    }
  }

  _sort(event: any) {
    event.preventDefault();
    this.changeSortDirection();
    this.source.setSort([
      {
        field: this.column.id,
        direction: this.currentDirection === "desc" ? "desc" : "asc",
        compare: this.column.getCompareFunction(),
      },
    ]);
    this.sort.emit(null);
  }

  changeSortDirection(): string {
    if (this.currentDirection) {
      const newDirection = this.currentDirection === "asc" ? "desc" : "asc";
      this.currentDirection = newDirection;
    } else {
      this.currentDirection = this.column.sortDirection;
    }
    return this.currentDirection;
  }
}
