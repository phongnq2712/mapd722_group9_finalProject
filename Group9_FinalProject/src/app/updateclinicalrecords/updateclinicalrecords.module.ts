import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateclinicalrecordsPageRoutingModule } from './updateclinicalrecords-routing.module';

import { UpdateclinicalrecordsPage } from './updateclinicalrecords.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateclinicalrecordsPageRoutingModule
  ],
  declarations: [UpdateclinicalrecordsPage]
})
export class UpdateclinicalrecordsPageModule {}
