import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts/posts.component';
import { PostsRoutingModule } from './posts-routing.module';
import { PostComponent } from './post/post.component';
import { AuthorComponent } from './author/author.component';

@NgModule({
  imports: [
    CommonModule,
    PostsRoutingModule
  ],
  declarations: [PostsComponent, PostComponent, AuthorComponent]
})
export class PostsModule { }
