import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BaseEditorComponent } from "ng2-smart-table";

@Component({
  selector: "app-custom-editor",
  imports: [FormsModule],
  standalone: true,
  templateUrl: "./custom-editor.component.html",
  styleUrl: "./custom-editor.component.css",
})
export class CustomEditorComponent extends BaseEditorComponent {
  onInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.cell().newValue = target.value
  }
}
