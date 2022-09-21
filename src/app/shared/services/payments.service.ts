import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Payment } from "../interfaces/payment.interface";
import { CartItem } from "../interfaces/cart.interface";
import { environment } from "src/environments/environment";


@Injectable({
    providedIn: 'root'
})
export class PaymentsService {

    private paymentsApi = environment.paymentsApiUrl + "/payments"

    public constructor(public http: HttpClient) {}

    public createPayment(products: CartItem[]): Observable<{id: string}> {
        return this.http.post<{id: string}>(this.paymentsApi, products);
    }

    public getPayment(paymentId: string): Observable<Payment> {
        return this.http.get<Payment>(this.paymentsApi + "/" + paymentId);
    }

    public confirmPayment(paymentId: string, paymentData: any): Observable<any> {
        return this.http.post(this.paymentsApi + "/confirm/" + paymentId, paymentData);
    }


}