import { Component, DestroyRef, inject, input, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DataSource } from 'ng2-smart-table';
import { map } from 'rxjs/operators';
import { Column } from '../../../../lib/data-set/column';
import { SmartTableSortDirection } from './../../../../lib/interfaces/smart-table.models';

@Component({
  selector: 'ng2-smart-table-title',
  styleUrls: ['./title.component.scss'],
  template: `
    @if (column().isSortable) {
    <a href="#" (click)="_sort($event)" class="ng2-smart-sort-link sort" [class]="currentSortDirection()">
      {{ column().title }}
    </a>
    } @else {
    <span class="ng2-smart-sort">{{ column().title }}</span>
    }
  `,
  standalone: true,
})
export class TitleComponent implements OnInit {
  readonly source = input.required<DataSource>();
  readonly column = input.required<Column>();
  private readonly destroyRef = inject(DestroyRef);


  protected readonly currentSortDirection = signal<'' | SmartTableSortDirection>('');

  ngOnInit(): void {
    this.source()
      .onChanged()
      .pipe(
        map(({ sort }) => {
          if (sort.field === this.column().id) {
            return sort.direction;
          } else {
            return '';
          }
        }),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe(this.currentSortDirection.set);
  }

  _sort(event: Event) {
    event.preventDefault();
    this.source().setSort({
      field: this.column().id,
      direction: this.currentSortDirection() === 'desc' ? 'asc' : 'desc',
      compare: this.column().compareFunction,
    });
  }
}
