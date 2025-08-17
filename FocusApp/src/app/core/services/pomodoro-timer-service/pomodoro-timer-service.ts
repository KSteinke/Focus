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
    this.getPomodoroTimerPeriodsFromLocalStorage();
    console.log(this.pomodoroTimerPeriods[PomodoroTimerType.Work]);
    console.log(this.pomodoroTimerPeriods[PomodoroTimerType.Break]);
    this.seconds.next(this.pomodoroTimerPeriods[this.currentPomodoroTimerType]);
    this.timerIsStarted.next(false);
  }

  private currentPomodoroTimerType : PomodoroTimerType = PomodoroTimerType.Work;
  public get CurrentPomodoroTimerType(): PomodoroTimerType
  {
    return this.currentPomodoroTimerType;
  }
  

  private pomodoroTimerPeriods : Record<PomodoroTimerType, number> = {
    [PomodoroTimerType.Work] : 2700,
    [PomodoroTimerType.Break] : 300
  };

  public get PomodoroTimerPeriods ()
  {
    return this.pomodoroTimerPeriods;
  }

  private seconds = new BehaviorSubject<number>(this.pomodoroTimerPeriods[this.currentPomodoroTimerType]);
  Seconds = this.seconds.asObservable();
  private timerIsStarted = new BehaviorSubject<boolean>(false);
  public TimerIsStarted = this.timerIsStarted.asObservable();

  private intervalId: any;
  private getPomodoroTimerPeriodsFromLocalStorage()
  {
    this.getPomodoroTimerPeriodFromLocalStorage(PomodoroTimerType.Work);
        this.getPomodoroTimerPeriodFromLocalStorage(PomodoroTimerType.Break);

  }

  private getPomodoroTimerPeriodFromLocalStorage(pomodoroTimerType: PomodoroTimerType)
  {
    let period: number | null = this.localStorageService.getItem(pomodoroTimerType.toString());
    if(period != null)
      this.pomodoroTimerPeriods[pomodoroTimerType] = period;
  }

  ngOnInit() {

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
    this.seconds.next(this.pomodoroTimerPeriods[this.currentPomodoroTimerType]);
  }

  public TogleTimerType()
  {
    this.currentPomodoroTimerType === PomodoroTimerType.Work ? this.currentPomodoroTimerType = PomodoroTimerType.Break : this.currentPomodoroTimerType = PomodoroTimerType.Work;
    this.ResetTimer();
  }

  public SetPomodoroTimersTime(pomodoroTimerType: PomodoroTimerType, timePeriodValueInSec: number)
  {
    this.pomodoroTimerPeriods[pomodoroTimerType] = timePeriodValueInSec;
    this.StopTimer();
    this.ResetTimer();
    this.localStorageService.setItem(pomodoroTimerType.toString(), timePeriodValueInSec);
  }

}


export enum PomodoroTimerType{
  Work,
  Break
}
