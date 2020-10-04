import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserAccountService } from '../userAccount.service';
import { UserAccountData } from '../userAccountData';

@Component({
  selector: 'app-edit-user-account',
  templateUrl: './edit-user-account.component.html',
  styleUrls: ['./edit-user-account.component.css']
})
export class EditUserAccountComponent implements OnInit {

  userAccount: UserAccountData = new UserAccountData();


  constructor(private activateRoutes: ActivatedRoute, private userAccountService: UserAccountService,
    private router: Router) { }

  ngOnInit(): void {
    let id = this.activateRoutes.snapshot.paramMap.get("id")
    console.log("Id: " + id);
    this.userAccountService.getUserAccount(Number(id)).subscribe(result => {
      this.userAccount = result;
    })
  }

  editUserAccount(): void {
    this.userAccountService.editUserAccount(this.userAccount).subscribe(account => {
      console.log(this.userAccount);
      this.router.navigateByUrl('');
    })
  }

}
