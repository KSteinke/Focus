import { Component, Input } from '@angular/core';
import { Sound, SoundService } from '../../../../../core/services/sounds_service/sound-service';
@Component({
  selector: 'app-sound-element',
  imports: [],
  templateUrl: './sound-element.html',
  styleUrl: './sound-element.scss'
})
export class SoundElement {
  @Input() Sound!: Sound;
  constructor(private soundService: SoundService) {}


  ngOnInit()
  {
    this.soundService.PlaySound(this.Sound);
  }
}
