import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';

@Component({
  selector: 'app-employeeupdate',
  templateUrl: './employeeupdate.component.html',
  styleUrls: ['./employeeupdate.component.css']
})
export class EmployeeupdateComponent implements OnInit {
  IsmodelShow: boolean=false;
  employee: Employee = new Employee();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  saveUpdate(){
    this.close();
    this.router.navigate(['/employeehome']);
  }
 

  close() {
    this.IsmodelShow=true;// set false while you need open your model popup
   // do your more code
}

}
