import { AfterViewInit, Component, ElementRef, Input, OnChanges, inject, output } from "@angular/core";

import { LocalDataSource } from "../../../lib/data-source/local/local.data-source";
import { Grid } from "../../../lib/grid";

@Component({
  selector: "[ng2-st-add-button]",
  template: `
    @if (isActionAdd) {
    <a
      href="#"
      class="ng2-smart-action ng2-smart-action-add-add"
      [innerHTML]="addNewButtonContent"
      (click)="onAdd($event)"
    ></a>
    }
  `,
  standalone: true,
})
export class AddButtonComponent implements AfterViewInit, OnChanges {
  private ref = inject(ElementRef);

  @Input() grid!: Grid;
  @Input() source!: LocalDataSource;
  readonly create = output<any>();

  isActionAdd: boolean = false;
  addNewButtonContent: string = "";

  ngAfterViewInit() {
    this.ref.nativeElement.classList.add(
      "ng2-smart-actions-title",
      "ng2-smart-actions-title-add"
    );
  }

  ngOnChanges() {
    this.isActionAdd = this.grid.getSetting("actions.add");
    this.addNewButtonContent = this.grid.getSetting("add.addButtonContent");
  }

  onAdd(event: any) {
    event.preventDefault();
    event.stopPropagation();
    if (this.grid.getSetting("mode") === "external") {
      this.create.emit({
        source: this.source,
      });
    } else {
      this.grid.createFormShown = true;
    }
  }
}
