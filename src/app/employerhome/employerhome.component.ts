import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employerhome',
  templateUrl: './employerhome.component.html',
  styleUrls: ['./employerhome.component.css']
})
export class EmployerhomeComponent implements OnInit {

  constructor(private router: Router, private employeeService: EmployeeService, private route: ActivatedRoute) { }

  id: number;
  employee: Employee;
  employeeList: Employee[];
  ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
      this.employeeService.getEmployeeById(this.id).subscribe(employee => this.employee = employee);
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
