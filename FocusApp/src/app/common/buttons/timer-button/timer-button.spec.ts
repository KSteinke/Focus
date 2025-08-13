import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerButton } from './timer-button';

describe('TimerButton', () => {
  let component: TimerButton;
  let fixture: ComponentFixture<TimerButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimerButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimerButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
