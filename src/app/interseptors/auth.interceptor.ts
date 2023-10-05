import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, catchError, finalize, retry, tap } from 'rxjs';
import { LoadingService } from '../services/loading.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private loadingService: LoadingService) { }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this.loadingService.startLoading();
    let newRequest = request.clone({
      setHeaders: {
        Authorization: 'Bearer etiya',
      },
    });
    return next.handle(newRequest).pipe(
      finalize(() => {
        this.loadingService.stopLoading();
      }),
      catchError((err) => {
        console.log('Interceptordan yakalanan hata:', err);
        throw err;
      }),
      tap((next) => {
        console.log(next);
      }),
      retry(2)
    );
  }
}