import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAccountService } from '../userAccount.service';
import { UserAccountData } from '../useAccountData';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userAccount: UserAccountData = new UserAccountData();

  constructor(private userAccountService: UserAccountService, private router: Router) { }

  ngOnInit(): void {
  }

  public addUserAccont(): void {

    this.userAccountService.addUserAccount(this.userAccount).subscribe(result => {
      console.log("UserAccount added")
      this.router.navigateByUrl("");
    });

  }
}