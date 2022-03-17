
import { Component, OnInit } from '@angular/core';
import { taskCrudService } from '../../services/taskCrud.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

tasks: Observable<any>;

  constructor(private router: Router, private taskCrudService: taskCrudService) {}

  ngOnInit(){
    this.tasks= this.taskCrudService.loadAllTasks();
  }

  addTask() {
    this.router.navigate(['/groupnine/task/addtask']);
  }

  loadTasksList(event){
    this.tasks = this.taskCrudService.loadAllTasks();
    event.target.complete();
    
  }
}
