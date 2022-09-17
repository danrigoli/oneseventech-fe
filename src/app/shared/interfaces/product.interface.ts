export interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
}

export class Product {
    constructor(productData: Product) {
        this.id = productData.id;
        this.title = productData.title;
        this.price = productData.price;
        this.image = productData.image;
    }
}