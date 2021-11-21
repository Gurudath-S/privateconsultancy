import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private router: Router, private employeeService: EmployeeService,private http: HttpClient) { }

  employee: Employee = new Employee();

  ngOnInit(): void {
  }

  onSubmit() {
    if(this.employeeService.getEmployeeByEmail(this.employee.email)==null){

      this.http.post(`http://localhost:8080/employees`, this.employee).subscribe(data => {
        console.log(data);
        alert("Registration Successful");
        this.router.navigate(['/login']);
      });
    }

    else{
      alert("Email already exists, try a different one");
    }
   
      // this.employeeService.registerEmployee(this.employee);
      // alert("Registration Successful");
      // this.router.navigate(['/login']);

}
}
