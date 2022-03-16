import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ToastController } from '@ionic/angular';
import { AlertService } from 'src/services/alert-service.service';
import { Router } from '@angular/router';
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
    constructor(public toastController: ToastController, private http: HttpClient,
      private alertService: AlertService, private router: Router) { }

    loadAllPatients():Observable<any>{
      return this.http.get(`${this.apiHost}/patients`).pipe(
        map(results => results)
      );
    }

    getPatientDetail(id) {
      return this.http.get(`${this.apiHost}/patients/` + id);
    }

    addNewPatient(data) {      
      this.http.post(`${this.apiHost}/patients`, data)
      .subscribe(data => {
        console.log(data['_body']);
        // Alert message
        this.alertService.genericAlert("Information", "Add new patient successfully!")
        this.router.navigate(['/groupnine/patients/']);
       }, error => {
        console.log(error);
      });
  
    }

  async presentToast(content) {
    const toast = await this.toastController.create({
      message: content,
      duration: 2000
    });
    toast.present();
  }
  
}