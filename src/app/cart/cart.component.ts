import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartItem } from '../shared/interfaces/cart.interface';
import { PaymentsService } from '../shared/services/payments.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart: CartItem[] = JSON.parse(localStorage.getItem('cart') ?? '[]');
  loading = false;
  constructor(private paymentsService: PaymentsService, private router: Router, private toastr: ToastrService ) { }

  ngOnInit(): void {
  }

  modifyQuantity(item: CartItem, quantity: number) {
    item.quantity = quantity;
    if (item.quantity === 0) {
      this.removeItem(item);
    }
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  removeItem(item: CartItem) {
    this.cart = this.cart.filter((cartItem) => cartItem.product.id !== item.product.id);
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  calculateSubtotal() {
    return this.cart.reduce((acc: number, item: CartItem) => acc + (item.product.price * item.quantity), 0);
  }

  checkout() {
    this.loading = true;
    this.paymentsService.createPayment(this.cart).subscribe((data) => {
      localStorage.setItem('cart', '[]');
      this.router.navigateByUrl(`/checkout/${data.id}`);
    },(error) => {
      this.loading = false;
      this.toastr.error('Error generating payment');
      });
  }
}
