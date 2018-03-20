import { Injectable } from '@angular/core';
import { Todo } from '../interface/todo.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TodoService {
  todos: Todo[] = [];
  url = 'http://localhost:3000/todos';
  constructor (public http: HttpClient) {
    this.getTodo();
  }

  getTodo() {
    this.http.get<Todo[]>(this.url)
      .subscribe(todo => this.todos = todo);
  }

  addTodo(content: string) {
    const newData = { content, completed: false };
    this.http.post<Todo[]>(this.url, newData)
      .subscribe(() => this.getTodo());
  }

  putTodo(id: number) {
    this.http.put<Todo[]>(`${this.url}/${id}`, { content: 'puted', completed: true })
      .subscribe(() => this.getTodo());
  }

  patchTodo(id: number) {
    this.http.patch<Todo[]>(`${this.url}/${id}`, { content: 'Patched'})
      .subscribe(() => this.getTodo());
  }

  deleteTodo(id: number) {
    this.http.delete<Todo[]>(`${this.url}/${id}`)
      .subscribe(() => this.getTodo());
  }

}
