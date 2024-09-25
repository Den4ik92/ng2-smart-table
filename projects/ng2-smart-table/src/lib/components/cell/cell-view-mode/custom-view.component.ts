import {
  Component,
  Input
} from "@angular/core";

import { Cell } from "../../../lib/data-set/cell";

@Component({
  selector: "custom-view-component",
  templateUrl: "./custom-view.component.html",
})
export class CustomViewComponent {
  @Input() cell!: Cell;
}
