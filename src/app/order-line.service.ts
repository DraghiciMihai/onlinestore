import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderLineData } from './orderLine-data';

@Injectable({
  providedIn: 'root'
})
export class OrderLineService {

  constructor(private httpClient: HttpClient) { }

  public getOrderLines(): Observable<OrderLineData[]> {
    return this.httpClient.get<OrderLineData[]>('http://localhost:8080/getOrderLines');
  }

  public deleteOrderLine(id: number) : Observable<any>{
    return this.httpClient.delete<any>('http://localhost:8080/deleteOrderLine/'+ id);
  }

  public createOrderLine(orderLineData: OrderLineData): Observable<any>{
    return this.httpClient.post<any>('http://localhost:8080/addOrderLine', orderLineData);
  }

}
