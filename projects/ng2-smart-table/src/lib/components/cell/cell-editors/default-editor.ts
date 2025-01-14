import {
  Component,
  input,
  InputSignal
} from "@angular/core";

import { Cell } from "../../../lib/data-set/cell";

@Component({ template: "" })
export class DefaultEditor implements Editor {
  readonly cell = input.required<Cell>();
  readonly inputClass = input("");
}

export interface Editor {
  cell: InputSignal<Cell>;
  inputClass: InputSignal<string>;
}
