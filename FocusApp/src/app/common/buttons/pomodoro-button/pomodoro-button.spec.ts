import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PomodoroButton } from './pomodoro-button';

describe('PomodoroButton', () => {
  let component: PomodoroButton;
  let fixture: ComponentFixture<PomodoroButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PomodoroButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PomodoroButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
