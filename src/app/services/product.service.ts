import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Product} from "../model/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products! : Array<Product>;

  constructor() {
    this.products=[
      {id : 1, name : "Computer", price : 9000, promotion : true},
      {id : 2, name : "Printer", price : 1200, promotion : false},
      {id : 3, name : "Smart phone", price : 1400, promotion : true},
    ];
  }
  public getAllProducts() : Observable<Product[]>{
    return of(this.products);
  }
  public deleteProduct(id :number) :Observable<boolean>{
    this.products=this.products.filter(p=>p.id!=id);
    return of(true);
  }
}
