import { Component, AfterViewInit } from '@angular/core';
declare const Tally: any;

@Component({
  selector: 'app-contact-selector',
  imports: [],
  templateUrl: './contact-selector.html',
  styleUrl: './contact-selector.scss'
})
export class ContactSelector implements AfterViewInit {
  ngAfterViewInit() {
    if (typeof Tally !== 'undefined') {
      Tally.loadEmbeds();
    }
  }
}
