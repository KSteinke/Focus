import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pomodoro-button',
  imports: [],
  templateUrl: './pomodoro-button.html',
  styleUrl: './pomodoro-button.scss'
})
export class PomodoroButton {

  @Output() clickEvent = new EventEmitter(true);

  togleTimer()
  {
    this.clickEvent.emit();
  }
}
