import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employerhome',
  templateUrl: './employerhome.component.html',
  styleUrls: ['./employerhome.component.css']
})
export class EmployerhomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

}
