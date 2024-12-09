import { Component, EventEmitter, Input, output, OutputEmitterRef } from '@angular/core';

import { Cell } from '../../../lib/data-set/cell';

@Component({ template: '' })
export class DefaultEditor implements Editor {
  @Input() cell!: Cell;
  @Input() inputClass: string = '';

  readonly onStopEditing = output<any>();
  readonly onEdited = output<any>();
  readonly onClick = output<any>();
}

export interface Editor {
  cell: Cell;
  inputClass: string;
  onStopEditing: EventEmitter<any> | OutputEmitterRef<any>;
  onEdited: EventEmitter<any> | OutputEmitterRef<any>;
  onClick: EventEmitter<any> | OutputEmitterRef<any>;
}
