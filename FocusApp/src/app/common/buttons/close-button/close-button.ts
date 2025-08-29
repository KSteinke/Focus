import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-close-button',
  imports: [],
  templateUrl: './close-button.html',
  styleUrl: './close-button.scss'
})
export class CloseButton {
  @Output() clickEvent = new EventEmitter(true);

  async buttonClicked() {
    this.clickEvent.emit();
  }
}
