import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { TimerButton } from '../../../common/buttons/timer-button/timer-button';

@Component({
  standalone: true,
  selector: 'app-pomodoro-timer',
  imports: [TimerButton],
  templateUrl: './pomodoro-timer.html',
  styleUrl: './pomodoro-timer.scss'
})

export class PomodoroTimer implements OnInit, OnDestroy {

  constructor(private cd : ChangeDetectorRef) {}
  seconds: number = 0;
  private intervalId: any;
  private WorkPeriodInSeconds : number = 5735; //REMOVE - 1h 35m 35s
  private TimerIsStarted : boolean = false;

  ngOnInit() {
    //this.startTimer();
    this.seconds = this.WorkPeriodInSeconds;
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  startTimer() {
    console.log("timer start")
    if(!this.TimerIsStarted)
    {
        this.TimerIsStarted = true;
        this.intervalId = setInterval(() => {
        this.seconds--;
        if(this.seconds <= 0)
        {
          this.stopTimer();
        }

        this.cd.detectChanges();
      }, 1000);
    }
  }

  stopTimer() {
    this.TimerIsStarted = false;
    clearInterval(this.intervalId);
  }

  resetTimer() {
    this.seconds = this.WorkPeriodInSeconds;
  }

  // getter do formatu hh:mm:ss
  get timeString(): string {
    const hrs = Math.floor(this.seconds / 3600);
    const mins = Math.floor((this.seconds % 3600) / 60);
    const secs = this.seconds % 60;

    // dodajemy zera wiodące
    const hh = String(hrs).padStart(2, '0');
    const mm = String(mins).padStart(2, '0');
    const ss = String(secs).padStart(2, '0');

    return `${mm}:${ss}`;
  }
}
