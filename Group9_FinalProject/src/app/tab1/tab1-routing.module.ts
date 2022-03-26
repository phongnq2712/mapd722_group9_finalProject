
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';
// import { viewtasks } from '../viewtasks/viewtasks.component';
import {TaskDetailsComponent} from './task-details/task-details.component';
import {AddTaskPage} from '../add-task/add-task.page';
import { UpdateTaskPage } from '../update-task/update-task.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path: 'addtask',
    component: AddTaskPage
  },
  //{ path: 'addtask', component: AddtaskComponent},
  { path: 'task/:id', component: TaskDetailsComponent},
  { path: 'updateTask/:id', component: UpdateTaskPage}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}

//export class Tab2PageRoutingModule {}
