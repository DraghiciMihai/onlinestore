import { Component, OnInit } from '@angular/core';
import { AuthorData } from '../authorData';
import {ProductData} from '../productData'

@Component({
  selector: 'app-view-product-list',
  templateUrl: './view-product-list.component.html',
  styleUrls: ['./view-product-list.component.css']
})
export class ViewProductListComponent implements OnInit {

author1:AuthorData={
  id: 1,
    firstName: "Nicoleta",
  lastName: "Oprea"
}

  productList: ProductData []= [
    {
      id : 1,
title : "PC HP",
thumbnail : "string",
price : 1000,
 author: this.author1 

    }
  ]

    constructor() { }

  ngOnInit(): void {
  }

}
