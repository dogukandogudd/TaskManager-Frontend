import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Status } from 'src/app/models/status';
import { StatusService } from 'src/app/services/status.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  status: Status[] = [];
  currentStatus: Status;
  dataLoaded =false;
  constructor(private statusService: StatusService,
    private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.getStatus();

  }

  getStatus(){
    this.statusService.getStatus().subscribe((response) => {
      this.status = response.data;
      this.dataLoaded=true;
    });
  }



  setCurrentStatus(status: Status) {
    this.currentStatus=status;
    this.toastrService.info('Status is displaying ', (status.statusName));
    console.log(status.statusName)

 }
 getCurrentStatusClass(status: Status) {
  if(status==this.currentStatus){
    return "active"
  }
  else{
    return ""
  }
}


}
