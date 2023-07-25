import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './todo-list.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { EditTodoComponent } from './components/edit-todo/edit-todo.component';
import { ListTodoComponent } from './components/list-todo/list-todo.component';

const routes: Routes = [
  { 
    path: '', 
    component: TodoListComponent,
    children: [
      {
        path: 'add',
        component: AddTodoComponent
      },
      {
        path: 'edit/:id',
        component: EditTodoComponent
      },
      {
        path: 'list',
        component: ListTodoComponent
      },
      {
        path: '*',
        component: ListTodoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoListRoutingModule { }
