import { Component, OnInit } from "@angular/core";
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormControl,
} from "@angular/forms";

import { debounceTime } from "rxjs/operators";
import { DefaultFilter } from "./default-filter";

@Component({
  selector: "checkbox-filter",
  template: `
    <input
      type="checkbox"
      [formControl]="inputControl"
      [class]="inputClass()"
      class="form-control"
    />
    @if (filterActive) {
    <a href="#" (click)="resetFilter($event)">{{
      column().getFilterConfig()?.resetText || "reset"
    }}</a>
    }
  `,
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
})
export class CheckboxFilterComponent extends DefaultFilter implements OnInit {
  filterActive = false;
  inputControl = new UntypedFormControl();

  constructor() {
    super();
  }

  ngOnInit() {
    this.changesSubscription = this.inputControl.valueChanges
      .pipe(debounceTime(this.delay))
      .subscribe((checked: boolean) => {
        this.filterActive = true;
        const trueVal =
          (this.column().getFilterConfig() &&
            this.column().getFilterConfig().true) ||
          true;
        const falseVal =
          (this.column().getFilterConfig() &&
            this.column().getFilterConfig().false) ||
          false;
        this.query = checked ? trueVal : falseVal;
        this.setFilter();
      });
  }

  resetFilter(event: any) {
    event.preventDefault();
    this.query = "";
    this.inputControl.setValue(false, { emitEvent: false });
    this.filterActive = false;
    this.setFilter();
  }
}
