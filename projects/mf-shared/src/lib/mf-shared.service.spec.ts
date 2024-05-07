import { TestBed } from '@angular/core/testing';

import { MfSharedService } from './mf-shared.service';

describe('MfSharedService', () => {
  let service: MfSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MfSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
