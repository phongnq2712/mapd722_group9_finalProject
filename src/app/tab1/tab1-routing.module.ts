// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { Tab1Page } from './tab1.page';

// const routes: Routes = [
//   {
//     path: '',
//     component: Tab1Page,
//   }
// ];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
// export class Tab1PageRoutingModule {}



import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';
import { viewtasks } from '../viewtasks/viewtasks.component';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path: 'addtask',
    component: viewtasks
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class tab1PageRoutingModule {}

//export class Tab2PageRoutingModule {}
