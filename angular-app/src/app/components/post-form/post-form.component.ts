import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Post } from '../../models/Post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  @Input() currentPost:Post;
  @Input() isEdit:boolean;
  @Output() newPost:EventEmitter<Post> = new EventEmitter();
  @Output() updatedPost:EventEmitter<Post> = new EventEmitter();

  constructor(private _postService: PostService){}

  ngOnInit(){
  }

  addPost(title,body){
    if(!title || !body){
      alert('Please make sure you have a title and body.');
    } else {
      this._postService.savePost({title,body} as Post).subscribe
        ((post => {
          this.newPost.emit(post);
        })
      )
    }
  }

  updatePost(){
    this._postService.updatePost(this.currentPost).subscribe(post => {
      console.log(post);
      this.isEdit = false;
      this.updatedPost.emit(post);
    });
  }
}