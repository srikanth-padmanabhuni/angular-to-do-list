import { TodoStatus } from "./enums";

export interface Todo {
    id: string;
    title: string;
    description: string;
    status: TodoStatus;
}

export interface TodoList {
    todos: Todo[]
}

export interface StatusOption {
    label: string;
    value: TodoStatus;
}