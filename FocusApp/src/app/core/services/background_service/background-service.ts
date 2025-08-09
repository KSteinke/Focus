import { Injectable } from '@angular/core';
import { ConfigService } from '../config_service/config-service';

@Injectable({
  providedIn: 'root'
})
export class BackgroundService {
  constructor(private configService: ConfigService)
  {
    
  }

  public getStaticBackgrounds() : Background[] {
    let result = this.configService.backgroundServiceConfig.get("backgrounds");
    return result.static;
  }
  

}

export interface Background {
  name: string;
  path: string;
}
