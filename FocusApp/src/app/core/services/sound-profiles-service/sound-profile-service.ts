import { Injectable } from '@angular/core';
import { LocalStorageService } from '../local_storage_service/local-storage-service';
import { Sound, SoundService } from '../sounds_service/sound-service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SoundProfileService {
  private soundPorfileKeyword : string = "soundProfiles";

  private soundProfileListSubject = new BehaviorSubject<SoundProfile[]>([]);
  public SoundProfileList = this.soundProfileListSubject.asObservable();

  constructor(private localStorageService: LocalStorageService, private soundService : SoundService)
  {
    this.UpdateSoundProfileList();
  }

  private UpdateSoundProfileList()
  {
    let savedSoundProfiles = this.GetStoredSoundProfiles();
    savedSoundProfiles != null ? this.soundProfileListSubject.next(savedSoundProfiles) : null;
  }

  public SaveSoundProfile()
    {
      let currentSounds : Sound[] = this.soundService.Sounds;
      let sounds : Sound[] = [];
      let storedSoundsProfiles : SoundProfile[] | null = this.localStorageService.getItem(this.soundPorfileKeyword);
      storedSoundsProfiles === null ? storedSoundsProfiles = [] : null;

      currentSounds.forEach(sound => {
        if(sound.IsPlaying)
        {
          sounds.push(sound);
        }
      })

      if(sounds.length > 0)
      {
        let newSoundProfile = {
          Id: storedSoundsProfiles.length + 1,
          Sounds: sounds
        }

        storedSoundsProfiles.push(newSoundProfile);

        this.PushSoundProfilesToLocalStorage(storedSoundsProfiles);
      }
    }
    
    private PushSoundProfilesToLocalStorage(newSoundProfiles : SoundProfile[])
    {
      this.localStorageService.setItem(this.soundPorfileKeyword, newSoundProfiles);
      this.UpdateSoundProfileList();
    }
    
    private GetStoredSoundProfiles() : SoundProfile[]
    {
      let savedSoundProfiles : SoundProfile[] | null = this.localStorageService.getItem(this.soundPorfileKeyword);
      let result : SoundProfile[] = [];
      savedSoundProfiles != null ? result = savedSoundProfiles : null;
      return result;
    }

    public RemoveSoundProfile(soundProfile : SoundProfile)
    {
      let savedSoundProfiles = this.GetStoredSoundProfiles();
      let newSavedSoundProfiles = savedSoundProfiles.filter(s => s.Id !== soundProfile.Id);
      if(newSavedSoundProfiles)
      {
        let iterator : number = 1;
        newSavedSoundProfiles.forEach(soundProfile => {
          soundProfile.Id = iterator;
          iterator++;
        })
        this.PushSoundProfilesToLocalStorage(newSavedSoundProfiles);
      }
    }

    public PlaySoundProfile(soundProfile: SoundProfile)
    {
      this.soundService.PlaySounds(soundProfile.Sounds);
    }
  
}

export interface SoundProfile
{
  Id: number,
  Sounds: Sound[]
}
