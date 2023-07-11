import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import IContact from 'src/app/types/contact';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = 'http://localhost:8080/api/contacts'

  constructor(private http: HttpClient) { }

  GetAllContact(): Observable<IContact[]> {
    return this.http.get<IContact[]>(this.apiUrl)
  }

  GetOneContact(id: string): Observable<IContact[]> {
    return this.http.get<IContact[]>(`${this.apiUrl}/${id}`)
  }

  CreateContact(data: IContact[]): Observable<IContact[]> {
    return this.http.post<IContact[]>(`${this.apiUrl}`, data)
  }

  UpdateContact(id: string, data: IContact[]): Observable<IContact[]> {
    return this.http.put<IContact[]>(`${this.apiUrl}/${id}`, data,{
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })

  }
  RemoveContact(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    });
  }

}