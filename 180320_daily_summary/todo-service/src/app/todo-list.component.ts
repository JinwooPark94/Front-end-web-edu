import { Component, OnInit } from '@angular/core';
import { TodoService } from './service/todo.service';

@Component({
  selector: 'app-todo-list',
  template:  `
    <ul>
      <li *ngFor="let todo of todoService.todos">{{ todo.content }}
      <button (click)="todoService.putTodo(todo.id)">put</button>
      <button (click)="todoService.patchTodo(todo.id)">patch</button>
      <button (click)="todoService.deleteTodo(todo.id)">delete</button>
      </li>
    </ul>
    <pre>{{ todoService.todos | json }}</pre>
  `
})

export class TodoListComponent implements OnInit {

  constructor(public todoService: TodoService) { }

  ngOnInit() {}

}
