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

  constructor(private router: Router, private employeeService: EmployeeService) { }

  employee: Employee = new Employee();
  ngOnInit(): void {
  }

  onSubmit() {
    this.employeeService.registerEmployee(this.employee).subscribe(
      data => {
        this.employeeService.employee = data;
        console.log(this.employee);
        alert("Registration Successful");
        this.router.navigate(['/login']);
      },
      error => {
        alert("Registration Failed");
      }
    );
  }

}
