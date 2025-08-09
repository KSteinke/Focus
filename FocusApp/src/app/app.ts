import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Dashboard } from './features/dashboard/dashboard';
import { NgStyle } from '@angular/common';
import { Background, BackgroundService } from './core/services/background_service/background-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Dashboard, NgStyle],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  constructor(private backgroundService: BackgroundService) {}

  public backgroundSubscription!: Subscription;

  protected readonly title = signal('FocusApp');
  background!: Background;

  ngOnInit()
  {
      this.backgroundSubscription = this.backgroundService.currentBackground.subscribe(data => {
      this.background = data;
    });
  }

  ngOnDestroy() {
    this.backgroundSubscription.unsubscribe();
  }

}
