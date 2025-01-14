import { Component, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormControl,
} from "@angular/forms";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";

import { DefaultFilter } from "./default-filter";

@Component({
  selector: "input-filter",
  template: `
    <input
      [class]="inputClass()"
      [formControl]="inputControl"
      class="form-control"
      type="text"
      placeholder="{{ column().title }}"
    />
  `,
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
})
export class InputFilterComponent
  extends DefaultFilter
  implements OnInit, OnChanges
{
  inputControl = new UntypedFormControl();

  constructor() {
    super();
  }

  ngOnInit() {
    if (this.query) {
      this.inputControl.setValue(this.query);
    }
    this.inputControl.valueChanges
      .pipe(distinctUntilChanged(), debounceTime(this.delay))
      .subscribe((value: string) => {
        this.query = this.inputControl.value;
        this.setFilter();
      });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes?.["query"]) {
      this.inputControl.setValue(this.query);
    }
  }
}
