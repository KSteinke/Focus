import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-timer-button',
  imports: [],
  templateUrl: './timer-button.html',
  styleUrl: './timer-button.scss'
})
export class TimerButton {
  public IconPath: String = "";
  public Name: String = "";

  @Output() clickEvent = new EventEmitter(true);


  public buttonCicked()
  {
    this.clickEvent.emit();
  }
}
