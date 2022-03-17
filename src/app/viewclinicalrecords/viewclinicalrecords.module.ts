import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewclinicalrecordsPageRoutingModule } from './viewclinicalrecords-routing.module';

import { ViewclinicalrecordsPage } from './viewclinicalrecords.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewclinicalrecordsPageRoutingModule
  ],
  declarations: [ViewclinicalrecordsPage]
})
export class ViewclinicalrecordsPageModule {}
