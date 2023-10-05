import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor() { }

  startLoading() {
    // setter
    this.isLoading$.next(true);
  }
  stopLoading() {
    this.isLoading$.next(false);
  }
}
