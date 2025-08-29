import { Component, Output, EventEmitter, Input } from '@angular/core';
import { TimerType } from '../../../features/dashboard/dashboard';

@Component({
  selector: 'app-pomodoro-button',
  imports: [],
  templateUrl: './pomodoro-button.html',
  styleUrl: './pomodoro-button.scss'
})
export class PomodoroButton {

  @Output() clickEvent = new EventEmitter(true);
  public IconPath : string = "";

  @Input() set TimerType(value: TimerType) {
  this.timerType = value;
  this.IconPath = this.getIconPath(value);
}

private timerType!: TimerType;

private getIconPath(type: TimerType): string {
  switch (type) {
    case TimerType.Normal: return "M128 96C128 78.3 142.3 64 160 64L480 64C497.7 64 512 78.3 512 96C512 113.7 497.7 128 480 128L480 139C480 181.4 463.1 222.1 433.1 252.1L365.2 320L433.1 387.9C463.1 417.9 480 458.6 480 501L480 512C497.7 512 512 526.3 512 544C512 561.7 497.7 576 480 576L160 576C142.3 576 128 561.7 128 544C128 526.3 142.3 512 160 512L160 501C160 458.6 176.9 417.9 206.9 387.9L274.8 320L206.9 252.1C176.9 222.1 160 181.4 160 139L160 128C142.3 128 128 113.7 128 96zM224 128L224 139C224 164.5 234.1 188.9 252.1 206.9L320 274.8L387.9 206.9C405.9 188.9 416 164.5 416 139L416 128L224 128zM224 512L416 512L416 501C416 475.5 405.9 451.1 387.9 433.1L320 365.2L252.1 433.1C234.1 451.1 224 475.5 224 501L224 512z";
    case TimerType.Pomodoro: return "M320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320C64 178.6 178.6 64 320 64zM296 184L296 320C296 328 300 335.5 306.7 340L402.7 404C413.7 411.4 428.6 408.4 436 397.3C443.4 386.2 440.4 371.4 429.3 364L344 307.2L344 184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184z";
    default: return 'assets/icons/default.svg';
  }
}


  togleTimer()
  {
    this.clickEvent.emit();
  }
}
