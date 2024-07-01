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

  ngOnInit(): void {
    this.taskService.getData().subscribe((data) => {
      if (Array.isArray(data)) {
        this.todo = data;
      }
    });
  }

  changeTocomplete(item: any) {
    this.todoCompleted.push(item);
    this.todo = this.todo.filter((todo) => todo.id !== item.id);
  }

  RemoveFromList(item: any) {
    this.todoCompleted = this.todoCompleted.filter(
      (todo) => todo.id !== item.id
    );
    this.todo.push(item);
  }
}
