import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LocationComponent } from './components/location/location.component';
import { StatusComponent } from './components/status/status.component';
import { TaskAddComponent } from './components/task-add/task-add.component';
import { TaskComponent } from './components/task/task.component';


const routes: Routes = [
  {path:"",pathMatch:"full",component:TaskComponent},
  {path:"task",component:TaskComponent},
  {path:"task/add",component:TaskAddComponent},
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
