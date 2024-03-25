import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';
import { AuthorComponent } from './author/author.component';
import { postResolver } from './resolvers/post.resolver';

const routes: Route[] = [
  {
    path: '', component: PostsComponent,
    children: [
      {
        path: ':id',
        resolve: {
          post: postResolver
        },
        children: [
          {
            path: '', component: PostComponent
          }, {
            path: '', outlet: 'author', component: AuthorComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PostsRoutingModule { }
