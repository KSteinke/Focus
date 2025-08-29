import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSoundProfileButton } from './add-sound-profile-button';

describe('AddSoundProfileButton', () => {
  let component: AddSoundProfileButton;
  let fixture: ComponentFixture<AddSoundProfileButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddSoundProfileButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSoundProfileButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
