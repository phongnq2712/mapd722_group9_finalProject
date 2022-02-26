import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/services/storage-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  public email: String;
  public password: String;

  constructor(public router: Router, public storageService: StorageService) {
   }

  ngOnInit() {}


  login(){
    // this.fireService.loginWithEmail({email: this.email, password: this.password}).then(res => {
    //   if(res.user.uid){
    //     this.storageService.set('userId', res.user.uid);
    //     this.fireService.getDetails({uid: res.user.uid}).subscribe(data => {
            this.router.navigate(['/groupnine/tasks'])
    //     })
    //   }
    // }, err => {
    //   alert(err.message)
    // })
  }

}
