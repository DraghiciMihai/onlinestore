import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../category/category.component';
import { CategoryDataService } from '../service/data/category-data.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})

export class CategoriesComponent implements OnInit {

  id: number
  category: Category
  categories: Category[]

  constructor(
    private service: CategoryDataService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.category = new Category(this.id, '', null, null)
    this.service.retriveAllCategories().subscribe(
      response => this.categories = response
    )

    if (this.id != 0) {
      this.service.retrieveCategory(this.id).subscribe(
        response => this.category = response
      )
    }
  }

  saveCategory() {
    if (this.id == 0) {
      this.service.createCategory(this.category).subscribe(
        data => {
          console.log(data)
          this.router.navigate(['categories'])
        }
      )
    } else {
      this.service.updateCategory(this.category).subscribe(
        data => {
          console.log(data)
          this.router.navigate(['categories'])
        }
      )
    }
  }

}
