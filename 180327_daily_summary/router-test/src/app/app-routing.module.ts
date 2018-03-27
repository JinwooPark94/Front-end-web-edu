import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// 컴포넌트 임포트
import { TodosComponent } from './todos/todos.component';
import { TodosDetailComponent } from './todos/todos-detail.component';

// 라우트 구성
const routes: Routes = [
  { path: '', component: TodosComponent },
  {
    path: 'todo/:id',
    component: TodosDetailComponent,
    data: { title: 'Todos', sidebar: true }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
