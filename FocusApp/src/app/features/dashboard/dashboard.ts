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
}