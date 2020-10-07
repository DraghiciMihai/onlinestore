import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserAccountService } from '../userAccount.service';
import { UserAccountData } from '../userAccountData';

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
    this.userAccountService.getUserAccount(Number(id)).subscribe(userResult => {
      this.userAccount = userResult;
    })
  }

  delete(id: number) {
    this.userAccountService.deleteUserAccount(id).subscribe(message => {
      console.log(message);
      this.router.navigateByUrl('');
    })
  }

}
