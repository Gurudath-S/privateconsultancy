import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private router: Router, private employeeService: EmployeeService) { }

  newemployee: Employee = new Employee();
  ngOnInit(): void {
  }

  onSubmit() {
    if(this.employeeService.getEmployeeByEmail(this.newemployee.email) == null){
    this.employeeService.registerEmployee(this.newemployee).subscribe(
      data => {
        this.employeeService.employee = data;
        console.log(this.newemployee);
        alert("Registration Successful");
        this.router.navigate(['/login']);
      },
      error => {
        alert("Registration Failed");
      }
    );
  }
  else{
    alert("Email already exists");
  }

}
}
