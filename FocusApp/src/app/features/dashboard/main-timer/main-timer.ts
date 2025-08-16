import { CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { MainTimerSerivice } from '../../../core/services/main-timer-service/main-timer-serivice';
import { Subscription } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-main-timer',
  imports: [DatePipe, CommonModule],
  templateUrl: './main-timer.html',
  styleUrl: './main-timer.scss'
})
export class MainTimer {
  now = new Date();
  is24Hour = false;
  intervalId: any;
  private isTimeFormat24hSubscription! : Subscription;

  constructor(private cd: ChangeDetectorRef, private mainTimerService: MainTimerSerivice) {
    this.intervalId = setInterval(() => {
      this.now = new Date();
      this.cd.detectChanges();
    }, 5000);

    this.isTimeFormat24hSubscription = this.mainTimerService.TimeFormatIs24hObservable.subscribe( is24h =>
    {
      this.is24Hour = is24h;
    }
    )

  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  toggleFormat() {
    this.is24Hour = !this.is24Hour;
  }
}
