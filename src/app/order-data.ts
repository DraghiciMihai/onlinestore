import {OrderLineData} from "./orderLine-data"
import {OrderStatus} from "./orderStatus-data"

export class OrderData{
    id: number;
    totalCost: number;
    // deliveryAddress: UserAddress;
    // userAddress: UserAddress;
    orderDate: Date;
    orderLines: OrderLineData[];
    status: OrderStatus;

}