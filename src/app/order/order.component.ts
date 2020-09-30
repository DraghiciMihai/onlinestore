import { Component, OnInit } from '@angular/core';
import { OrderService} from '../order.service'
import { ProductData } from '../productData';
import { OrderData} from '../order-data'

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orders: OrderData[] = []
  products: ProductData[] = []


  constructor(private orderService: OrderService) { }

  ngOnInit(): void { this.orderService.getOrders().subscribe(receivedOrders => {
       this.orders = receivedOrders;
     });
  
    
  }

}
