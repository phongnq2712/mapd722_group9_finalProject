import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {TaskCrudService} from "../../../services/taskCrud.service";
import {StorageService} from "../../../services/storage-service.service";

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss'],
})
export class TaskDetailsComponent implements OnInit {

  task: any;
  currentUserId: string;
  taskId = ''

  constructor(private route: ActivatedRoute,
              private router: Router,
              private taskCrudService: TaskCrudService,
              public storageService: StorageService,
              ) {}

  ngOnInit(){
    this.currentUserId = localStorage.getItem('userId')
    this.route.params.subscribe(params=> {
      this.taskId = params.id;
      this.taskCrudService.getTaskDetail(this.currentUserId, this.taskId ).subscribe(res=>{
        this.task = res[0];
        console.log(this.task)
      })
    })
  }

  deleteTask() {
    this.taskCrudService.deleteTask( this.taskId, this.currentUserId);
  }
  goToTask() {
    this.router.navigate(['/groupnine/tasks']);
  }
  // updateTask() {
  //   this.taskCrudService.updateTask( this.taskId, this.updateTask);
  // }
  goToUpdateTask() {
    this.router.navigate(['/groupnine/tasks/updateTask',this.taskId]);
  }
}
