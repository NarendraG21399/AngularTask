import { Component, OnInit } from '@angular/core';
import { AllEmployeeService } from '../Services/AllEmployeeServices/all-employee.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  EmployeeData = [ ];
  constructor(private Employee: AllEmployeeService, private http: HttpClient) {
    this.http.get('http://localhost:8060/Employee').subscribe((data: any) => {
      this.EmployeeData = data;
      console.log(data);
},
err => {
  console.log(err);
}
);


   }

  ngOnInit() {
  }
  delete(id, Name) {
if (confirm('do you want to delete the employee')) {
  const emp = {
    EmployeeId: id,
    EmployeeName: Name
  };
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  this.http.post('http://localhost:8060/EmployeeDelete', emp , httpOptions ).subscribe((data) => {
    console.log(data);
  },
  err => {
    console.log(err);
  }
  );
}
}

Upadate(Id, Name) {
  const emp = {
    EmployeeId: Id,
    EmployeeName: Name
  };
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  this.http.post('http://localhost:8060/EmployeeUpadate', emp , httpOptions ).subscribe((data) => {
    console.log(data);
  },
  err => {
    console.log(err);
  }
  );
}

}
