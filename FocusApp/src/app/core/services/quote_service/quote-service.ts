import { Injectable } from '@angular/core';
import { ConfigService } from '../config_service/config-service';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  constructor(private configService: ConfigService) 
  {  

  }

  getRandomQuote(): any | null {
      const quotes = this.configService.quoteServiceConfig.get("quotes");
      if (!quotes || quotes.length === 0) return null;

      const randomIndex = Math.floor(Math.random() * quotes.length);
      return quotes[randomIndex];
  }
}
