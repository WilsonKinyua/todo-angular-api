import { Todo } from './../todo';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  sourceUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) {
    // this.todoGottenDetails = new Todo('', '');
  }

  getTodos(user_id) {
    // return this.http.get(this.sourceUrl+'/bucketlist')
    return this.http.get(this.sourceUrl + '/bucketlist/' + user_id + '/user');
  }

  // add a new todo
  addTodo(todo: Todo) {
    return this.http.post(this.sourceUrl + '/bucketlist', todo);
  }

  // update todo and mark completed
  updateTodo(todo: Todo) {
    return this.http.put(this.sourceUrl + '/bucketlist/' + todo.id, todo);
  }

  // delete a todo
  deleteTodo(id: string) {
    return this.http.delete(this.sourceUrl + '/bucketlist/' + id);
  }

  // update todo
  // updateSingleTodo(todo: Todo) {
  //   return this.http.put(
  //     this.sourceUrl + '/bucketlist/' + todo.id,
  //     todo + '/update'
  //   );
  // }

}
