import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderListComponent } from './order-list/order-list.component';
import { RegisterComponent } from './register/register.component';
import { ViewProductListComponent } from './view-product-list/view-product-list.component';
import{ProductDescriptionComponent} from './product-description/product-description.component';
 import {AddProductAdminComponent}from './add-product-admin/add-product-admin.component'
import { UpdateProductAdminComponent } from './update-product-admin/update-product-admin.component';

import {CategoryComponent} from './category/category.component';
import { ProductListUserComponent } from './product-list-user/product-list-user.component';


const routes: Routes = [
  {path:'view-productList', component:ViewProductListComponent},
  {path:'product-description/:id', component:ProductDescriptionComponent},
  {path:'add-product-admin', component:AddProductAdminComponent},
  {path:'register', component: RegisterComponent},
  {path:'getOrders', component: OrderListComponent},
  {path:'update-product-admin/:id', component: UpdateProductAdminComponent},
  {path: 'categories', component: CategoryComponent},
  {path:'productList-user', component :ProductListUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
