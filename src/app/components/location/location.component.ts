import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Location } from 'src/app/models/location';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  locations: Location[] = [];
  currentLocation: Location;
  dataLoaded =false;

  constructor(private locationService:LocationService,
    private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.getLocation();
  }

  getLocation() {
    this.locationService.getLocation().subscribe((response) => {
      this.locations = response.data;
      this.dataLoaded=true;
    });
  }

  setCurrentLocation(location: Location) {
    this.currentLocation=location;
    this.toastrService.info('Location is displaying ', location.locationName);
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

}
