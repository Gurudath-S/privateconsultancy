import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employerhome',
  templateUrl: './employerhome.component.html',
  styleUrls: ['./employerhome.component.css']
})
export class EmployerhomeComponent implements OnInit {

  constructor(private router: Router, private employeeService: EmployeeService) { }

  employeeList: Employee[];
  ngOnInit(): void {
     this.getEmployees();
  }

  getEmployees(): void {
    this.employeeService.getEmployees().subscribe(employeeList => this.employeeList = employeeList);
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  viewEmployee(id: number) {
    this.router.navigate(['/employeedetails/' + id]);
  }

}
