import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pomodoro-timer-set-element',
  imports: [CommonModule, FormsModule],
  templateUrl: './pomodoro-timer-set-element.html',
  styleUrl: './pomodoro-timer-set-element.scss'
})
export class PomodoroTimerSetElement {

  constructor(private cd: ChangeDetectorRef)
  {

  }
  value: number = 1;
  @Input() PomodoroTimerSetElementModel! : PomodoroTimerSetElementModel;
  @Output() valueChange = new EventEmitter<number>();

  // Obsługa zmiany
  onValueChange(event: any) {
    let newValue = Number(event.target.value);

    /*
    // Sprawdzenie czy liczba całkowita
    if (!Number.isInteger(newValue)) {
      newValue = Math.round(newValue);
    }
    */
    // Zakres 1–60
    if (isNaN(newValue) || newValue < 1) {
      newValue = 1;
    }
    if (newValue > 60) {
      newValue = 60;
    }

    console.log(this.value);

    this.value = newValue;
    this.valueChange.emit(this.value);
    this.cd.detectChanges();

  }

  // Blokowanie wpisywania nie-liczb
  onKeyPress(event: KeyboardEvent) {
    
    if (!/[0-9]/.test(event.key)) {
      event.preventDefault();
    }
    this.cd.detectChanges();

  }

  onConfirm() {
    if (this.value < 1) this.value = 1;
    if (this.value > 60) this.value = 60;

    this.cd.detectChanges();
  }
}

export interface PomodoroTimerSetElementModel
{
  Id: string;
  Label: string;
}
