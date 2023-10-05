import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetAllPostModel } from 'src/app/models/post/getPostModel';
import { PostService } from 'src/app/services/post.service';

@Component({
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  postId!: number;
  post!: GetAllPostModel;

  constructor(private activatedRoute: ActivatedRoute, private postService: PostService,
    private router: Router) {

  }

  ngOnInit(): void {
    this.getIdFromRoute();
  }

  getIdFromRoute() {
    // this.activatedRoute.queryParams.subscribe((params) => {
    //   if (!params['id'] || params['id'] <= 0) {
    //     this.router.navigateByUrl("/posts");
    //     return;
    //   }
    //   this.postId = params['id'];
    //   this.getDetailsFromApi();
    // })

    this.activatedRoute.params.subscribe((params) => {
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
