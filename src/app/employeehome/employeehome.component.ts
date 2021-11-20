import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeupdateComponent } from '../employeeupdate/employeeupdate.component';

@Component({
  selector: 'app-employeehome',
  templateUrl: './employeehome.component.html',
  styleUrls: ['./employeehome.component.css']
})
export class EmployeehomeComponent implements OnInit {


  @Input() employee: Employee;

  constructor(private router: Router, private dialogRef: MatDialog) { }

  ngOnInit(): void {
    
    console.log(this.employee);
  }
  updateEmployee(){
    this.router.navigate(['/update']);
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  openDialog(): void {
    this.dialogRef.open(EmployeeupdateComponent);
  }

 


}



