import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderComponent } from './order/order.component';
import { ViewProductListComponent } from './view-product-list/view-product-list.component';
import { RegisterComponent } from './register/register.component';
import { CategoryComponent } from './category/category.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { AddProductAdminComponent } from './add-product-admin/add-product-admin.component';

import { FormsModule } from '@angular/forms';
import { UpdateProductAdminComponent } from './update-product-admin/update-product-admin.component';


@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    ViewProductListComponent,
    RegisterComponent,
    CategoryComponent,
    UpdateProductAdminComponent,
    ProductDescriptionComponent,
    AddProductAdminComponent
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
