import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

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
      [checked]="cell().getValue() === trueVal" />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxEditorComponent extends BaseEditorComponent implements OnInit {
  trueVal: any = true;
  falseVal: any = false;

  ngOnInit(): void {
    this.trueVal = this.cell().column.getEditorConfig()?.true || true;
    this.falseVal = this.cell().column.getEditorConfig()?.false || false;
  }

  onChange(event: any) {
    this.cell().setNewValue(event.target.checked ? this.trueVal : this.falseVal);
  }
}
