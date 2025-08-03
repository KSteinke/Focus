import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTimer } from './main-timer';

describe('MainTimer', () => {
  let component: MainTimer;
  let fixture: ComponentFixture<MainTimer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainTimer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainTimer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
