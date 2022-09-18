import { TestBed } from '@angular/core/testing';

import { PaymentSuccessfulGuard } from './payment-successful.guard';

describe('PaymentSuccessfulGuard', () => {
  let guard: PaymentSuccessfulGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PaymentSuccessfulGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
