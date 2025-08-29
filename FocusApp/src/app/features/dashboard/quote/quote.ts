import { Component, OnInit} from '@angular/core';
import { QuoteService } from '../../../core/services/quote_service/quote-service';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  standalone: true,
  selector: 'app-quote',
  imports: [],
  templateUrl: './quote.html',
  styleUrls: ['./quote.scss']
})
export class Quote {
  quote: string = "„Najlepszy czas na działanie jest teraz.” – Mark Fisher"
  intervalId: any;

  constructor( private quoteService: QuoteService, private cd: ChangeDetectorRef)
  {
    
  }

  ngOnInit() {
    this.setRandomQuote();
    this.intervalId = setInterval(() => {
      this.periodicTask();
      this.cd.detectChanges();
    }, 30000);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  periodicTask() {
    console.log("Running periodic task!")
    this.setRandomQuote();
    console.log(this.quote)
  }

  setRandomQuote()
  {
    let randomQuote = this.quoteService.getRandomQuote();
    if(randomQuote != null)
    {
      this.quote = `"${randomQuote.text}" - ${randomQuote.author}`;
    }
  }

}
