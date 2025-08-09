import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundPreviewElement } from './background-preview-element';

describe('BackgroundPreviewElement', () => {
  let component: BackgroundPreviewElement;
  let fixture: ComponentFixture<BackgroundPreviewElement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackgroundPreviewElement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackgroundPreviewElement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
