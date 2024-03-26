import { HttpClient } from '@angular/common/http';
import { Injectable, WritableSignal, inject, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './models/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private http = inject(HttpClient);

  private _selectedPosts : WritableSignal<Post[]> = signal([]);

  public get selectedPosts() {
    return this._selectedPosts.asReadonly();
  }

  getAll(): Observable<Post[]> {
    return this.http.get<Post[]>('/api/posts');
  }

  getById(id: number): Observable<Post> {
    return this.http.get<Post>(`/api/posts/${id}`);
  }

  addSelectedPost(post: Post): void {
    if (!this.selectedPosts().includes(post))
      this._selectedPosts.update(posts => [...posts, post]);
  }
}
