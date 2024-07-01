import { Component, OnInit } from '@angular/core';
import { Todo } from './tasks';
import { TasksService } from '../tasks.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent implements OnInit {
  todo: Todo[] = [];
  todoCompleted: Todo[] = [];
  constructor(private taskService: TasksService) {}

  ngOnInit() {
    this.taskService.getData().subscribe((data) => {
      if (Array.isArray(data)) {
        this.todo = data; //Fetch the data from the api.
      }
    });
  }
  changeTocomplete(item: any) {
    item.completed = true;
    this.todoCompleted.push(item); //Push the value in the todoCompleted
    this.todo = this.todo.filter((todo) => todo.completed === false);
  }
  RemoveFromList(item: any) {
    item.completed = false;
    this.todo.push(item); //Push the value it in todo
    this.todoCompleted = this.todoCompleted.filter(
      (todo) => todo.completed === true
    );
  }
}
