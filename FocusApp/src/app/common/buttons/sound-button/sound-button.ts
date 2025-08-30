import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EventEmitter, Output } from '@angular/core';
import { SoundService } from '../../../core/services/sounds_service/sound-service';

@Component({
  selector: 'app-sound-button',
  imports: [CommonModule, FormsModule],
  templateUrl: './sound-button.html',
  styleUrl: './sound-button.scss'
})
export class SoundButton {

    constructor(public soundService: SoundService, private cd: ChangeDetectorRef){
      
  }

  ngOnInit()
  {
      this.soundService.GlobalMute.subscribe(data =>
      {
        this.isMuted = data;
      }
    );
    this.soundService.GloblaVolumeChanged.subscribe(volume => {
      this._volume = volume * 100;
    })
  }

  isMuted = true;
  showTooltip = false;

  private _volume = 50;

  get volume(): number {
    return this._volume;
  }

  set volume(value: number) {
    this._volume = value;

    // jeśli suwak ustawiony na 0 → mute
    this.isMuted = value === 0;
    if(this.isMuted === true)
    {
      this.soundService.MuteAllSounds();
    }
    this.soundService.GlobalVolume = value;
  }

  toggleMute() {
    if (this.isMuted) {
      this.soundService.UnMuteAllSounds();
    } else {
      this.soundService.MuteAllSounds();
    }
  }



tooltipTimeout: any;

onSliderClick() {
  if (!this.soundService.IsAnySoundPlaying() && !this.showTooltip) {
    this.showTooltip = true;

    this.tooltipTimeout = setTimeout(() => {
      this.showTooltip = false;
      this.cd.detectChanges();
    }, 3000);
  }
}
}
