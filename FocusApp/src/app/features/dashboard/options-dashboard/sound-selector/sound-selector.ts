import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SoundElement } from './sound-element/sound-element';
import { SoundService } from '../../../../core/services/sounds_service/sound-service';
import { Sound } from '../../../../core/services/sounds_service/sound-service';

@Component({
  standalone: true,
  selector: 'app-sound-selector',
  imports: [CommonModule, SoundElement],
  templateUrl: './sound-selector.html',
  styleUrl: './sound-selector.scss'
})
export class SoundSelector {

  constructor(private soundService: SoundService)
  {
    
  }

  public Sounds: Sound[] = [];

  ngOnInit()
  {
    this.Sounds = this.soundService.Sounds;
  }

}


