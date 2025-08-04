import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SoundService {
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

    setVolume(volume: number)
    {
      if(this.plays == false)
      {
        this.playSound();
        this.plays = true;
      }
      this.audio.volume = volume / 100;
    }
}
