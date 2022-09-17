import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/shared/interfaces/cart.interface';
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
    let cart: CartItem[] = JSON.parse(localStorage.getItem('cart') ?? '[]');
    // check if item is already in the cart
    const productIndex = cart.findIndex((item) => item.product.id === product.id);
    if (productIndex !== -1) {
      cart[productIndex].quantity++;
    } else {
      cart.push({ product, quantity: 1 });
    }      
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  ngOnInit(): void {
    this.apiService.getProducts().subscribe((data) => this.products = data);
  }

}
