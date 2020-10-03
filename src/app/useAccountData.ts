import { UserAddressData } from './userAddressData';

export class UserAccountData{
    id: number;
    login: string;
    password: string;
    userAddress: UserAddressData;
    deliveryAddres: UserAddressData;
    logoType: string;
    roleType: string;
}