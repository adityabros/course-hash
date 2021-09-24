import { TestBed } from '@angular/core/testing';

import { CurrentCartService } from './current-cart.service';

describe('CurrentCartService', () => {
  let service: CurrentCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
