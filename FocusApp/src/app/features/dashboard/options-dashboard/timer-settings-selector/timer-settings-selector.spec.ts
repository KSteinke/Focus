import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerSettingsSelector } from './timer-settings-selector';

describe('TimerSettingsSelector', () => {
  let component: TimerSettingsSelector;
  let fixture: ComponentFixture<TimerSettingsSelector>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimerSettingsSelector]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimerSettingsSelector);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
