import { Component } from '@angular/core';
import { TodoService } from '../service/todo.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent {

  constructor (public todoService: TodoService, public http: HttpClient) {
    console.log(todoService);
    console.log(http);
  }

}
