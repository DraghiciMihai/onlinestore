import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { ProductService } from '../product.service';
import {ProductData} from '../productData'

@Component({
  selector: 'app-product-list-user',
  templateUrl: './product-list-user.component.html',
  styleUrls: ['./product-list-user.component.css']
})
export class ProductListUserComponent implements OnInit {

  productList: ProductData []= [];

  constructor(private productService:ProductService,
              private orderService:OrderService) { }

ngOnInit(): void {
  this.productService.getProducts().subscribe(foundListOfProduct=>
    this.productList=foundListOfProduct)
}

public delete(id:number){
  this.productService.deleteProduct(id).subscribe(message=>{
    this.ngOnInit();
    console.log("Product was deleted");
  })
}

addToCart(product):void{
  let productId : number  = product.id;
  let userId : number = 5;
  this.orderService.addToCart(productId, userId);
console.log("Product " + product.title + " added to cart")
}

}

