import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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

  constructor(private soudService: SoundService){

  }

  isMuted = true;

  private _temp_volume = 50;
  private _volume = 50;

  get volume(): number {
    return this._volume;
  }

  set volume(value: number) {
    this._volume = value;

    // jeśli suwak ustawiony na 0 → mute
    this.isMuted = value === 0;
    this.soudService.setVolume(value);
  }

  toggleMute() {
    if (this.isMuted) {
      this.volume = this._temp_volume; // odcisz i ustaw np. domyślną głośność
    } else {
      this.volume = 0;
    }
  }


  onVolumeChange() {
    this._temp_volume = this.volume;
  }
}
