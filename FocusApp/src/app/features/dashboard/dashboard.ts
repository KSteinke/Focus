import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Quote } from './quote/quote';
import { MainTimer } from './main-timer/main-timer';

@Component({
  standalone: true,
  selector: 'app-dashboard',
  imports: [RouterOutlet, Quote, MainTimer],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {
  backgroundUrl: string = 'assets/Tree.png';
}