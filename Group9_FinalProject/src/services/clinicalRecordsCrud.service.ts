import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertService } from 'src/services/alert-service.service';
import { Router, NavigationExtras } from '@angular/router';
import { ToastController } from '@ionic/angular';

export class ClinicalRecords {
  _id: number;
  patientId: string;
  bloodPressure: string;
  bloodOxygenLevel: string;
  heartBeatRate: string;
  respiratoryRate: string;
}

@Injectable({
  providedIn: 'root'
})

export class ClinicalRecordsCrudService {
    apiHost = 'http://127.0.0.1:5000';
    constructor(public toastController: ToastController, private http: HttpClient,
      private alertService: AlertService, private router: Router) { }

    getClinicalRecordsDetail(id) {
      return this.http.get(`${this.apiHost}/patients/` + id + `/clinical-records`);
    }

    updateClinicalRecords(data) {
      if(data) {
        let navigationExtras: NavigationExtras = {
          state: {
            patientDetailId: data.currentPatientId
          }
        };
        
        return this.http.put(`${this.apiHost}/patients/${data.currentPatientId}/clinical-records/${data.id}`,data).subscribe(
          res => {this.alertService.genericAlert("Information", "Update Clinical Records successfully!"), this.router.navigate(['viewclinicalrecords'], navigationExtras)},
          error => console.log('error occured')
        );
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