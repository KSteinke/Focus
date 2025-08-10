import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundSelector } from './sound-selector';

describe('SoundSelector', () => {
  let component: SoundSelector;
  let fixture: ComponentFixture<SoundSelector>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoundSelector]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoundSelector);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
