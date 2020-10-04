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

  retrieveCategory(id) {
    return this.http.get<Category>(`http://localhost:8080/getCategory/${id}`)
  }

  deleteCategory(id) {
    return this.http.delete(`http://localhost:8080/deleteCategory/${id}`)
  }

  updateCategory(category) {
    return this.http.put('http://localhost:8080/editCategory', category)
  }

  createCategory(category) {
    return this.http.post('http://localhost:8080/addCategory', category)
  }
}
