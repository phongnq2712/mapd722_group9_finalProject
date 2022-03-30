import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClinicalRecordsCrudService } from '../../services/clinicalRecordsCrud.service';

@Component({
  selector: 'app-updateclinicalrecords',
  templateUrl: './updateclinicalrecords.page.html',
  styleUrls: ['./updateclinicalrecords.page.scss'],
})
export class UpdateclinicalrecordsPage implements OnInit {

  patientID: any;
  clinicalRecordsDetail : any;
  public bloodPressure:string;
  public respiratoryRate:string;
  public bloodOxygenLevel:string;
  public heartBeatRate:string;
  public clinicalRecordId: string;

  constructor(private route: ActivatedRoute, private router: Router,
    private clinicalRecordsCrudService: ClinicalRecordsCrudService) { 
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.patientID = this.router.getCurrentNavigation().extras.state.patientId;
       
        this.clinicalRecordsCrudService.getClinicalRecordsDetail(this.patientID).subscribe(
          result => {
            this.clinicalRecordsDetail = result[0];
            this.bloodPressure = this.clinicalRecordsDetail.bloodPressure
            this.respiratoryRate = this.clinicalRecordsDetail.respiratoryRate
            this.bloodOxygenLevel = this.clinicalRecordsDetail.bloodOxygenLevel
            this.heartBeatRate = this.clinicalRecordsDetail.heartBeatRate
            this.clinicalRecordId = this.clinicalRecordsDetail._id
          }
        );
      }
    });
  }

  ngOnInit() {

  }

  updateCR() {
    let data = {
      bloodPressure: this.bloodPressure,
      respiratoryRate: this.respiratoryRate,
      bloodOxygenLevel: this.bloodOxygenLevel,
      heartBeatRate: this.heartBeatRate,
      currentPatientId: this.patientID,
      id: this.clinicalRecordId
    };
    this.clinicalRecordsCrudService.updateClinicalRecords(data);
  }

}
