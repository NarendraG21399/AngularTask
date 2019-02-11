import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeservicesService {

  Url = '../../../../EmployeeDeatails.json';
  constructor(private http: HttpClient) { }
  GetEmployeeDeatails() {
   return  this.http.get(this.Url);
  }
}
