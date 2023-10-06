import { Pipe, PipeTransform } from '@angular/core';
import { GetAllPostModel } from '../models/post/getPostModel';

@Pipe({
  name: 'searchPost'
})
export class SearchPostPipe implements PipeTransform {

  transform(value: GetAllPostModel[], searchText: string): GetAllPostModel[] {
    if (searchText.length < 3) return value;
    return value.filter((post) => post.title.includes(searchText));
  }
}