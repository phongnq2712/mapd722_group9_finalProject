import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { ClinicalRecordsCrudService } from '../../services/clinicalRecordsCrud.service';
@Component({
  selector: 'app-viewclinicalrecords',
  templateUrl: './viewclinicalrecords.page.html',
  styleUrls: ['./viewclinicalrecords.page.scss'],
})
export class ViewclinicalrecordsPage implements OnInit {

  patientID: any;
  clinicalRecordsDetail : any;

  constructor(private route: ActivatedRoute, private router: Router,
    private clinicalRecordsCrudService: ClinicalRecordsCrudService) { 
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.patientID = this.router.getCurrentNavigation().extras.state.patientDetailId;
       
        this.clinicalRecordsCrudService.getClinicalRecordsDetail(this.patientID).subscribe(
          result => {
            this.clinicalRecordsDetail = result[0];
          }
        );
      }
    });
  }

  ngOnInit() {}

  updateClinicalRecords() {
    let navigationExtras: NavigationExtras = {
      state: {
        patientId: this.patientID,
        clinicalRecordsDetail: this.clinicalRecordsDetail
      }
    };
    this.router.navigate(['updateclinicalrecords'], navigationExtras);
  }

}
