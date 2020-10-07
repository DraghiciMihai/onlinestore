import { HttpClient } from '@angular/common/http';
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

  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;


  constructor(private activateRoutes: ActivatedRoute, private userAccountService: UserAccountService,
    private router: Router, private httpClient: HttpClient) { }

  ngOnInit(): void {
    let id = this.activateRoutes.snapshot.paramMap.get("id")
    console.log("Id: " + id);
    this.userAccountService.getUserAccount(Number(id)).subscribe(result => {
      this.userAccount = result;
    })
  }

  onUpload() {
    console.log(this.selectedFile);
    
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
  
    this.httpClient.post('http://localhost:8080/image/upload', uploadImageData, { observe: 'response' })
      .subscribe((response) => {
        if (response.status === 200) {
          this.message = 'Image uploaded successfully';
        } else {
          this.message = 'Image not uploaded successfully';
        }
      }
      );


  }

  public onFileChanged(event) {
    //Select File
    this.selectedFile = event.target.files[0];
  }

  editUserAccount(): void {
    this.userAccountService.editUserAccount(this.userAccount).subscribe(account => {
      console.log(this.userAccount);
      this.router.navigateByUrl('');
    })
  }

}
