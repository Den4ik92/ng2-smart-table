import { Component, input } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';

@Component({
  selector: 'app-custom-viewer',
  imports: [],
  templateUrl: './custom-viewer.component.html',
  styleUrl: './custom-viewer.component.css',
})
export class CustomViewerComponent implements ViewCell {
  value = input<string>();
  rowData = input<any>();
}
