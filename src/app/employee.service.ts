import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employee: Employee=new Employee();

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>("http://localhost:8080/employees");
  }

  getEmployeeByEmail(email: string): Observable<Employee> {
   return this.http.get<Employee>(`http://localhost:8080/login/`+email);
  }

  registerEmployee(employee: Employee): Observable<Employee> {
   return this.http.post<Employee>(`http://localhost:8080/employees`, employee);
  }

  checkEmailExists(email: string): Observable<boolean> {
    return this.http.get<boolean>(`http://localhost:8080/employees/checkEmailExists`+email);
  }

}

