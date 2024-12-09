import {
  Component,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  ViewChild,
  ViewContainerRef,
} from "@angular/core";

import { FilterDefault } from "./filter-default";

@Component({
  selector: "custom-table-filter",
  template: `<ng-template #dynamicTarget></ng-template>`,
  standalone: true,
})
export class CustomFilterComponent
  extends FilterDefault
  implements OnChanges, OnDestroy
{
  customComponent: any;
  @ViewChild("dynamicTarget", { read: ViewContainerRef, static: true })
  dynamicTarget: any;

  ngOnChanges(changes: SimpleChanges) {
    if (this.customComponent) {
      if (this.customComponent.instance?.ngOnChanges) {
        this.customComponent.instance?.ngOnChanges(changes);
      }
      return;
    }
    if (this.column.filter && this.column.filter.type === "custom") {
      this.customComponent = this.dynamicTarget.createComponent(
        this.column.filter?.component
      );
    }

    // set @Inputs and @Outputs of custom component
    this.customComponent.instance.query = this.query;
    this.customComponent.instance.column = this.column;
    this.customComponent.instance.source = this.source;
    this.customComponent.instance.inputClass = this.inputClass;
    this.customComponent.instance.filter.subscribe((event: any) =>
      this.onFilter(event)
    );
  }

  ngOnDestroy() {
    if (this.customComponent) {
      this.customComponent.destroy();
    }
  }
}
