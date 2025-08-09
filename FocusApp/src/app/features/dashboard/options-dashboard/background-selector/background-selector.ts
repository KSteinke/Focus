import { Component } from '@angular/core';
import { BackgroundPreviewElement } from './background-preview-element/background-preview-element';
import { ConfigService } from '../../../../core/services/config_service/config-service';

@Component({
  selector: 'app-background-selector',
  imports: [BackgroundPreviewElement, ConfigService],
  templateUrl: './background-selector.html',
  styleUrl: './background-selector.scss'
})
export class BackgroundSelector {

}
