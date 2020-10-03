import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { UserAccountData } from '../useAccountData';
import { UserAccountService } from '../userAccount.service';


@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {

  userAccount: UserAccountData = new UserAccountData();

  constructor(private activateRoutes: ActivatedRoute, private userAccountService: UserAccountService, 
    private router: Router) { }

  ngOnInit(): void {
    let id = this.activateRoutes.snapshot.paramMap.get("id");
    console.log("Id: " + id);
    this.userAccountService.getUserAccount(Number(id)).subscribe(userFound => {
      this.userAccount = userFound;
    })
  }

}
