import { Component } from '@angular/core';

interface Todo {
  id: number;
  content: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  template: `
    <input type="text" [(ngModel)]="name" placeholder="할 일을 입력하시오"
     (keyup.enter)="addTodo($event.target.value)">
    <ul>
      <li *ngFor="let todo of todos;">
        {{ todo.content }}
        <button (click)="deleteTodo(todo.id)">X</button>
      </li>
    </ul>

    <pre>{{ todos | json }}</pre>
     `,
  styles: [

  ]
})
export class AppComponent {
  name: string;

  todos: Todo[] = [
    { id: 0, content: 'HTML', completed: true },
    { id: 1, content: 'CSS', completed: true },
    { id: 2, content: 'Javascript', completed: true }
  ];

  todoNewId() {
    return this.todos.length ? Math.max.apply('', this.todos.map(todos => todos.id)) + 1 : 1;
  }

  addTodo(content: string) {
    if (!content) { return; }
    this.todos = [...this.todos{ id: this.todoNewId(), content, completed: false }];
    this.name = '';
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter(todos => todos.id !== id);
  }

}
