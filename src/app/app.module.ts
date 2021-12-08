import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { NaviComponent } from './components/navi/navi.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { TaskComponent } from './components/task/task.component';
import { TodoComponent } from './components/todo/todo.component';
import { StatusComponent } from './components/status/status.component';
import { LocationComponent } from './components/location/location.component';
import { SearchComponent } from './components/search/search.component';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';

import{ToastrModule}from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { TaskAddComponent } from './components/task-add/task-add.component';
import { FilterComponent } from './components/filter/filter.component'


@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    FooterComponent,
    MainComponent,
    TaskComponent,
    TodoComponent,
    StatusComponent,
    LocationComponent,
    SearchComponent,
    FilterPipePipe,
    TaskAddComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
