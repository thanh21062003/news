import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import IUser from 'src/app/types/user';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/auth'

  constructor(private http: HttpClient) { }

  Signup(data: IUser[]): Observable<IUser[]> {
    return this.http.post<IUser[]>(`${this.apiUrl}/signup`, data)
  }
  Signin(data: IUser[]): Observable<IUser[]> {
    return this.http.post<IUser[]>(`${this.apiUrl}/signin`, data)
  }
  ForgotPassword(data: IUser[]): Observable<IUser[]> {
    return this.http.post<IUser[]>(`${this.apiUrl}/forgotpassword`, data)
  }
}