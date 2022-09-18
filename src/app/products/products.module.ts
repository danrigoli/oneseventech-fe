import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { ApiService } from './services/api.service';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ ProductListComponent, ProductCardComponent ],
  imports: [ CommonModule, ProductsRoutingModule, FormsModule],
  providers: [ ApiService ]
})
export class ProductsModule { }
