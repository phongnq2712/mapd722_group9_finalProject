import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewclinicalrecordsPage } from './viewclinicalrecords.page';

const routes: Routes = [
  {
    path: '',
    component: ViewclinicalrecordsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewclinicalrecordsPageRoutingModule {}
