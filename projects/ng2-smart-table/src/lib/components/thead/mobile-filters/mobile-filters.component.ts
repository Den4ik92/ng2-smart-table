import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { CdkPortal, PortalModule } from '@angular/cdk/portal';
import { ChangeDetectionStrategy, Component, ElementRef, inject, input, viewChild } from '@angular/core';
import { DataSource } from '../../../lib/data-source/data-source';
import { Grid } from '../../../lib/grid';
import { FilterComponent } from '../../filter/filter.component';

@Component({
  selector: 'ng2-mobile-filters',
  imports: [FilterComponent, PortalModule],
  templateUrl: './mobile-filters.component.html',
  styleUrl: './mobile-filters.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MobileFiltersComponent {
  protected readonly overlay = inject(Overlay);

  readonly contentTemplate = viewChild.required(CdkPortal);
  readonly reference = viewChild.required<ElementRef>('reference');

  readonly grid = input.required<Grid>();
  readonly source = input.required<DataSource>();
  readonly filterInputClass = input.required<string>();

  protected overlayRef?: OverlayRef;

  protected clearAllFilters() {
    this.source().setFilters([]);
  }

  public hide() {
    this.overlayRef?.detach();
    this.overlayRef?.dispose();
  }

  public show() {
    this.overlayRef = this.overlay.create(this.getOverlayConfig());
    this.overlayRef.attach(this.contentTemplate());
    this.overlayRef.backdropClick().subscribe(() => this.hide());
  }

  private getOverlayConfig(): OverlayConfig {
    const positionStrategy = this.overlay
      .position()
      .flexibleConnectedTo(this.reference())
      .withPush(false)
      .withPositions([
        {
          originX: 'start',
          originY: 'bottom',
          overlayX: 'end',
          overlayY: 'top',
        },
      ]);

    return new OverlayConfig({
      positionStrategy: positionStrategy,
      hasBackdrop: true,
      backdropClass: 'cdk-overlay-transparent-backdrop',
    });
  }
}
