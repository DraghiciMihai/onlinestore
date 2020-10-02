import { AuthorData } from "./authorData";
import { CategoryData } from './categoryData';

export class ProductData{

id : number;
title : string;
thumbnail : string;
price : number;
author: AuthorData;
category:CategoryData;

    
    // private CategoryDto category;
   
    // private ProductType productType;
}