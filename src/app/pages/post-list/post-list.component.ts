import { Component, OnInit } from '@angular/core';
import { GetAllPostModel } from 'src/app/models/post/getPostModel';
import { LoadingService } from 'src/app/services/loading.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  postList!: GetAllPostModel[];
  today: Date = new Date();
  searchText: string = '';

  constructor(private postService: PostService,
    private loadingService: LoadingService) {

  }
  ngOnInit(): void {
    this.fetchPosts();
    this.loadingService.isLoading$.subscribe((value) => {
      console.log('Globaldeki loading değeri değişti yeni değer: ', value);
    });
  }
  fetchPosts() {
    this.postService.getAll().subscribe((response) => {
      this.postList = response;
    })
  }

}
