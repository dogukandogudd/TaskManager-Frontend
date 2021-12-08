import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Status } from '../models/status';

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  apiUrl = 'https://localhost:44300/api/';
  constructor(private httpClient: HttpClient) {}

  getStatus():Observable<ListResponseModel<Status>> {
    let newPath =this.apiUrl+"status/getall"
   return this.httpClient.get<ListResponseModel<Status>>(newPath);
  }
}
