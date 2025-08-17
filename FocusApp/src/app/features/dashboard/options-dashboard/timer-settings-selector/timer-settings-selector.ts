import { Component } from '@angular/core';
import { TimeFormat, TimeFormatElement } from './time-format-element/time-format-element';
import { PomodoroTimerSetElement, PomodoroTimerSetElementModel } from './pomodoro-timer-set-element/pomodoro-timer-set-element';
import { PomodoroTimerType } from '../../../../core/services/pomodoro-timer-service/pomodoro-timer-service';

@Component({
  selector: 'app-timer-settings-selector',
  imports: [TimeFormatElement, PomodoroTimerSetElement],
  templateUrl: './timer-settings-selector.html',
  styleUrl: './timer-settings-selector.scss'
})
export class TimerSettingsSelector {
  public TimeFormatElements : TimeFormat[] = [
    {
      BackgroundImage: "assets/timer_images/12h.png",
      Id: "12h",
      Label: "Clock 12h format"
    },
    {
      BackgroundImage: "assets/timer_images/24h.png",
      Id: "24h",
      Label: "Clock 24h format"
    }
  ];

  public PomodoroTimerSetElements : PomodoroTimerSetElementModel[] = [
    {
      Id: PomodoroTimerType.Work,
      Label: "Work period time set:"
    },
    {
      Id: PomodoroTimerType.Break,
      Label: "Break period time set:"
    }
  ]
   
}
