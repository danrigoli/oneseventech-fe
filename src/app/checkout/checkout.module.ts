import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutDoneComponent } from './checkout-done/checkout-done.component';
import { CheckoutViewComponent } from './checkout-view/checkout-view.component';
import { CheckoutRoutingModule } from './checkout-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ CheckoutViewComponent, CheckoutDoneComponent],
  imports: [ CommonModule, CheckoutRoutingModule, ReactiveFormsModule, FormsModule ],
})
export class CheckoutModule { }
