import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-text-button',
  imports: [],
  templateUrl: './text-button.html',
  styleUrl: './text-button.scss'
})
export class TextButton {
  @Input() public IconPath: String = "";
  @Output() clickEvent = new EventEmitter(true);

  buttonCicked()
  {
    this.clickEvent.emit();
  }
}
