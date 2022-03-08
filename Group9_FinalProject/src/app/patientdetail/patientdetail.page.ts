import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientCrudService } from '../../services/patientCrud.service';
import { Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-patientdetail',
  templateUrl: './patientdetail.page.html',
  styleUrls: ['./patientdetail.page.scss'],
})
export class PatientdetailPage implements OnInit {

  patientDetail = null;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, 
    private patientCrudService: PatientCrudService) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.patientCrudService.getPatientDetail(id).subscribe(
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

}
