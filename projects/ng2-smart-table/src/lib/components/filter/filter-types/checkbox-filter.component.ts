import { ChangeDetectionStrategy, Component, computed, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BaseFilterComponent } from './base-filter.component';

@Component({
  selector: 'ng2-checkbox-filter',
  template: `
    <div class="checkbox-filter-wrapper">
      <input
        [id]="column().id"
        type="checkbox"
        [ngModel]="currentState()"
        (ngModelChange)="setCheckFilter($event)"
        [class]="inputClass()"
        class="form-control" />
      @if (filterIsActive()) {
        <a href="#" (click)="resetFilter($event)">{{ column().getFilterConfig()?.resetText || 'reset' }}</a>
      }
    </div>
  `,
  styles: `
    .checkbox-filter-wrapper {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 0.5rem;

      input {
        width: auto;
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, ReactiveFormsModule],
})
export class CheckboxFilterComponent extends BaseFilterComponent implements OnInit, OnChanges, OnDestroy {
  readonly filterIsActive = computed(() => this.query() !== null);
  readonly currentState = computed<boolean>(() => {
    const valuesConfig = this.getValuesConfig(this.column().getFilterConfig());
    return this.query() === valuesConfig.trueVal ? true : this.query() === valuesConfig.falseVal ? false : false;
  });

  constructor() {
    super();
  }

  private getValuesConfig(filterConfig: any): { trueVal: string | true; falseVal: string | false } {
    try {
      const { true: trueVal, false: falseVal } = filterConfig;
      return { trueVal: trueVal || true, falseVal: falseVal ?? false };
    } catch {
      return { trueVal: true, falseVal: false };
    }
  }
  setCheckFilter(state: boolean) {
    const { trueVal, falseVal } = this.getValuesConfig(this.column().getFilterConfig());
    const value = state ? trueVal : falseVal;
    this.setFilter(value);
  }

  resetFilter(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.setFilter(null);
  }
}
