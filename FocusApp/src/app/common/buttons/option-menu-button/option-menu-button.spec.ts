import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionMenuButton } from './option-menu-button';

describe('OptionMenuButton', () => {
  let component: OptionMenuButton;
  let fixture: ComponentFixture<OptionMenuButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptionMenuButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionMenuButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
