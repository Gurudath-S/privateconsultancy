import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Certification } from './certification';
import { Employee } from './employee';
import { Skill } from './skill';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 

  employee: Employee=new Employee();

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>("http://localhost:8080/employees");
  }

  getEmployeeById(id: number): Observable<Employee> {
    return this.http.get<Employee>(`http://localhost:8080/employees/${id}`);
  }

  getEmployeeByEmail(email: string): Observable<Employee> {
   return this.http.get<Employee>(`http://localhost:8080/employees/email/${email}`);
  }

  registerEmployee(employee: Employee): Observable<Employee> {
   return this.http.post<Employee>(`http://localhost:8080/employees`, employee);
  }

  getSkillsByEmployeeId(id: number): Observable<Skill[]> {;
    return this.http.get<Skill[]>(`http://localhost:8080/employees/skills/${id}`);
  }

  addSkillByEmployeeId(id: number, skill: Skill): Observable<Skill> {
    return this.http.put<Skill>(`http://localhost:8080/employees/skills/${id}`, skill);
  }

  getCertificationsByEmployeeId(id: number): Observable<Certification[]> {
    return this.http.get<Certification[]>(`http://localhost:8080/employees/certifications/${id}`);
  }

  addCertificationByEmployeeId(id: number, certification: Certification): Observable<Certification> {
    return this.http.put<Certification>(`http://localhost:8080/employees/certifications/${id}`, certification);
  }

}

