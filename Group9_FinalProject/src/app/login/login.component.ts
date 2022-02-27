import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/services/storage-service.service';
import { UserCrudService } from './../../services/userCrud.service';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  public username: String;
  public password: String;

  constructor(public router: Router,
    public userCrudService: UserCrudService, public storageService: StorageService,
    public toastController: ToastController) {
  
  }

  ngOnInit() {}

  login() {
    if(this.username && this.password) {
      this.userCrudService.login(this.username, this.password).then(res => {
        if(typeof res !== 'undefined') {
          // redirect to Tasks tab
          this.router.navigate(['/groupnine/tasks']);
        } else {
          this.presentToast('Login failed! Please try again.');
        }
    }, err => {
          console.log(err);
      })
    } else {
      this.presentToast('Please enter username and password!');
    }
  }

  async presentToast(content) {
    const toast = await this.toastController.create({
      message: content,
      duration: 2000
    });
    toast.present();
  }

}
