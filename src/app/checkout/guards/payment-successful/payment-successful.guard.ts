import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { PaymentsService } from 'src/app/shared/services/payments.service';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaymentSuccessfulGuard implements CanActivate {

  constructor(private paymentsService: PaymentsService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.paymentsService.getPayment(route.params['id'] ?? '').pipe(
        map((payment) => {
          if (payment) {
            if (payment.status !== 'succeeded') {
              this.router.navigate(['/checkout/' + route.params['id']]);
              return false
            }
            return true;
          } else {
            this.router.navigate(['/']);
            return false;
          }
        }),
        catchError(() => {
          this.router.navigate(['/']);
          return of(false);
        })
      );
  }
  
}
