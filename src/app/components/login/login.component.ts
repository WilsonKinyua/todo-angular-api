import { UserService } from 'src/app/services/user.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  token;
  displayAlert = false;

  @ViewChild('f') loginForm: NgForm;

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  loginUser() {
    this.userService
      .login(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe(
        (response) => {
          // set token
          this.token = response;
          // console.log(this.token.token);
          // check if reponse token is undefined
          if (this.token.token === undefined) {
            this.displayAlert = true;
          } else {
            localStorage.setItem('token', this.token.token);
            this.displayAlert = false;
          }
        },
        (error) => {
          console.log('This is the error: ' + error);
        }
      );
  }
}
