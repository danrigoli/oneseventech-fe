import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getCartTotal() {
    let cart = JSON.parse(localStorage.getItem('cart') ?? '[]');
    return cart.reduce((acc: number, item: any) => acc + item.quantity, 0);  
  }

}
