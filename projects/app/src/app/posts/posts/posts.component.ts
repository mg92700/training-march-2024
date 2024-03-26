import { Component, inject } from '@angular/core';
import { PostsService } from '../posts.service';
import { AsyncPipe } from '@angular/common';
import { RouterOutlet, RouterLinkActive, RouterLink } from '@angular/router';
import { Post } from '../models/post';

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.css'],
    standalone: true,
    imports: [RouterOutlet, RouterLinkActive, RouterLink, AsyncPipe]
})
export class PostsComponent {
  private postService = inject(PostsService);
  protected posts$ = this.postService.getAll();

  selectPost(post: Post): void {
    this.postService.addSelectedPost(post);
  }
}
