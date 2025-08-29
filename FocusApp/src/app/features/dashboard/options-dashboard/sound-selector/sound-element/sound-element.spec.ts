import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundElement } from './sound-element';

describe('SoundElement', () => {
  let component: SoundElement;
  let fixture: ComponentFixture<SoundElement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoundElement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoundElement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
