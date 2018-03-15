import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './todo.interface';

@Pipe({
  name: 'todosfilter'
})
export class TodosfilterPipe implements PipeTransform {

  transform(todos: Todo[], state?: string): Todo[] {
    switch (state) {
      case 'Active': todos = todos.filter(todo => !todo.completed); return todos;
      case 'Completed': todos = todos.filter(todo => todo.completed); return todos;
      default : return todos;
    }
  }

}
