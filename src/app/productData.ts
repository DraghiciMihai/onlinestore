import { AuthorData } from "./authorData";
import { Category } from './category/category.component';

export class ProductData{

id : number;
title : string;
thumbnail : string;
price : number;
author: AuthorData;
category:Category;

    
    // private CategoryDto category;
   
    // private ProductType productType;

}