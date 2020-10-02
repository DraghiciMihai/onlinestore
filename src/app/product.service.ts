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
  return this.httpClient.post<any>('http://localhost:8080/addProduct', product);
}


public deleteProduct(id:number):Observable<any>{
  return this.httpClient.delete<any>('http://localhost:8080/deleteProduct/'+ id);
}
 public updateProduct(product:ProductData): Observable<any>{
   return this.httpClient.put<any>('http://localhost:8080/editProduct/', product);
 }

 

}
