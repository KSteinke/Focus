import { NgStyle } from '@angular/common';
import { Component, Input} from '@angular/core';
import { Background } from '../../../../../core/services/background_service/background-service';
import { BackgroundService } from '../../../../../core/services/background_service/background-service';

@Component({
  standalone: true,
  selector: 'app-background-preview-element',
  imports: [NgStyle],
  templateUrl: './background-preview-element.html',
  styleUrl: './background-preview-element.scss'
})
export class BackgroundPreviewElement {

  constructor(private backgroundService: BackgroundService)
  {
  }

  @Input() background: Background = {
    name: "Test",
    path: "assets/backgrounds/static/Cyberpunk_City.png"
  };

  public BackgroundChosen()
  {
    this.backgroundService.updateBackground(this.background);
  }
}
