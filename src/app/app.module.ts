import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { TruncatePipe } from './shared/pipes/truncate.pipe';
import { CartComponent } from './cart/cart.component';
import { FormsModule } from '@angular/forms';
import { PaymentsService } from './shared/payments.service';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TruncatePipe,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [ PaymentsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
