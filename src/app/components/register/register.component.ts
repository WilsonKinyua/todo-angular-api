import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  new_user: any;
  name: string;
  email: string;
  passowrd: string;
  @ViewChild('f') searchForm: NgForm;

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  addNewUser() {
    this.name = this.searchForm.value.name;
    this.email = this.searchForm.value.email;
    this.passowrd = this.searchForm.value.password;

    this.new_user = this.userService
      .createUser(new User(this.name, this.email, this.passowrd))
      .subscribe((data) => {
        console.log(data);
      });

    this.searchForm.reset();
    console.log(this.new_user);
  }
}
