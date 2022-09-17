import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { ApiService } from './services/api.service';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCardComponent } from './product-card/product-card.component';



@NgModule({
  declarations: [ ProductListComponent, ProductCardComponent ],
  imports: [ CommonModule, ProductsRoutingModule],
  providers: [ ApiService ]
})
export class ProductsModule { }
