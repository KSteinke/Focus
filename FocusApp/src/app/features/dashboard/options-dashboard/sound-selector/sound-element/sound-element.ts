import { Component, Input } from '@angular/core';
import { Sound, SoundService } from '../../../../../core/services/sounds_service/sound-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-sound-element',
  imports: [CommonModule, FormsModule],
  templateUrl: './sound-element.html',
  styleUrl: './sound-element.scss'
})
export class SoundElement {
  @Input() Sound!: Sound;
  constructor(private soundService: SoundService) {}

  public volume! : number;

  togleSound()
  {
    this.soundService.TogleSound(this.Sound);
  }

  ngOnInit()
  {
    this.volume = this.Sound.Volume * 100;
  }

  onVolumeChange()
  {
    this.soundService.SetSoundVolume(this.Sound, this.volume);
  }
}
