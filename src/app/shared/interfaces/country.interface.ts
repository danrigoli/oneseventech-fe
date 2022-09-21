import { Product } from "./product.interface";

export interface Country {
    name: CountryName;
    cca2: string;
    flag: string;
}

export class Country {
    constructor(countryData: Country) {
        this.name = countryData.name;
        this.cca2 = countryData.cca2;
        this.flag = countryData.flag;
    }
}

interface CountryName {
    common: string;
    official: string;
}