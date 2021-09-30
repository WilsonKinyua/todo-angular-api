import { TestBed } from '@angular/core/testing';

import { AlreadyLoggedService } from './already-logged.service';

describe('AlreadyLoggedService', () => {
  let service: AlreadyLoggedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlreadyLoggedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
