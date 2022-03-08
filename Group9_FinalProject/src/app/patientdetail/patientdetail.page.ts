import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientCrudService } from '../../services/patientCrud.service';

@Component({
  selector: 'app-patientdetail',
  templateUrl: './patientdetail.page.html',
  styleUrls: ['./patientdetail.page.scss'],
})
export class PatientdetailPage implements OnInit {

  patientDetail = null;

  constructor(private activatedRoute: ActivatedRoute, private patientCrudService: PatientCrudService) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log("patient id:");
    console.log(id);
    this.patientCrudService.getPatientDetail(id).subscribe(
      result => {
        this.patientDetail = result[0];
      }
    );
  }

}
