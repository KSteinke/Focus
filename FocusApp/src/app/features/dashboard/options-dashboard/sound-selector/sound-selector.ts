import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { SoundElement } from './sound-element/sound-element';
import { SoundService } from '../../../../core/services/sounds_service/sound-service';
import { Sound } from '../../../../core/services/sounds_service/sound-service';
import { TextButton, TextButtonModel } from '../../../../common/buttons/text-button/text-button';
import { AddSoundProfileButton } from '../../../../common/buttons/add-sound-profile-button/add-sound-profile-button';
import { SoundProfile, SoundProfileService } from '../../../../core/services/sound-profiles-service/sound-profile-service';
import { Subscription } from 'rxjs';
import { SetSoundProfileButton } from '../../../../common/buttons/set-sound-profile-button/set-sound-profile-button';

@Component({
  standalone: true,
  selector: 'app-sound-selector',
  imports: [CommonModule, SoundElement, TextButton, AddSoundProfileButton, SetSoundProfileButton],
  templateUrl: './sound-selector.html',
  styleUrl: './sound-selector.scss'
})
export class SoundSelector {

  constructor(private soundService: SoundService, private soundProfileService: SoundProfileService, private cd : ChangeDetectorRef)
  {
    
  }

  public Sounds: Sound[] = [];
  public ResetSoundTextButtonModel : TextButtonModel = {
    Text: "Reset all sounds",
    IconPath: "M88 256L232 256C241.7 256 250.5 250.2 254.2 241.2C257.9 232.2 255.9 221.9 249 215L202.3 168.3C277.6 109.7 386.6 115 455.8 184.2C530.8 259.2 530.8 380.7 455.8 455.7C380.8 530.7 259.3 530.7 184.3 455.7C174.1 445.5 165.3 434.4 157.9 422.7C148.4 407.8 128.6 403.4 113.7 412.9C98.8 422.4 94.4 442.2 103.9 457.1C113.7 472.7 125.4 487.5 139 501C239 601 401 601 501 501C601 401 601 239 501 139C406.8 44.7 257.3 39.3 156.7 122.8L105 71C98.1 64.2 87.8 62.1 78.8 65.8C69.8 69.5 64 78.3 64 88L64 232C64 245.3 74.7 256 88 256z"
  }

  public SoundProfilesSubscription! : Subscription;
  public SoundProfiles!: SoundProfile[];
  

  ngOnInit()
  {
    this.Sounds = this.soundService.Sounds;
    this.SoundProfilesSubscription = this.soundProfileService.SoundProfileList.subscribe(soundProfiles => {
      this.SoundProfiles = soundProfiles;
      this.cd.detectChanges();
    })
  }

  public resetSounds()
  {
    this.soundService.ResetSounds();
  }

  public saveSoundProfile()
  {
    this.soundProfileService.SaveSoundProfile();
  }
}


