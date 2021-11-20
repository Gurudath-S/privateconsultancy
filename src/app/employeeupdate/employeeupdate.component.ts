import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeeupdate',
  templateUrl: './employeeupdate.component.html',
  styleUrls: ['./employeeupdate.component.css']
})
export class EmployeeupdateComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  saveUpdate(){
    this.router.navigate(['/employeehome']);
  }

}
