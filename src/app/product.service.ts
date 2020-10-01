import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{ProductData} from './productData';
import{Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

public getProducts(): Observable<ProductData[]>{
 return  this.httpClient.get<ProductData[]>('http://localhost:8080/getProducts');
}

public getProduct(id:number):Observable <ProductData>{
  return this.httpClient.get<ProductData>('http://localhost:8080/getProduct/id');
}

public addProduct(product:ProductData): Observable<any>{
  return this.httpClient.post<ProductData>('http://localhost:8080/addProduct', product);
}

}
