import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PomodoroTimerSetElement } from './pomodoro-timer-set-element';

describe('PomodoroTimerSetElement', () => {
  let component: PomodoroTimerSetElement;
  let fixture: ComponentFixture<PomodoroTimerSetElement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PomodoroTimerSetElement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PomodoroTimerSetElement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
