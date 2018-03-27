import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Config {
  title: string;
  sidebar: boolean;
}

@Component({
  selector: 'app-todos-detail',
  template: `
    <h3>todo detail</h3>
    <p>todo id : {{ todoId }}</p>
    <p>data : {{ data | json }}</p>
    <p>title : {{ data.title }}</p>
    <p>sidebar : {{ data.sidebar ? 'show' : 'hidden' }}</p>
    <a routerLink="/">Back to Todos</a>
  `,
})
export class TodosDetailComponent implements OnInit {

  todoId: number;
  data: Config;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // 라우트 파라미터 취득
    this.todoId = +this.route.snapshot.paramMap.get('id');

    // 라우트 정적 데이터 취득
    this.data = this.route.snapshot.data as Config;
    this.data.title = this.route.snapshot.data.title;
    this.data.sidebar = this.route.snapshot.data.sidebar;
  }

}
