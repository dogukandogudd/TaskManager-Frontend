import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  tasks: Task[] = [];
  currentTask: Task;
  dataLoaded = false;
  filterText="";

  constructor(
    private taskService: TaskService,
    private activedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activedRoute.params.subscribe((params) => {
      if (params['locationId']) {
        this.getTasksByLocation(params['locationId']);
      }
      if (params['statusId']) {
        this.getTasksByStatus(params['statusId']);
      } else {
        this.getTasks();
      }
    });
  }

  getTasks() {
    this.taskService.getTasks().subscribe((response) => {
      this.tasks = response.data;
      this.dataLoaded = true;
    });
  }

  getTasksByLocation(locationId: number) {
    this.taskService.getTasksByLocation(locationId).subscribe((response) => {
      this.tasks = response.data;
      this.dataLoaded = true;
    });
  }

  getTasksByStatus(statusId: number) {
    this.taskService.getTasksByStatus(statusId).subscribe((response) => {
      this.tasks = response.data;
      this.dataLoaded = true;
    });
  }

  setCurrentTask(task: Task) {
    this.currentTask = task;
  }

  getCurrentTaskClass(task: Task) {
    if (task == this.currentTask) {
      return 'list-group-item list-group-item-primary d-flex justify-content-between align-items-start';
    } else {
      return 'list-group-item d-flex justify-content-between align-items-start';
    }
  }
}
