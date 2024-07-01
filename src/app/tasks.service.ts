import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from './tasks/tasks';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor(private http: HttpClient) {}
  getData() {
    return this.http.get<Todo>('https://jsonplaceholder.typicode.com/todos');
  }
}
