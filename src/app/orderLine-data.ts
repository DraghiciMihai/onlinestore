import { ProductData } from "./productData";

export class OrderLineData{
    id: number;
    product: ProductData;
    quantity: number;
    productPrice: number;
}