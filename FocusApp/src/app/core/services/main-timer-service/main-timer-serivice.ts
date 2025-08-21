import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LocalStorageService } from '../local_storage_service/local-storage-service';

@Injectable({
  providedIn: 'root'
})
export class MainTimerSerivice {
  constructor(private localStorageService:LocalStorageService)
  {
    let timeFormatIs24h : boolean | null = this.localStorageService.getItem(this.timeFormatKeyValue);
    timeFormatIs24h != null ? this.timeFormatIs24hSubject.next(timeFormatIs24h) : this.timeFormatIs24hSubject.next(false);
  }
  private timeFormatKeyValue = "timeFormat";

  private timeFormatIs24hSubject = new BehaviorSubject<boolean>(false);
  public TimeFormatIs24hObservable = this.timeFormatIs24hSubject.asObservable();

  public SetTimeFormat(format : string)
  {
    let timeFormatIs24h : boolean;
    format === "12h" ? timeFormatIs24h = false : timeFormatIs24h = true;
    this.localStorageService.setItem(this.timeFormatKeyValue, timeFormatIs24h);
    this.timeFormatIs24hSubject.next(timeFormatIs24h);
  }
  
}
