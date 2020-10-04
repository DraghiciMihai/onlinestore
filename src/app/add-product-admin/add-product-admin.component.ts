import { Component, OnInit } from '@angular/core';
import { CategoryData } from '../categoryData';
import { ProductService } from '../product.service';
import { ProductData } from '../productData';
import {Router} from '@angular/router';
import { AuthorData } from '../authorData';
import { Category } from '../category/category.component';
import { CategoryDataService } from '../service/data/category-data.service';

@Component({
  selector: 'app-add-product-admin',
  templateUrl: './add-product-admin.component.html',
  styleUrls: ['./add-product-admin.component.css']
})
export class AddProductAdminComponent implements OnInit {

  product:ProductData= new ProductData;
  category: Category = new Category(0,'',null, null);
  author:AuthorData= new AuthorData;
  categories: Category[];

  constructor(
    private productService:ProductService, 
    private router:Router,
    private categoryService: CategoryDataService) { }


  ngOnInit(): void {
    this.categoryService.retriveAllCategories().subscribe(
      response => this.categories = response
    )
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

