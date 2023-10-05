import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetAllPostModel } from 'src/app/models/post/getPostModel';
import { PostService } from 'src/app/services/post.service';

@Component({
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  postId!: number;
  post!: GetAllPostModel;

  constructor(private activatedRoute: ActivatedRoute, private postService: PostService) {

  }

  ngOnInit(): void {
    this.getIdFromRoute();
  }

  getIdFromRoute() {
    this.activatedRoute.queryParams.subscribe((params) => {
      if (!params['id'] || params['id'] <= 0) {
        return;
      }
      this.postId = params['id'];
      this.getDetailsFromApi();
    })
  }
  getDetailsFromApi() {
    this.postService.getById(this.postId).subscribe((response) => {
      this.post = response;
    }
    );
  }

}
