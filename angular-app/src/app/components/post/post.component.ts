import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PostService } from '../../services/post.service';

import { Post } from '../../models/Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post:Post;

  constructor(
    private route:ActivatedRoute,
    private _postService:PostService,
    private location: Location){}

  ngOnInit(){
    const id = +this.route.snapshot.paramMap.get('id');
    //console.log(id);
    this._postService.getPost(id).subscribe(post => this.post = post);
  }
}