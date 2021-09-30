import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TodosService } from 'src/app/services/todos.service';
import { UserService } from 'src/app/services/user.service';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  title: string;
  text: string;
  displayForm: boolean = false;
  public_id;
  user_id;

  allTodos;

  // accessing the form inputs
  @ViewChild('f') searchForm: NgForm;

  constructor(
    private todoService: TodosService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.getAllTodos();
  }

  addNewTodo() {
    this.title = this.searchForm.value.title;
    this.text = this.searchForm.value.text;

    // add new todo to the service
    this.todoService
      .addTodo(new Todo(this.user_id, this.title, this.text))
      .subscribe((data) => {
        console.log(data);
        this.getAllTodos();
      });
  }

  getAllTodos() {
    this.public_id = localStorage.getItem('token'); // get the token from local storage
    // get the user_id
    this.userService.getCurrentUser(this.public_id).subscribe((data) => {
      this.user_id = data;
      this.user_id = this.user_id.id;
      // get all todos from the service
      console.log(this.user_id);
      this.todoService.getTodos(this.user_id).subscribe((data) => {
        this.allTodos = data;
      });
    });
  }

  setCompleted(todo) {
    // update the todo in the service
    this.todoService.updateTodo(todo).subscribe((data) => {
      this.getAllTodos();
      console.log(data);
    });
  }

  deleteTodo(todo) {
    // delete the todo from the service
    this.todoService.deleteTodo(todo).subscribe((data) => {
      this.getAllTodos();
      console.log(data);
    });
  }

  showOrHideForm() {
    this.displayForm = !this.displayForm;
  }

  // updateTodo(todo) {
  //   // update the todo in the service
  //   this.todoService.updateSingleTodo(todo).subscribe((data) => {
  //     this.getAllTodos();
  //     console.log(data);
  //   });
  // }
}
