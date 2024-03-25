import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Author } from './models/post';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  private http = inject(HttpClient);

  public getAuthorById(id: number): Observable<Author> {
    return this.http.get<Author>(`/api/authors/${id}`);
  }
}