import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todo } from '../constants/interfaces';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  private todosList : Todo[] = [];
  private todoList: BehaviorSubject<Todo[]> =  new BehaviorSubject<Todo[]>([]);

  constructor() { }

  addTodo(todo: Todo) {
    this.todosList.push(todo);
    this.todoList.next(this.todosList);
  }

  getTodo(id: string): Todo {
    const todo = this.todosList.filter((t: Todo) => {return t.id == id});
    return (todo && todo.length != 0) ? todo[0] : {} as Todo;
  }

  editTodo(todo: Todo): void {
    let ts: Todo[] = [];
    this.todosList.forEach((t: Todo) => {
      if(t.id == todo.id) {
        t = todo;
      }
      ts.push(t);
    });
    this.todosList = ts;
    this.todoList.next(this.todosList);
  }

  deleteTodo(id: string) {
    const todos: Todo[] = [];
    this.todosList.forEach((t: Todo) => {
      if(t.id != id) {
        todos.push(t);
      }
    })
    this.todosList = todos;
    this.todoList.next(this.todosList);
  }

  getTodos(): any {
    return this.todosList;
  }

  isTodoAlreadyAvailable(title: string) {
    let available = false;
    this.todosList.forEach((todo: Todo) => {
      if(todo.title === title) {
        available = true;
      }
    })
    return available;
  }

}
