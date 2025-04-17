import { ChangeDetectionStrategy, Component, computed } from '@angular/core';

import { BaseEditorComponent } from './base-editor.component';

@Component({
  selector: 'ng2-checkbox-editor',
  styleUrls: ['./editor.component.scss'],
  template: `
    <input
      [class]="inputClass()"
      type="checkbox"
      class="form-control"
      [name]="cell().id"
      [disabled]="!cell().isEditable()"
      (change)="onChange($event)"
      [checked]="cell().getValue() === trueVal()" />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxEditorComponent extends BaseEditorComponent {
  readonly trueVal = computed(() => {
    return this.cell().column.getEditorConfig()?.true || true;
  });
  readonly falseVal = computed(() => {
    return this.cell().column.getEditorConfig()?.false || false;
  });

  constructor() {
    super();
  }

  onChange(event: any) {
    this.cell().newValue = event.target.checked ? this.trueVal() : this.falseVal();
  }
}
