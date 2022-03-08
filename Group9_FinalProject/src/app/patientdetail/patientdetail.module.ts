import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PatientdetailPageRoutingModule } from './patientdetail-routing.module';

import { PatientdetailPage } from './patientdetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PatientdetailPageRoutingModule
  ],
  declarations: [PatientdetailPage]
})
export class PatientdetailPageModule {}
