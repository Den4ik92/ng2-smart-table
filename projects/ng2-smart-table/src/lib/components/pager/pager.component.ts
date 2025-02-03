import { Component, computed, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataSource } from '../../lib/data-source/data-source';

@Component({
  selector: 'ng2-smart-table-pager',
  styleUrls: ['./pager.component.scss'],
  templateUrl: './pager.component.html',
  standalone: true,
  imports: [FormsModule],
})
export class PagerComponent {
  readonly source = input.required<DataSource>();
  protected readonly pagingConf = computed(() => this.source().pagingConf());
  protected readonly currentPerPage = computed(() => this.pagingConf().perPage);
  protected readonly currentPage = computed(() => this.pagingConf().page);
  protected readonly count = computed(() => this.source().count());
  protected readonly shouldShow = computed(() => this.pagingConf().display && this.count() > this.currentPerPage());
  protected readonly lastPage = computed(() => Math.ceil(this.count() / this.currentPerPage()));
  protected readonly pages = computed(() => this.getPages(this.currentPage(), this.lastPage()));

  paginate(page: number) {
    this.source().setPage(page);
  }

  next() {
    this.paginate(this.currentPage() + 1);
  }

  prev() {
    this.paginate(this.currentPage() - 1);
  }

  isString(value: string | number): value is string {
    return typeof value === 'string';
  }

  getPages(current: number, last: number) {
    const delta = 2,
      left = current - delta,
      right = current + delta + 1,
      range = [],
      rangeWithDots = [];
    let l;

    for (let i = 1; i <= last; i++) {
      if (i == 1 || i == last || (i >= left && i < right)) {
        range.push(i);
      }
    }

    for (const i of range) {
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (i - l !== 1) {
          rangeWithDots.push('...');
        }
      }
      rangeWithDots.push(i);
      l = i;
    }
    return rangeWithDots;
  }

  onChangePerPage(target: HTMLSelectElement) {
    if (!target.value) {
      return;
    }
    this.source().setPaging(1, +target.value);
  }
}
