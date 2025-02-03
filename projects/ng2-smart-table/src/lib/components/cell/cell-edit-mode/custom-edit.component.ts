import {
  Component,
  ComponentRef,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  ViewChild,
  ViewContainerRef,
} from "@angular/core";


import { BaseEditorComponent } from "ng2-smart-table";
import { SmartTableEditorAndFilter } from "../../../lib/interfaces/smart-table.models";

@Component({
  selector: "ng2-table-cell-custom-editor",
  template: ` <ng-template #dynamicTarget></ng-template> `,
  standalone: true,
})
export class CustomEditComponent extends BaseEditorComponent implements OnChanges, OnDestroy {
  @ViewChild("dynamicTarget", { read: ViewContainerRef, static: true })
  dynamicTarget?: ViewContainerRef;

  private customComponent?: ComponentRef<BaseEditorComponent>;

  ngOnChanges(changes: SimpleChanges) {
    const editor: SmartTableEditorAndFilter | false =
      this.cell().getColumn().editor;
    if (this.customComponent) {
      if (this.customComponent?.instance && 'ngOnChanges' in this.customComponent.instance){
        const onChanges = this.customComponent.instance.ngOnChanges as (changes: SimpleChanges) => void
        onChanges(changes);
      }
      return;
    }
    if (
      this.cell() &&
      !this.customComponent &&
      editor &&
      editor.type == "custom"
    ) {
      this.customComponent = this.dynamicTarget?.createComponent(
        editor.component
      )
      this.customComponent?.setInput('cell', this.cell())
      this.customComponent?.setInput('inputClass', this.inputClass())
    }
  }

  ngOnDestroy() {
    if (this.customComponent) {
      this.customComponent.destroy();
    }
  }
}
