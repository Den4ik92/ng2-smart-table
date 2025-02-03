import { Component, computed, input, output } from '@angular/core';

import { DataSource } from '../../../lib/data-source/data-source';
import { Grid } from '../../../lib/grid';

@Component({
  selector: '[ng2-st-add-button]',
  template: `
    @if (isActionAdd()) {
    <a
      href="#"
      class="ng2-smart-action ng2-smart-action-add-add"
      [innerHTML]="addNewButtonContent()"
      (click)="onAdd($event)"></a>
    }
  `,
  host: {
    class: 'ng2-smart-actions-title ng2-smart-actions-title-add',
  },
  standalone: true,
})
export class AddButtonComponent {
  readonly grid = input.required<Grid>();
  readonly source = input.required<DataSource>();
  readonly create = output<any>();

  readonly isActionAdd = computed(() => {
    const actions = this.grid().settings().actions;
    if (!actions) {
      return false;
    }
    return !!actions.add;
  });
  readonly addNewButtonContent = computed(() => {
    const addParams = this.grid().settings()?.add;
    if (!addParams) {
      return 'Add New';
    }
    return addParams?.addButtonContent || 'Add New';
  });

  onAdd(event: any) {
    event.preventDefault();
    event.stopPropagation();

    if (this.grid().getSetting('mode') === 'external') {
      this.create.emit({
        source: this.source(),
      });
    } else {
      this.grid().createFormShown = true;
    }
  }
}
