import { Component, Input } from '@angular/core';
import { Sound, SoundService } from '../../../../../core/services/sounds_service/sound-service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-sound-element',
  imports: [CommonModule],
  templateUrl: './sound-element.html',
  styleUrl: './sound-element.scss'
})
export class SoundElement {
  @Input() Sound!: Sound;
  constructor(private soundService: SoundService) {}

  togleSound()
  {
    this.soundService.TogleSound(this.Sound);
  }

  ngOnInit()
  {
    //this.soundService.PlaySound(this.Sound);
  }
}
