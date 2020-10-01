import { Component, OnInit } from '@angular/core';
import {ProductData} from '../productData';
import{ActivatedRoute} from '@angular/router';
import {ProductService} from '../product.service';
import { CategoryData } from '../categoryData';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {

  product:ProductData= new ProductData;
  category:CategoryData;

  constructor(private  activatedRoute:ActivatedRoute, private productService:ProductService) { }

  ngOnInit():   void {}
  //   let id=this.activatedRoute.snapshot.paramMap.get('id');
  //   console.log("id este "+ id);
  //   this.productService.getProduct(Number(id)).subscribe(productResult=>
  //     this.product=productResult);

  // }


  public addProduct(){
    console.log("descrierea produsului")
  }
  
  
  
  // : void {
  //   let id=this.activatedRoute.snapshot.paramMap.get('id');
  //   console.log("id este "+ id);
  //   this.productService.getProduct(Number(id)).subscribe(productResult=>
  //     this.product=productResult);

  

}
