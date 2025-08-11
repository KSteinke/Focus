import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ConfigService } from '../../../../core/services/config_service/config-service';
import { SoundElement } from './sound-element/sound-element';

@Component({
  standalone: true,
  selector: 'app-sound-selector',
  imports: [CommonModule, SoundElement],
  templateUrl: './sound-selector.html',
  styleUrl: './sound-selector.scss'
})
export class SoundSelector {

  constructor(private configService: ConfigService)
  {
    
  }

  public Sounds: Sound[] = [];

  ngOnInit()
  {
    this.Sounds = this.configService.soundServiceConfig.get("sounds");
  }

}

export interface Sound
{
   id: string,
   name: string,
   path: string
}
