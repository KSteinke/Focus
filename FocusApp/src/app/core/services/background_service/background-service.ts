import { Injectable } from '@angular/core';
import { ConfigService } from '../config_service/config-service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackgroundService {
  constructor(private configService: ConfigService)
  {
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
  }

}

export interface Background {
  name: string;
  path: string;
}
