import { TestBed } from '@angular/core/testing';

import { SoundProfileService } from './sound-profile-service';

describe('SoundProfileService', () => {
  let service: SoundProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoundProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
