import { Component, OnInit } from '@angular/core';
import { PatientCrudService } from '../../services/patientCrud.service';
@Component({
  selector: 'app-addpatient',
  templateUrl: './addpatient.page.html',
  styleUrls: ['./addpatient.page.scss'],
})
export class AddpatientPage implements OnInit {

  public firstName: String;
  public lastName: String;
  public age: number;
  public gender: String;
  public healthInsuranceNo: String;
  public phoneNo: String;
  public email: String;

  constructor(private patientCrudService: PatientCrudService) { }

  ngOnInit() {
  }

  addPatient() {
    let data = {
      firstName: this.firstName,
      lastName: this.lastName,
      age: this.age,
      gender: this.gender,
      healthInsuranceNo: this.healthInsuranceNo,
      phoneNo: this.phoneNo,
      email: this.email
    }
    this.patientCrudService.addNewPatient(data)
  }

  userTypeChanged($event){
    this.gender = $event.target.value;
  }
}
