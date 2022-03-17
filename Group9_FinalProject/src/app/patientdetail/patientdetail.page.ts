import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientCrudService } from '../../services/patientCrud.service';
import { Router, NavigationExtras } from '@angular/router';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-patientdetail',
  templateUrl: './patientdetail.page.html',
  styleUrls: ['./patientdetail.page.scss'],
})
export class PatientdetailPage implements OnInit {

  patientDetail = null;
  id = "";

  constructor(private router: Router, private activatedRoute: ActivatedRoute, 
    private patientCrudService: PatientCrudService, private alertController: AlertController) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.patientCrudService.getPatientDetail(this.id).subscribe(
      result => {
        this.patientDetail = result[0];
      }
    );
  }

  viewClinicalRecords() {
    let navigationExtras: NavigationExtras = {
      state: {
        patientDetailId: this.patientDetail._id
      }
    };
    this.router.navigate(['viewclinicalrecords'], navigationExtras);
  }

  async deletePatient() {    
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Confirm!!!',
        message: 'Are you sure you want to delete this patient?',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            id: 'cancel-button',
            handler: (blah) => {
              console.log('Confirm Cancel');
            }
          }, {
            text: 'Okay',
            id: 'confirm-button',
            handler: () => {
              this.patientCrudService.deletePatient(this.id)

            }
          }
        ]
      });
  
      await alert.present();
    
  }

}
