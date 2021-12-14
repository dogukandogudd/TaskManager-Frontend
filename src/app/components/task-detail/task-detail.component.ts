import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/models/task';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css'],
})
export class TaskDetailComponent implements OnInit {
  details: Task;
  dataLoaded = false;
  constructor(
    private taskService: TaskService,
    private activedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activedRoute.params.subscribe((params) => {
      if (params['taskId']) {
        this.getById(params['taskId']);
      } else {
        // this.getTasks();
      }
    });
  }

  getById(taskId: number) {
    this.taskService.getById(taskId).subscribe((response) => {
      this.details = response.data;
      this.dataLoaded = true;
      console.log(response.data)
      console.log(this.details)
    });
  }
}
