import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { TruncatePipe } from './shared/pipes/truncate.pipe';
import { CartComponent } from './cart/cart.component';
import { FormsModule } from '@angular/forms';
import { StripeModule } from "stripe-angular"


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TruncatePipe,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StripeModule.forRoot("sk_test_51Lj7G0DfkAkd2SO7k7VcguUDzAGfS75CprWOACNkDSZhXbkORSTuPAU1HYgkLo3XAFpLIZggWNFb3RrpxGPqvCva00CD368FNc")
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
