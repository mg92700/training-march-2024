import { Component, Input } from '@angular/core';
import { Post } from '../models/post';


@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css'],
    standalone: true,
    imports: []
})
export class PostComponent  {
  @Input({required: true})
  protected post!: Post;
}
