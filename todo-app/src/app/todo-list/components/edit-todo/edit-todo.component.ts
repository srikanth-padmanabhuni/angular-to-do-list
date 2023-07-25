import { Component, OnInit } from '@angular/core';
import { Todo } from '../../constants/interfaces';
import { ActivatedRoute } from '@angular/router';
import { TodoListService } from '../../services/todo-list.service';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss']
})
export class EditTodoComponent implements OnInit {
  
  id: any = "";

  todo!: Todo;

  constructor(
    private route: ActivatedRoute,
    private todoService: TodoListService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getTodo();
  }

  getTodo(): void {
    this.todo = this.todoService.getTodo(this.id);
  }

}
