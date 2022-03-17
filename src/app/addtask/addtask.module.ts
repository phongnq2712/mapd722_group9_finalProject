import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddtaskPageRoutingModule } from './addtask-routing.module';

import { AddtaskPage } from './addtask.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddpatientPageRoutingModule
  ],
  declarations: [AddtaskPage]
})
export class AddpatientPageModule {}
