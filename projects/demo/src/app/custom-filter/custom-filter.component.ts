import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbxInputSelectComponent, NbxSelectOption } from 'nbx-inputs';
import { BaseFilterComponent } from 'ng2-smart-table';
@Component({
  selector: 'ngx-custom-filter',
  templateUrl: './custom-filter.component.html',
  styleUrl: './custom-filter.component.css',
  imports: [FormsModule, ReactiveFormsModule, NbxInputSelectComponent],
})
export class CustomFilterComponent extends BaseFilterComponent {
  options = Array.from({ length: 100 }).map(
    (_, index) => ({ value: index, title: index }) as unknown as NbxSelectOption,
  );
}
