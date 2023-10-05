import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstWorkshopComponent } from './pages/first-workshop/first-workshop.component';
import { CssWorkshopComponent } from './pages/css-workshop/css-workshop.component';
import { PostListComponent } from './pages/post-list/post-list.component';
import { AddPostComponent } from './pages/add-post/add-post.component';
import { PostDetailComponent } from './pages/post-detail/post-detail.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { authGuard } from './components/guards/auth.guard';

const routes: Routes = [
  { path: '', component: FirstWorkshopComponent },
  { path: 'css', component: CssWorkshopComponent },
  { path: 'addpost', component: AddPostComponent },
  { path: 'post-detail/:id', component: PostDetailComponent },
  { path: 'posts', component: PostListComponent, canActivate: [authGuard] },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
