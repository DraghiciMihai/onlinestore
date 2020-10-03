import { Component, OnInit } from '@angular/core';
import {CategoryDataService} from '../service/data/category-data.service'
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})

export class Category {
  constructor(
    public id: number,
    public name: string,
    public subcategory: Category[],
    public parentCategory: Category
  ) {}
}

export class CategoryComponent implements OnInit {
  constructor(
    private service: CategoryDataService,
    private router: RouterModule
  ) { }

  ngOnInit(): void {
  }

}
