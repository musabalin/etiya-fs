import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoComponent } from './components/demo/demo.component';
import { ExampleComponent } from './components/example/example.component';
import { CssWorkshopComponent } from './pages/css-workshop/css-workshop.component';
import { FirstWorkshopComponent } from './pages/first-workshop/first-workshop.component';
import { PostListComponent } from './pages/post-list/post-list.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AddPostComponent } from './pages/add-post/add-post.component';
import { InputErrorComponent } from './pages/input-error/input-error.component';
import { PostDetailComponent } from './pages/post-detail/post-detail.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { OverlayLoaderComponent } from './components/overlay-loader/overlay-loader.component';
import { AuthInterceptor } from './interseptors/auth.interceptor';


@NgModule({
  declarations: [AppComponent, DemoComponent, ExampleComponent, CssWorkshopComponent, FirstWorkshopComponent, PostListComponent, AddPostComponent, InputErrorComponent, PostDetailComponent, NotFoundComponent, OverlayLoaderComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, ReactiveFormsModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
