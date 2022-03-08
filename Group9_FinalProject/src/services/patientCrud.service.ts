import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ToastController } from '@ionic/angular';

export class Patient {
  _id: number;
  firstName: string;
  lastName: string;
  gender: string;
  age: number;
  healthInsuranceNo: string;
  phoneNo: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})

export class PatientCrudService {
    apiHost = 'http://127.0.0.1:5000';
    constructor(public toastController: ToastController, private http: HttpClient) { }

    loadAllPatients():Observable<any>{
      return this.http.get(`${this.apiHost}/patients`).pipe(
        map(results => results)
      );
    }

    getPatientDetail(id) {
      return this.http.get(`${this.apiHost}/patients/` + id);
    }

  // async register(data){
  //     var date = new Date().getDate();
  //     var month = new Date().getMonth() + 1;
  //     var year = new Date().getFullYear();
  //     try {
  //         const response = await fetch(this.apiHost + '/users/register', 
  //         {   method: 'POST',
  //             headers: {
  //                 'Accept': 'application/json; charset=utf-8',
  //                 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
  //             },
  //             body: new URLSearchParams({
  //                 'userName': data.username,
  //                 'password': data.password,
  //                 'fullname': data.fullname,
  //                 'position': data.position,
  //                 'created_time': year+'/'+month+'/'+date,
  //             })
  //         });
  //         const json = await response.json();
  //         return json;
  //       } catch (error) {
  //         console.error(error);
  //     }
  // }

  // async login(username, password) {
  //     try {
  //         const requestOptions = {
  //             method: 'POST',
  //             headers: { 'Content-Type': 'application/json' },
  //             body: JSON.stringify({ 'userName': username, 'password': password })
  //         };
  //         const response = await fetch(this.apiHost+'/users/login', requestOptions);
  //         const data = await response.json();

  //         return data[0];
  //       } catch (error) {
  //         console.error(error);
  //     }
  // }

  async presentToast(content) {
    const toast = await this.toastController.create({
      message: content,
      duration: 2000
    });
    toast.present();
  }
  
}