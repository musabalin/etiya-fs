import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isAuthenticate(): boolean {debugger
    let token = localStorage.getItem('token');
    if (!token) {
      return false;
    }
    return true;
  }
}
