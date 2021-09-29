import { Todo } from './../todo';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  // todoGottenDetails: Todo;
  sourceUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) {
    // this.todoGottenDetails = new Todo('', '');
  }

  getTodos() {
    // return this.http.get(this.sourceUrl+'/bucketlist')
    return this.http.get(this.sourceUrl + '/bucketlist');
  }

  // add a new todo
  addTodo(todo: Todo) {
    return this.http.post(this.sourceUrl + '/bucketlist', todo);
  }
}
