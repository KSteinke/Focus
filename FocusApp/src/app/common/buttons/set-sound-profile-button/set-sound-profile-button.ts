import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SoundProfile, SoundProfileService } from '../../../core/services/sound-profiles-service/sound-profile-service';

@Component({
  selector: 'app-set-sound-profile-button',
  imports: [],
  templateUrl: './set-sound-profile-button.html',
  styleUrl: './set-sound-profile-button.scss'
})
export class SetSoundProfileButton {
  @Input() SoundProfile!: SoundProfile;

  constructor(private soundProfileService: SoundProfileService) {}
 public ButtonClicked()
 {
    this.soundProfileService.PlaySoundProfile(this.SoundProfile);
 }
}
