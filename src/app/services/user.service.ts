import { User } from './../user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  sourceUrl = 'http://localhost:5000';

  // create a new user and login
  createUser(user: User) {
    return this.http.post(this.sourceUrl + '/user/', user);
  }


}
