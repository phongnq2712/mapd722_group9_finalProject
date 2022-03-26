import { Component, OnInit } from '@angular/core';
import {TaskCrudService} from "../../services/taskCrud.service";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.page.html',
  styleUrls: ['./add-task.page.scss'],
})
export class AddTaskPage implements OnInit {
  public taskName: String;
  public time: String;
  public priority: String;
  public status: String;
  currentUserId;
  constructor(private taskCrudService: TaskCrudService) { }

  ngOnInit() {
    this.currentUserId = localStorage.getItem('userId')
  }

  addTask(){
    console.log(this.taskName);
    let data = {
      taskName: this.taskName,
      time: this.time,
      priority: this.priority,
      status: this.status,
      currentUserId: this.currentUserId
    };
    this.taskCrudService.addNewTask(data);
  }

  selectPriority($event){
    this.priority = $event.target.value;
  }

  selectTaskStatus($event){
    this.status = $event.target.value;
  }
  selectDate($event){
    this.time = $event.target.value;
  }
}

