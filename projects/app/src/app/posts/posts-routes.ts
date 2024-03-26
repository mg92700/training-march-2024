import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';
import { AuthorComponent } from './author/author.component';
import { postResolver } from './resolvers/post.resolver';
import { Route } from '@angular/router';

export default [
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
] as Route[];
