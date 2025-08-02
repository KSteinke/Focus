import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-dashboard',
  imports: [RouterOutlet, NgStyle],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {
  backgroundUrl: string = 'assets/Tree.png';
}