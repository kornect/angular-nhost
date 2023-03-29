import { TestBed } from '@angular/core/testing';

import { NhostService } from './nhost.service';

describe('NhostService', () => {
  let service: NhostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NhostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
