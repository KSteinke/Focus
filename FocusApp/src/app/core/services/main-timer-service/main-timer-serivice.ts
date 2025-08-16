import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainTimerSerivice {

  private timeFormatIs24hSubject = new BehaviorSubject<boolean>(false);
  public TimeFormatIs24hObservable = this.timeFormatIs24hSubject.asObservable();

  ngOnInit()
  {
    this.timeFormatIs24hSubject.next(false);
  }

  public SetTimeFormat(format : string)
  {
    format === "12h" ? this.timeFormatIs24hSubject.next(false) : this.timeFormatIs24hSubject.next(true);
  }
  
}
