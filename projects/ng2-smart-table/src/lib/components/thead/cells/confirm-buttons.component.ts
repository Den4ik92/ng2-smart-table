import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';

import { Grid } from '../../../lib/grid';

@Component({
  selector: 'ng2-st-create-confirm-buttons',
  template: `
    <a
      href="#"
      class="ng2-smart-action ng2-smart-action-add-create"
      [innerHTML]="createButtonContent()"
      (click)="$event.preventDefault(); create.emit($event)"></a>
    <a
      href="#"
      class="ng2-smart-action ng2-smart-action-add-cancel"
      [innerHTML]="cancelButtonContent()"
      (click)="$event.preventDefault(); grid().createFormShown.set(false)"></a>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateConfirmButtonsComponent {
  readonly grid = input.required<Grid>();
  readonly create = output<any>();

  readonly createButtonContent = computed(() => {
    const addOptions = this.grid().settings().add;
    if (!addOptions) {
      return 'Create';
    }
    return addOptions?.createButtonContent || 'Create';
  });
  readonly cancelButtonContent = computed(() => {
    const addOptions = this.grid().settings().add;
    if (!addOptions) {
      return 'Cancel';
    }
    return addOptions?.cancelButtonContent || 'Cancel';
  });
}
