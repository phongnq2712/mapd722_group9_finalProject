import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { StorageService } from 'src/services/storage-service.service';
import { UserCrudService } from './../../services/userCrud.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  public username: String;
  public password: String;

  constructor(public router: Router,
    public userCrudService: UserCrudService, public storageService: StorageService) {

  }

  ngOnInit() {}

  login() {
    if(this.username && this.password) {
      this.userCrudService.login(this.username, this.password).then(res => {
        if(typeof res !== 'undefined') {
          // redirect to Profile tab
          this.storageService.set('userId', res.userId);
          localStorage.setItem('userId', res.userId);
          let navigationExtras: NavigationExtras = {
            state: {
              user: res
            }
          };

          this.router.navigate(['/groupnine/profile'], navigationExtras);

        } else {
          this.userCrudService.presentToast('Login failed! Please try again.');
        }
    }, err => {
          console.log(err);
      })
    } else {
      this.userCrudService.presentToast('Please enter username and password!');
    }
  }

}
