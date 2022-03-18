import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ToastController } from '@ionic/angular';
import { AlertService } from 'src/services/alert-service.service';
import { Router } from '@angular/router';


export class Task {
  taskId: number;
  taskName: string;
  time: string;
  taskStatus: string;
}


@Injectable({
  providedIn: 'root'
})


export class TaskCrudService {
  apiHost = 'http://127.0.0.1:5000';
  constructor(public toastController: ToastController, private http: HttpClient,
    private alertService: AlertService, private router: Router) { }

  loadAllTasks(data):Observable<any>{
    let userId = data
    return this.http.get(`${this.apiHost}/users/` + userId + "/tasks").pipe(
      map(results => results)
    );
  }

  getTaskDetail(id) {
    return this.http.get(`${this.apiHost}/tasks/` + id);
  }

  addNewTask(data) {      
    this.http.post(`${this.apiHost}/tasks`, data)
    .subscribe(data => {
      console.log(data['_body']);
      // Alert message
      this.alertService.genericAlert("Information", "Add new task successfully!")
      this.router.navigate(['/groupnine/tasks/']);
     }, error => {
      console.log(error);
    });

  }

async presentToast(content) {
  const toast = await this.toastController.create({
    message: content,
    duration: 2000
  });
  toast.present();
}

}