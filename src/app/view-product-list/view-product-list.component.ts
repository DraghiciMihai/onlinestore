import { Component, OnInit } from '@angular/core';
import {ProductData} from '../productData'

@Component({
  selector: 'app-view-product-list',
  templateUrl: './view-product-list.component.html',
  styleUrls: ['./view-product-list.component.css']
})
export class ViewProductListComponent implements OnInit {

  productList: ProductData []= [];

  constructor() { }

  ngOnInit(): void {
  }

}
