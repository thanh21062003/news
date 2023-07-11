import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import IPost from 'src/app/types/post';
@Injectable({
  providedIn: 'root'
})
export class PostService {


  private apiUrl = 'http://localhost:8080/api/posts'

  constructor(private http: HttpClient) { }

  GetAllPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(this.apiUrl)
  }

  GetOnePosts(id: string): Observable<IPost[]> {
    return this.http.get<IPost[]>(`${this.apiUrl}/${id}`)
  }
  searchArticles(term: any): Observable<IPost[]> {
    return this.http.get<IPost[]>(`${this.apiUrl}?title=${term}`);
  }

  CreatePosts(data: IPost[]): Observable<IPost[]> {
    return this.http.post<IPost[]>(`${this.apiUrl}`, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })
  }

  UpdatePosts(id: string, data: IPost[]): Observable<IPost[]> {
    return this.http.put<IPost[]>(`${this.apiUrl}/${id}`, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })
  }
  RemovePosts(id: string): Observable<IPost[]> {
    return this.http.delete<IPost[]>(`${this.apiUrl}/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })
  }
}