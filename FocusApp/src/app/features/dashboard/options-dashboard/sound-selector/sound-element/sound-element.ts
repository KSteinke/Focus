import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { Sound, SoundService } from '../../../../../core/services/sounds_service/sound-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-sound-element',
  imports: [CommonModule, FormsModule],
  templateUrl: './sound-element.html',
  styleUrl: './sound-element.scss'
})
export class SoundElement {
  @Input() Sound!: Sound;
  constructor(private soundService: SoundService, private cd: ChangeDetectorRef) {}

  public volume! : number;

  private soundVolumeChangedSubscription! : Subscription;

  togleSound()
  {
    this.soundService.TogleSound(this.Sound);
  }

  ngOnInit()
  {
    this.volume = this.Sound.Volume * 100;
    this.soundVolumeChangedSubscription = this.soundService.SoundsVolumeChanged.subscribe(() => {
      this.volume = this.Sound.Volume * 100;
      this.cd.detectChanges();
    })
  }

  ngOnDestroy()
  {
    this.soundVolumeChangedSubscription.unsubscribe();
  }

  onVolumeChange()
  {
    this.soundService.SetSoundVolume(this.Sound, this.volume);
  }
}
