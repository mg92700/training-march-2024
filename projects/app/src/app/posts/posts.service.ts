import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './models/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private http = inject(HttpClient);

  getAll(): Observable<Post[]> {
    return this.http.get<Post[]>('/api/posts');
  }

  getById(id: number): Observable<Post> {
    return this.http.get<Post>(`/api/posts/${id}`);
  }
}
