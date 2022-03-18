
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';
// import { viewtasks } from '../viewtasks/viewtasks.component';
import { AddtaskComponent } from '../addtask/addtask.component';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path: 'addtask',
    component: AddtaskComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}

//export class Tab2PageRoutingModule {}
