import { CdkDrag, CdkDragDrop, CdkDragPlaceholder, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, effect, input, signal } from '@angular/core';
import { Grid } from '../../lib/grid';
import { cloneArrayOfObject } from '../../lib/helpers';
import { ColumnPositionState } from '../../lib/interfaces/smart-table.models';

@Component({
  selector: 'ng2-table-columns-editor',
  templateUrl: './table-columns-editor.component.html',
  styleUrls: ['./table-columns-editor.component.scss'],
  imports: [CdkDropList, CdkDrag, CdkDragPlaceholder],
})
export class TableColumnsEditorComponent {
  protected infoText = 'You can drag and drop columns as you wish and also disable unnecessary ones.';
  public grid = input<Grid>();
  public close = input.required<() => void>();

  protected currentState: ColumnPositionState[] = [];
  stateHasChanged = signal(false);

  constructor() {
    effect(() => {
      this.currentState = cloneArrayOfObject(this.grid()?.currentColumnsSortState || []);
    });
  }

  resetChanges() {
    this.currentState = cloneArrayOfObject(this.grid()?.currentColumnsSortState || []);
    this.stateHasChanged.set(false);
  }

  drop(event: CdkDragDrop<ColumnPositionState[]>) {
    moveItemInArray(this.currentState, event.previousIndex, event.currentIndex);
    this.updateChangedState();
  }

  setVisibility(index: number) {
    this.currentState[index].hide = !this.currentState[index].hide;
    this.updateChangedState();
  }

  setAndUpdate() {
    this.grid()?.applyColumnsSortState(this.currentState);
    this.close()();
    this.stateHasChanged.set(false);
  }

  private updateChangedState() {
    this.stateHasChanged.set(
      JSON.stringify(this.grid()?.currentColumnsSortState) !== JSON.stringify(this.currentState),
    );
  }
}
