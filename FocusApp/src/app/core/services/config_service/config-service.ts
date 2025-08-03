import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  public quoteServiceConfig!: Config;

  constructor(private http: HttpClient) {}

  async loadConfig(){
  try {
    const quoteServiceConfig = await firstValueFrom(this.http.get('assets/config/quote_config/config.json'));
    this.quoteServiceConfig = new Config(quoteServiceConfig);
  } catch (error) {
    this.quoteServiceConfig = new Config({});
  }
}

}

export class Config {
  private config: any;

  constructor(config: any) {
    this.config = config;
  }

  get(key: string): any {
    return this.config ? this.config[key] : null;
  }

  getAll(): Record<string, any> {
    return this.config;
  }
}
