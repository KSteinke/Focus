import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PomodoroTimerService, PomodoroTimerType } from '../../../../../core/services/pomodoro-timer-service/pomodoro-timer-service';

@Component({
  selector: 'app-pomodoro-timer-set-element',
  imports: [CommonModule, FormsModule],
  templateUrl: './pomodoro-timer-set-element.html',
  styleUrl: './pomodoro-timer-set-element.scss'
})
export class PomodoroTimerSetElement {

  constructor(private cd: ChangeDetectorRef, private pomodoroTimerService : PomodoroTimerService)
  {
  }

  value!: number;
  @Input() PomodoroTimerSetElementModel! : PomodoroTimerSetElementModel;
  @Output() valueChange = new EventEmitter<number>();

  ngOnInit()
  {
    this.value = this.pomodoroTimerService.PomodoroTimerPeriods[this.PomodoroTimerSetElementModel.Id] / 60;
  }

  // Obsługa zmiany
  onValueChange(newValue: number) {
    
    // Sprawdzenie czy liczba całkowita
    if (!Number.isInteger(newValue)) {
      newValue = Math.round(newValue);
    }
    
    // Zakres 1–60
    if (isNaN(newValue) || newValue < 1) {
    newValue = 1;
    }
    if (newValue > 60) {
      newValue = 60;
    }

    this.value = newValue;

    this.pomodoroTimerService.SetPomodoroTimersTime(
      this.PomodoroTimerSetElementModel.Id,
      this.value * 60
    );

    this.valueChange.emit(this.value);


  }

  // Blokowanie wpisywania nie-liczb
  onKeyPress(event: KeyboardEvent) {
    
    if (!/[0-9]/.test(event.key)) {
      event.preventDefault();
    }
    this.cd.detectChanges();

  }

  
  onConfirm() {

    this.onValueChange(this.value);

    this.cd.detectChanges();
  }
  
}

export interface PomodoroTimerSetElementModel
{
  Id: PomodoroTimerType;
  Label: string;
}
