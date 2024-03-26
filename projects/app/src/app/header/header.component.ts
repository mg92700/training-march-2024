import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthorService } from '../posts/author.service';
import { PostsService } from '../posts/posts.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    standalone: true,
    imports: [RouterLink]
})
export class HeaderComponent  {
  protected selectedPosts = inject(PostsService).selectedPosts;
  protected selectedAuthors = inject(AuthorService).selectedAuthor;


}
