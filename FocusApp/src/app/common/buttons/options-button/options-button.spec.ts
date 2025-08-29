import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsButton } from './options-button';

describe('OptionsButton', () => {
  let component: OptionsButton;
  let fixture: ComponentFixture<OptionsButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptionsButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionsButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
