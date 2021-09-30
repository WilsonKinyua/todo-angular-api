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
  password: string;
  @ViewChild('f') searchForm: NgForm;

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  addNewUser() {
    this.name = this.searchForm.value.name;
    this.email = this.searchForm.value.email;
    this.password = this.searchForm.value.password;
    // console.log(this.name);
    // console.log(this.email);
    // console.log(this.password);

    this.new_user = this.userService
      .createUser(new User(this.name, this.email, this.password))
      .subscribe((data) => {
        console.log(data);
      });

    this.searchForm.reset();
    console.log(this.new_user);
  }
}
