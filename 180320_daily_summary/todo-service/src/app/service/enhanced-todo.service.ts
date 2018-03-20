import { Injectable } from '@angular/core';
import { Todo } from '../interface/todo.interface';

@Injectable()
export class EnhancedTodoService {
  todos: Todo[] = [];

  constructor() { }

  addTodo(content: string) {
    const newTodo: Todo = { id: 1, content, completed: false };
    this.todos = [...this.todos, newTodo];
  }
}
