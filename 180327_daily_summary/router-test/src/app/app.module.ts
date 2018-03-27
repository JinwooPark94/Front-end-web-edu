import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { TodosDetailComponent } from './todos/todos-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodosDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
