import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import ICategory from 'src/app/types/category';
@Injectable({
  providedIn: 'root'
})
export class HashtagService {

  private apiUrl = 'http://localhost:8080/api/hashtags'

  constructor(private http: HttpClient) { }

  GetAllHashtag(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(this.apiUrl)
  }

  GetOneHashtag(id: string): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(`${this.apiUrl}/${id}`)
  }

  CreateHashtag(data: ICategory[]): Observable<ICategory[]> {
    return this.http.post<ICategory[]>(`${this.apiUrl}`, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })
  }

  UpdateHashtag(id: string, data: ICategory[]): Observable<ICategory[]> {
    return this.http.put<ICategory[]>(`${this.apiUrl}/${id}`, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })
  }
  RemoveHashtag(id: string): Observable<ICategory[]> {
    return this.http.delete<ICategory[]>(`${this.apiUrl}/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })
  }

}
