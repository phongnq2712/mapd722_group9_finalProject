import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserCrudService } from './../../services/userCrud.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {

  public username: String;
  public password: String;
  public fullname: String;
  public position: String;

  constructor(private router: Router,
    public userCrudService: UserCrudService,
    public toastController: ToastController) {

  }

  ngOnInit() {}

  goBack(){
    this.router.navigate(['/login']);
  }

  signup() {
    this.userCrudService.register({username: this.username,
      password: this.password,
      fullname: this.fullname,
      position: this.position}).then(res => {
      if(this.username && this.password) {
        this.router.navigate(['/login']);
        this.userCrudService.presentToast('Account created successfully!');
      } else {
        this.userCrudService.presentToast('User Name and Password are required');
      }
    }, err => {
          console.log(err);
      })
    }

  userTypeChanged($event){
    this.position = $event.target.value;
  }
}
