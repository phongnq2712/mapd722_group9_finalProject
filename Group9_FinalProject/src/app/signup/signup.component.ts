import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
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
  public position: String;

  // userForm: FormGroup;

  constructor(private router: Router, 
    // public formBuilder: FormBuilder, 
    // private zone: NgZone,
    public userCrudService: UserCrudService,
    public toastController: ToastController) {
      // this.userForm = this.formBuilder.group({
      //   username: [''],
      //   password: ['']
      //   // position: ['']
      // })
  }

  ngOnInit() {}

  goBack(){
    this.router.navigate(['/login']);
  }

  // onSubmit() {
  //   if (!this.userForm.valid) {
  //     return false;
  //   } else {
  //     this.userCrudService.createUser(this.userForm.value)
  //       .subscribe((response) => {
  //         this.zone.run(() => {
  //           this.userForm.reset();
  //           this.router.navigate(['/list']);
  //         })
  //       });
  //   }
  // }

  signup() {
    this.userCrudService.register({username: this.username,
      password: this.password,
      position: this.position}).then(res => {
      this.router.navigate(['/login']);
      this.presentToast();
    }, err => {
          console.log(err);
      })
    }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Account created successfully!',
      duration: 2000
    });
    toast.present();
  }

  userTypeChanged($event){
    this.position = $event.target.value;
  }
}
