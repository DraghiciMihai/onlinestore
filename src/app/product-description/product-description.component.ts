import { Component, OnInit } from '@angular/core';
import {ProductData} from '../productData';
import{ActivatedRoute} from '@angular/router';
import {ProductService} from '../product.service';
import { Category } from '../category/category.component';
import { CategoryDataService } from '../service/data/category-data.service';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {

  product:ProductData= new ProductData;
  // category:CategoryData;
  category: Category
  categories: Category[]

  constructor(
    private  activatedRoute:ActivatedRoute, 
    private productService:ProductService,
    private categoryService: CategoryDataService) { }


  ngOnInit(): void {
    this.category = new Category(0, '', null, null)
    this.categoryService.retriveAllCategories().subscribe(
      response => this.categories = response
    )
    let id=this.activatedRoute.snapshot.paramMap.get('id');
    console.log("id este "+ id);
    this.productService.getProduct(Number(id)).subscribe(productResult => {
      this.product = productResult;
      this.product.category = productResult.category;
      console.log("product.category: " + this.product.category.name);
      if (productResult.category !== null) {
        console.log("Categoria venita din backend: " + productResult.category.name);
      } else {
        console.log("Categoria a venit null din backend.");
      }
    });
  }

   delete(id:number){
    this.productService.deleteProduct(id).subscribe(message=>{
      this.ngOnInit();
      console.log("Product was deleted");
    })
  }
  }
