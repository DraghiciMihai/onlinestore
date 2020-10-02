import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewProductListComponent } from './view-product-list/view-product-list.component';
import { RegisterComponent } from './register/register.component';
import { CategoryComponent } from './category/category.component';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { UpdateProductAdminComponent } from './update-product-admin/update-product-admin.component';
import { OrderLineListComponent } from './order-line-list/order-line-list.component';
import { OrderListComponent } from './order-list/order-list.component';


@NgModule({
  declarations: [
    AppComponent,
    ViewProductListComponent,
    RegisterComponent,
    CategoryComponent,
    UpdateProductAdminComponent,
    OrderLineListComponent,
    OrderListComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
