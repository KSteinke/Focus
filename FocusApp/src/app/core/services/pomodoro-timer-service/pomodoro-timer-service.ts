import { ApplicationRef, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LocalStorageService } from '../local_storage_service/local-storage-service';
import { SoundService } from '../sounds_service/sound-service';

@Injectable({
  providedIn: 'root'
})
export class PomodoroTimerService {

  constructor(private localStorageService: LocalStorageService, private soundService : SoundService)
  {
    
  }

  private currentPomodoroTimerType : PomodoroTimerType = PomodoroTimerType.Work;
  public get CurrentPomodoroTimerType(): PomodoroTimerType
  {
    return this.currentPomodoroTimerType;
  }
  

  private PomodoroTimerPeriods : Record<PomodoroTimerType, number> = {
    [PomodoroTimerType.Work] : 12,
    [PomodoroTimerType.Break] : 15
  };

  private seconds = new BehaviorSubject<number>(this.PomodoroTimerPeriods[this.currentPomodoroTimerType]);
  Seconds = this.seconds.asObservable();
  private timerIsStarted = new BehaviorSubject<boolean>(false);
  public TimerIsStarted = this.timerIsStarted.asObservable();

  private intervalId: any;


  ngOnInit() {
    this.seconds.next(this.PomodoroTimerPeriods[this.currentPomodoroTimerType]);
    this.timerIsStarted.next(false);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  public StartTimer()
  {
    this.soundService.UnMuteAllSounds();
    if(this.seconds.value <= 0)
    {
      this.ResetTimer();
    }
    
    if(!this.timerIsStarted.value)
    {
      this.timerIsStarted.next(true);

      this.intervalId = setInterval(() => {
        if(this.seconds.value <= 0) {
          this.TogleTimerType();
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
    this.soundService.MuteAllSounds();
  }

  public ResetTimer()
  {
    this.seconds.next(this.PomodoroTimerPeriods[this.currentPomodoroTimerType]);
  }

  public TogleTimerType()
  {
    this.currentPomodoroTimerType === PomodoroTimerType.Work ? this.currentPomodoroTimerType = PomodoroTimerType.Break : this.currentPomodoroTimerType = PomodoroTimerType.Work;
    this.ResetTimer();
  }

}


export enum PomodoroTimerType{
  Work,
  Break
}
