import { TestBed } from '@angular/core/testing';

import { CrolService } from './crol.service';

describe('CrolService', () => {
  let service: CrolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
