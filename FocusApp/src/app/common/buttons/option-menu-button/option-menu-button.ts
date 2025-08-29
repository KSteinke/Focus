import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-option-menu-button',
  imports: [CommonModule],
  templateUrl: './option-menu-button.html',
  styleUrl: './option-menu-button.scss'
})
export class OptionMenuButton {

  @Input() Name: string = "";
  @Input() IconPath: string = "";
  @Input() selected = false;

  @Output() clickEvent = new EventEmitter<string>(true);

  click()
  {
    this.clickEvent.emit(this.Name);
  }

}
