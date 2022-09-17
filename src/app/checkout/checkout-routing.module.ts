import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutDoneComponent } from './checkout-done/checkout-done.component';
import { CheckoutViewComponent } from './checkout-view/checkout-view.component';
import { PaymentExistsGuard } from './guards/payment-exists/payment-exists.guard';

const routes: Routes = [
  { path: '', redirectTo: '/products/list', pathMatch: 'full' },
  { path: 'success/:id', component: CheckoutViewComponent },
  { path: ':id', component: CheckoutViewComponent, canActivate: [PaymentExistsGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckoutRoutingModule { }
