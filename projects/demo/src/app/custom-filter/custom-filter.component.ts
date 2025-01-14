import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DefaultFilter } from 'ng2-smart-table';

@Component({
  selector: 'app-custom-filter',
  templateUrl: './custom-filter.component.html',
  styleUrl: './custom-filter.component.css',
  standalone: true,
  imports: [FormsModule]
})
export class CustomFilterComponent extends DefaultFilter  {

}
