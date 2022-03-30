import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateclinicalrecordsPage } from './updateclinicalrecords.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateclinicalrecordsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateclinicalrecordsPageRoutingModule {}
