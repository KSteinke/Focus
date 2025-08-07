import { Component  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Quote } from './quote/quote';
import { MainTimer } from './main-timer/main-timer';
import { SoundButton } from '../../common/buttons/sound-button/sound-button';
import { OptionsButton } from '../../common/buttons/options-button/options-button';
import { FullScreenButton } from '../../common/buttons/full-screen-button/full-screen-button';
import { OptionsDashboard } from './options-dashboard/options-dashboard';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-dashboard',
  imports: [RouterOutlet, Quote, MainTimer, SoundButton, OptionsButton, FullScreenButton, OptionsDashboard, CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {
  private _isOptionsDashboardOpen: Boolean = false;

  get IsOptionsDashboardOpen() : Boolean
  {
    return this._isOptionsDashboardOpen;
  }

  set IsOptionsDashboardOpen(value: Boolean)
  {
    this._isOptionsDashboardOpen = value;
  }
  

  async optionsButtonClicked(event: MouseEvent)
  {
    this.IsOptionsDashboardOpen = this.IsOptionsDashboardOpen ? false : true;
  }

  async optionsCloseButtonClicked(event: MouseEvent)
  {
    this.IsOptionsDashboardOpen = false;
    console.log("Dashboard")
  }

}