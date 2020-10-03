import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ProductData } from '../productData';
import {Router} from '@angular/router';
 import{ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-update-product-admin',
  templateUrl: './update-product-admin.component.html',
  styleUrls: ['./update-product-admin.component.css']
})
export class UpdateProductAdminComponent implements OnInit {

  product: ProductData= new ProductData;

  constructor(private productService:ProductService, private route:Router, private activatedRoutes:ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.activatedRoutes.snapshot.paramMap.get("id");
    console.log("id: " + id);
    this.productService.getProduct(Number(id)).subscribe(productResult => {
      this.product = productResult;
    });
  }

  public updateProduct(): void{
    this.productService.updateProduct(this.product).subscribe(productUpdate=>{
      console.log(this.product);
      this.route.navigateByUrl("view-productList")
    });
  }


}
