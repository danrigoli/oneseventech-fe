import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Product } from "../../shared/interfaces/product.interface";


@Injectable({
    providedIn: 'root'
})
export class ApiService {

    private api = "https://fakestoreapi.com"

    public constructor(public http: HttpClient) {}

    public getProducts(params?: { [key: string]: string }): Observable<Product[]> {
        return this.http.get<Product[]>(this.api + "/products", {params})
    }

}