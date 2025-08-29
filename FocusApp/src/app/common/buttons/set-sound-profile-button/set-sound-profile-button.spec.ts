import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetSoundProfileButton } from './set-sound-profile-button';

describe('SetSoundProfileButton', () => {
  let component: SetSoundProfileButton;
  let fixture: ComponentFixture<SetSoundProfileButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetSoundProfileButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetSoundProfileButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
