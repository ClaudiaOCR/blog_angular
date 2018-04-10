import { Component } from '@angular/core';
import { Post } from './post';
import { PostArray } from './postArray';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Bienvenue sur ce blog!';
  posts : Post[] = [];
  infosPost;

  constructor() {
    this.infosPost = PostArray;

    for (let info of this.infosPost) {
      var post = new Post();
      post.title = info.title;
      post.content = info.content;
      post.created_at = info.created_at;
      this.posts.push(post);
    }
  }
}
