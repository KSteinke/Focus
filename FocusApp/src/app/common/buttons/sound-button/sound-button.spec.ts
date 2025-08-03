import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundButton } from './sound-button';

describe('SoundButton', () => {
  let component: SoundButton;
  let fixture: ComponentFixture<SoundButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoundButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoundButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
