import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-background-preview-element',
  imports: [NgStyle],
  templateUrl: './background-preview-element.html',
  styleUrl: './background-preview-element.scss'
})
export class BackgroundPreviewElement {
  backgroundUrl: string = 'assets/backgrounds/static/Cyberpunk_City.png';
}
