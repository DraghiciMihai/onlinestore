import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAccountService } from '../userAccount.service'
import { UserAccountData } from '../userAccountData';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public userAccount: UserAccountData = new UserAccountData();

  constructor(private userAccountService: UserAccountService, private router: Router) { }

  ngOnInit(): void {
  }

  public addUserAccount(): void {

    this.userAccountService.addUserAccount(this.userAccount).subscribe(result =>{
      console.log("Registered Succesfully!");
      this.router.navigateByUrl('');
    })
  }
}