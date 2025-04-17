import {
  ChangeDetectionStrategy,
  Component,
  ComponentRef,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

import { SmartTableEditorAndFilter } from '../../../lib/interfaces/smart-table.models';
import { BaseEditorComponent } from '../cell-editors/base-editor.component';

@Component({
  selector: 'ng2-table-cell-custom-editor',
  template: ` <ng-template #dynamicTarget></ng-template> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomEditComponent extends BaseEditorComponent implements OnChanges, OnDestroy {
  @ViewChild('dynamicTarget', { read: ViewContainerRef, static: true })
  dynamicTarget?: ViewContainerRef;

  private customComponent?: ComponentRef<BaseEditorComponent>;

  ngOnChanges(changes: SimpleChanges) {
    const editor: SmartTableEditorAndFilter | false = this.cell().column.editor;
    if (this.customComponent) {
      if (this.customComponent?.instance && 'ngOnChanges' in this.customComponent.instance) {
        try {
          const onChanges = this.customComponent.instance.ngOnChanges as (changes: SimpleChanges) => void;
          onChanges(changes);
        } catch {
          // do nothing
        }
      }
      return;
    }
    if (this.cell() && !this.customComponent && editor && editor.type == 'custom') {
      this.customComponent = this.dynamicTarget?.createComponent(editor.component);
      this.customComponent?.setInput('cell', this.cell());
    }
  }

  ngOnDestroy() {
    if (this.customComponent) {
      this.customComponent.destroy();
    }
  }
}
