import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoListRoutingModule } from './todo-list-routing.module';
import { TodoListComponent } from './todo-list.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { ListTodoComponent } from './components/list-todo/list-todo.component';
import { EditTodoComponent } from './components/edit-todo/edit-todo.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TodoListComponent,
    AddTodoComponent,
    ListTodoComponent,
    EditTodoComponent
  ],
  imports: [
    CommonModule,
    TodoListRoutingModule,
    FormsModule
  ]
})
export class TodoListModule { }
