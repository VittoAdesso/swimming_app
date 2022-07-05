import { TestBed } from '@angular/core/testing';

import { ButterflyService } from './butterfly.service';

describe('ButterflyService', () => {
  let service: ButterflyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ButterflyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
