import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';

import { NgTemplateOutlet } from '@angular/common';
import { Grid } from '../../../lib/grid';

@Component({
  selector: 'ng2-st-tbody-create-cancel',
  templateUrl: './create-cancel.component.html',
  imports: [NgTemplateOutlet],
  styles: `
    .buttons-wrap {
      display: flex;
      gap: 0.5rem;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TbodyCreateCancelComponent {
  readonly grid = input.required<Grid>();
  readonly rowIndex = input<number>();
  readonly rowPending = input<boolean>(false);

  readonly save = output<unknown>();
  readonly cancelEdit = output<unknown>();

  readonly cancelButtonContent = computed(() => {
    const edit = this.grid().settings().edit;
    return edit ? edit.cancelButtonContent || 'Cancel' : 'Cancel';
  });
  readonly saveButtonContent = computed(() => {
    const edit = this.grid().settings().edit;
    return edit ? edit.saveButtonContent || 'Save' : 'Save';
  });
}
