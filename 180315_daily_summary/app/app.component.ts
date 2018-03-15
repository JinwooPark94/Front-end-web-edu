import { Component } from '@angular/core';
import { Todo } from './todo.interface';

@Component({
  selector: 'app-root',
  template: `
    <input type="text" [(ngModel)]="name" placeholder="할 일을 입력하시오"
     (keyup.enter)="addTodo($event.target.value)"><br/>
    <button (click)="state='All'">All</button>
    <button (click)="state='Active'">Active</button>
    <button (click)="state='Completed'">Completed</button>
    <ul>
      <li *ngFor="let todo of todos | todosfilter : state ;">
      <input type="checkbox" [checked]=todo.completed (change)="toggleTodo(todo.id)">
        {{ todo.content }}
        <button (click)="deleteTodo(todo.id)">X</button>
      </li>
    </ul>
    <input type="checkbox" (change)="toggleAllTodo()"> 전체 선택
    <p>총 완료수 : {{ CompleteCountTodo() }}</p>
    <p>미완료 수 : {{ todos.length - CompleteCountTodo() }}</p>
    <pre>{{ todos | json }}</pre>
     `,
  styles: [

  ]
})
export class AppComponent {
  name: string;
  state = 'All';

  todos: Todo[] = [
    { id: 0, content: 'HTML', completed: true },
    { id: 1, content: 'CSS', completed: false },
    { id: 2, content: 'Javascript', completed: true }
  ];

  todoNewId() {
    return this.todos.length ? Math.max(...this.todos.map(todos => todos.id)) + 1 : 1;
  }

  addTodo(content: string) {
    if (!content) { return; }
    this.todos = [...this.todos, { id: this.todoNewId(), content, completed: false }];
    this.name = '';
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter(todos => todos.id !== id);
  }

  toggleTodo(id: number) {
    this.todos = this.todos.map(todo => {
      return (todo.id === id) ? Object.assign({}, todo, { completed: !todo.completed }) : todo;
    });
  }

  CompleteCountTodo() {
    return this.todos.filter(todo => todo.completed === true ).length;
  }

  toggleAllTodo() {
    if (this.CompleteCountTodo() !== this.todos.length) {
      this.todos = this.todos.map(todo => {
        return Object.assign({}, todo, { completed: true });
      });
    } else {
      this.todos = this.todos.map(todo => {
        return Object.assign({}, todo, { completed: false });
      });
    }

  }
}
