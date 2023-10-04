import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetAllUserModel } from '../models/user/getAllUserModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }
  getAll(): Observable<GetAllUserModel[]> {
    return this.httpClient.get<GetAllUserModel[]>("https://jsonplaceholder.typicode.com/users");
  }
}
