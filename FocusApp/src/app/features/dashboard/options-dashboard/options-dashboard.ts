import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-options-dashboard',
  imports: [],
  templateUrl: './options-dashboard.html',
  styleUrl: './options-dashboard.scss'
})
export class OptionsDashboard {
  @Output() clickEvent = new EventEmitter(true);

  async closeOptionsDashboard()
  {
    this.clickEvent.emit();
    console.log("Options-Dashboard")
  }
}
