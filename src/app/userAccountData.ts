import { UserAddressData } from './userAddressData';

export class UserAccountData{
    id: number;
    login: string;
    password: string;
    city: string;
    userAddress: UserAddressData;
    deliveryAddress: UserAddressData;
    logotype: string;
    roletype: string;
}