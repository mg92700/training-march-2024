import { Component, inject } from '@angular/core';
import { map } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent  {
  protected post$ = inject(ActivatedRoute).data.pipe(
    map(res => res['post'])
  );
}
