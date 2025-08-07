import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsDashboard } from './options-dashboard';

describe('OptionsDashboard', () => {
  let component: OptionsDashboard;
  let fixture: ComponentFixture<OptionsDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptionsDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionsDashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
