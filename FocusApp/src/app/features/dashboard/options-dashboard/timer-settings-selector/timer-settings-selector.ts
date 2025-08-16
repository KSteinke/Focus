import { Component } from '@angular/core';
import { TimeFormat, TimeFormatElement } from './time-format-element/time-format-element';

@Component({
  selector: 'app-timer-settings-selector',
  imports: [TimeFormatElement],
  templateUrl: './timer-settings-selector.html',
  styleUrl: './timer-settings-selector.scss'
})
export class TimerSettingsSelector {
  public TimeFormatElements : TimeFormat[] = [
    {
      BackgroundImage: "assets/timer_images/12h.png",
      Id: "12h"
    },
    {
      BackgroundImage: "assets/timer_images/24h.png",
      Id: "24h"
    }
  ]
}
