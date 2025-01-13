import { Overlay, OverlayConfig, OverlayRef } from "@angular/cdk/overlay";
import { ComponentPortal } from "@angular/cdk/portal";
import {
  ComponentRef,
  computed,
  Directive,
  ElementRef,
  inject,
  input,
  OnDestroy
} from "@angular/core";
import { Ng2SmartTableComponent } from "ng2-smart-table";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { TableColumnsEditorComponent } from "./table-columns-editor.component";

@Directive({
  selector: "[smartTableColumnEditor]",
  host: {
    "(click)": "buttonClick()",
  },
})
export class SmartTableColumnEditorDirective implements OnDestroy {
  tableComponent = input<Ng2SmartTableComponent>();

  private readonly grid = computed(() => {
    return this.tableComponent()?.grid;
  });

  private readonly overlay = inject(Overlay);
  private readonly elementRef = inject(ElementRef);
  private readonly destroy$ = new Subject<void>()

  protected overlayRef?: OverlayRef;



  ngOnDestroy(): void {
    this.overlayRef?.dispose();
    this.destroy$.next();
    this.destroy$.complete();
  }

  protected showDropdown(): void {
    this.overlayRef = this.overlay.create(this.getOverlayConfig());
    const componentPortal = new ComponentPortal(TableColumnsEditorComponent);
    const dropdownRef: ComponentRef<TableColumnsEditorComponent> =
      this.overlayRef.attach(componentPortal);
    dropdownRef.setInput("grid", this.grid());
    dropdownRef.setInput("close", this.hide.bind(this));
    this.overlayRef?.backdropClick().pipe(takeUntil(this.destroy$)).subscribe(() => this.hide());
  }

  public hide() {
    this.overlayRef?.detach();
    this.overlayRef?.dispose();
    this.destroy$.next();
  }

  buttonClick() {
    this.showDropdown();
  }

  private getOverlayConfig(): OverlayConfig {
    const positionStrategy = this.overlay
      .position()
      .flexibleConnectedTo(this.elementRef)
      .withPush(false)
      .withPositions([
        {
          originX: "center",
          originY: "bottom",
          overlayX: "end",
          overlayY: "top",
        },
        {
          originX: "center",
          originY: "bottom",
          overlayX: "center",
          overlayY: "top",
        },
        {
          originX: "center",
          originY: "bottom",
          overlayX: "start",
          overlayY: "top",
        },
        {
          originX: "center",
          originY: "top",
          overlayX: "start",
          overlayY: "bottom",
        },
        {
          originX: "center",
          originY: "top",
          overlayX: "center",
          overlayY: "bottom",
        },
        {
          originX: "center",
          originY: "top",
          overlayX: "start",
          overlayY: "bottom",
        },
      ]);

    return new OverlayConfig({
      positionStrategy: positionStrategy,
      hasBackdrop: true,
      backdropClass: "cdk-overlay-transparent-backdrop",
    });
  }
}
