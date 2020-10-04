import { Component, OnInit } from '@angular/core';
import { CategoryData } from '../categoryData';
import { ProductService } from '../product.service';
import { ProductData } from '../productData';
import {Router} from '@angular/router';
import { AuthorData } from '../authorData';

@Component({
  selector: 'app-add-product-admin',
  templateUrl: './add-product-admin.component.html',
  styleUrls: ['./add-product-admin.component.css']
})
export class AddProductAdminComponent implements OnInit {

  product:ProductData= new ProductData;
  category:CategoryData= new CategoryData;
  author:AuthorData=new AuthorData;

  constructor(private productService:ProductService, private router:Router) { }


  ngOnInit(): void {
    this.product.category = this.category;
    this.product.author=this.author;
  }


public addProduct(): void {

   this.productService.addProduct(this.product).subscribe(result =>{
    console.log("Product added");
    this.router.navigateByUrl("");
   });
  }


 
}

