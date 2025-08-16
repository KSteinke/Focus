import { ApplicationRef, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LocalStorageService } from '../local_storage_service/local-storage-service';

@Injectable({
  providedIn: 'root'
})
export class PomodoroTimerService {

  constructor(private localStorageService: LocalStorageService)
  {
    
  }

  private CurrentPomodoroTimerType : PomodoroTimerType = PomodoroTimerType.Work;

  private PomodoroTimerPeriods : Record<PomodoroTimerType, number> = {
    [PomodoroTimerType.Work] : 1234,
    [PomodoroTimerType.Break] : 300
  };

  private seconds = new BehaviorSubject<number>(this.PomodoroTimerPeriods[this.CurrentPomodoroTimerType]);
  Seconds = this.seconds.asObservable();
  private timerIsStarted = new BehaviorSubject<boolean>(false);
  public TimerIsStarted = this.timerIsStarted.asObservable();

  private intervalId: any;


  ngOnInit() {
    this.seconds.next(this.PomodoroTimerPeriods[this.CurrentPomodoroTimerType]);
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
    clearInterval(this.intervalId);
  }

  public ResetTimer()
  {
    this.seconds.next(this.PomodoroTimerPeriods[this.CurrentPomodoroTimerType]);
  }

  public TogleTimerType()
  {
    this.CurrentPomodoroTimerType === PomodoroTimerType.Work ? this.CurrentPomodoroTimerType = PomodoroTimerType.Break : this.CurrentPomodoroTimerType = PomodoroTimerType.Work;
    this.ResetTimer();
  }

}


export enum PomodoroTimerType{
  Work,
  Break
}
