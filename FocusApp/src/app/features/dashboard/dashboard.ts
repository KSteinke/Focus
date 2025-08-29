import { Component, signal  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Quote } from './quote/quote';
import { MainTimer } from './main-timer/main-timer';
import { SoundButton } from '../../common/buttons/sound-button/sound-button';
import { OptionsButton } from '../../common/buttons/options-button/options-button';
import { FullScreenButton } from '../../common/buttons/full-screen-button/full-screen-button';
import { OptionsDashboard } from './options-dashboard/options-dashboard';
import { CommonModule, NgStyle } from '@angular/common';
import { PomodoroButton } from '../../common/buttons/pomodoro-button/pomodoro-button';
import { PomodoroTimer } from './pomodoro-timer/pomodoro-timer';
import { Background, BackgroundService } from '../../core/services/background_service/background-service';
import { Subscription } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-dashboard',
  imports: [RouterOutlet, Quote, MainTimer, SoundButton, OptionsButton, FullScreenButton, OptionsDashboard, CommonModule, PomodoroButton, PomodoroTimer, NgStyle],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {
  private _isOptionsDashboardOpen: Boolean = false;
  private currentTimer : TimerType = TimerType.Normal;

  public backgroundSubscription!: Subscription;
  
    protected readonly title = signal('FocusApp');
    background!: Background;

  constructor(private backgroundService: BackgroundService){}

  ngOnInit()
  {
      this.backgroundSubscription = this.backgroundService.currentBackground.subscribe(data => {
      this.background = data;
    });
  }

  ngOnDestroy() {
    this.backgroundSubscription.unsubscribe();
  }

  private set CurrentTimer(value: TimerType)
  {
    this.currentTimer = value;
  }

  public get CurrentTimer() : TimerType
  {
    return this.currentTimer;
  }

  public TimerType = TimerType;

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
  }

  async pomodoroButtonClicked(event: MouseEvent)
  {
    this.CurrentTimer === TimerType.Normal ? this.CurrentTimer = TimerType.Pomodoro : this.CurrentTimer = TimerType.Normal;
  }

}

export enum TimerType
{
  Normal,
  Pomodoro
}