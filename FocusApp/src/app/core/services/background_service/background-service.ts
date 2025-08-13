import { Injectable } from '@angular/core';
import { ConfigService } from '../config_service/config-service';
import { BehaviorSubject } from 'rxjs';
import { LocalStorageService } from '../local_storage_service/local-storage-service';

@Injectable({
  providedIn: 'root'
})
export class BackgroundService {
  constructor(private configService: ConfigService, private localStorageService: LocalStorageService)
  {
    let lastBackground: Background | null = this.localStorageService.getItem("background");
    let availableBackgrounds : Background[] = []
    if(lastBackground !== null)
    {
      availableBackgrounds = this.getStaticBackgrounds();
      if(availableBackgrounds.some(background => background.name === lastBackground.name))
      {
        this.defaultBackground = lastBackground;
        this.backgroundSource.next(lastBackground);
      }
    }
  }

  defaultBackground: Background = {
    name: "Test",
    path: "assets/backgrounds/static/Cyberpunk_City.png"
  };

  private backgroundSource = new BehaviorSubject<Background>(this.defaultBackground);
  currentBackground = this.backgroundSource.asObservable();

  public getStaticBackgrounds() : Background[] {
    let result = this.configService.backgroundServiceConfig.get("backgrounds");
    return result.static;
  }
  
  public updateBackground(background: Background)
  {
    this.backgroundSource.next(background);
    this.localStorageService.setItem("background", background);
  }

}

export interface Background {
  name: string;
  path: string;
}
