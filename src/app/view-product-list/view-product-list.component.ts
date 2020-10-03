import { Component, OnInit } from '@angular/core';
import { AuthorData } from '../authorData';
import { ProductService } from '../product.service';
import {ProductData} from '../productData'

@Component({
  selector: 'app-view-product-list',
  templateUrl: './view-product-list.component.html',
  styleUrls: ['./view-product-list.component.css']
})
export class ViewProductListComponent implements OnInit {


  productList: ProductData []= [];

    constructor(private productService:ProductService) { }

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



}
