import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import IUser from 'src/app/types/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080/api/users'

  constructor(private http: HttpClient) { }

  GetAllUser(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.apiUrl)
  }

  GetOneUser(id: string): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${this.apiUrl}/${id}`)
  }

  CreateUser(data: IUser[]): Observable<IUser[]> {
    return this.http.post<IUser[]>(`${this.apiUrl}`, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })
  }

  UpdateUser(id: string, data: IUser[]): Observable<IUser[]> {
    return this.http.put<IUser[]>(`${this.apiUrl}/${id}`, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })
  }
  RemoveUser(id: string): Observable<IUser[]> {
    return this.http.delete<IUser[]>(`${this.apiUrl}/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })
  }

}