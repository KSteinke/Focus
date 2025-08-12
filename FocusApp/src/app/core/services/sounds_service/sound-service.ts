import { Injectable } from '@angular/core';
import { ConfigService } from '../config_service/config-service';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SoundService {
    private sounds: Sound[] = [];
    public get Sounds(): Sound[]
    {
      return this.sounds;
    }
    private globalVolume: number = 0.5;

    public set GlobalVolume(value: number)
    {
      this.globalVolume = value / 100;
      this.sounds.forEach(sound => {
        sound.Audio.volume = sound.Volume * this.globalVolume;
      });
    }

    public get GlobalVolume() : number
    {
      return this.globalVolume;
    }

    private globalMute = new BehaviorSubject<boolean>(true);
    public GlobalMute = this.globalMute.asObservable();
    
    constructor(private configService: ConfigService)
    {
      let soundsConfig: SoundConfig[] = this.configService.soundServiceConfig.get("sounds");
      soundsConfig.forEach(soundConfig => {

        let audio: HTMLAudioElement = new Audio(soundConfig.Path);
        audio.volume = 0.5 * this.globalVolume;
        audio.pause();

        this.sounds.push(
          {
            Id: soundConfig.Id,
            Name: soundConfig.Name,
            Audio: audio,
            Volume: 0.5,
            IconPath: soundConfig.IconPath
          }
        )
      });
    }

    public PlaySound(sound: Sound)
    {
      sound.Audio.play();
      if(this.globalVolume !== 0)
      {
        this.globalMute.next(false);
      }
    }

    public MuteAllSounds()
    {
      this.sounds.forEach(sound => {
        sound.Audio.volume = 0;
      });

      this.globalMute.next(true);
    }

    public UnMuteAllSounds()
    {
      this.sounds.forEach(sound => 
      {
        sound.Audio.volume = sound.Volume * this.globalVolume;
      }
      );

      this.globalMute.next(false);
    }
}
export interface SoundConfig
{
   Id: string,
   Name: string,
   Path: string,
   IconPath: string
}

export interface Sound
{
  Id: string,
  Name: String,
  Audio: HTMLAudioElement
  Volume: number
  IconPath: string
}
