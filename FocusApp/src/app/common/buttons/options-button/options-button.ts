import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-options-button',
  imports: [],
  templateUrl: './options-button.html',
  styleUrl: './options-button.scss'
})
export class OptionsButton {

   @Output() clickEvent = new EventEmitter(true);

    async optionsButtonClicked() {
      this.clickEvent.emit();
    }
}
