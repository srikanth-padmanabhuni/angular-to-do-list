import { Component, OnInit } from '@angular/core';
import { Todo } from '../../constants/interfaces';
import { TodoListService } from '../../services/todo-list.service';
import { AlertService } from '../../services/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.scss']
})
export class ListTodoComponent implements OnInit {

  todosList: Todo[] = [];

  constructor(
    private todoService: TodoListService,
    private alert: AlertService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(): void {
    this.alert.showSuccess("Fetched todos Successfully!!!", "Success");
    this.todosList = this.todoService.getTodos();
  }

  editTodo(id: string) {
    this.router.navigate(['/todo-list/edit', id]);
  }

  deleteTodo(id: string) {
    this.alert.showInfo("Todo deletd Successfully!!!", "Deleted");
    this.todoService.deleteTodo(id);
    this.getTodos();
  }

  addTodo() {
    this.router.navigateByUrl('/todo-list/add')
  }
}
