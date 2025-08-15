import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { TimerButton } from '../../../common/buttons/timer-button/timer-button';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-pomodoro-timer',
  imports: [TimerButton, CommonModule],
  templateUrl: './pomodoro-timer.html',
  styleUrl: './pomodoro-timer.scss'
})

export class PomodoroTimer implements OnInit, OnDestroy {

  constructor(private cd : ChangeDetectorRef) {}
  seconds: number = 0;
  private intervalId: any;
  private WorkPeriodInSeconds : number = 12; 
  private timerIsStarted : boolean = false;
  public get TimerIsStarted()
  {
    return this.timerIsStarted;
  }

  public Button = [
    {
      "name": "StartButton",
      "path": "M187.2 100.9C174.8 94.1 159.8 94.4 147.6 101.6C135.4 108.8 128 121.9 128 136L128 504C128 518.1 135.5 531.2 147.6 538.4C159.7 545.6 174.8 545.9 187.2 539.1L523.2 355.1C536 348.1 544 334.6 544 320C544 305.4 536 291.9 523.2 284.9L187.2 100.9z"
    },
    {
      "name": "StopButton",
      "path": "M176 96C149.5 96 128 117.5 128 144L128 496C128 522.5 149.5 544 176 544L240 544C266.5 544 288 522.5 288 496L288 144C288 117.5 266.5 96 240 96L176 96zM400 96C373.5 96 352 117.5 352 144L352 496C352 522.5 373.5 544 400 544L464 544C490.5 544 512 522.5 512 496L512 144C512 117.5 490.5 96 464 96L400 96z"
    },
    {
      "name": "RestartButton",
      "path": "M88 256L232 256C241.7 256 250.5 250.2 254.2 241.2C257.9 232.2 255.9 221.9 249 215L202.3 168.3C277.6 109.7 386.6 115 455.8 184.2C530.8 259.2 530.8 380.7 455.8 455.7C380.8 530.7 259.3 530.7 184.3 455.7C174.1 445.5 165.3 434.4 157.9 422.7C148.4 407.8 128.6 403.4 113.7 412.9C98.8 422.4 94.4 442.2 103.9 457.1C113.7 472.7 125.4 487.5 139 501C239 601 401 601 501 501C601 401 601 239 501 139C406.8 44.7 257.3 39.3 156.7 122.8L105 71C98.1 64.2 87.8 62.1 78.8 65.8C69.8 69.5 64 78.3 64 88L64 232C64 245.3 74.7 256 88 256z"
    }
  ]

  ngOnInit() {
    this.seconds = this.WorkPeriodInSeconds;
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  startTimer() {
    
    if(this.seconds <= 0)
    {
      this.resetTimer();
    }
    
    if(!this.timerIsStarted)
    {
        this.timerIsStarted = true;
        this.intervalId = setInterval(() => {
        
        if(this.seconds <= 0)
        {
          this.stopTimer();
        }
        else{
          this.seconds--;
        }

        this.cd.detectChanges();
      }, 1000);
    }
  }

  stopTimer() {
    this.timerIsStarted = false;
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
