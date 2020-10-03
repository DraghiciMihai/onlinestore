import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserAccountData } from './useAccountData';

@Injectable({
  providedIn: 'root'
})
export class UserAccountService {

  constructor(private httpClient: HttpClient) { }

  public getUserAccounts(): Observable<UserAccountData[]>{
    return this.httpClient.get<UserAccountData[]>('http://localhost:8080/getUsersAccounts');
   }
   
   public getUserAccount(id: number): Observable<UserAccountData> {
    return this.httpClient.get<UserAccountData>('http://localhost:8080/getUserAccount/' +id);
  }

  public addUserAccount(userAccount: UserAccountData): Observable<any>{
    return this.httpClient.post<UserAccountData>('http://localhost:8080/addUserAccount', userAccount);
  }

  public deleteUserAccount(id: number): Observable<string>{
    return this.httpClient.delete<string>('http://localhost:8080/deleteUserAccount');
  }
}
