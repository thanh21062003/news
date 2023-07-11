import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import IComment from 'src/app/types/comment';
@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private apiUrl = 'http://localhost:8080/api/comments'

  constructor(private http: HttpClient) { }

  GetAllComment(): Observable<IComment[]> {
    return this.http.get<IComment[]>(this.apiUrl)
  }

  GetOneComment(id: string): Observable<IComment[]> {
    return this.http.get<IComment[]>(`${this.apiUrl}/${id}`)
  }

  CreateComment(data: IComment[]): Observable<IComment[]> {
    return this.http.post<IComment[]>(`${this.apiUrl}`, data)
  }

  Updatecomment(id: string, data: IComment[]): Observable<IComment[]> {
    return this.http.put<IComment[]>(`${this.apiUrl}/${id}`, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })
  }
  RemoveComment(id: string): Observable<IComment[]> {
    return this.http.delete<IComment[]>(`${this.apiUrl}/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })
  }

}