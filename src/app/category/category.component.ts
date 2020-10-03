import { Component, OnInit } from '@angular/core';
import { CategoryDataService } from '../service/data/category-data.service'
import { RouterModule } from '@angular/router';

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
  parentCategories: Category[]

  constructor(
    private service: CategoryDataService,
    private router: RouterModule
  ) { }

  ngOnInit(): void {
    this.service.retriveAllCategories().subscribe(
      response => {
        console.log(response)
        this.categories = response
      }
    )
  }
}