import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private router: Router, private employeeService: EmployeeService, private http: HttpClient) { }

  employee: Employee = new Employee();
  checkPassword: String;
  exists:boolean=true;



  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.employee);
    this.employeeService.registerEmployee(this.employee).subscribe(data => {
      console.log(data);});
      this.router.navigate(['/login']);
    }

    logout(){
      this.router.navigate(['/login']);
    }

  }



