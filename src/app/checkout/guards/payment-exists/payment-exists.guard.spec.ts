import { TestBed } from '@angular/core/testing';

import { PaymentExistsGuard } from './payment-exists.guard';

describe('PaymentExistsGuard', () => {
  let guard: PaymentExistsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PaymentExistsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
