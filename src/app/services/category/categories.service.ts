import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import ICategory from 'src/app/types/category';
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private apiUrl = 'http://localhost:8080/api/categories'

  constructor(private http: HttpClient) { }

  GetAllCategories(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(this.apiUrl)
  }

  GetOneCategories(id: string): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(`${this.apiUrl}/${id}`)
  }

  CreateCategories(data: ICategory[]): Observable<ICategory[]> {
    return this.http.post<ICategory[]>(`${this.apiUrl}`, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })
  }

  UpdateCategories(id: string, data: ICategory[]): Observable<ICategory[]> {
    return this.http.put<ICategory[]>(`${this.apiUrl}/${id}`, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })
  }
  RemoveCategories(id: string): Observable<ICategory[]> {
    return this.http.delete<ICategory[]>(`${this.apiUrl}/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })
  }

}