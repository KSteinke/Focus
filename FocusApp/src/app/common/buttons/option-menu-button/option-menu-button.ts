import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-option-menu-button',
  imports: [],
  templateUrl: './option-menu-button.html',
  styleUrl: './option-menu-button.scss'
})
export class OptionMenuButton {

  @Input() Name: string = "";
  @Input() IconPath: string = "";

  @Output() clickEvent = new EventEmitter<string>(true);

  click()
  {
    this.clickEvent.emit(this.Name);
  }

}
