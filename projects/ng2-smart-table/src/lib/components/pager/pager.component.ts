import { SmartTablePagingItem } from './../../lib/interfaces/smart-table.models';
import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { LocalDataSource } from '../../lib/data-source/local/local.data-source';

@Component({
    selector: 'ng2-smart-table-pager',
    styleUrls: ['./pager.component.scss'],
    template: `
    @if (shouldShow()) {
      <nav class="ng2-smart-pagination-nav">
        <ul class="ng2-smart-pagination pagination">
          <li class="ng2-smart-page-item page-item" [ngClass]="{disabled: getPage() == 1}">
            <a class="ng2-smart-page-link page-link" href="#"
              (click)="getPage() == 1 ? false : paginate(1)" aria-label="First">
              <span aria-hidden="true">&laquo;</span>
              <span class="sr-only">First</span>
            </a>
          </li>
          <li class="ng2-smart-page-item page-item" [ngClass]="{disabled: getPage() == 1}">
            <a class="ng2-smart-page-link page-link page-link-prev" href="#"
              (click)="getPage() == 1 ? false : prev()" aria-label="Prev">
              <span aria-hidden="true">&lt;</span>
              <span class="sr-only">Prev</span>
            </a>
          </li>
          @for (page of getPages(); track page) {
            <li class="ng2-smart-page-item page-item"
              [ngClass]="{active: getPage() == page}">
              @if (getPage() == page) {
                <span class="ng2-smart-page-link page-link"
                  >{{ page }} <span class="sr-only">(current)</span></span>
                }
                @if (getPage() != page) {
                  <a class="ng2-smart-page-link page-link" href="#"
                  (click)="paginate(page)">{{ page }}</a>
                }
              </li>
            }
            <li class="ng2-smart-page-item page-item"
              [ngClass]="{disabled: getPage() == getLast()}">
              <a class="ng2-smart-page-link page-link page-link-next" href="#"
                (click)="getPage() == getLast() ? false : next()" aria-label="Next">
                <span aria-hidden="true">&gt;</span>
                <span class="sr-only">Next</span>
              </a>
            </li>
            <li class="ng2-smart-page-item page-item"
              [ngClass]="{disabled: getPage() == getLast()}">
              <a class="ng2-smart-page-link page-link" href="#"
                (click)="getPage() == getLast() ? false : paginate(getLast())" aria-label="Last">
                <span aria-hidden="true">&raquo;</span>
                <span class="sr-only">Last</span>
              </a>
            </li>
          </ul>
        </nav>
      }
    
      @if (perPageSelect && perPageSelect.length > 0) {
        <nav class="ng2-smart-pagination-per-page">
          <label for="per-page">
            Per Page:
          </label>
          <select (change)="onChangePerPage()" [(ngModel)]="currentPerPage" id="per-page">
            @for (item of perPageSelect; track item) {
              <option [value]="item">{{ item }}</option>
            }
          </select>
        </nav>
      }
    `,
    standalone: false
})
export class PagerComponent implements OnChanges {

  @Input() source!: LocalDataSource;
  @Input() perPageSelect: number[] = [];

  @Output() changePage = new EventEmitter<any>();

  currentPerPage: number = 0;

  protected pages: number[] = [];
  protected page: number = 1;
  protected count: number = 0;
  protected perPage: number = 0;

  protected dataChangedSub: Subscription | undefined;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['source']) {
      if (!changes['source'].firstChange && this.dataChangedSub) {
        this.dataChangedSub.unsubscribe();
      }
      this.dataChangedSub = this.source.onChanged().subscribe((dataChanges) => {
        const paging: SmartTablePagingItem | false = this.source.getPaging();
        if (paging) {
          this.page = paging.page;
          this.perPage = paging.perPage;
        }
        this.currentPerPage = this.perPage;
        this.count = this.source.count();
        if (this.isPageOutOfBounce()) {
          this.source.setPage(--this.page);
        }

        this.processPageChange(dataChanges);
        this.initPages();
      });
    }
  }

  /**
   * We change the page here depending on the action performed against data source
   * if a new element was added to the end of the table - then change the page to the last
   * if a new element was added to the beginning of the table - then to the first page
   * @param changes
   */
  processPageChange(changes: any) {
    if (changes['action'] === 'prepend') {
      this.source.setPage(1);
    }
    if (changes['action'] === 'append') {
      this.source.setPage(this.getLast());
    }
  }

  shouldShow(): boolean {
    return this.source.count() > this.perPage;
  }

  paginate(page: number): boolean {
    this.source.setPage(page);
    this.page = page;
    this.changePage.emit({ page });
    return false;
  }

  next(): boolean {
    return this.paginate(this.getPage() + 1);
  }

  prev(): boolean {
    return this.paginate(this.getPage() - 1);
  }

  getPage(): number {
    return this.page;
  }

  getPages(): number[] {
    return this.pages;
  }

  getLast(): number {
    return Math.ceil(this.count / this.perPage);
  }

  isPageOutOfBounce(): boolean {
    return (this.page * this.perPage) >= (this.count + this.perPage) && this.page > 1;
  }

  initPages() {
    const pagesCount = this.getLast();
    let showPagesCount = 4;
    showPagesCount = pagesCount < showPagesCount ? pagesCount : showPagesCount;
    this.pages = [];

    if (this.shouldShow()) {

      let middleOne = Math.ceil(showPagesCount / 2);
      middleOne = this.page >= middleOne ? this.page : middleOne;

      let lastOne = middleOne + Math.floor(showPagesCount / 2);
      lastOne = lastOne >= pagesCount ? pagesCount : lastOne;

      const firstOne = lastOne - showPagesCount + 1;

      for (let i = firstOne; i <= lastOne; i++) {
        this.pages.push(i);
      }
    }
  }

  onChangePerPage() {
    const paging: SmartTablePagingItem | false = this.source.getPaging(); 
    if (paging) {
      paging.perPage = this.currentPerPage * 1;
    }
    this.source.refresh();
    this.initPages();
  }
}
