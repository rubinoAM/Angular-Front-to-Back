import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/Post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  constructor(private _postService: PostService){}

  ngOnInit(){
  }

  addPost(title,body){
    if(!title || !body){
      alert('Please make sure you have a title and body.');
    } else {
      this._postService.savePost({
        title,
        body,
      } as Post).subscribe(
        (post => {console.log(post)})
      )
    }
  }
}
