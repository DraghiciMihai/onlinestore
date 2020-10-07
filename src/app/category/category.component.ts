import { Component, OnInit } from '@angular/core';
import { CategoryDataService } from '../service/data/category-data.service'
import { Router } from '@angular/router';

export class Category {
  constructor(
    public id: number,
    public name: string,
    public subcategory: Category[],
    public parentCategory: Category
  ) { }
}

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})

export class CategoryComponent implements OnInit {

  categories: Category[]
  deleteMessage:string

  constructor(
    private service: CategoryDataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.refreshPage()
  }

  refreshPage() {
    this.service.retriveAllCategories().subscribe(
      response => this.categories = response
    )
  }

  updateCategory(category) {
    console.log(`updating category ${category.name}`)
    this.router.navigate(['categories', category.id])
  }

  deleteCategory(category) {
    console.log(`deleting category ${category.name}`)
    this.service.deleteCategory(category.id).subscribe(
      response => {
        this.deleteMessage = `Delete of Category "${category.name}" Successfully!`
        this.refreshPage()
      }
    )
  }

  addCategory() {
    console.log('adding a new category')
    this.router.navigate(['categories', 0])
  }

  goToCategory(subcategory) {
    console.log('going to category products')
    // this.service.retrieveProductsByCategory(subcategory.id).subscribe(
    //   response => console.log(response)
    // )
    this.router.navigate(['view-products',subcategory.id])
  }
}