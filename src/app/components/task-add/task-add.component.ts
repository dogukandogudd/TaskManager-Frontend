import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css'],
})
export class TaskAddComponent implements OnInit {
  taskAddForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    this.createTaskAddForm();
  }

  createTaskAddForm() {
    this.taskAddForm = this.formBuilder.group({
      taskTitle: ['', Validators.required],
      locationId: ['', Validators.required],
      statusId: ['', Validators.required],
      taskCheck: [true, Validators.required],
      taskDescription: ['', Validators.required],
    });
  }
  add() {
    if (this.taskAddForm.valid) {
      let taskModel = Object.assign({}, this.taskAddForm.value);
      console.log(taskModel);
      this.taskService.add(taskModel).subscribe(response=>{
        console.log(response)
        console.log(taskModel);
        console.log('taskeklendi');
      })
    } else {
      console.log('formeksik')
    }
  }
}
