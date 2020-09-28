import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderComponent } from './order/order.component';
import { RegisterComponent } from './register/register.component';
import { ViewProductListComponent } from './view-product-list/view-product-list.component';


const routes: Routes = [
  {path:'view-productList', component:ViewProductListComponent},
  {path:'register', component:RegisterComponent}
  {path:'getOrders', component: OrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
