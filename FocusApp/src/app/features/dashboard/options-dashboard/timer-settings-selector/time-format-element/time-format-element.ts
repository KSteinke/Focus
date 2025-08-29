import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MainTimerSerivice } from '../../../../../core/services/main-timer-service/main-timer-serivice';

@Component({
  selector: 'app-time-format-element',
  imports: [CommonModule],
  templateUrl: './time-format-element.html',
  styleUrl: './time-format-element.scss'
})
export class TimeFormatElement {
  constructor(private mainTimerService: MainTimerSerivice)
  {

  }
 @Input() TimeFormat! : TimeFormat;
 public TimeFormatChosen()
 {
    this.mainTimerService.SetTimeFormat(this.TimeFormat.Id);
 }
}

export interface TimeFormat
{
  BackgroundImage : string;
  Id : string;
  Label: string;
}
