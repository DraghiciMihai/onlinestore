import { Component, OnInit } from '@angular/core';
import { CategoryData } from '../categoryData';
import { ProductService } from '../product.service';
import { ProductData } from '../productData';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-product-admin',
  templateUrl: './add-product-admin.component.html',
  styleUrls: ['./add-product-admin.component.css']
})
export class AddProductAdminComponent implements OnInit {

  product:ProductData= new ProductData;
  category:CategoryData= new CategoryData;

  constructor(private productService:ProductService, private router:Router) { }

  ngOnInit(): void {}
public addProduct(): void {

   this.productService.addProduct(this.product).subscribe(result =>{
    console.log("Product added");
    this.router.navigateByUrl("");
   });
  }


 
}

