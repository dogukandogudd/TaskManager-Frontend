import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TaskService } from 'src/app/services/task.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css'],
})
export class TaskAddComponent implements OnInit {
  taskAddForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private taskService: TaskService,
    private toastrService: ToastrService,
    private router: Router
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
        this.toastrService.success('Successful', 'Task Added');
        this.router.navigate(['/']);
      })
    } else {
      this.toastrService.error('Your form is missing ', 'Attention ');
    }
  }
}
