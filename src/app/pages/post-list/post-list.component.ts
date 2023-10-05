import { Component, OnInit } from '@angular/core';
import { GetAllPostModel } from 'src/app/models/post/getPostModel';
import { PostService } from 'src/app/services/post.service';

@Component({
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  postList!: GetAllPostModel[];

  constructor(private postService: PostService) {

  }
  ngOnInit(): void {
    this.fetchPosts();
  }
  fetchPosts() {
    this.postService.getAll().subscribe((response) => {
      this.postList = response;
    })
  }

}
