import { Component, Input } from '@angular/core';
import { Post } from '../models/post';
import { TplCardComponent } from '../../termplate/tpl-card/tpl-card.component';


@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css'],
    standalone: true,
    imports: [TplCardComponent]
})
export class PostComponent  {
  @Input({required: true})
  protected post!: Post;
}
