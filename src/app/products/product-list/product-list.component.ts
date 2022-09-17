import { Component, OnInit } from '@angular/core';
import { Product } from '../../shared/interfaces/product.interface';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[] = []

  constructor(private apiService: ApiService) { }

  addProductToCart(product: Product) {
    console.log("added to cart", product); 
  }

  ngOnInit(): void {
    this.apiService.getProducts().subscribe((data) => this.products = data);
  }

}
