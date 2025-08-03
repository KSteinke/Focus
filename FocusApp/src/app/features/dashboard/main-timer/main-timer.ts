import { CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-main-timer',
  imports: [DatePipe, CommonModule],
  templateUrl: './main-timer.html',
  styleUrl: './main-timer.scss'
})
export class MainTimer {
  now = new Date();
  is24Hour = true;
  intervalId: any;

  constructor(private cd: ChangeDetectorRef) {
    this.intervalId = setInterval(() => {
      this.now = new Date();
      this.cd.detectChanges();
    }, 5000);
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
