import { UserService } from 'src/app/services/user.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

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
  // router: Router;

  @ViewChild('f') loginForm: NgForm;

  constructor(private userService: UserService,private router:Router) {}

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
            // redirect to todos page
            this.router.navigateByUrl('/todos');
          }
        },
        (error) => {
          console.log('This is the error: ' + error);
        }
      );
  }
}
