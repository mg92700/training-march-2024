import { Component, Input } from '@angular/core';
import { Post } from '../models/post';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css'],
    standalone: true,
    imports: [NgIf]
})
export class PostComponent  {
  @Input({required: true})
  protected post!: Post;
}
