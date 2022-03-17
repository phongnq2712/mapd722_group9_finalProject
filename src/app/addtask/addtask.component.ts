import { Component, OnInit } from '@angular/core';
import { TaskCrudService } from '../../services/patientCrud.service';
@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.scss'],
})
export class AddtaskPage implements OnInit {

  public taskId: String;
  public taskName: String;
  public time: number;
  public taskStatus: string;

  constructor(private patientCrudService: TaskCrudService) { }

  ngOnInit() {
  }

  addTask() {
    let data = {
      taskId: this.taskId,
      taskName: this.taskName,
      time: this.time,
      taskStatus: this.taskStatus
    }
    this.taskCrudService.addNewTask(data);
  }
}
