import { Component, OnInit } from '@angular/core';
import { PatientCrudService } from '../../services/patientCrud.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  patients: Observable<any>;

  constructor(private router: Router, private patientCrudService: PatientCrudService) {}

  ngOnInit(){
    this.patients = this.patientCrudService.loadAllPatients();
  }

  addPatient() {
    this.router.navigate(['/groupnine/patients/addpatient']);
  }

  loadPatientsList(event){
    this.patients = this.patientCrudService.loadAllPatients();
    event.target.complete();
    
  }
}
