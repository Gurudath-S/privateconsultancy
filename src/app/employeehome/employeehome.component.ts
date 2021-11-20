import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';

@Component({
  selector: 'app-employeehome',
  templateUrl: './employeehome.component.html',
  styleUrls: ['./employeehome.component.css']
})
export class EmployeehomeComponent implements OnInit {


  @Input() employee: Employee=new Employee();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  updateEmployee(){
    this.router.navigate(['/update']);
  }

}