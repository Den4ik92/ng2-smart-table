import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { BaseFilterComponent } from './base-filter.component';

@Component({
  selector: 'ng2-checkbox-filter',
  template: `
    <input type="checkbox" [formControl]="inputControl" [class]="inputClass()" class="form-control" />
    @if (filterActive) {
    <a href="#" (click)="resetFilter($event)">{{ column().getFilterConfig()?.resetText || 'reset' }}</a>
    }
  `,
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
})
export class CheckboxFilterComponent extends BaseFilterComponent implements OnInit, OnChanges, OnDestroy {
  filterActive = false;
  private trueVal: any = true;
  private falseVal: any = false;

  constructor() {
    super();
  }

  override ngOnInit() {
    const filterConfig = this.column().getFilterConfig();
    try {
      const { true: trueVal, false: falseVal } = filterConfig;
      this.trueVal = trueVal ?? true;
      this.falseVal = falseVal ?? false;
    } catch {
      // do nothing
    }
    this.changesSubscription = this.inputControl.valueChanges
      .pipe(distinctUntilChanged(), debounceTime(this.delay))
      .subscribe((checked: boolean) => {
        this.filterActive = true;
        const value = checked ? this.trueVal : this.falseVal;
        this.setFilter(value);
      });
  }

  override ngOnChanges({ query }: SimpleChanges) {
    if (query) {
      this.inputControl?.setValue(query.currentValue === this.trueVal, { emitEvent: false });
    }
  }

  resetFilter(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.inputControl.setValue(false, { emitEvent: false });
    this.filterActive = false;
    this.setFilter(null);
  }
}
