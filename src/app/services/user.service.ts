import { User } from './../user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  sourceUrl = 'http://localhost:5000';

  // create a new user and login
  createUser(user: User) {
    return this.http.post(this.sourceUrl + '/user/create', user);
  }

  // login
  login(email: string, password: string) {
    return this.http.post(this.sourceUrl + '/user/login', {
      email,
      password,
    });
  }

  // get current user
  getCurrentUser(public_id) {
    return this.http.get(this.sourceUrl + '/user/' + public_id);
  }
}
