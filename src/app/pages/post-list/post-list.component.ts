import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  constructor(private postService: PostService) {

  }
  ngOnInit(): void {
    this.fetchPosts();
  }
  fetchPosts() {
    this.postService.getAll().subscribe((response) => {
      console.log(response);
    })
  }

}
