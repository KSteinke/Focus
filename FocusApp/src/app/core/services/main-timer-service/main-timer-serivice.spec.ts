import { TestBed } from '@angular/core/testing';

import { MainTimerSerivice } from './main-timer-serivice';

describe('MainTimerSerivice', () => {
  let service: MainTimerSerivice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainTimerSerivice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
