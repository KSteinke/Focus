import { Component} from '@angular/core';
import { BackgroundPreviewElement } from './background-preview-element/background-preview-element';
import { Background, BackgroundService } from '../../../../core/services/background_service/background-service';
import { CommonModule } from '@angular/common';


@Component({
  standalone: true,
  selector: 'app-background-selector',
  imports: [BackgroundPreviewElement, CommonModule],
  templateUrl: './background-selector.html',
  styleUrl: './background-selector.scss'
})

export class BackgroundSelector {
  constructor(private backgroundService: BackgroundService)
  {
  }

  StaticBackgrounds: Background[] = [];

  ngOnInit()
  {
    this.StaticBackgrounds = this.backgroundService.getStaticBackgrounds();
  }

}
