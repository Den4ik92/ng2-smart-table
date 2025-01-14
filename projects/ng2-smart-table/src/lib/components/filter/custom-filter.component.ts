import {
  Component,
  ComponentRef,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  ViewChild,
  ViewContainerRef,
} from "@angular/core";

import { DefaultFilter } from "ng2-smart-table";
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
  @ViewChild("dynamicTarget", { read: ViewContainerRef, static: true })
  dynamicTarget?: ViewContainerRef;

  customComponent?: ComponentRef<DefaultFilter>;

  ngOnChanges(changes: SimpleChanges) {
    if (this.customComponent) {
      if (
        this.customComponent?.instance &&
        "ngOnChanges" in this.customComponent.instance
      ) {
        const onChanges = this.customComponent.instance.ngOnChanges as (
          changes: SimpleChanges
        ) => void;
        onChanges(changes);
      }
      return;
    }
    const columnFilter = this.column().filter;
    if (columnFilter && columnFilter.type === "custom") {
      this.customComponent = this.dynamicTarget?.createComponent(
        columnFilter?.component
      );
      // set @Inputs and @Outputs of custom component
      this.customComponent?.setInput("query", this.query);
      this.customComponent?.setInput("column", this.column());
      this.customComponent?.setInput("source", this.source());
      this.customComponent?.setInput("inputClass", this.inputClass());
      this.customComponent?.instance.filter.subscribe((event: any) =>
        this.onFilter(event)
      );
    }
  }

  ngOnDestroy() {
    if (this.customComponent) {
      this.customComponent.destroy();
    }
  }
}
