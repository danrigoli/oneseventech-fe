import { Component, OnInit } from '@angular/core';
import { CartItem } from '../shared/interfaces/cart.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart: CartItem[] = JSON.parse(localStorage.getItem('cart') ?? '[]');
  constructor() { }

  ngOnInit(): void {
  }

  modifyQuantity(item: CartItem, quantity: number) {
    item.quantity = quantity;
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  removeItem(item: CartItem) {
    this.cart = this.cart.filter((cartItem) => cartItem.product.id !== item.product.id);
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  calculateSubtotal() {
    return this.cart.reduce((acc: number, item: CartItem) => acc + (item.product.price * item.quantity), 0);
  }
}
