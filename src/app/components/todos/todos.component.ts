import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TodosService } from 'src/app/services/todos.service';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  title: string;
  text: string;

  allTodos;

  // accessing the form inputs
  @ViewChild('f') searchForm: NgForm;

  constructor(private todoService: TodosService) {}

  ngOnInit(): void {
    this.getAllTodos();
  }

  addNewTodo() {
    this.title = this.searchForm.value.title;
    this.text = this.searchForm.value.text;

    // add new todo to the service
    this.todoService
      .addTodo(new Todo(1, this.title, this.text))
      .subscribe((data) => {
        this.getAllTodos();
      });
  }

  getAllTodos() {
    // get all todos from the service
    this.todoService.getTodos().subscribe((data) => {
      this.allTodos = data;
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

}
