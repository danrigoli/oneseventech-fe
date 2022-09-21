import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Country } from "../interfaces/country.interface";


@Injectable({
    providedIn: 'root'
})
export class CountriesService {

    private countriesApi = environment.countriesApiUrl

    public constructor(public http: HttpClient) {}

    public getAll(): Observable<Country[]> {
        return this.http.get<Country[]>(this.countriesApi + "/all");
    }



}