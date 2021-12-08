import { Component, OnInit } from '@angular/core';
import { View } from 'src/app/models/view';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
   currentView: View;
  views = [
    {id:1, title: 'Günlük Görevler', routerLink: '/day' },
    {id:2, title: 'Haftalık Görevler', routerLink: '/week' },
    {id:3, title: 'Aylık Görevler', routerLink: '/month' },
  ];
  constructor() {}

  ngOnInit(): void {}

  setCurrentView(views: View) {
     this.currentView=views;
  }

  getCurrentViewClass(views: View) {
    if(views==this.currentView){
      return "nav-link active "
    }
    else{
      return "nav-link "
    }
 }
}
