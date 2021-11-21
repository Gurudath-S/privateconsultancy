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
  employeeExists: boolean;



  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.employee);

    //verified registration
   this.employeeService.verifyEmployeeExists(this.employee.email).subscribe(
      (data: boolean) => {
        this.employeeExists = data;
        this.register();
      });
      

  }

  register() {
    if(this.employeeExists){
      alert("Email already exists");
    }
    else{
      confirm("Ensure correctness of data before registration");
      if(this.checkPassword!=this.employee.password){
        alert("Passwords do not match");
      }
      else{
         this.employeeService.registerEmployee(this.employee).subscribe(data => {
      console.log(data);});
        this.router.navigate(['/login']);
      }
      
      
    

    }
  }



}