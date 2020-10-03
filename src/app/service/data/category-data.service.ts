import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from 'src/app/category/category.component';

@Injectable({
  providedIn: 'root'
})
export class CategoryDataService {

  constructor(
    private http: HttpClient
  ) { }

  retriveAllCategories() {
    return this.http.get<Category[]>('http://localhost:8080/getCategories')
  }
}
