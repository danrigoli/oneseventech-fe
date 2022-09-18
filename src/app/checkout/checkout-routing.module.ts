import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutDoneComponent } from './checkout-done/checkout-done.component';
import { CheckoutViewComponent } from './checkout-view/checkout-view.component';
import { PaymentExistsGuard } from './guards/payment-exists/payment-exists.guard';
import { PaymentSuccessfulGuard } from './guards/payment-successful/payment-successful.guard';

const routes: Routes = [
  { path: '', redirectTo: '/products/list', pathMatch: 'full' },
  { path: 'success/:id', component: CheckoutDoneComponent, canActivate: [PaymentSuccessfulGuard] },
  { path: ':id', component: CheckoutViewComponent, canActivate: [PaymentExistsGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckoutRoutingModule { }
