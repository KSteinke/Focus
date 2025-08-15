import { ApplicationRef, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PomodoroTimerService {

  constructor()
  {

  }

  private WorkPeriodInSeconds : number = 12; 
  private seconds = new BehaviorSubject<number>(this.WorkPeriodInSeconds);
  Seconds = this.seconds.asObservable();
  private timerIsStarted = new BehaviorSubject<boolean>(false);
  public TimerIsStarted = this.timerIsStarted.asObservable();

  private intervalId: any;


  ngOnInit() {
    this.seconds.next(this.WorkPeriodInSeconds);
    this.timerIsStarted.next(false);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  public StartTimer()
  {
    if(this.seconds.value <= 0)
    {
      this.ResetTimer();
    }
    
    if(!this.timerIsStarted.value)
    {
      this.timerIsStarted.next(true);

      this.intervalId = setInterval(() => {
        if(this.seconds.value <= 0) {
          this.StopTimer();
        } else {
          this.seconds.next(this.seconds.value - 1);
        }
      }, 1000);
    }
  }

  public StopTimer()
  {
    this.timerIsStarted.next(false);
    console.log("Timer is stopped")
    clearInterval(this.intervalId);
  }

  public ResetTimer()
  {
    this.seconds.next(this.WorkPeriodInSeconds);
  }

}
