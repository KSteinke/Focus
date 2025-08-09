import { NgStyle } from '@angular/common';
import { Component, Input} from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-background-preview-element',
  imports: [NgStyle],
  templateUrl: './background-preview-element.html',
  styleUrl: './background-preview-element.scss'
})
export class BackgroundPreviewElement {
  @Input() backgroundUrl: string = 'assets/backgrounds/static/Cyberpunk_City.png';
  @Input() name: string = "Test";
}
