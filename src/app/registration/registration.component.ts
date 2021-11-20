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

  newemployee: Employee = new Employee();
  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.newemployee.email);
    console.log(this.employeeService.getEmployeeByEmail(this.newemployee.email));
    if(this.employeeService.getEmployeeByEmail(this.newemployee.email)==null){
      this.employeeService.registerEmployee(this.newemployee);
      this.router.navigate(['/login']);
    }

    else{
      alert("Email already exists");
    }

}
}
