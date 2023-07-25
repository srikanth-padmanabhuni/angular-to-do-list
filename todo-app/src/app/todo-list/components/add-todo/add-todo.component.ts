import { Component, OnInit, Input } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StatusOption, Todo } from '../../constants/interfaces';
import { TodoStatus } from '../../constants/enums';
import { TodoListService } from '../../services/todo-list.service';
import { Router } from '@angular/router';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

  @Input() todoData!: Todo;

  todoForm!: FormGroup;

  statusOptions: StatusOption[] = [
    {
      label: "Pending",
      value: TodoStatus.PENDING
    },
    {
      label: "Completed",
      value: TodoStatus.COMPLETED
    },
    {
      label: "Hold",
      value: TodoStatus.HOLD
    },
    {
      label: "Started",
      value: TodoStatus.STARTED
    }
  ];

  formSubmitted: boolean = false;

  constructor(
    private todoService: TodoListService, 
    private router: Router,
    private alert: AlertService) { }

  ngOnInit(): void {
    this.initFormData();
  }

  get todoFormControls() {
    return this.todoForm.controls;
  }

  initFormData(): void {
    this.formSubmitted = false;

    if(this.todoData) {
      this.todoForm = new FormGroup({
        description: new FormControl(this.todoData.description, Validators.required),
        title: new FormControl(this.todoData.title, Validators.required),
        status: new FormControl(this.todoData.status)
      })
    } else {
      this.todoForm = new FormGroup({
        description: new FormControl("", Validators.required),
        title: new FormControl("", Validators.required),
        status: new FormControl(TodoStatus.PENDING)
      })
    }
  }

  addTodo() {
    this.formSubmitted = true;
    if(!this.todoForm.valid) {
      this.alert.showError("Please fill all mandatory fields", "Invalid Details!");
      return;
    }

    if(this.todoService.isTodoAlreadyAvailable(this.todoForm.get('title')?.value)) {
      this.alert.showInfo(`Todo with title ${this.todoForm.get('title')?.value} is already added.`, "Title Already Exists");
      return;
    }

    const todo: Todo = {
      id: (this.todoData && this.todoData.id) ? this.todoData.id : uuidv4(),
      title: this.todoForm.get('title')?.value,
      description: this.todoForm.get('description')?.value,
      status: this.todoForm.get('status')?.value
    }

    if(this.todoData && this.todoData.id) {
      this.todoService.editTodo(todo);
    } else {
      this.todoService.addTodo(todo);
    }

    this.alert.showSuccess("Todo Added Successfully!!!", "Success");
    this.initFormData();
    this.redirectToList();
  }

  redirectToList() {
    this.router.navigateByUrl('/list');
  }

}
