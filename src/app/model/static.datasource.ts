import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { Observable, from } from "rxjs";

@Injectable()
export class StaticDataSource{
    private products: Product[] = [

    ];

    getProducts(): Observable<Product[]>{
        return from([this.products]);
    }
}