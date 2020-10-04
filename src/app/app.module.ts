import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewProductListComponent } from './view-product-list/view-product-list.component';
import { RegisterComponent } from './register/register.component';
import { CategoryComponent } from './category/category.component';
import { EditUserAccountComponent } from './edit-user-account/edit-user-account.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';

import { ProductDescriptionComponent } from './product-description/product-description.component';
import { AddProductAdminComponent } from './add-product-admin/add-product-admin.component';
import { UpdateProductAdminComponent } from './update-product-admin/update-product-admin.component';
import { OrderLineListComponent } from './order-line-list/order-line-list.component';
import { OrderListComponent } from './order-list/order-list.component';
import { ProductListUserComponent } from './product-list-user/product-list-user.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider'

import { CategoriesComponent } from './categories/categories.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    ViewProductListComponent,
    RegisterComponent,
    CategoryComponent,
    EditUserAccountComponent,
    ViewProfileComponent,
    UpdateProductAdminComponent,
    ProductDescriptionComponent,
    AddProductAdminComponent,
    OrderLineListComponent,
    OrderListComponent,
    ProductListUserComponent,
    CategoriesComponent,
    MenuComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
