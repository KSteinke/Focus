import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Quote } from './quote/quote';
import { MainTimer } from './main-timer/main-timer';
import { SoundButton } from '../../common/buttons/sound-button/sound-button';
import { OptionsButton } from '../../common/buttons/options-button/options-button';

@Component({
  standalone: true,
  selector: 'app-dashboard',
  imports: [RouterOutlet, Quote, MainTimer, SoundButton, OptionsButton],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {
  backgroundUrl: string = 'assets/Tree.png';
  audio = new Audio('assets/sounds/50-White-Noise-60min.mp3');
  plays = false;
  constructor()
  {
    this.playSound();
  }

  playSound() {
    this.audio.volume = 0;  // ustaw głośność przed odtworzeniem
    this.audio.currentTime = 0;
    this.audio.loop = true;
    this.audio.play();
  }

  handleVolumeChange(newVolume: number) {
    if(this.plays == false)
    {
      this.playSound();
      this.plays = true;
    }
    this.audio.volume = newVolume / 100;
    // tu możesz np. sterować odtwarzaniem dźwięku, zapisywać w serwisie itp.
  }
}