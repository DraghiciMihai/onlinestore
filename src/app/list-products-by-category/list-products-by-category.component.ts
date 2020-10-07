import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../category/category.component';
import { ProductService } from '../product.service';
import { ProductData } from '../productData';
import { CategoryDataService } from '../service/data/category-data.service';

@Component({
  selector: 'app-list-products-by-category',
  templateUrl: './list-products-by-category.component.html',
  styleUrls: ['./list-products-by-category.component.css']
})
export class ListProductsByCategoryComponent implements OnInit {

  private id: number = 0
  public category: Category = new Category(0, '', null, null)
  public products: ProductData[] = null
  deleteMessage: string
  emptyListMessage: string
  welcomeMessage: string

  constructor(
    private service: CategoryDataService,
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.service.retrieveCategory(this.id).
      subscribe(response => this.category = response)
    this.listProducts()
  }

  listProducts() {
    this.service.retrieveProductsByCategory(this.id).subscribe(
      data => {
        this.products = data
        console.log(this.products)
        if (this.products == null) {
          this.emptyListMessage = 'There are no products to show!'
        } else {
          this.welcomeMessage = 'welcome'

        }
        // console.log(data)
        // console.log(this.products)
      }
    )
  }

  delete(product) {
    this.productService.deleteProduct(product.id).subscribe(message => {
      this.ngOnInit();
      console.log("Product was deleted");
      this.deleteMessage = `Product ${product.title} was deleted Successfully`
      this.welcomeMessage = null
    })
  }

}
