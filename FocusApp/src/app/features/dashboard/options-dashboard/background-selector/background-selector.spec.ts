import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundSelector } from './background-selector';

describe('BackgroundSelector', () => {
  let component: BackgroundSelector;
  let fixture: ComponentFixture<BackgroundSelector>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackgroundSelector]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackgroundSelector);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
