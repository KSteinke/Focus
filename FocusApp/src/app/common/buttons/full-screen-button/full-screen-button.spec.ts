import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullScreenButton } from './full-screen-button';

describe('FullScreenButton', () => {
  let component: FullScreenButton;
  let fixture: ComponentFixture<FullScreenButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullScreenButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullScreenButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
