import { Injectable } from '@angular/core';
import { ConfigService } from '../config_service/config-service';
import { BehaviorSubject, Subject } from 'rxjs';
import { LocalStorageService } from '../local_storage_service/local-storage-service';


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

    private soundsVolumeChangedSubject = new Subject<void>();
    public SoundsVolumeChanged = this.soundsVolumeChangedSubject.asObservable();
    
    constructor(private configService: ConfigService, private localStorageService : LocalStorageService)
    {
      this.FetchSoundsFromConfig();
    }

    private FetchSoundsFromConfig()
    {
      let soundsConfig: SoundConfig[] = this.configService.soundServiceConfig.get("sounds");
      soundsConfig.forEach(soundConfig => {

        let audio: HTMLAudioElement = new Audio(soundConfig.Path);

        let soundStored: Sound | null = this.localStorageService.getItem(soundConfig.Id);
        let volume = 0.5;
        if(soundStored != null)
        {
          audio.volume = soundStored.Volume * this.globalVolume;
          volume = soundStored.Volume;
        }
        else
        {
          audio.volume = 0.5;
        }
        audio.pause();
        audio.loop = true;

        this.sounds.push(
          {
            Id: soundConfig.Id,
            Name: soundConfig.Name,
            Audio: audio,
            Volume: volume,
            IconPath: soundConfig.IconPath,
            IsPlaying: false,
          }
        )
      });
    }

    public TogleSound(sound: Sound)
    {
      this.UnMuteAllSounds();
      if(sound.IsPlaying)
      {
        sound.Audio.pause();
        sound.IsPlaying = false;
      }
      else
      {
        sound.Audio.play();
        sound.IsPlaying = true;
        if(this.globalVolume !== 0)
        {
          this.globalMute.next(false);
        }
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

    public SetSoundVolume(sound: Sound, volume: number)
    {
      sound.Audio.volume = this.globalVolume * (volume / 100);
      sound.Volume = volume / 100;
      this.localStorageService.setItem(sound.Id, sound);
    }

    public ResetSounds()
    {
      this.ClearLocalStorageSounds();
      this.sounds.forEach( sound => {
        sound.Audio.pause();
        sound.Audio.volume = 0.5;
        sound.IsPlaying = false;
        sound.Volume = 0.5;
      })
      this.soundsVolumeChangedSubject.next();
    }

    private ClearLocalStorageSounds()
    {
      this.sounds.forEach(sound => {
        this.localStorageService.removeItem(sound.Id);
      });
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
  Audio: HTMLAudioElement,
  Volume: number,
  IconPath: string,
  IsPlaying: boolean
}
