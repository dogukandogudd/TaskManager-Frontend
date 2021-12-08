import { Component, OnInit } from '@angular/core';
import { Status } from 'src/app/models/status';
import { StatusService } from 'src/app/services/status.service';
import { Location } from 'src/app/models/location';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  locations: Location[] = [];
  currentLocation: Location;
  dataLoaded =false;

  status: Status[] = [];
  currentStatus:Status;

  currCollapse:"collapse";

  constructor(
    private locationService:LocationService,
    private statusService: StatusService
    ) { }

  ngOnInit(): void {
    this.getLocation();
    this.getStatus();
  }

  getLocation() {
    this.locationService.getLocation().subscribe((response) => {
      this.locations = response.data;
      this.dataLoaded=true;
    });
  }

  setCurrentLocation(location: Location) {
    this.currentLocation=location;
    console.log(location.locationName)
 }

 getCurrentLocationClass(location: Location) {
  if(location==this.currentLocation){
    return "list-group-item list-group-item-action active"
  }
  else{
    return "list-group-item list-group-item-action"
  }
}

getStatus(){
  this.statusService.getStatus().subscribe((response) => {
    this.status = response.data;
    this.dataLoaded=true;
  });
}



setCurrentStatus(status: Status) {
  this.currentStatus=status;
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

currentFilter(){
return this.currCollapse
}
changed(){
  console.log("object")
}

}
