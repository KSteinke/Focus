import { Component, Input } from '@angular/core';
import { Sound } from '../sound-selector';

@Component({
  selector: 'app-sound-element',
  imports: [],
  templateUrl: './sound-element.html',
  styleUrl: './sound-element.scss'
})
export class SoundElement {
  @Input() Sound!: Sound;
}
