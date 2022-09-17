import { Product } from "./product.interface";

export interface CartItem {
    product: Product;
    quantity: number;
}

export class CartItem {
    constructor(cartData: CartItem) {
        this.product = cartData.product;
        this.quantity = cartData.quantity;
    }
}