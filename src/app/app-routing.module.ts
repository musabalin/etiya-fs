import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstWorkshopComponent } from './pages/first-workshop/first-workshop.component';
import { CssWorkshopComponent } from './pages/css-workshop/css-workshop.component';
import { PostListComponent } from './pages/post-list/post-list.component';
import { AddPostComponent } from './pages/add-post/add-post.component';

const routes: Routes = [
  { path: '', component: FirstWorkshopComponent },
  { path: 'css', component: CssWorkshopComponent },
  { path: 'posts', component: PostListComponent },
  { path: 'addpost', component: AddPostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
