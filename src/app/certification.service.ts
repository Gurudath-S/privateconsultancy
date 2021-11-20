import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Certificate } from 'crypto';
import { Observable } from 'rxjs';
import { Certification } from './certification';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class CertificationService {

  constructor(private http: HttpClient) { }

  getCertification(employee: Employee): Observable< Certification>{
    return this.http.get<Certification>(`http://localhost:8080/employee/`+ employee.id+`/certification`);
  }

  addCertification(employee: Employee,certificate: Certification): Observable<Certification>{
    return this.http.post<Certification>(`http://localhost:8080/employee/`+ employee.id+`/certification`,certificate);
  }

  deleteCertification(employee: Employee,certificate: Certification): Observable<Certification>{
    return this.http.delete<Certification>(`http://localhost:8080/employee/`+ employee.id+`/certification/`+certificate.id);
  }
}
