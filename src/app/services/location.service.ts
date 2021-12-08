import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Location } from '../models/location';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  apiUrl = 'https://localhost:44300/api/';
  constructor(private httpClient: HttpClient) { }
  getLocation():Observable<ListResponseModel<Location>> {
    let newPath =this.apiUrl+"location/getall"
   return this.httpClient.get<ListResponseModel<Location>>(newPath);
  }
}
