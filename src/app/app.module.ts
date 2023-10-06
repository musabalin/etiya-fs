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
import { JwtModule } from '@auth0/angular-jwt';
import { KdvPipe } from './pipes/kdv.pipe';
import { SearchPostPipe } from './pipes/search-post.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { StoreModule } from '@ngrx/store';
import { StoreDevtools, StoreDevtoolsModule } from '@ngrx/store-devtools';
import { sharedReducers } from './store/shared.reducers';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [AppComponent, DemoComponent, ExampleComponent, CssWorkshopComponent, FirstWorkshopComponent, PostListComponent, AddPostComponent, InputErrorComponent, PostDetailComponent, NotFoundComponent, OverlayLoaderComponent, KdvPipe, SearchPostPipe, HighlightDirective, NavbarComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, ReactiveFormsModule, JwtModule.forRoot({
    config: {
      tokenGetter: () => localStorage.getItem('token'),
    },

  }),
    StoreModule.forRoot(sharedReducers),
    StoreDevtoolsModule.instrument(),],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
