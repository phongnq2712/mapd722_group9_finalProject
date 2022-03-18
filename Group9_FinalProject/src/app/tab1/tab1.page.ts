import { Component, OnInit } from '@angular/core';
import { TaskCrudService } from '../../services/taskCrud.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from '../../services/storage-service.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  data: Observable<any>;
  tasks: Observable<any>;
  currentUserId: string;

  constructor(private route: ActivatedRoute, private router: Router, 
    private taskCrudService: TaskCrudService,
    public storageService: StorageService) {}

  ngOnInit(){
    this.storageService.get('userId').then(userId => {
      this.currentUserId = userId
      this.tasks = this.taskCrudService.loadAllTasks(this.currentUserId)
    })
    
  }

  addTask() {
    this.router.navigate(['/groupnine/task/addtask']);
  }
}
