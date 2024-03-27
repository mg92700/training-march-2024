import { Component, inject } from '@angular/core';
import { PostsService } from '../posts.service';
import { AsyncPipe } from '@angular/common';
import { RouterOutlet, RouterLinkActive, RouterLink } from '@angular/router';
import { Post } from '../models/post';
import { TplCardListComponent } from '../../termplate/tpl-card-list/tpl-card-list.component';
import { LoggerService, provideLogger, LoggerLevel } from 'my-lib';

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.css'],
    standalone: true,
    imports: [RouterOutlet, RouterLinkActive, RouterLink, AsyncPipe, TplCardListComponent],
    providers: [
      provideLogger(LoggerLevel.DEBUG)
    ]
})
export class PostsComponent {
  private postService = inject(PostsService);
  protected posts$ = this.postService.getAll();

  constructor() {
    inject(LoggerService).debug('PostList created');
    inject(LoggerService).error('PostList created');
    inject(LoggerService).warn('PostList created');
    inject(LoggerService).info('PostList created');
  }

  selectPost(post: Post): void {
    this.postService.addSelectedPost(post);
  }
}
