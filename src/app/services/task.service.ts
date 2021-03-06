import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  apiUrl = 'https://localhost:44300/api/';
  constructor(private httpClient: HttpClient) {}

  getTasks(): Observable<ListResponseModel<Task>> {
    let newPath = this.apiUrl + 'task/getall';
    return this.httpClient.get<ListResponseModel<Task>>(newPath);
  }

  getById(taskId: number): Observable<SingleResponseModel<Task>> {
    let newPath = this.apiUrl + 'Task/getbyid?taskId=' + taskId;
    return this.httpClient.get<SingleResponseModel<Task>>(newPath);
  }

  getTasksByLocation(locationId: number): Observable<ListResponseModel<Task>> {
    let newPath = this.apiUrl + 'Task/getbylocation?LocationId=' + locationId;
    return this.httpClient.get<ListResponseModel<Task>>(newPath);
  }
  getTasksByStatus(statusId: number): Observable<ListResponseModel<Task>> {
    let newPath = this.apiUrl + 'task/getbystatus?statusId=' + statusId;
    return this.httpClient.get<ListResponseModel<Task>>(newPath);
  }
  add(task: Task) {
    return this.httpClient.post(this.apiUrl + 'Task/add', task);
  }
}
