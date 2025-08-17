import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-sound-profile-button',
  imports: [],
  templateUrl: './add-sound-profile-button.html',
  styleUrl: './add-sound-profile-button.scss'
})
export class AddSoundProfileButton {
  @Output() clickEvent = new EventEmitter(true);

  buttonCicked()
  {
    this.clickEvent.emit();
  }
}
