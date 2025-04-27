import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BaseFilterComponent } from 'ng2-smart-table';

@Component({
  selector: 'ngx-custom-filter',
  templateUrl: './custom-filter.component.html',
  styleUrl: './custom-filter.component.css',
  imports: [FormsModule, ReactiveFormsModule],
})
export class CustomFilterComponent extends BaseFilterComponent {}
