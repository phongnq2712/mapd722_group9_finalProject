import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskCrudService } from '../../services/taskCrud.service';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.page.html',
  styleUrls: ['./update-task.page.scss'],
})
export class UpdateTaskPage implements OnInit {

  public taskName: String;
  public time: String;
  public priority: String;
  public status: String;
  currentUserId;
  taskId;
  taskDetails;
  constructor(private taskCrudService: TaskCrudService,
    private route: ActivatedRoute) { }

  ngOnInit(){
    this.currentUserId = localStorage.getItem('userId');
    this.route.params.subscribe(params=> {
      this.taskId = params.id;
      this.taskCrudService.getTaskDetail(this.currentUserId, this.taskId ).subscribe(res=>{
        this.taskDetails = res[0];
        console.log(this.taskDetails);
        this.taskName = this.taskDetails.taskName;
        this.time = this.taskDetails.time;
        this.priority = this.taskDetails.priority;
        this.status = this.taskDetails.status;
      });
    });
  }

  updateTask(){
    console.log(this.taskName);
    let data = {
      taskName: this.taskName,
      time: this.time,
      priority: this.priority,
      status: this.status,
      currentUserId: this.currentUserId,
      id: this.taskId
    };
    this.taskCrudService.updateTask(data);
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
