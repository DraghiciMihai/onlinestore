import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service'
import { OrderData } from '../order-data'

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders: OrderData[] = []

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.orderService.getOrders().subscribe(receivedOrders => {
      this.orders = receivedOrders;
    })
  }

}
