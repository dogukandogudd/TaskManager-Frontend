import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LocationComponent } from './components/location/location.component';
import { MainComponent } from './components/main/main.component';
import { StatusComponent } from './components/status/status.component';
import { TaskAddComponent } from './components/task-add/task-add.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';
import { TaskComponent } from './components/task/task.component';


const routes: Routes = [
  {path:"",pathMatch:"full",component:MainComponent},
  // {path:"task",component:TaskComponent},
  {path:"task/add",component:TaskAddComponent},
  {path:"task/detail/:taskId",component:TaskDetailComponent},
  {path:"task/location/:locationId",component:TaskComponent},
  {path:"task/status/:statusId",component:TaskComponent},
  {path:"location",component:LocationComponent},
  {path:"status",component:StatusComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
