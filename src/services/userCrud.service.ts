import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ToastController } from '@ionic/angular';

export class User {
  _id: number;
  name: string;
  email: string;
  username: string;
}

@Injectable({
  providedIn: 'root'
})

export class UserCrudService {
    apiHost = 'http://127.0.0.1:5001';
    constructor(public toastController: ToastController) { }

  async register(data){
      var date = new Date().getDate();
      var month = new Date().getMonth() + 1;
      var year = new Date().getFullYear();
      try {
          const response = await fetch(this.apiHost + '/users/register', 
          {   method: 'POST',
              headers: {
                  'Accept': 'application/json; charset=utf-8',
                  'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
              },
              body: new URLSearchParams({
                  'userName': data.username,
                  'password': data.password,
                  'fullname': data.fullname,
                  'position': data.position,
                  'created_time': year+'/'+month+'/'+date,
              })
          });
          const json = await response.json();
          return json;
        } catch (error) {
          console.error(error);
      }
  }

  async login(username, password) {
      try {
          const requestOptions = {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ 'userName': username, 'password': password })
          };
          const response = await fetch(this.apiHost+'/users/login', requestOptions);
          const data = await response.json();

          return data[0];
        } catch (error) {
          console.error(error);
      }
  }

  async presentToast(content) {
    const toast = await this.toastController.create({
      message: content,
      duration: 2000
    });
    toast.present();
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }  
  
}