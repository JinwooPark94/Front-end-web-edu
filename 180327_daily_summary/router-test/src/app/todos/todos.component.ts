import { Component, OnInit } from '@angular/core';

interface Todo {
  id: number;
  content: string;
  completed: boolean;
}

@Component({
  selector: 'app-todos',
  template: `
     <ul>
      <li *ngFor="let todo of todos">
        <a [routerLink]="['todo', todo.id]">{{todo.content}}</a>
      </li>
    </ul>
  `
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  ngOnInit() {
    this.todos = [
      { id: 3, content: 'HTML', completed: false },
      { id: 2, content: 'CSS', completed: true },
      { id: 1, content: 'JavaScript', completed: false },
    ];
  }

}
