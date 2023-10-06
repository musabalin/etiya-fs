import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private jwtHelper: JwtHelperService) { }

  isAuthenticate(): boolean {
    debugger
    let token = localStorage.getItem('token');
    if (!token) return false;

    try {
      let isExpired = this.jwtHelper.isTokenExpired(token);
      if (isExpired) return false;
    } catch {
      return false;
    }
    return true;
  }
}
