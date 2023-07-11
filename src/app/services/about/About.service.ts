import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import IAbout from 'src/app/types/about';
@Injectable({
  providedIn: 'root'
})
export class AboutService {

  private apiUrl = 'http://localhost:8080/api/abouts'

  constructor(private http: HttpClient) { }

  GetAllAbout(): Observable<IAbout[]> {
    return this.http.get<IAbout[]>(this.apiUrl)
  }

  GetOneAbout(id: string): Observable<IAbout[]> {
    return this.http.get<IAbout[]>(`${this.apiUrl}/${id}`)
  }

  CreateAbout(data: IAbout[]): Observable<IAbout[]> {
    return this.http.post<IAbout[]>(`${this.apiUrl}`, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })
  }

  UpdateAbout(id: string, data: IAbout[]): Observable<IAbout[]> {
    return this.http.put<IAbout[]>(`${this.apiUrl}/${id}`, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })
  }
  RemoveAbout(id: string): Observable<IAbout[]> {
    return this.http.delete<IAbout[]>(`${this.apiUrl}/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })
  }
}