import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeFormatElement } from './time-format-element';

describe('TimeFormatElement', () => {
  let component: TimeFormatElement;
  let fixture: ComponentFixture<TimeFormatElement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeFormatElement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeFormatElement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
