import { Component, inject } from '@angular/core';
import { PostsService } from '../posts.service';
import { NgIf, NgFor, AsyncPipe } from '@angular/common';
import { RouterOutlet, RouterLinkActive, RouterLink } from '@angular/router';

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.css'],
    standalone: true,
    imports: [RouterOutlet, NgIf, NgFor, RouterLinkActive, RouterLink, AsyncPipe]
})
export class PostsComponent {
  protected posts$ = inject(PostsService).getAll();

}
