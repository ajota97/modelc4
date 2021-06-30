import { TestBed } from '@angular/core/testing';

import { CoordServiceService } from './coord-service.service';

describe('CoordServiceService', () => {
  let service: CoordServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoordServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
