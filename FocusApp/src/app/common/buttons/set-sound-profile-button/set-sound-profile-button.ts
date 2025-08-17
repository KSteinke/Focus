import { Component, Input } from '@angular/core';
import { SoundProfile } from '../../../core/services/sound-profiles-service/sound-profile-service';

@Component({
  selector: 'app-set-sound-profile-button',
  imports: [],
  templateUrl: './set-sound-profile-button.html',
  styleUrl: './set-sound-profile-button.scss'
})
export class SetSoundProfileButton {
 @Input() SoundProfile!: SoundProfile;

 public ButtonClicked()
 {
  
 }
}
