import { HttpClient } from '@angular/common/http';
import { Injectable, Signal, computed, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Author } from './models/post';
import { PostsService } from './posts.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  private http = inject(HttpClient);
  private postsService = inject(PostsService);
  private selectedPosts = this.postsService.selectedPosts;

  private _selectedAuthor: Signal<Set<number>> = computed(() => new Set<number>(this.selectedPosts().map(post => post.author)))

  public get selectedAuthor() {
    return this._selectedAuthor;
  }

  public getAuthorById(id: number): Observable<Author> {
    return this.http.get<Author>(`/api/authors/${id}`);
  }
}