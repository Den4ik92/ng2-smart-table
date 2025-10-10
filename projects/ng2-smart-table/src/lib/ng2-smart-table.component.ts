import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ComponentRef,
  computed,
  ElementRef,
  inject,
  Injector,
  input,
  NgZone,
  OnChanges,
  OnDestroy,
  output,
  signal,
  SimpleChange,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

import { PagerComponent } from './components/pager/pager.component';
import { Ng2SmartTableTbodyComponent } from './components/tbody/tbody.component';
import { Ng2SmartTableTheadComponent } from './components/thead/thead.component';
import { Row } from './lib/data-set/row';
import { DataSource } from './lib/data-source/data-source';
import { Grid } from './lib/grid';
import { getRandomId } from './lib/helpers';
import {
  BaseDataType,
  ColumnPositionState,
  SmartTableBaseEvent,
  SmartTableConfirmDeleteEvent,
  SmartTableConfirmEditEvent,
  SmartTableCreateConfirm,
  SmartTableCustomEvent,
  SmartTableRowClickedEvent,
  SmartTableRowSelectEvent,
  SmartTableSettings,
} from './lib/interfaces/smart-table.models';

@Component({
  selector: 'ng2-smart-table',
  styleUrls: ['./ng2-smart-table.component.scss'],
  templateUrl: './ng2-smart-table.component.html',
  imports: [Ng2SmartTableTheadComponent, Ng2SmartTableTbodyComponent, PagerComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Ng2SmartTableComponent<T extends BaseDataType = any> implements OnChanges, OnDestroy, AfterViewInit {
  private readonly elementRef = inject(ElementRef);
  private readonly ngZone = inject(NgZone);
  private readonly injector = inject(Injector);

  readonly source = input.required<DataSource<T>>();
  readonly settings = input.required<SmartTableSettings<T>>();
  /**
   * @description If you want to display pagination in your custom container, you can pass it to "paginationSlot".
   * @example
   * <ng2-smart-table
   *    [paginationSlot]="paginationContainerRef()">
   * </ng2-smart-table>
   * <div #paginationSlot>
   * </div>
   * inside component
   * readonly paginationContainerRef = viewChild('paginationSlot', {
   *  read: ViewContainerRef,
   * });
   */
  readonly paginationSlot = input<ViewContainerRef | undefined>();
  /**
   * @description if you want to render custom data inside a container with pagination you can pass a TemplateRef
   * @example
   * <ng2-smart-table
   *    [paginationTemplateData]="paginationData"
   * >
   * </ng2-smart-table>
   * <ng-template #paginationData
   * >
   *    any data
   * </ng-template>
   * ----- or another option, will work only if you do not use paginationSlot
   * <ng2-smart-table
   *    [paginationTemplateData]="paginationData"
   * >
   *    <ng-container pager-content>
   *        some content will be rendered in the pager
   *    </ng-container>
   * </ng2-smart-table>
   */
  readonly paginationTemplateData = input<TemplateRef<unknown> | undefined>();

  readonly multiRowSelect = output<SmartTableRowSelectEvent<T>>();
  readonly rowClicked = output<SmartTableRowClickedEvent<T>>();
  readonly columnsSorted = output<ColumnPositionState[]>();

  readonly deleteEmitter = output<SmartTableBaseEvent<T>>();
  readonly deleteConfirm = output<SmartTableConfirmDeleteEvent<T>>();

  readonly edit = output<SmartTableBaseEvent<T>>();
  readonly editConfirm = output<SmartTableConfirmEditEvent<T>>();
  readonly editCancel = output<SmartTableBaseEvent<T>>();

  readonly create = output<SmartTableBaseEvent<T>>();
  readonly createConfirm = output<SmartTableCreateConfirm<T>>();

  readonly custom = output<SmartTableCustomEvent<T>>();

  protected readonly tableClass = computed<string>(() => {
    return this.settings().attr?.class || '';
  });
  protected readonly tableId = computed<string>(() => {
    return this.settings().attr?.id || getRandomId();
  });
  protected readonly isPagerDisplay = computed<boolean>(() => {
    const { pager } = this.settings();
    return pager ? pager.display : false;
  });
  protected readonly rowClassFunction = computed<(rowData: T) => string>(() => {
    const settings = this.settings();
    return settings.rowClassFunction ? (rowData: T) => settings.rowClassFunction!(rowData) : () => '';
  });

  protected readonly isMobileView = signal<boolean>(false);
  protected readonly tableWidthMobileBreakpoint = computed<number | undefined>(() => {
    return this.settings().tableWidthMobileBreakpoint;
  });

  grid!: Grid;

  private readonly isExternalMode = computed<boolean>(() => {
    return this.grid.settings().mode === 'external';
  });
  private resizeObserver: ResizeObserver | null = null;
  private resizeDebounceTimer: ReturnType<typeof setTimeout> | null = null;
  private paginationComponentRef: ComponentRef<PagerComponent> | null = null;

  ngOnChanges({ settings }: Record<string, SimpleChange>) {
    if (this.grid) {
      if (settings) {
        this.grid.setSettings(this.settings());
      }
    } else {
      this.initGrid();
    }
  }

  ngAfterViewInit() {
    this.setupResizeObserver();
    if (this.isPagerDisplay() && this.paginationSlot()) {
      try {
        this.paginationComponentRef = this.paginationSlot()!.createComponent(PagerComponent, {
          injector: this.injector,
        });
        this.paginationComponentRef.setInput('source', this.source());
        if (this.paginationTemplateData()) {
          this.paginationComponentRef.setInput('content', this.paginationTemplateData());
        }
      } catch {
        //do nothing
      }
    }
  }

  ngOnDestroy(): void {
    this.grid.detach();
    this.destroyResizeObserver();
    if (this.paginationComponentRef) {
      this.paginationComponentRef?.destroy();
      this.paginationComponentRef = null;
      this.paginationSlot()?.detach();
    }
  }

  protected multipleSelectRow(row: Row): void {
    this.grid.multipleSelectRow(row);
    this.emitUserSelectRow(row);
  }

  protected onSelectAllRows(): void {
    this.grid.selectAllRows(!this.grid.dataSet.isAllSelected());
    this.emitUserSelectRow(null);
  }

  protected onSelectRow(row: Row, state: boolean): void {
    this.grid.selectRow(row, state);
  }

  protected emitUserRowClicked(row: Row): void {
    this.rowClicked.emit({
      data: row ? row.rowData() : null,
      source: this.source(),
    });
  }

  protected customActionEmitted(event: SmartTableCustomEvent<T>) {
    this.custom.emit(event);
  }

  protected editEmitted(row: Row) {
    if (this.isExternalMode()) {
      this.edit.emit({
        data: row.rowData(),
        source: this.source(),
      });
      return;
    }
    row.isInEditing.set(true);
  }

  protected editConfirmed(row: Row) {
    this.grid.save(row, this.editConfirm);
  }

  protected editCanceled(row: Row) {
    this.editCancel.emit({ data: row.rowData(), source: this.source() });
  }

  protected createEmitted() {
    if (this.isExternalMode()) {
      this.create.emit({ data: this.grid.getNewRow().getNewData(), source: this.source() });
    } else {
      this.grid.createFormShown.set(true);
    }
  }

  protected createConfirmed() {
    this.grid.create(this.grid.getNewRow(), this.createConfirm);
  }

  protected deleEmitted(row: Row) {
    if (this.isExternalMode()) {
      this.deleteEmitter.emit({
        data: row.rowData(),
        source: this.source(),
      });
    } else {
      this.grid.delete(row, this.deleteConfirm);
    }
  }

  private initGrid(): void {
    this.grid = new Grid(this.source(), this.settings());
    this.grid.setColumnsSortedEmitter(this.columnsSorted);
  }

  private emitUserSelectRow(row: Row | null): void {
    this.multiRowSelect.emit({
      data: row ? row.rowData() : null,
      isSelected: row ? row.isSelected() : false,
      source: this.source(),
      selected: this.grid.dataSet.getSelectedRowsData(),
    });
  }

  private setupResizeObserver(): void {
    if (typeof ResizeObserver === 'undefined' || !this.tableWidthMobileBreakpoint()) {
      return;
    }

    this.resizeObserver = new ResizeObserver((entries) => {
      if (this.resizeDebounceTimer) {
        clearTimeout(this.resizeDebounceTimer);
      }

      this.resizeDebounceTimer = setTimeout(() => {
        this.ngZone.run(() => {
          for (const entry of entries) {
            const breakpoint = this.tableWidthMobileBreakpoint();
            if (breakpoint) {
              const containerWidth = entry.contentRect.width;
              this.isMobileView.set(containerWidth < breakpoint);
            }
          }
        });
      }, 20);
    });

    const hostElement = this.elementRef?.nativeElement;
    if (hostElement) {
      this.resizeObserver.observe(hostElement);
    }
  }

  private destroyResizeObserver(): void {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
      this.resizeObserver = null;
    }

    if (this.resizeDebounceTimer) {
      clearTimeout(this.resizeDebounceTimer);
      this.resizeDebounceTimer = null;
    }
  }
}
